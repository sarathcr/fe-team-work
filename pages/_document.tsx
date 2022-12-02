import { getAuth } from "firebase/auth";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  const app = getAuth();
  console.log(app)
  // console.log(currentUser)
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&family=Montserrat:wght@300;400;500;600;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main></Main>
        <NextScript />
        <div id="portal"></div>
        <div id="portal2"></div>
      </body>
    </Html>
  );
}
