const query = require("../config/mysql.conf");
// const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//! find ventures by user ID


async function byUserIDv(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("SELECT * FROM purchases WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: purchases[0]};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = {byUserIDv};

