import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'da18f2420amsh52c38d02a0b7ec9p158fe4jsnad0ce0c817fb',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });



export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({

        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
            // query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;