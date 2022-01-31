const { Pool } = require("pg");
const pool = new Pool({
   connectionString:"postgres://tsolpgzskyidyk:0293a6b83de3593f2151de13063d07a8384e304d163ee9b5bbddb81157875880@ec2-34-236-88-129.compute-1.amazonaws.com:5432/d37p8a9hd413c2",
   
    ssl: {
       rejectUnauthorized: false
   }
   
});
pool.connect();
module.exports = pool;