import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from "../containers/track-card";
import QueryResult from '../components/query-result';

const TRACKS = gql`
  query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}
`;

const Tracks = () => {
  const {data, error, loading} = useQuery(TRACKS)

  return <Layout grid>
    <QueryResult data={data} error={error} loading={loading}>
    {data?.tracksForHome?.map((track) => <TrackCard key={track.id} track={track}/>)}
    </QueryResult>
    </Layout>;
};

export default Tracks;
