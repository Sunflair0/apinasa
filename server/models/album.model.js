const query = require("../config/mysql.conf");


// /////I want to see all my album
async function cAllF(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const album = await query("SELECT FROM album WHERE client_id=?", [
      client_id,
    ]);
    json = { ...json, success: true, data: album};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my apod album
async function cAllApodF(res, client_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    const apod = await query("SELECT * FROM apod WHERE client_id = ?, apod_id=?", [
      client_id,
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
async function cAllVentF(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const vent = await query("SELECT * FROM apod WHERE client_id = ? AND vent_id = ?", [
      client_id,
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
async function addFavA(res, client_id, apod_id, title, url, description, copyright, explanation) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO album (client_id, apod_id, title, url, description, copyright, explanation) VALUES (?,?,?,?,?,?,?)",
      [client_id, apod_id, title, url, description, copyright, explanation]
    );
    const apod = {  id: result.insertId,client_id, apod_id, title, url, description, copyright, explanation };
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
async function deleteAllFav(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE client_id = ?", [
      client_id,]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


// /////I want to delete all my vent album
async function delAllVentF(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE client_id = ? AND vent_id = ?", [
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

// /////I want to delete all my apod album
async function delAllApodF(res, client_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE client_id = ? AND apod_id = ?", [
      client_id,
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
async function delOneVentF(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE client_id = ? AND vent_id = ?", [
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

// /////I want to delete one apod album
async function delOneApodF(res, client_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM album WHERE client_id = ? AND apod_id = ?", [
      client_id,
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
