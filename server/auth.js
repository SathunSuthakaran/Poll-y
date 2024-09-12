//👇🏻 holds all the existing users
const users = [];
//👇🏻 generates a random string as ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/api/register", async (req, res) => {
    const { email, password, username } = req.body;
    //👇🏻 holds the ID
    const id = generateID();
    //👇🏻 logs all the user's credentials to the console.
    console.log({ email, password, username, id });
});