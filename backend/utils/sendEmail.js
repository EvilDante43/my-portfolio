import nodemailer from "nodemailer";

const sendEmail = async ({
  name,
  email,
  subject,
  message,
}) => {

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `Portfolio Contact: ${subject || "New Message"}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2>New Portfolio Contact Message</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject || "N/A"}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div
            style="
              background:#f4f4f4;
              padding:15px;
              border-radius:8px;
            "
          >
            ${message}
          </div>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");

  } catch (error) {

    console.log("Email Error:", error);

    throw new Error("Email could not be sent");
  }
};

export default sendEmail;