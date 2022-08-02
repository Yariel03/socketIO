const socket = io("http://localhost:3000/");
let mesage = "hola como estas";
socket.emit("chat:message", { mesage });

socket.on("chat:message", (data) => {
  console.log(data);
});

// const room = "sala1";
// socket.on("roomchat", (data) => {
//   console.log(data);
// });

// const Prees = () => {
//   socket.emit("roomchat", { room });
// };
