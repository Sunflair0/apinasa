import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const salutesAdapter = createEntityAdapter({})
const initialState = salutesAdapter.getInitialState()

export const salutesSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    readSalutes: builder.query({
      query: () => './server/routes/salutes.routes',
      validateStatus: (req, res) => {
        return req.status === 200 && !res.isError
      },
      transformResponse: resData => {
        const newRes = resData.map(val => {
          val.id = val.salute_id
          return val
        })
        return salutesAdapter.setAll(initialState, newRes)
      },
      providesTags: (req, res, err) => {
        if (res?.ids) {
          return [{ type: 'salute', id: 'LIST' },
          ...res.ids.map(id => {
            return [{ type: 'salute', id }]
          })
          ]
        }
        else return [{ type: 'salute', id: 'LIST' }]
      }
      //  clear: () => [],
    })
  })
})

export const { useReadSalutesQuery } = salutesSlice

export const selectReadSalutesResult = salutesSlice.endpoints.readSalutes.select()

const selectReadSalutesData = createSelector(selectReadSalutesResult, resultData => resultData.data)

export const {
  selectAll: selectAllSalutes,
  selectById: selectSalutesById,
  
} = salutesAdapter.getSelectors(state => selectReadSalutesData(state))