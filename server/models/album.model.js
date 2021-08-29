const query = require("../config/mysql.conf");


// /////I want to see all my favorites
async function cAllF(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT FROM favorites WHERE user_id=?", [
      user_id,
    ]);
    json = { ...json, success: true, data: favorites};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my apod favorites
async function cAllApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    const apod = await query("SELECT * FROM apod WHERE user_id = ?, apod_id=?", [
      user_id,
      apod_id,
    ]);
    json = { ...json, success: true, data: apod };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my vent favorites
async function cAllVentF(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const vent = await query("SELECT * FROM apod WHERE user_id = ? AND vent_id = ?", [
      user_id,
      vent_id,
    ]);
    json = { ...json, success: true, data: vent};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to add an apod favorite
async function addFavA(res, user_id, apod_id, title, url, description, copyright, explanation) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (user_id, apod_id, title, url, description, copyright, explanation) VALUES (?,?,?,?,?,?,?)",
      [user_id, apod_id, title, url, description, copyright, explanation]
    );
    const apod = {  id: result.insertId,user_id, apod_id, title, url, description, copyright, explanation };
    json = { ...json, success: true, data: apod };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to add a vent favorite
async function addFavV(res, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites WHERE vent_id=?",
      [vent_id]
    );
    const vent = {  id: result.insertId, vent_id };
    json = { ...json, success: true, data: vent };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}
// /////I want to delete all my favorites
async function deleteAllFav(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ?", [
      user_id,]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


// /////I want to delete all my vent favorites
async function delAllVentF(res, user_id, vent_id) {
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

// /////I want to delete all my apod favorites
async function delAllApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND apod_id = ?", [
      user_id,
      apod_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete one vent favorites
async function delOneVentF(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND vent_id = ?", [
      client_id,
      vent_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete one apod favorites
async function delOneApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND apod_id = ?", [
      user_id,
      apod_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}



module.exports = { cAllF, cAllApodF, cAllVentF, addFavA, addFavV, deleteAllFav, delAllApodF, delAllVentF, delOneVentF,delOneApodF };
