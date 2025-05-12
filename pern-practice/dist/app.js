import express from 'express';
const app = express();
const port = 3000;
app.get("/user", (req, res) => {
    res.send('Typescript + node');
});
app.listen(port, () => {
    console.log("test0")
    console.log(`app runnig on port ${port}`);
});
