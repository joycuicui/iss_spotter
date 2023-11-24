const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passes) => {
    printPassTimes(passes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = function (passes) {
  for (const pass of passes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds.`);
  }
};
