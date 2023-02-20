const {Pool}=require('pg');
require('dotenv').config()

const pool=new Pool({
    host:process.env.DBHOST,
    port:process.env.DBPORT,
    password:process.env.DBPASSWORD,
    user:process.env.DBUSER,
    database:process.env.DATABASE
});

module.exports=pool;


