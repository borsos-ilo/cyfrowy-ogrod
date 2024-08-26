import Layout from '@/components/Layout'
import Link from 'next/link'
import AnimatedSubscribeBox from '@/components/AnimatedSubscribeBox'

export default function Home() {
  return (
    <Layout title="Strona główna">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-4">Mój cyfrowy ogród</h1>
        <p className="text-xl mb-8 font-body">To miejsce to mój cyfrowy strumień świadomości. Płynie on swobodnie, meandrując między różnymi tematami. Czasem spokojny i przejrzysty, innym razem wzburzony i mętny.</p>
        
        <section className="mb-12">
          <p className="text-lg mb-4 font-body">
            Póki jeszcze nic tu nie ma, wpadaj na stronę{' '}
            <Link href="/o-mnie" className="text-blue-600 hover:underline">
              o mnie
            </Link>
            , aby dowiedzieć się więcej!
          </p>
        </section>

        <AnimatedSubscribeBox />
      </div>
    </Layout>
  )
}