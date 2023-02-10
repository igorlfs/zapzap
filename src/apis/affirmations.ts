import WAWebJS from "whatsapp-web.js";
import { send_request } from "./mod";

type Affimation = {
    affirmation: string;
};

export async function send_affirmation(message: WAWebJS.Message) {
    send_request("https://www.affirmations.dev/").then(async (response) => {
        const affirmation: Affimation = await response.json();
        message.reply(affirmation.affirmation);
    });
}
