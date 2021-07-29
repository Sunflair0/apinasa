const query = require("../config/mysql.conf");

// /////I want to see all the ventures I have chosen
async function byUserIDv(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("SELECT * FROM ventfav WHERE user_id = ?", [
      user_id
    ]);
    json = { ...json, success: true, data: ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to add a venture to look at later
async function byUserIDf(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("INSERT  * FROM ventfav JOIN ventures ON ventfav.vent_id = ventures.vent_id WHERE ventfav.user_id = ?", [
      user_id,
    ]);
    json = { ...json, success: true, data: ventfav[0]};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete off my vent personal list
async function delOneventf(res, user_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("DELETE FROM ventfav WHERE user_id =? AND vent_id =?", [
      user_id,vent_id,
    ]);
    json = { ...json, success: true, data: user_id, ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to clear my personal vent list
async function delAllventf(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("DELETE * FROM ventfav JOIN ventures ON ventfav.vent_id = ventures.vent_id WHERE ventfav.user_id = ?", [
      user_id,
    ]);
    json = { ...json, success: true, data: ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}



module.exports = { byUserIDv, byUserIDf, delOneventf, delAllventf };