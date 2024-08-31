import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import '../styles/globals.css';
import Layout from './components/Layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YourStreaming</title>
        {/* Add other head elements here */}
      </head>
      <body>
        <Layout>
          {children}  {/* This renders the content of the specific page */}
        </Layout>
      </body>
    </html>
  );
}
