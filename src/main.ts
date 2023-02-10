import qrcode from "qrcode-terminal";
import { Client, LocalAuth } from "whatsapp-web.js";
import { interact } from "./interactions";

const client = new Client({
    authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.initialize();

client.on("message_create", async (message) => {
    if (message.fromMe) {
        interact(message);
    }
});

client.on("message", async (message) => {
    interact(message);
});
