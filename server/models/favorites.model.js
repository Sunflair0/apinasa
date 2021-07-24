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

<<<<<<< HEAD
// /////I want to see all my apod favorites
async function cAllApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    const apod = await query("SELECT * FROM apod WHERE user_id = ?, apod_id=?", [
      user_id,
      apod_id,
    ]);
    json = { ...json, success: true, data: apod };
=======
//! find all favorites for client ID
async function byclientIDf(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE client_id = ?", [client_id]);
    json = { ...json, success: true, data: favorites[0] };
>>>>>>> master
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD
// /////I want to see all my vent favorites
async function cAllVentF(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const vent = await query("SELECT * FROM apod WHERE user_id = ? AND vent_id = ?", [
      user_id,
      vent_id,
    ]);
    json = { ...json, success: true, data: vent};
=======
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
>>>>>>> master
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD
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
=======
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
>>>>>>> master
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD
// /////I want to add a vent favorite
async function addFavV(res, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites WHERE vent_id=?",
      [vent_id]
    );
    const vent = {  id: result.insertId, vent_id };
=======
//! add favorite for Ventures
async function addFavV(res, client_id, vent_id, tour, description) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (client_id, vent_id, tour, description) VALUES (?,?,?,?)",
      [client_id, vent_id, tour, description]
    );
    const vent = {  id: result.insertId, client_id, vent_id, tour, description };
>>>>>>> master
    json = { ...json, success: true, data: vent };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}
<<<<<<< HEAD
// /////I want to delete all my favorites
async function deleteAllFav(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ?", [
      user_id,]);
=======

//! delete single favorite 
async function deleteAFav(res, client_id, fav_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND fav_id = ?", [
      client_id,
      fav_id,
          ]);
>>>>>>> master
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD

// /////I want to delete all my vent favorites
async function delAllVentF(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND vent_id = ?", [
      user_id,
      vent_id,
=======
//! delete favorite APOD by for client by ApodID
async function deleteFavidA(res, client_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND apod_id = ?", [
      client_id,
      apod_id,
>>>>>>> master
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD
// /////I want to delete all my apod favorites
async function delAllApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND apod_id = ?", [
      user_id,
      apod_id,
=======
//! delete favorite Test by for client by TestID
async function deleteFavidT(res, client_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE client_id = ? AND test_id = ?", [
      client_id,
      test_id,
>>>>>>> master
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD
// /////I want to delete one vent favorites
async function delOneVentF(res, user_id, vent_id) {
=======
//! delete favorite Vent for client by VentID
async function deleteFavidV(res, client_id, vent_id) {
>>>>>>> master
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

<<<<<<< HEAD
// /////I want to delete one apod favorites
async function delOneApodF(res, user_id, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND apod_id = ?", [
      user_id,
      apod_id,
          ]);
=======
//! delete favorites by clientID, will delete everything
async function deleteByclientID(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE * FROM favorites WHERE client_id = ?", [client_id]);
>>>>>>> master
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

<<<<<<< HEAD


module.exports = { cAllF, cAllApodF, cAllVentF, addFavA, addFavV, deleteAllFav, delAllApodF, delAllVentF, delOneVentF,delOneApodF };
=======
module.exports = { byFavIDf, byclientIDf, addFavA, addFavT, addFavV, deleteAFav, deleteFavidA, deleteFavidT, deleteFavidV ,deleteByclientID };
>>>>>>> master
