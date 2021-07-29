const query = require("../config/mysql.conf");


// /////I want to select all tours
async function allTours(res, vent) {
  let json = { success: false, error: null, data: null };
  try {
    const ventures = await query("SELECT TOUR FROM VENTURES", [
      vent,
    ]);
console.log(ventures);
    json = { ...json, success: true, data: ventures};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see only one tour I choose
async function oneTour(res, img, tour, description) {
  let json = { success: false, error: null, data: null };
  try {
    const ventures = await query("SELECT img, tour, description FROM VENTURES", [
     img,
tour,
description,
    ]);
console.log(ventures);
    json = { ...json, success: true, data: ventures[0]};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}





module.exports = { oneTour, allTours};