import { sendEmail } from "../utils/send-email.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission received:", {
        name,
        email,
        phone,
        company,
        service,
        message,
        timestamp: new Date().toISOString(),
      });
      return Response.json(
        {
          success: true,
          message:
            "Thank you! Your message has been received. We will contact you within 24 hours.",
          note: "Email service not yet configured - check server logs for submission details.",
        },
        { status: 200 },
      );
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00B3A4; border-bottom: 2px solid #00B3A4; padding-bottom: 10px;">
          New Service Request from Website
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        </div>

        ${
          service
            ? `
        <div style="background: #e8f5f4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Service Needed:</strong> ${service}</p>
        </div>
        `
            : ""
        }

        <div style="background: #fff; padding: 20px; border-left: 4px solid #00B3A4; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 14px;">
          This email was sent from your website contact form.<br>
          Respond directly to this email to reply to the customer.
        </p>
      </div>
    `;

    // Send email using Resend
    try {
      await sendEmail({
        from: "website@prodigitalventures.infy.uk", // Will need domain verification
        to: "ifixofficequip@gmail.com",
        subject: `New Service Request from ${name}${company ? ` (${company})` : ""}`,
        html: emailHtml,
        text: `New Service Request\n\nName: ${name}\nEmail: ${email}\n${phone ? `Phone: ${phone}\n` : ""}${company ? `Company: ${company}\n` : ""}${service ? `Service: ${service}\n` : ""}\n\nMessage:\n${message}`,
      });

      console.log("Contact form email sent successfully for:", name);
      return Response.json(
        {
          success: true,
          message:
            "Thank you! Your message has been sent. We will get back to you within 24 hours.",
        },
        { status: 200 },
      );
    } catch (emailError) {
      console.error("Email sending failed:", emailError);

      // Still log the submission for backup
      console.log("Contact form submission (email failed):", {
        name,
        email,
        phone,
        company,
        service,
        message,
        timestamp: new Date().toISOString(),
      });

      return Response.json(
        {
          success: true,
          message:
            "Thank you! Your message has been received. We will contact you within 24 hours.",
          note: "Email delivery temporarily unavailable - your message was logged for follow-up.",
        },
        { status: 200 },
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      {
        error:
          "Something went wrong. Please try again or call us directly at +263 772 526 065.",
      },
      { status: 500 },
    );
  }
}
