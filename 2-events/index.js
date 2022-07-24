const eventEmitter = require("events");
class MyEmitter extends eventEmitter {}
const nameEvent = "usuario:click";
const myEmitter = new MyEmitter();
myEmitter.on(nameEvent, (click) => {
  console.log("usuário clicou", click);
});

// myEmitter.emit(nameEvent, "na barra de rolagem");
// myEmitter.emit(nameEvent, "no ok");

// let count = 0
// setInterval(() => {
//   myEmitter.emit(nameEvent, "no ok" + count++);
// }, 1000);
const stdin = process.openStdin()
stdin.addListener("data",(value)=>{
  console.log(`voce digitou:${value.toString().trim()}`)
})

// eventos sao para acoes continuas promises para acoes que executam uma única vez
// nao e possível criar um evento dentro de uma promise