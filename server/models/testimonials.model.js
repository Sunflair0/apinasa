const query = require("../config/mysql.conf");


// /////I want to see all testimonials
async function allTest(res, test) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT TESTIMONIAL FROM TESTIMONIALS",[test,]);
console.log(testimonials);
    json = { ...json, success: true, data: testimonials};
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to add a testimonials
async function writeTByclient(res, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("INSERT INTO testimonials (testimonial) VALUES (?)", [testimonial]);
 testimonial = {...test, testimonial};    
json = { ...json, success: true, data: testimonials};  
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to see all my testimonials
async function getAllmyTest(res, client_id) {
  let json = { success: false, error: null, data: null };
  try {
    const testimonials = await query("SELECT * FROM testimonials WHERE client_id = ?", [client_id]);
console.log(testimonials);
    json = { ...json, success: true, data: testimonials};
  } catch (err) {
    json.error = "Something went wrong...";
console.log();
  } finally {
    return res.send(json);
  }
}

// /////I want to change one of my testimonials
async function patchTByclient(res, client_id, testimonial) {
  let json = { success: false, error: null, data: null };
  try {
    const result = await query(
      "INSERT INTO testimonials (client_id, test_id, title, testimonial) VALUES (?,?,?,?)",
      [client_id, test.test_id, test.title, test.testimonial]
    );
    testimonial = { ...test, id: result.insertId, client_id };
    json = { ...json, success: true, data: test };
  } catch (err) {
    json.error = "Something went wrong...";
  } finally {
    return res.send(json);
  }
}

// /////I want to delete a testimonials
async function delOneMyTest(res, client_id, test_id) {
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

// /////I want to delete all my testimonials
async function delAllMyTest(res, client_id, test_id) {
  let json = { success: false, error: null, data: null };
  try {
    await query("DELETE * FROM testimonials WHERE client_id = ? AND test_id = ?", [client_id, test_id,]);
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

module.exports = { allTest, writeTByclient, getAllmyTest, patchTByclient, delOneMyTest, delAllMyTest, findTByTtl};
