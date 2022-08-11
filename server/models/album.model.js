const query = require("../config/mysql.conf");


// /////I want to see all my album
async function cAllF(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const album = await query("SELECT FROM album WHERE user_id=?", [
      user_id,
    ]);
    json = { ...json, success: true, data: album};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my apod album
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

// /////I want to see all my vent album
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

// /////I want to add an apod album
async function addFavA(res, user_id, apod_id, title, url, description, copyright, explanation) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO album (user_id, apod_id, title, url, description, copyright, explanation) VALUES (?,?,?,?,?,?,?)",
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

// /////I want to add a vent album
async function addFavV(res, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO album WHERE vent_id=?",
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
// /////I want to delete all my album
async function deleteAllFav(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE user_id = ?", [
      user_id,]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


// /////I want to delete all my vent album
async function delAllVentF(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE user_id = ? AND vent_id = ?", [
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

// /////I want to delete all my apod album
async function delAllApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE user_id = ? AND apod_id = ?", [
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

// /////I want to delete one vent album
async function delOneVentF(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE user_id = ? AND vent_id = ?", [
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

// /////I want to delete one apod album
async function delOneApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE user_id = ? AND apod_id = ?", [
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
