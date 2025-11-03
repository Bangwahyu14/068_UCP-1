const express = require('express')
const app = express();
const port = 3000;
const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false 
}));

app.listen(port, () => {
    console.log('server started on port 3000');
})
db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server Started');
        })
    })
    .catch((err) => {
        console.log(err);
    })
    app.post("/buku", async (req, res) => {
        const data = req.body;
        try {
            const buku = await db.buku.create(data);
            res.send(buku);
        } catch (err) {
            res.send(err);
        }
    });
 app.get('/buku', async (req, res) => {
        try {
            const buku = await db.buku.findAll();
            res.send(buku);
        }catch (err) {
            res.send(err);
        }
    });

