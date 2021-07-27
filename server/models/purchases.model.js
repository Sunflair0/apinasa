const query = require("../config/mysql.conf");

// /////I want to buy intranet
async function addIntraPurch(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("INSERT INTO `purchases`(`client_id`, `vent_id`, `purchased`, `insurance`, `left_test`, `no_show`, `refunded`, `safety_course`, `intraNet`, `paid ) VALUES (?,?,0,0,0,0,0,0,1,0)", [client_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


// /////I want to buy this venture
async function addPurch(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("INSERT INTO `purchases`(`client_id`, `vent_id`, `purchased`, `insurance`, `left_test`, `no_show`, `refunded`, `safety_course`, `intraNet`, `paid ) VALUES (?,?,1,0,0,0,0,0,0,0)", [client_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see what have I bought
async function byClientIDv(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("SELECT * FROM purchases WHERE client_id = ?", [client_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete what I bought
async function delOnePurch(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const purchases = await query("DELETE FROM purchases WHERE client_id = ? AND vent_id = ?", [client_id, vent_id]);
    json = { ...json, success: true, data: purchases};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


module.exports = {byClientIDv, addPurch, addIntraPurch, delOnePurch};

