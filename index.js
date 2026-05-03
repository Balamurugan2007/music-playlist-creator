const express = require("express");
const app = express();

app.use(express.json());

// allow frontend connection
app.use(require("cors")());

// serve HTML page
app.use(express.static(__dirname));

let playlists = [];

// create playlist
app.post("/playlist", (req, res) => {
    const { name, songs } = req.body;

    const playlist = {
        id: playlists.length + 1,
        name,
        songs
    };

    playlists.push(playlist);
    res.json({ message: "Playlist created", playlist });
});

// get playlists
app.get("/playlists", (req, res) => {
    res.json(playlists);
});

// start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
});