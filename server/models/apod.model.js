const query = require("../config/mysql.conf");

//! find apods by apod_id
async function byApodIDa(res, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    const apod = await query("SELECT * FROM apod WHERE apod_id = ?", [
      apod_id,
    ]);
    json = { ...json, success: true, data: apod[0]  };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


module.exports = { byApodIDa };