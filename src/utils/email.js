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

      // await this.sendMail(subject, html);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }
}
