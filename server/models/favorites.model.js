const query = require("../config/mysql.conf");


//! find a favorites by fav_id
async function byFavIDf(res, fav_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE fav_id = ?", [
      fav_id
    ]);
    json = { ...json, success: true, data: favorites[0]  };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! find all favorites for client ID
async function byclientIDf(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE client_id = ?", [client_id]);
    json = { ...json, success: true, data: favorites[0] };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite for APOD
async function addFavA(res, client_id, apod_id, title, url, description, copyright, explanation) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (client_id, apod_id, title, url, description, copyright, explanation) VALUES (?,?,?,?,?,?,?)",
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

//! add favorite for Testimonials
async function addFavT(res, client_id, test_id, title, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (client_id, test_id, title, testimonial) VALUES (?,?,?,?)",
      [client_id, test.test_id, test.title, test.testimonial]
    );
///////check this one, w
    const newtest = { ...test, id: result.insertId, client_id, test_id, title, testimonial };
    json = { ...json, success: true, data: newtest };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite for Ventures
async function addFavV(res, client_id, vent_id, tour, description) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (client_id, vent_id, tour, description) VALUES (?,?,?,?)",
      [client_id, vent_id, tour, description]
    );
    const vent = {  id: result.insertId, client_id, vent_id, tour, description };
    json = { ...json, success: true, data: vent };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete single favorite 
async function deleteAFav(res, client_id, fav_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND fav_id = ?", [
      client_id,
      fav_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorite APOD by for client by ApodID
async function deleteFavidA(res, client_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND apod_id = ?", [
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

//! delete favorite Test by for client by TestID
async function deleteFavidT(res, client_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND test_id = ?", [
      client_id,
      test_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorite Vent for client by VentID
async function deleteFavidV(res, client_id, vent_id) {
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

//! delete favorites by clientID, will delete everything
async function deleteByclientID(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE * FROM favorites WHERE client_id = ?", [client_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { byFavIDf, byclientIDf, addFavA, addFavT, addFavV, deleteAFav, deleteFavidA, deleteFavidT, deleteFavidV ,deleteByclientID };