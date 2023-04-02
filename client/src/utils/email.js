import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import ConfirmEmail from "../email/ConfirmRegistration";

export class Email {
  recipients;

  constructor(recipients) {
    this.recipients = recipients;
    sendgrid.setApiKey(
      "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"
    );
  }

  async sendMail(subject, html) {
    try {
      const mailOptions = {
        from: "moga.m.abdulwahab@gmail.com",
        to: this.recipients,
        subject: subject,
        html: html,
      };

      sendgrid.send(mailOptions);
    } catch (err) {
      console.log("err occurred while sending email");
      console.log(err);
    }
  }

  async ConfirmRegistration(lastName) {
    try {
      const subject = "Confirm Registration";

      // const html = render(
      //   <ConfirmEmail lastName={lastName} subject={subject} />,
      //   {
      //     pretty: true,
      //   }
      // );

      const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirm Email</title>
  </head>
  <body>
    <div
      style="
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
        height: auto;
      "
    >
      <div
        style="
          background-color: #dee2e6;
          padding: 50px;
          border-radius: 10px;
          width: 100%;
        "
      >
        <p>Subject: Confirm Email</p>
        <br />
        <p>Hi ${lastName}></p>
        <p>
          Before you can access your account, we need to confirm that you have
          registered with us. To confirm your registration, please click on the
          following link:
        </p>
        <button
          style="
            border-radius: 4px;
            padding: 4px 8px;
            background-color: #1864ab;
          "
        >
          <a
            href="https://dsc-ucu.netlify.app/login"
            target="_blank"
            style="color: #f1f3f5"
            >Confirm</a
          >
        </button>
        <p>
          You received this email because, you registered as a member for DSCUCU
          community.
        </p>
        <p>Regards: DSCUCU community</p>
      </div>
    </div>
  </body>
</html>
`;

      await this.sendMail(subject, html);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }
}
