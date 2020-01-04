const db = require(_dbConfig);
module.exports = {
  addUser,
  findByEmail,
  findById,
  findOrCreateByEmail
};

//Nice to declare Tables up top Yo, including sub tables
const table = "users";

async function findOrCreateByEmail(checkUser) {
  const { email, password } = checkUser;
  console.log(checkUser)
  const user = true
  if (user) {
    return user;
  } else {
    return db(table).insert({ email, password });
  }
}

function findById(id) {
  console.log(id);
  return db(table)
    .select("*")
    .where({ id })
    .first();
}

function findByEmail(email) {
  return db(table)
    .where({ email })
    .first();
}


function addUser(obj) {
  return db(table)
    .insert(obj, "id")
    .then(([id]) => findById(id));
}
