const gql = require("graphql-tag")

const typeDefs = gql`

type Query {
"Query to get tracks array for the homepage grid"
  tracksForHome:[Track!]!
}

"A track is a group of Modules that teaches about a specific topic"
  type Track {
  "Unique id for the track"
    id: ID!
  "The title of the track"
    title: String!
  "Author of the track"
    author: Author!
  "Picture to display with the track card or track page detail"
    thumbnail: String
  "The track's approximate length in minutes"
    length: Int
  "The number of modules this track contains"
    modulesCount: Int
  }
  "Author of a track"
  type Author {
  id:ID!
  "Author's first and last name"
  name: String!
  "Author's profile picture"
  photo: String
  }
`;

module.exports = typeDefs;