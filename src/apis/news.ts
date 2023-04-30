import WAWebJS from "whatsapp-web.js";
import { send_request } from "./mod";

type Source = {
    id: string;
    name: string;
};

type Article = {
    source: Source;
    author: string;
    title: string;
    description: string | null;
    url: Object;
    urlToImage: null;
    publishedAt: Date;
    content: null;
};

type NewsAPIResult = {
    status: string;
    totalResults: number;
    articles: Article[];
};

export async function send_news(message: WAWebJS.Message) {
    const key = process.env.NEWS_API_KEY;
    send_request(`https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${key}`).then(
        async (response) => {
            const result: NewsAPIResult = await response.json();
            if (result.status === "ok") {
                const titles: string[] = [];
                for (const article of result.articles) {
                    titles.push(article.title);
                }
                const reply = titles.join("\n");
                message.reply(reply);
            }
        },
    );
}
