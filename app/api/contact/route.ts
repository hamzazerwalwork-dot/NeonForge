import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables."
    );
    return NextResponse.json(
      { error: "Server isn't configured to send messages yet." },
      { status: 500 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const projectType = String(body.projectType ?? "").trim();
  const message = String(body.message ?? "").trim();

  // Honeypot field: real users never fill this in, bots often do.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!email || !message) {
    return NextResponse.json(
      { error: "Email and project details are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  const escapeHtml = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const name = [firstName, lastName].filter(Boolean).join(" ") || "Unnamed";

  const lines = [
    "<b>New project inquiry — NeonForge</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    phone ? `<b>Phone:</b> ${escapeHtml(phone)}` : null,
    projectType ? `<b>Project type:</b> ${escapeHtml(projectType)}` : null,
    "",
    `<b>Message:</b>\n${escapeHtml(message)}`,
  ].filter(Boolean);

  const text = lines.join("\n");

  try {
    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!telegramRes.ok) {
      const details = await telegramRes.text();
      console.error("Telegram API error:", details);
      return NextResponse.json(
        { error: "Couldn't deliver the message. Try again shortly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to reach Telegram:", err);
    return NextResponse.json(
      { error: "Couldn't deliver the message. Try again shortly." },
      { status: 502 }
    );
  }
}
