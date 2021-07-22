const query = require("../config/mysql.conf");

//! find ventures by vent_id(component)
async function byVentIDv(res, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventures = await query("SELECT * FROM ventures WHERE vent_id = ?", [
      vent_id,
    ]);
console.log(ventures);
    json = { ...json, success: true, data: ventures[0]};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorite Vent for user by VentID
async function deleteFavidV(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND vent_id = ?", [
      user_id,
      vent_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = {byVentIDv};