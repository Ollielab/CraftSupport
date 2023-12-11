export const config = {
    matcher: '/discord',
  };
  
  export default function middleware(request) {
    const url = new URL(request.url);
    if (url.pathname === '/discord')
    return Response.redirect("https://discord.com/invite/SP87wwm6DU");
  }