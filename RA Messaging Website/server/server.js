import express from 'express';
const app = express();
app.use(express.json());
import { getPosts, getPostByUserId, createPost, signUp } from './database.js';

app.listen(8080, () => {
    console.log("server listening on port 8080");
})

app.get("/apitest", (req, res) => {
    res.json({
        "comments": ["hello", "goodbye", "see you next time"],
        "users": ["user1", "user2", "user3", "user4"]
    })
})

app.get("/posts", async(req, res) => {
    const posts = await getPosts();
    res.send(posts);
})

app.post("/newpost", async(req, res) => {
    const{userid, message} = req.body;
    const newPost = await createPost(userid, message);
    res.status(201).send(newPost);
})
