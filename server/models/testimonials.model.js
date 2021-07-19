
//! find testimonials by test_id
async function byTestIDt(res, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * FROM testimonials WHERE test_id = ?", [
      test_id,
    ]);
    json = { ...json, success: true, data: testimonials[0]  };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! find testimonials by user ID
async function byUserIDt(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * FROM testimonials WHERE user_id = ?", [user_id]);
    json = { ...json, success: true, data: testimonials};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}
module.exports = { byTestIDt, byUserIDt};