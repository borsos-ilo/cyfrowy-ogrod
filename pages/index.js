import Layout from '@/components/Layout'
import Link from 'next/link'
import AnimatedSubscribeBox from '@/components/AnimatedSubscribeBox'

export default function Home() {
  return (
    <Layout title="Strona główna"
      description="Mój cyfrowy ogród - osobisty zbiór różnych elementów świata, w którym żyjemy, które wyjaśniam sobie po to, żeby lepiej je zrozumieć, a przez to móc z ich pomocą doświadczać świata w coraz bogatszy sposób."
      >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-4">Mój cyfrowy ogród</h1>
        <p className="text-xl mb-8 font-body">To miejsce to mój cyfrowy strumień świadomości. Płynie on dość swobodnie, meandrując między różnymi tematami, które mnie interesują.</p>
        
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