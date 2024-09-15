import Layout from '@/components/Layout';
import Link from 'next/link';
import AnimatedSubscribeBox from '@/components/AnimatedSubscribeBox';

export default function FlyCardsSignUp() {
    return(
        <Layout title="Sign up page"
        description="Sign up to be notified when FlyCards go live!"
        >
             <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-4">Annoyed by how much time it takes to make good quality flashcards?</h1>
        <p className="text-xl mb-8 font-body">Get a notification to know when 
            <Link href="www.onet.pl" className="text-blue-600 hover:underline"> FlyCards </Link>
            are launched!</p>


        <AnimatedSubscribeBox 
        apiRoute={'/api/signup'} 
        boxTitle="Do you want to be notified about the launch?"
        explanation="It does not sign you up for any newsletter, just for a single mail when the app is live."
        confirmationText="Thanks! I'll let you know once the app is live for everyone :)"
        saving="Saving..."
        save="Sign up!"/>
      </div>
        </Layout>
    )
}
