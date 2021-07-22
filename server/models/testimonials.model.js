const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



//! find testimonials by user ID
async function byUserIDt(res, user_id) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * FROM testimonials WHERE user_id = ?", [user_id]);
console.log(testimonials);
    json = { ...json, success: true, data: testimonials};
  } catch (err) {
    json.error = "Something went wrong...";
console.log(byUserIDt);
  } finally {
    return res.send(json);
  }
}

//! find testimonials by title
async function findTByTtl(res, title) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * testimonials WHERE title  LIKE '%?%' ", [title,]);
  
///// check to see about this one w
json = { ...json, success: true, data: testimonials};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add testimonials by user ID
async function writeTByUser(res, user_id, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("INSERT INTO testimonials (user_id, testimonial) VALUES (?,?)", [user_id, testimonial]);
 testimonial = {...test, user_id};    
///// check to see about this one w
json = { ...json, success: true, data: testimonials};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! correct testimonial by user ID & test ID
async function patchTByUser(res, user_id, test_id, title, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO testimonials (user_id, test_id, title, testimonial) VALUES (?,?,?,?)",
      [user_id, test.test_id, test.title, test.testimonial]
    );
////// this one is unclear w
    testimonial = { ...test, id: result.insertId, user_id };
    json = { ...json, success: true, data: test };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete testimonials by user ID
async function deleteTByUser(res, user_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM testimonials WHERE user_id = ? AND test_id = ?", [user_id, test_id,]);
    json = { ...json, success: true};
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

module.exports = { byUserIDt, findTByTtl, writeTByUser, patchTByUser, deleteTByUser};