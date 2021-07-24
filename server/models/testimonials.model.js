const query = require("../config/mysql.conf");

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

//! find testimonials by client ID
async function byclientIDt(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * FROM testimonials WHERE client_id = ?", [client_id]);
    json = { ...json, success: true, data: testimonials};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! find testimonials by title
async function findTByTtl(res, title, ) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonial = await query("SELECT * testimonials WHERE title  LIKE '%?%' ", [title,]);
  
///// check to see about this one w
json = { ...json, success: true, data: testimonial};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add testimonials by client ID
async function writeTByclient(res, client_id, ) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonial = await query("INSERT INTO testimonials (client_id, testimonial) VALUES (?,?)", [client_id, testimonial]);
testimonial = {...testimonial, client_id};    
///// check to see about this one w
json = { ...json, success: true, data: testimonial};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! correct testimonial by client ID & test ID
async function patchTByclient(res, client_id, test_id, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO testimonials testimonial WHERE n VALUES (?,?,?,?)",
      [client_id, test.test_id, test.title, test.testimonial]
    );
////// this one is unclear w
    testimonial = { ...test, id: result.insertId, client_id };
    json = { ...json, success: true, data: test };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete testimonials by client ID
async function deleteTByclient(res, client_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE FROM testimonials WHERE client_id = ? AND test_id = ?", [client_id, test_id,]);
    json = { ...json, success: true};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { byTestIDt, byclientIDt, findTByTtl, writeTByclient, patchTByclient, deleteTByclient};