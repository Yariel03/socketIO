// create server
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));

const port = 3000;
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);

// socket
const socket = require("socket.io");
const io = socket(server, {
  cors: {
    origin: "*",
  },
});

// comment:socket para chat con todos los usuarios
io.on("connection", (socket) => {
  console.log("a user connected" + socket.id);
  socket.on("chat:message", (data) => {
    console.log(data);
    socket.emit("chat:message", data);
  });
});

// comment:socket para chat con una sala
// io.on("connection", (socket) => {
//   socket.on("roomchat", (data) => {
//     let dispositivo = socket.id;

//     socket.join(data.room);
//     console.log(
//       "el dispositivo:" + dispositivo + " se ha unido a la sala:" + data.room
//     );
//     socket.to(data.room).emit("roomchat", { dispositivo });
//   });
// });
