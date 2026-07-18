import type { VercelRequest, VercelResponse } from "@vercel/node";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistBody = {
  email?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) {
    return res.status(503).json({ error: "Waitlist is not configured" });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as WaitlistBody;
  const email = body.email?.trim().toLowerCase() ?? "";

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address" });
  }

  const listId = Number(process.env.BREVO_LIST_ID);
  const payload: Record<string, unknown> = {
    email,
    updateEnabled: true,
  };
  if (Number.isFinite(listId) && listId > 0) {
    payload.listIds = [listId];
  }

  const brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(payload),
  });

  // 201 created, 204 updated (updateEnabled)
  if (brevoRes.status === 201 || brevoRes.status === 204) {
    return res.status(200).json({ ok: true });
  }

  let message = "Could not join the waitlist. Try again.";
  try {
    const err = (await brevoRes.json()) as { message?: string; code?: string };
    if (err.code === "duplicate_parameter") {
      return res.status(200).json({ ok: true });
    }
    if (err.message) message = err.message;
  } catch {
    /* keep default */
  }

  return res.status(502).json({ error: message });
}
