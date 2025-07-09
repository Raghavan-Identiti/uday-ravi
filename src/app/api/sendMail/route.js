export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, contact, location, comment } = body;

    if (!name || !email || !location) {
      return new Response(JSON.stringify({ success: false, error: 'Missing required fields.' }), { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Website Contact',
          email: 'raghavan@identitidesign.com', // must be verified in Brevo
        },
        to: [
          {
            email: process.env.BREVO_RECEIVER, // your receiving email
            name: 'Doctor',
          },
        ],
        subject: `🩺 New Consultation Request from ${name}`,
        htmlContent: `
  <div style="font-family: var(--font-inter), sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 8px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <h2 style="color: #5c47dc; margin-top: 0;">New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Contact No:</strong> ${contact || 'N/A'}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Comment:</strong><br />${comment}</p>

      <hr style="margin: 24px 0;" />
      <footer style="font-size: 12px; color: #999;">
        This message was sent from your consultation form. Reply will go directly to the sender.
      </footer>
    </div>
  </div>
`,
        replyTo: { email },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Email sending failed.');
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Email API error:', error.message);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
