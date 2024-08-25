import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout title="Strona główna">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Witaj w moim Cyfrowym Ogrodzie</h1>
        <p className="text-xl mb-8">Miejsce, gdzie dzielę się swoimi myślami i odkryciami.</p>
        {/* Tutaj możesz dodać więcej treści strony głównej */}
      </div>
    </Layout>
  )
}