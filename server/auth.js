//👇🏻 holds all the existing users
const users = [];
//👇🏻 generates a random string as ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
    const { email, password, username } = req.body;
    const id = generateID();
    //👇🏻 ensures there is no existing user with the same credentials
    const result = users.filter(
        (user) => user.email === email && user.password === password
    );
    //👇🏻 if true
    if (result.length === 0) {
        const newUser = { id, email, password, username };
        //👇🏻 adds the user to the database (array)
        users.push(newUser);
        //👇🏻 returns a success message
        return res.json({
            message: "Account created successfully!",
        });
    }
    //👇🏻 if there is an existing user
    res.json({
        error_message: "User already exists",
    });
});