//Gdy użytkownik odwiedza stronę w twojej aplikacji Next.js, Next.js najpierw renderuje _app.js, 
// a następnie renderuje odpowiednią stronę wewnątrz niego.


import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo-client";

export default function App({ Component, pageProps }) {
  // Widać to dobrze tutaj - w zaleznosci od tego, jaką stronę otworzymy, ta strona będzie przekazana
  // jako props co funkcji App, a razem z nią jej własne propsy. Niezaleznie od tego, jaką stronę otworzymy,
  // wyrenderuje się App, który później dopiero "przejmie" z URL odpowiednią stronę i ją wyrenderuje.
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}


// W App. js mogę:
// dodać globalne style, które będą aplikowane do wszystkich stron
// dodać globalne komponenty (np. Layout), które będą okalać wszystkie strony
// zainicjować globalne biblioteki (np. zarządzanie stanem, analityka)