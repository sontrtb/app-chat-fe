import {successNotification} from "../../src/ultis/notification";

const token = localStorage.getItem('token');
const url = "ws://13.250.106.81:8000/ws/notification/" + token + "/";
const ws = new WebSocket(url);

function startWebSocket() {
    ws.onopen = (e) => {
        console.log("Connected Socket");
    };
    ws.onmessage = (e) => {
        successNotification("Có tin nhắn mới từ: ");
    };
    ws.onclose = (e) => {
        console.log("Disconnected Socket");
    };
    ws.onerror = (e) => {
        console.log("Error");
    };
}

startWebSocket();
// reconnect when disconnected
setInterval(() => {
    if (ws.readyState === WebSocket.CLOSED) {
        startWebSocket();
        console.log("reconnect");
    }
}, 3000);

export {ws};