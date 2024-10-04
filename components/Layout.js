import Head from 'next/head'
import Link from 'next/link'
import Footer from './Footer'

export default function Layout({ 
  children, 
  title = 'Mój Cyfrowy Ogród', 
  linkColor, 
  description = 'Mój osobisty cyfrowy ogród, gdzie dzielę się przemyśleniami i wiedzą.',
  ogImage = 'https://ilonaborsos.com/default-og-image.jpg',
  metaTags = [],
  currentUrl
}) {
  const baseUrl = 'https://ilonaborsos.com';

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .wordpress-content a {
            color: ${linkColor};
          }
        `}</style>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl || baseUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        {metaTags.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
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
              >
                O mnie
              </Link>
              <Link 
                href={`/kolofon`} 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 font-heading"
              >
                Kolofon
              </Link>
              <Link 
                href={`/newsletter`} 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 font-heading"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <Footer/>
    </div>
  )
}