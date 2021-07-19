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

//! find testimonials by title
async function findTByTtl(res, title, ) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * testimonials WHERE title  LIKE '%?%' ", [title,]);
  
///// check to see about this one w
json = { ...json, success: true, data: testimonial};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! add testimonials by user ID
async function writeTByUser(res, user_id, ) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("INSERT INTO testimonials (user_id, testimonial) VALUES (?,?)", [user_id, testimonial]);
testimonial = {...testimonial, user_id};    
///// check to see about this one w
json = { ...json, success: true, data: testimonial};  
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
    test = { ...test, id: result.insertId, user_id };
    json = { ...json, success: true, data: test };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

//! delete testimonials by user ID
async function deleteTByUser(res, user_id) {
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

module.exports = { byTestIDt, byUserIDt, findTByTtl, writeTByUser, patchTByUser, deleteTByUser};