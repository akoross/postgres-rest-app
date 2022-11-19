const Pool = require('pg').Pool
const pool = new Pool({
    user: "cplfklpliwscqy",
    password: 'a9088b121a7a449f04cb72769357dc10a61d64aa2e29e3ba2cbbbc15d48614fa',
    host: "ec2-54-77-40-202.eu-west-1.compute.amazonaws.com",
    port: "5432",
    database: "d1phglaio3ekgs"
})



module.exports = pool