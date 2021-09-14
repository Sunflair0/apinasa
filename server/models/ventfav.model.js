const query = require("../config/mysql.conf");

// /////I want to see all the ventures I have chosen
async function byClientIDv(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("SELECT * FROM ventfav WHERE client_id = ?", [
      client_id
    ]);
    json = { ...json, success: true, data: ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to add a venture to look at later
async function byClientIDf(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("INSERT  * FROM ventfav JOIN ventures ON ventfav.vent_id = ventures.vent_id WHERE ventfav.client_id = ?", [
      client_id,
    ]);
    json = { ...json, success: true, data: ventfav[0]};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete off my vent personal list
async function delOneventf(res, client_id, vent_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("DELETE FROM ventfav WHERE client_id =? AND vent_id =?", [
      client_id,vent_id,
    ]);
    json = { ...json, success: true, data: client_id, ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to clear my personal vent list
async function delAllventf(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const ventfav = await query("DELETE * FROM ventfav JOIN ventures ON ventfav.vent_id = ventures.vent_id WHERE ventfav.client_id = ?", [
      client_id,
    ]);
    json = { ...json, success: true, data: ventfav};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}



module.exports = { byClientIDv, byClientIDf, delOneventf, delAllventf };