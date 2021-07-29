const query = require("../config/mysql.conf");


// /////I want to add a testimonials
async function writeTByUser(res, user_id, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("INSERT INTO testimonials (user_id, testimonial) VALUES (?,?)", [user_id, testimonial]);
 testimonial = {...test, user_id};    
json = { ...json, success: true, data: testimonials};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all testimonials3
async function byUserIDt(res) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonial = await query("SELECT testimonial FROM testimonials");
console.log(testimonial);
    json = { ...json, success: true, data: testimonial};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my testimonials
async function getAllmyTest(res, user_id) {
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

// /////I want to change one of my testimonials
async function patchTByUser(res, user_id, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO testimonials (user_id, test_id, title, testimonial) VALUES (?,?,?,?)",
      [user_id, test.test_id, test.title, test.testimonial]
    );
    testimonial = { ...test, id: result.insertId, user_id };
    json = { ...json, success: true, data: test };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete a testimonials
async function delOneMyTest(res, user_id, test_id) {
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

// /////I want to delete all my testimonials
async function delAllMyTest(res, user_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE * FROM testimonials WHERE user_id = ? AND test_id = ?", [user_id, test_id,]);
    json = { ...json, success: true};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}


//!I want to find testimonials by part title
async function findTByTtl(res, title) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * testimonials WHERE title LIKE '%?%' ", [title]);
 json = { ...json, success: true, data: testimonials};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

module.exports = { writeTByUser, getAllmyTest, patchTByUser, delOneMyTest, delAllMyTest, findTByTtl};
