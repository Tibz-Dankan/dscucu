import * as React from "react";
import { Button } from "@react-email/button";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";

// const ConfirmEmail = (props) => {
function ConfirmEmail(props) {
  return (
    <Html lang="en">
      <Text>Subject: {props.subject}</Text>
      <Text>Hi {props.lastName}</Text>
      <Text>
        Thank you for registering with our platform! We are excited to have you
        on board.
      </Text>
      <Text>
        Before you can access your account, we need to confirm that you have
        registered with us. To confirm your registration, please click on the
        following link:
      </Text>
      <Hr />
      <Button href="https://dsc-ucu.netlify.app/login">Confirm</Button>
      <Hr />
      <Text>
        You received this email because, you registered as a member for DSCUCU
        community.
      </Text>
      <Text>Copyright © DSCUCU community {new Date().getFullYear()}</Text>
    </Html>
  );
}

export default ConfirmEmail;
