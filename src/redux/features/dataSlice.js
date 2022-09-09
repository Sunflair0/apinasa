
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const dataSlice = createApi({
	reducerPath: 'dataSlice',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000'
	}),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => '/users',
		})
	})
})

export const { useGetUsersQuery } = dataSlice