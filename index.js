// const cron = require("node-cron");
const https = require("https");

// cron.schedule("12 * * * * *", async function () {
const request = https.request(
  "https://simarkas-strapi.onrender.com/api/config",
  (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data = data + chunk.toString();
    });

    response.on("end", () => {
      const body = JSON.parse(data);
      console.log(body);
    });
  }
);

request.on("error", (error) => {
  console.log("An error", error);
});

request.end();
// });
