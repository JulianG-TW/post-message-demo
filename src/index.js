import "./styles.css";

const text = `<p>This is ${window.location}</p>`;
const button = `<button onClick="javascript:sendMessage();">postMessage(...)</button>`;

document.getElementById("app").innerHTML = `${text}${button}`;

window.sendMessage = () => {
  window.parent.postMessage("bananas", "http://localhost:1234");
};
