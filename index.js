const { nextISSTimesForMyLocation } = require("./iss");

const printPassTimes = function (passes) {
  for (const pass of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds.`);
  }
};

nextISSTimesForMyLocation((error, passes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);

//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("Error:", error);
//       return;
//     }
//     console.log("Geo coordinates:", data);
//   });
// });

// fetchISSFlyOverTimes(
//   { latitude: 49.2827291, longitude: -123.1207375 },
//   (error, data) => {
//     if (error) {
//       console.log("Error:", error);
//       return;
//     }
//     console.log("It worked:", data);
//   }
// );
