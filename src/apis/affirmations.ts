import WAWebJS from "whatsapp-web.js";
import { send_request } from "./mod";

type Affirmation = {
    affirmation: string;
};

export async function send_affirmation(message: WAWebJS.Message) {
    send_request("https://www.affirmations.dev/").then(async (response) => {
        const affirmation: Affirmation = await response.json();
        message.reply(affirmation.affirmation);
    });
}
