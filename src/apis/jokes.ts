import WAWebJS from "whatsapp-web.js";
import { send_request } from "./mod";

type Joke = {
    id: string;
    joke: string;
    status: number;
};

export async function send_joke(message: WAWebJS.Message) {
    send_request("https://icanhazdadjoke.com/").then(async (response) => {
        const data: Joke = await response.json();
        if (data.status === 200) {
            message.reply(data.joke);
        } else {
            message.reply("Ocorreu um erro ao solicitar sua piada 😢");
        }
    });
}
