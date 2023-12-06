async function sendSMS(req, res) {

   const { to, text} = req.body;
  const apiURL = "https://cloud.websms.lk/smsAPI?sendsms";
  const apiKey = "hB8Y73E2OTVPBfEGhfBk9ddi95MOFDf7";
  const apiToken = "sxX51677694785";
  const type = "sms";
  const from = "EzPark";
  const url = `${apiURL}&apikey=${apiKey}&apitoken=${apiToken}&type=${type}&from=${from}&to=${to}&text=${text}`;
  console.log("mobile otp is",);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("data is", data);
      if (data.status === "queued") {
        console.log("SMS send successfully!!!")       

      } else {
        return res.json(400);
      }
    });
}
module.exports = {sendSMS}