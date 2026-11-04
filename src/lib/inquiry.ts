import { createServerFn } from "@tanstack/react-start";

export type InquiryPayload = {
  formType: "Quick Inspection (Home)" | "Contact Us" | "Request Inspection";
  name: string;
  email: string;
  phone: string;
  address?: string;
  service?: string;
  propertyType?: string;
  urgency?: string;
  message?: string;
};

export type InquiryResponse = {
  success: boolean;
  message: string;
};

export const submitInquiryFn = createServerFn({ method: "POST" })
  .validator((data: InquiryPayload) => data)
  .handler(async ({ data }): Promise<InquiryResponse> => {
    try {
      if (typeof process !== "undefined" && typeof process.loadEnvFile === "function") {
        try {
          process.loadEnvFile();
        } catch {
          // ignore if .env file not found
        }
      }

      const host = process.env["ZOHO_SMTP_HOST"] || "smtppro.zoho.com";
      const port = Number(process.env["ZOHO_SMTP_PORT"] || "465");
      const secure = (process.env["ZOHO_SMTP_SECURE"] ?? "true") === "true";
      const user = process.env["ZOHO_SMTP_USER"] || "eva@stellrit.com";
      const pass = process.env["ZOHO_SMTP_PASS"] || "MitWhsYrhPA2";
      const to = process.env["NOTIFICATION_EMAIL"] || "eva@stellrit.com";

      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      const formattedDate = new Date().toLocaleString("en-US", {
        timeZone: "America/Chicago",
        dateStyle: "full",
        timeStyle: "short",
      });

      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0f244a; padding: 24px; text-align: center; border-bottom: 3px solid #d97706; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { color: #94a3b8; margin: 6px 0 0; font-size: 13px; }
    .badge { display: inline-block; background: #d97706; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px; margin-top: 10px; letter-spacing: 0.5px; }
    .content { padding: 28px 24px; }
    .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
    .row { display: flex; padding: 8px 0; border-bottom: 1px solid #f1f5f9; }
    .row:last-child { border-bottom: none; }
    .label { width: 140px; font-size: 12px; font-weight: 600; text-transform: uppercase; color: #64748b; letter-spacing: 0.3px; }
    .value { flex: 1; font-size: 14px; font-weight: 500; color: #0f172a; word-break: break-word; }
    .value a { color: #2563eb; text-decoration: none; font-weight: 600; }
    .value a:hover { text-decoration: underline; }
    .message-card { background: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #0f244a; border-radius: 4px; padding: 14px 16px; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .actions { text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .btn { display: inline-block; padding: 10px 22px; font-size: 13px; font-weight: 600; text-decoration: none; border-radius: 6px; margin: 0 6px; }
    .btn-primary { background: #0f244a; color: #ffffff !important; }
    .btn-secondary { background: #f1f5f9; color: #334155 !important; border: 1px solid #cbd5e1; }
    .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ARSS CONSTRUCTION</h1>
      <p>Official Website Lead Delivery Notification</p>
      <span class="badge">${data.formType}</span>
    </div>

    <div class="content">
      <div class="meta-box">
        <div class="row">
          <div class="label">Client Name</div>
          <div class="value"><strong>${data.name}</strong></div>
        </div>
        <div class="row">
          <div class="label">Phone Number</div>
          <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
        </div>
        <div class="row">
          <div class="label">Email Address</div>
          <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
        </div>
        ${
          data.address
            ? `<div class="row">
          <div class="label">Project Location</div>
          <div class="value">${data.address}</div>
        </div>`
            : ""
        }
        ${
          data.service
            ? `<div class="row">
          <div class="label">Requested Service</div>
          <div class="value">${data.service}</div>
        </div>`
            : ""
        }
        ${
          data.propertyType
            ? `<div class="row">
          <div class="label">Property Type</div>
          <div class="value" style="text-transform: capitalize;">${data.propertyType}</div>
        </div>`
            : ""
        }
        ${
          data.urgency
            ? `<div class="row">
          <div class="label">Timeline / Urgency</div>
          <div class="value" style="text-transform: capitalize;">${data.urgency}</div>
        </div>`
            : ""
        }
      </div>

      ${
        data.message
          ? `<div>
        <div class="label" style="margin-bottom: 6px;">Client Message / Details:</div>
        <div class="message-card">${data.message}</div>
      </div>`
          : ""
      }

      <div class="actions">
        <a href="tel:${data.phone}" class="btn btn-primary">Call ${data.name}</a>
        <a href="mailto:${data.email}" class="btn btn-secondary">Reply via Email</a>
      </div>
    </div>

    <div class="footer">
      Delivered securely via ARSS Construction System to ${to}<br>
      Received: ${formattedDate} (CT)
    </div>
  </div>
</body>
</html>
      `;

      await transporter.sendMail({
        from: `"ARSS Construction Website" <${user}>`,
        to,
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `[New Lead - ARSS] ${data.formType}: ${data.name} - ${data.phone}`,
        text: `New lead from ${data.formType}:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address || "N/A"}
Service: ${data.service || "N/A"}
Property Type: ${data.propertyType || "N/A"}
Urgency: ${data.urgency || "N/A"}
Message: ${data.message || "N/A"}

Received: ${formattedDate}`,
        html: htmlContent,
      });

      return {
        success: true,
        message: "Your inquiry has been successfully sent.",
      };
    } catch (error) {
      console.error("[submitInquiryFn] Error sending email:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to send inquiry.",
      };
    }
  });
