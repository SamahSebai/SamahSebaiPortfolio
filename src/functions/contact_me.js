import { Email } from "../data/about";

export const ContactMe = () => {
  const subject = "";
  const body = "";

  // const mailtoUrl = `mailto:support@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:${Email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoUrl;
};
