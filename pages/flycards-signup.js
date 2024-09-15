import Layout from '@/components/Layout';
import AnimatedSubscribeBox from '@/components/AnimatedSubscribeBox';
import OptimizedVideoPlayer from '@/components/OptimizedVideoPlayer';

export default function FlyCardsSignUp() {
    return(
        <Layout title="Sign up page"
        description="Sign up to be notified when FlyCards go live!"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                    <div className="md:w-1/2 text-left mb-8 md:mb-0 md:pr-8">
                        <h1 className="text-4xl font-bold font-heading mb-4">Annoyed by how much time it takes to make good quality flashcards?</h1>
                        <p className="text-xl mb-8 font-body">Get a notification to know when FlyCards are launched!</p>
                        <AnimatedSubscribeBox 
                            apiRoute={'/api/signup'} 
                            boxTitle="Do you want to be notified about the launch?"
                            explanation="It does not sign you up for any newsletter, just for a single mail when the app is live."
                            confirmationText="Thanks! I'll let you know once the app is live for everyone :)"
                            saving="Saving..."
                            save="Sign up!"
                        />
                    </div>
                    <div className="md:w-1/2">
                    <OptimizedVideoPlayer 
                        src="/videos/demo.mp4" 
                        poster="/images/thumbnail.jpg"
                        aspectRatio="9/16"
                        maxWidth="300px"
                    />
                    </div>
                </div>
            </div>
        </Layout>
    )
}