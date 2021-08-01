const query = require("../config/mysql.conf");



// /////I want to buy this
async function addPurch(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("INSERT INTO `purchases`(`user_id`, `vent_id`, `purchased`, `insurance`, `left_test`, `no_show`, `refunded`, `safety_course`, `intraNet`, `paid ) VALUES (?,?,0,0,0,0,0,0,0,0)", [user_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see what have I bought
async function myVents(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("SELECT * FROM purchases WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete what I bought
async function delOnePurch(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("DELETE FROM purchases WHERE user_id = ? AND vent_id = ?", [user_id, vent_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


module.exports = {addPurch, myVents, delOnePurch};

