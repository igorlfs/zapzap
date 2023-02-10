export async function send_request(url: string): Promise<Response> {
    const init = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    const request = new Request(url, init);
    const response = await fetch(request);
    return response;
}
