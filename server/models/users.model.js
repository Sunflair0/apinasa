const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



async function signup(res, username, password) {
  //! check if username in use
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (users.length !== 0) {
      json.error = "Username already taken";
    } else {
      const hashed = await bcrypt.hash(password, 10);
      await query("INSERT INTO users (password, username) VALUES (?,?)", [
        hashed,
        username,
      ]);
      json = { ...json, success: true };
    }
  } catch (err) {
    console.log(err);
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function login(res, username, password) {
  let json = { data: null, success: false, error: null };
  try {
    const users = await query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    const user = users[0] || { password: 1234 };
    const matches = await bcrypt.compare(password, user.password);
    if (matches) {
      json = { ...json, success: matches, data: { username, id: user.id } };
    } else {
      json.error = "Invalid username / password";
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getByUserID(res, userID) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query(
      "SELECT id, username, uuid FROM users WHERE id = ?",
      [userID]
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

async function getByUsername(res, username) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query(
      "SELECT id, username, uuid FROM users WHERE username = ?",
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

async function getAllUsers(res) {
  let json = { success: false, error: null, data: null };
  try {
    const users = await query("SELECT id, username, uuid FROM users");
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



module.exports = { signup, login, getAllUsers, getByUserID, getByUsername };
