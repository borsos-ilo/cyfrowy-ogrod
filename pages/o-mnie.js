import { useQuery } from "@apollo/client";
import Layout from '@/components/Layout';
import { GET_ABOUT_PAGE } from "@/lib/queries";
import Image from "next/image";
import RandomColoredLinksContent from '@/components/RandomColoredLinksContent';

export default function AboutMe() {
  const { loading, error, data } = useQuery(GET_ABOUT_PAGE);

  if (loading) return <Layout><p>Ładowanie...</p></Layout>;
  if (error) return <Layout><p>Błąd: {error.message}</p></Layout>;

  const { title, content } = data.pageBy;

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