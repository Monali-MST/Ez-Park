import axios from "axios";

export async function sendMail(username, contactInfo, text, subject) {
  const mailData = {
    username,
    userEmail: contactInfo,
    text,
    subject,
  };
  console.log(mailData);
  try {
    const mailRes = await axios.post(
      "http://localhost:8800/sendMail",
      mailData
    );
    console.log(mailRes.data);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error });
  }
}
