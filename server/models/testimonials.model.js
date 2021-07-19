const express = require("express");
let router = express.Router();

const query = require("../config/mysql.conf");


async function byUserID(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE user_id = ?", [
      user_id,
    ]);
    json = { ...json, success: true, data: favorites };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! favorites by favorite ID
async function byFaveID(res, id) {
  let json = { success: false, error: null, data: null };
  try {
    const favorites = await query("SELECT * FROM favorites WHERE id = ?", [id]);
    json = { ...json, success: true, data: favorites[0] };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite
async function addFave(res, user_id, gif) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO favorites (user_id, gif_id, title, url) VALUES (?,?,?,?)",
      [user_id, gif.gif_id, gif.title, gif.url]
    );
    gif = { ...gif, id: result.insertId, user_id };
    json = { ...json, success: true, data: gif };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorite by ID
async function deleteFave(res, user_id, gif_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ? AND gif_id = ?", [
      user_id,
      gif_id,
    ]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete favorites by UserID
async function deleteByUserID(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM favorites WHERE user_id = ?", [user_id]);
    json = { ...json, success: true };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { byFaveID, byUserID, addFave, deleteByUserID, deleteFave };


module.exports = router;