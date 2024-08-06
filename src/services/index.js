import { request, gql } from "graphql-request";

// const graphqlAPI = process.env.REACT_APP_PUBLIC_GRAPHICS_ENDPOINT;
const graphqlAPI =
  "https://api-eu-central-1.graphcms.com/v2/cl10kpcef0fvs01w75irk8ckd/master";

export const getAllPosts = async () => {
  const query = gql`
    query getAllPosts {
      posts {
        title
        excerpt
        author {
          name
        }
        date
        coverImage {
          url
        }
        slug
        content {
          text
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.posts;
};

export const getPostsByFirst = async (first = 6, searchKey = "") => {
  const query = gql`
    query getPostsByFirst($first1: Int, $searchKey: String) {
      posts(
        first: $first1
        orderBy: date_DESC
        where: { _search: $searchKey }
      ) {
        title
        excerpt
        author {
          name
        }
        date
        coverImage {
          url
        }
        slug
        id
        content {
          text
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, {
    first1: first,
    searchKey,
  });
  return results.posts;
};

export const getPostsByAfter = async (after, first = 6) => {
  const query = gql`
    query getPostsByAfter($after: String, $first: Int) {
      postsConnection(after: $after, first: $first, orderBy: date_DESC) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            title
            excerpt
            author {
              name
            }
            date
            coverImage {
              url
            }
            slug
            id
            content {
              text
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { after, first });
  return {
    pageInfo: results.postsConnection.pageInfo,
    posts: results.postsConnection.edges.map((post) => post.node),
  };
};

export const getAllPostSlugs = async () => {
  const query = gql`
    query getAllPostSlugs {
      posts {
        slug
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        content {
          html
        }
        date
        author {
          name
        }
        coverImage {
          url
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });

  return results.post;
};

export const getMember = async () => {
  const query = gql`
    query MyQuery {
      teamMembersConnection {
        edges {
          node {
            bio
            email
            fullname
            phone
            title
            picture {
              url
            }
            slug
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.teamMembersConnection.edges;
};

export const getMembersSlugs = async () => {
  const query = gql`
    query getMemberSlugs {
      teamMembersConnection {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.teamMembersConnection.edges;
};

export const getMemberDetails = async (slug) => {
  const query = gql`
    query getMemberDetails($slug: String!) {
      teamMembersConnection(where: { slug: $slug }) {
        edges {
          node {
            bio
            email
            fullname
            phone
            title
            picture {
              url
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });

  return results.teamMembersConnection;
};

export const getServices = async () => {
  const query = gql`
    query getServices {
      servicesConnection {
        edges {
          node {
            slug
            list
            title
            content
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.servicesConnection.edges;
};

export const getServicesSlugs = async () => {
  const query = gql`
    query getServicesSlugs {
      servicesConnection {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.servicesConnection.edges;
};

export const getServiceDetails = async (slug) => {
  const query = gql`
    query getServiceDetails($slug: String!) {
      servicesConnection(where: { slug: $slug }) {
        edges {
          node {
            slug
            list
            title
            content
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query, { slug });

  return results.servicesConnection;
};
