exports.handler = async function (event, context) {
  if (event.httpMethod === "POST") {
      const deviceData = JSON.parse(event.body);

      return {
          statusCode: 200,
          body: JSON.stringify({
              message: "Cihaz bilgileri alındı",
              data: deviceData
          }),
      };
  }
  return {
      statusCode: 405,
      body: "Sadece POST istekleri desteklenir.",
  };
};
