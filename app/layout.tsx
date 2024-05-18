
import "./globals.css";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{ 
  const inner = "a";
  return (
    <html lang="en">
         <head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
            </head>
      <body >
      <div className='container'>
          <header className='header'>
            <img src='/head.svg'></img>
          </header>
      {children}
      <footer >
        <img className='footer' src='/footer.webp'></img>
      </footer>
      </div>
        </body>
    </html>
  );
}
