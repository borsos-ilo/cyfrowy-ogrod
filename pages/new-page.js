import Layout from '@/components/Layout';
import { useQuery, gql } from '@apollo/client';

// Definiujemy nasze zapytanie GraphQL
const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id, idType: SLUG) {
      id
      title
      content
      date
    }
  }
`;

function TestPage() {
  // Używamy hooka useQuery do wykonania zapytania
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { id: 'old-content' },
  });

  if (loading) return <p>Ładowanie...</p>;
  if (error) return <p>Wystąpił błąd :(</p>;

  return (
    <Layout>
        <div>
            <h1>{data.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
            <p>Data publikacji: {new Date(data.post.date).toLocaleDateString()}</p>
        </div>
    </Layout>
  );
}

export default TestPage;