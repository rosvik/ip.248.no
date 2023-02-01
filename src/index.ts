export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(`${request.headers.get("CF-Connecting-IP")}`);
  },
};
