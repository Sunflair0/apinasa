const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf").default;
const { nanoid } = require('@reduxjs/toolkit');

async function signup(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const [user] = await query("SELECT * FROM users WHERE username = ?", [
      username
    ]);
    if (user.length !== 0) {
      json.error = "Choice already taken";
    } else {
      const hashed = await bcrypt.hash(password, 10);

      await query("INSERT INTO users (username, password, nanoid, creation_date, updated_at) VALUES (?,?,?, current_timestamp(), current_timestamp())", [
        hashed, username, nanoid
      ]);
      json = { ...json, success: true };
    }
  } catch (err) {
    console.log(err);
    json.error = "Something's not right...";
  } finally {
    return res.send(json);
  }
}

async function login(username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username
    ]);

    console.log("users");
    console.log(users);


    const user = users[0] || { password: 1234 };
    const matches = await bcrypt.compare(password, user.password);
    if (matches) {
      json = { ...json, data: { username, nanoid: user.nanoid } };
// /////will log time of user when sign in
      await query("INSERT INTO users(updated_at) VALUES (current_timestamp())");
    } else {
      json.error = "Invalid username / password";
    }
  } catch (err) {
    json.error = "Something went wrong";
  } finally {
    return (json);
  }
}

async function addEmail(email) {
  let json = { error: null, data: null };
  try {
    const users = await query(
      "INSERT INTO users(email) VALUES = ?",
      [email]
    );

// ///// REGEX needed for email pattern,  next to add role
    if (users.length === 0) {
      json.error = "No user found";
    } else {
      json = { ...json, data: users[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return (json);
  }
}

async function getByUserID(nanoid) {
  let json = { error: null, data: null };
  try {
    const users = await query(
      "SELECT id, username, nanoid FROM users WHERE nanoid = ?",
      [nanoid]
    );
    if (users.length === 0) {
      json.error = "No user found";
    } else {
      json = { ...json, data: users[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return (json);
  }
}

async function getByusername(res, username) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query(
      "SELECT id, username, nanoid FROM users WHERE username = ?",
      [username]
    );
    if (users.length === 0) {
      json.error = "No user found";
    } else {
      json = { ...json, success: true, data: users[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getAllusers(res) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query("SELECT id, username, nanoid FROM users");
    if (users.length === 0) {
      json.error = "No users found";
    } else {
      json = { ...json, success: true, data: users };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

module.exports = { signup, login, addEmail, getAllusers, getByUserID, getByusername };
