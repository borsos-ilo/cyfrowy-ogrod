import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Mój Cyfrowy Ogród</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-cream shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center font-heading font-bold text-xl">
                Mój Cyfrowy Ogród
              </Link>
            </div>
            <div className="flex items-center">
            <Link 
                    href={`/o-mnie`} 
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 font-heading"
                  >O mnie
                  </Link>
            </div>
          </div>
        </nav>
      </header>
            {/* To jest - no właśnie - layout. W ramach tego layoutu będziemy renderować "dzieci" - na przykład posty, strony itd. */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-cream">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-body">© 2024 Mój Cyfrowy Ogród. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}