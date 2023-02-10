import WAWebJS, { MessageMedia } from "whatsapp-web.js";
import { send_request } from "./mod";

type Cat = {
    file: string;
};

export async function send_cat(message: WAWebJS.Message) {
    send_request("https://apilist.fun/out/randomcat").then(async (response) => {
        const cat: Cat = await response.json();
        const media = await MessageMedia.fromUrl(cat.file);
        message.reply(media);
    });
}
