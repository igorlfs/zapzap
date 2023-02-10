import WAWebJS from "whatsapp-web.js";

export function alternate_upper_case(message: WAWebJS.Message) {
    let mock = "";
    for (let i = 0; i < message.body.length; ++i) {
        mock +=
            i % 2 == 0
                ? message.body[i].toUpperCase()
                : message.body[i].toLowerCase();
    }
    message.reply(mock);
}
