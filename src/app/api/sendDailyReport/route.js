// /app/api/sendDailyReport/route.js
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "consultations.xlsx");
    if (!fs.existsSync(filePath)) {
      return new Response(JSON.stringify({ success: false, error: "No data yet." }), { status: 404 });
    }

    const fileContent = fs.readFileSync(filePath).toString("base64");

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "Clinic System", email: "raghavan@identitidesign.com" },
        to: [{ email: process.env.BREVO_RECEIVER, name: "Doctor" }],
        subject: "📊 Daily Consultation Report",
        htmlContent: `<p>Attached is today's consultation report.</p>`,
        attachment: [
          {
            name: "consultations.xlsx",
            content: fileContent,
          },
        ],
      }),
    });

    if (!response.ok) throw new Error("Failed to send daily report");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
