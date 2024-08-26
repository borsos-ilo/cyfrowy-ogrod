import Layout from '@/components/Layout';
import Image from "next/image";
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';
import { GET_ABOUT_PAGE } from '@/lib/queries';

export default function AboutMe({ pageData }) {
  const { title, content } = pageData;

  return (
    <Layout title={title}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col">
            <div className="mb-4">
              <Image
                src="/images/profil.jpeg"
                alt="Ilona Borsos - zdjęcie profilowe"
                width={500}
                height={500}
                unoptimized
                objectFit="cover"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <RandomColoredLinksContent content={content} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetAboutPage {
          pageBy(uri: "o-mnie") {
            id
            title
            content
          }
        }
      `
    })
  });

  const { data } = await response.json();

  return {
    props: {
      pageData: data.pageBy
    }
  }
}