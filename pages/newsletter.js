import AnimatedSubscribeBox from '@/components/AnimatedSubscribeBox';
import Layout from '@/components/Layout';

export default function Newsletter() {
    return (
      <Layout title="Powiadomienia o postach">
        <div className="max-w-4xl mx-auto mt-16">
          <div className="w-full justify-center"> 
            <AnimatedSubscribeBox 
              apiRoute="/api/subscribe"
              boxTitle="Chcesz wiedzieć, kiedy pojawią się tu kolejne teksty?"
              explanation="Zapisz się na newsletter!"
              confirmationText="Dzięki! Dam Ci znać, kiedy opublikuję kolejny post :)"
              saving="Zapisywanie..."
              save="Zapisz się!"
              placeholder="Twój email"
            />
          </div>
        </div>
      </Layout>
    )
  }