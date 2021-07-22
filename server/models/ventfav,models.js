const query = require("../config/mysql.conf");


//! find a favorites by fav_id
async function byUserIDv(res, fav_id) {
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








module.exports = { byUserIDv, byUserIDf, addFavA, addFavT, addFavV, deleteAFav, deleteFavidA, deleteFavidT, deleteFavidV ,deleteByUserID };