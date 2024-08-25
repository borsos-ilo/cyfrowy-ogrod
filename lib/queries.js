import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query GetPages {
    pages(first: 100) {
      nodes {
        id
        title
        slug
      }
    }
  }
`;

export const GET_PAGE = gql`
  query GetPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        date
        excerpt
      }
    }
  }
`;


export const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
  pageBy(uri: "o-mnie") {
    id
    title
    content
  }
}
`;