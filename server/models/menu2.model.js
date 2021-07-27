const query = require("../config/mysql.conf");

async function ventmenu(res) {
  let json = { success: false, error: null, data: null };
  try {
    const menu2 = await query("SELECT img, tour, FROM ventures", []);
    json = { ...json, success: true, data: menu2};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { ventmenu };
