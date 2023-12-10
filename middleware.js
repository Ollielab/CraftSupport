export const config = {
    // Only run the middleware on the admin route
    matcher: '/discord',
  };
  
  export default function middleware(request) {
    const url = new URL(request.url);
    // You can retrieve IP location or cookies here.
    if (url.pathname === '/discord')
    return Response.redirect("https://discord.com/invite/SP87wwm6DU");
  }