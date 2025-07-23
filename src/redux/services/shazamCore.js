// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const shazamCoreApi = createApi({
//   reducerPath: 'shazamCoreApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
//     prepareHeaders: (headers) => {
//       headers.set('x-rapidapi-key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
// //      headers.set('x-rapidapi-key', 'c1d67120d4msh4e7e9b592739316p1a4d11jsnb4ef33b39f6f');
//       headers.set('X-rapidapi-host', 'shazam-core.p.rapidapi.com');
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
//     getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
//     getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
//     getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
//     getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
//     getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
//     getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
//   }),
// });

// export const {
//   useGetTopChartsQuery,
//   useGetSongsByGenreQuery,
//   useGetSongsByCountryQuery,
//   useGetSongsBySearchQuery,
//   useGetArtistDetailsQuery,
//   useGetSongDetailsQuery,
//   useGetSongRelatedQuery,
// } = shazamCoreApi;


// const options = {
//   method: 'GET',
//   headers: {
//     'x-rapidapi-host': 'shazam-core.p.rapidapi.com',
//     'x-rapidapi-key': 'c1d67120d4msh4e7e9b592739316p1a4d11jsnb4ef33b39f6f'
//   }
// };

// fetch('https://shazam-core.p.rapidapi.com/v1/charts/world?country_code=DZ', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);
      headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/v1/charts/world' }),
    getSongsByGenre: builder.query({ query: (genre) => `/v1/charts/genre-world?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/v1/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/v2/artists/details?artist_id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
