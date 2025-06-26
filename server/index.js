const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        message: "Hello world",
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
  });
  
  const User = mongoose.model("User", userSchema);
  

const users = [];

const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
    const { email, password, username } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({
          error_message: "User already exists",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        email,
        password: hashedPassword,
        username,
      });
  
      await newUser.save();
  
      res.json({
        message: "Account created successfully!",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({
        error_message: "An error occurred while creating the account.",
      });
    }
  });

  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({
          error_message: "User does not exist",
        });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.json({
          error_message: "Invalid credentials",
        });
      }
      res.json({
        message: "Login successful!",
        user: {
          email: user.email,
          username: user.username,
        },
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({
        error_message: "An error occurred during login.",
      });
    }
  });
  

const threadList = [];

app.post("/api/create/thread", async (req, res) => {
const { thread, userId } = req.body;
const threadId = generateID();

    threadList.unshift({
        id: threadId,
        title: thread,
        userId,
        replies: [],
        likes: [],
    });

    res.json({
        message: "Thread created successfully!",
        threads: threadList,
    });
});

app.get("/api/all/threads", (req, res) => {
    res.json({
        threads: threadList,
    });
});

app.post("/api/thread/like", (req, res) => {
    const { threadId, userId } = req.body;
    const result = threadList.filter((thread) => thread.id === threadId);
    const threadLikes = result[0].likes;
    const authenticateReaction = threadLikes.filter((user) => user === userId);
    if (authenticateReaction.length === 0) {
        threadLikes.push(userId);
        return res.json({
            message: "You've reacted to the post!",
        });
    }
    res.json({
        error_message: "You can only react once!",
    });
});

app.post("/api/thread/replies", (req, res) => {
    const { id } = req.body;
    const result = threadList.filter((thread) => thread.id === id);
    res.json({
        replies: result[0].replies,
        title: result[0].title,
    });
});

app.post("/api/create/reply", async (req, res) => {
    const { id, userId, reply } = req.body;
    const result = threadList.filter((thread) => thread.id === id);
    const user = users.filter((user) => user.id === userId);
    result[0].replies.unshift({
        userId: user[0].id,
        name: user[0].username,
        text: reply,
    });

    res.json({
        message: "Response added successfully!",
    });
});

let A_count = 0
let B_count = 0
app.post("/api/update_count", async(req, res) => {
    if (req.body.option === 'A') {
        A_count++;
    }   
    else {
        B_count++;
    }
 })

app.post("/api/progress_count", async(req, res) => {
    res.json({
        left: A_count,
        right: B_count
    });
});