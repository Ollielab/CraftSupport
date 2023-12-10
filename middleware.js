export const config = {
    // Only run the middleware on the admin route
    matcher: '/discord',
  };

<script>function myFunction() {window.location.href = "https://exampleURL.com/"}</script>
  
  export default function middleware(request) {
    const url = new URL(request.url);
    if (url.pathname === '/discord') {
      url.pathname = 'https://discord.com/invite/SP87wwm6DU';
    }
    myFunction()
  }

  