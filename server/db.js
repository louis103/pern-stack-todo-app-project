const Pool = require("pg").Pool;
const pool = new Pool({
  user: "", // Replace with own db user
  password: "", // Replace with own db password
  host: "", // Replace with own db host
  port: "", // Replace with own db port
  database: "", // Replace with own database name
});

module.exports = pool;
