const bcrypt = require("bcrypt");
const query = require("../config/mysql.conf");
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'



async function signup(res, clienttag, password) {
  //! check if clienttag in use
  let json = { data: null, success: false, error: null };
  try {
    const clients = await query("SELECT * FROM clients WHERE clienttag = ?", [
      clienttag,
    ]);
    if (clients.length !== 0) {
      json.error = "Choice already taken";
    } else {
      const hashed = await bcrypt.hash(password, 10);
      await query("INSERT INTO clients (password, clienttag) VALUES (?,?)", [
        hashed,
        clienttag,
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

async function login(res, clienttag, password) {
  let json = { data: null, success: false, error: null };
  try {
    const clients = await query("SELECT * FROM clients WHERE clienttag = ?", [
      clienttag,
    ]);
    const client = clients[0] || { password: 1234 };
    const matches = await bcrypt.compare(password, client.password);
    if (matches) {
      json = { ...json, success: matches, data: { clienttag, id: client.id } };
    } else {
      json.error = "Invalid clienttag / password";
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getByclientID(res, clientID) {
  let json = { success: false, error: null, data: null };
  try {
    const clients = await query(
      "SELECT id, clienttag, uuid FROM clients WHERE id = ?",
      [clientID]
    );
    if (clients.length === 0) {
      json.error = "No client found";
    } else {
      json = { ...json, success: true, data: clients[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getByclienttag(res, clienttag) {
  let json = { success: false, error: null, data: null };
  try {
    const clients = await query(
      "SELECT id, clienttag, uuid FROM clients WHERE clienttag = ?",
      [clienttag]
    );
    if (clients.length === 0) {
      json.error = "No client found";
    } else {
      json = { ...json, success: true, data: clients[0] };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

async function getAllclients(res) {
  let json = { success: false, error: null, data: null };
  try {
    const clients = await query("SELECT id, clienttag, uuid FROM clients");
    if (clients.length === 0) {
      json.error = "No clients found";
    } else {
      json = { ...json, success: true, data: clients };
    }
  } catch (err) {
    json.error = "Something went wrong?";
  } finally {
    return res.send(json);
  }
}

module.exports = { signup, login, getAllclients, getByclientID, getByclienttag };
