import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

//Post table queries
//postid(INT), userid(FK(INT)), datecreated(DATETIME), message(VARCHAR(10000)), response(VARCHAR(5000))
export async function getPosts() {
    const [posts] = await pool.query("SELECT * FROM Post");
    return posts;
}

export async function getPostByUserId(id){
    const [post] = await pool.query(`
        SELECT *
        FROM Post
        WHERE userid = ?
    `, [id]); 
    return post;
}

export async function createPost(userid, message){
    const result = await pool.query(`
        INSERT INTO Post(userid, message, datecreated)
        VALUES(?, ?, CURRENT_TIMESTAMP)
    `, [userid, message]);
    return result;
}

export async function respondPost(response, postid){
    const result = await pool.query(`
        UPDATE Post
        SET response = ?
        WHERE postid = ?
    `, [response, postid]);
}


//User table queries
//userid(INT), username(VARCHAR(20)), email(VARCHAR(321)), birthday(DATE), registrationdate(DATETIME), password(VARCHAR(45))
export async function signUp(username, email, birthday, password){
    const result = await pool.query(`
        INSERT INTO User(username, email, birthday, registrationdate, password)
        VALUES(?, ?, ?, CURRENT_TIMESTAMP, ?)
    `, [username, email, birthday, password])
    return result;
}

export async function getUsernameById(userid){
    const username = await pool.query(`
        SELECT *
        FROM User
        WHERE userid = ?
    `, [userid]);
    return username;
}

// const post = await getUsernameById(1);
// console.log(post);