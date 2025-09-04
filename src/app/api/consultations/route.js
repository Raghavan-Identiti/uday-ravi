// import { google } from "googleapis";

// // Load credentials from environment variable
// const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// const auth = new google.auth.JWT(
//   credentials.client_email,
//   null,
//   credentials.private_key.replace(/\\n/g, "\n"),
//   SCOPES
// );

// const sheets = google.sheets({ version: "v4", auth });

// const SHEET_ID = process.env.GOOGLE_SHEET_ID;
// const SHEET_NAME = "Consultations";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { name, email, contact, location, comment } = body;

//     if (!name || !email || !location) {
//       return new Response(JSON.stringify({ success: false, error: "Missing required fields." }), { status: 400 });
//     }

//     const newRow = [
//       new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
//       name,
//       email,
//       contact || "",
//       location,
//       comment || ""
//     ];

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: SHEET_ID,
//       range: `${SHEET_NAME}!A:F`,
//       valueInputOption: "USER_ENTERED",
//       requestBody: { values: [newRow] },
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Google Sheets API error:", error.message);
//     return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
//   }
// }
