import express from 'express';

const PORT = process.env.PORT || 3000

const app = express();

app.get("/", (_, res) => {
    res.status(200).json("Hello from node server with Typescript")
})

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));