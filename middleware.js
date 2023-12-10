export const config = {
    // Only run the middleware on the admin route
    matcher: '/discord',
  };
 
  export default function middleware(request) {
    const url = new URL(request.url);
    if (url.pathname === '/discord') {
      url.pathname = 'https://discord.com/invite/SP87wwm6DU';
    }
    window.location.href("http://www.w3schools.com");
  }

  