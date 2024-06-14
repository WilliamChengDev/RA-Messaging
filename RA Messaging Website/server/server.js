import express from 'express';
const app = express();
app.use(express.json());
import { getPosts, getPostByUserId, createPost, signUp, getUserById } from './database.js';

app.listen(8080, () => {
    console.log("server listening on port 8080");
})

app.get("/posts", async(req, res) => {
    const posts = await getPosts();
    res.send(posts);
})

// app.get("/getuserbyid", async(req, res) => {
//     const posts = await getPosts();
//     res.send(posts);
// })

app.post("/newpost", async(req, res) => {
    const{userid, message} = req.body;
    const newPost = await createPost(userid, message);
    res.status(201).send(newPost);
})



app.get("/getuserbyid", async(req, res) => {
    const userid = req.query.userid;
    const user = await getUserById(userid);
    res.send(user);
})