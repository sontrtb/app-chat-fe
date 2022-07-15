import { successNotification } from "../../src/ultis/notification";
import { API_WS_URL } from "../../src/config";

var ws = new WebSocket(API_WS_URL + "/" + localStorage.getItem('token') + "/");

function startWebSocket() {
    ws.onopen = (e) => {
        console.log("Connected Socket");
    };
    ws.onmessage = (e) => {
        successNotification("Có tin nhắn mới từ: ");
        console.log(e.data);
    };
    ws.onclose = (e) => {
        console.log("Disconnected Socket");
    };
    ws.onerror = (e) => {
        console.log("Something wrong");
    };
}

startWebSocket();
// reconnect when disconnected
setInterval(() => {
    if (ws.readyState === WebSocket.CLOSED) {
        if (!localStorage.getItem('token')) {
            return;
        }
        console.log("Reconnecting Socket");
        ws = new WebSocket(API_WS_URL + "/" + localStorage.getItem('token') + "/");
        startWebSocket();
    }
}, 1000);

export { ws };