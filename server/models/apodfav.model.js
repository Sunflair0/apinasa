const query = require("../config/mysql.conf");

//! find my fav apods by apod_id(category)
async function byApodIDa(res, apod_id) {
  let json = { success: false, error: null, data: null };
  try {
    const apod = await query("SELECT * FROM apod WHERE apod_id = ?", [
      apod_id,
    ]);
    json = { ...json, success: true, data: apod[0]  };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add favorite for APOD
router.put("/add", (req, res) => {
  const { user_id, apod_id, title, url, description, copyright, explanation} = req.body;
  if (user_id  && url && apod_id && title  && copyright && explanation) {
  return addFavA(res, user_id, apod_id, title, url, description, copyright, explanation);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

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

module.exports = { byApodIDa };