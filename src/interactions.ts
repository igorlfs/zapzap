import WAWebJS from "whatsapp-web.js";
import { send_affirmation } from "./apis/affirmations";
import { send_cat } from "./apis/cats";
import { send_joke } from "./apis/jokes";
import { alternate_upper_case } from "./mock";

export async function interact(message: WAWebJS.Message) {
    if (message.body.indexOf("cringe") !== -1) {
        alternate_upper_case(message);
    }
    if (message.body === "!ping") {
        message.reply("pong");
    } else if (message.body.indexOf("!piada") === 0) {
        send_joke(message);
    } else if (message.body.indexOf("!coach") === 0) {
        send_affirmation(message);
    } else if (message.body.indexOf("!gato") === 0) {
        send_cat(message);
    }
}
