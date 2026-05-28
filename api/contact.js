export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    console.log("New message:", message);

    // HERE you can send email later (nodemailer, etc.)

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
