import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
const apiKey = process.env.REACT_APP_NASA_KEY;

export const nasaApi = createApi({
	reducerPath: 'nasaApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
	}),
	endpoints: (builder) => ({
		getApodToday: builder.query({
			query: (type) => `${type}`,
		}),
	}),
});

export const { useGetApodTodayQuery } = nasaApi;