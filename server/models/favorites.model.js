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

//! find all favorites for user ID
async function byUserIDf(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: favorites[0] };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite for APOD
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

//! add favorite for Testimonials
async function addFavT(res, user_id, test_id, title, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (user_id, test_id, title, testimonial) VALUES (?,?,?,?)",
      [user_id, test.test_id, test.title, test.testimonial]
    );
///////check this one, w
    const newtest = { ...test, id: result.insertId, user_id, test_id, title, testimonial };
    json = { ...json, success: true, data: newtest };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite for Ventures
async function addFavV(res, user_id, vent_id, tour, description) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (user_id, vent_id, tour, description) VALUES (?,?,?,?)",
      [user_id, vent_id, tour, description]
    );
    const vent = {  id: result.insertId, user_id, vent_id, tour, description };
    json = { ...json, success: true, data: vent };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete single favorite 
async function deleteAFav(res, user_id, fav_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND fav_id = ?", [
      user_id,
      fav_id,
          ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorite APOD by for user by ApodID
async function deleteFavidA(res, user_id, apod_id) {
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

//! delete favorite Test by for user by TestID
async function deleteFavidT(res, user_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND test_id = ?", [
      user_id,
      test_id,
          ]);
    json = { ...json, success: true };
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

//! delete favorites by UserID, will delete everything
async function deleteByUserID(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE * FROM favorites WHERE user_id = ?", [user_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { byFavIDf, byUserIDf, addFavA, addFavT, addFavV, deleteAFav, deleteFavidA, deleteFavidT, deleteFavidV ,deleteByUserID };