import { useQuery } from "@apollo/client";
import Layout from '@/components/Layout';
import { GET_ABOUT_PAGE } from "@/lib/queries";

export default function AboutMe() {
  const { loading, error, data } = useQuery(GET_ABOUT_PAGE);

  if (loading) return <Layout><p>Ładowanie...</p></Layout>;
  if (error) return <Layout><p>Błąd: {error.message}</p></Layout>;

  const { title, content } = data.pageBy;

  return (
    <Layout title={title}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 font-heading">{title}</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
          </div>
          <div className="md:w-2/3 wordpress-content">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}