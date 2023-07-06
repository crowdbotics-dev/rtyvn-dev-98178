import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdft_list = createAsyncThunk(
  "sdfts/api_v1_sdft_list",
  async payload => {
    const response = await apiService.api_v1_sdft_list(payload)
    return response.data
  }
)
export const api_v1_sdft_create = createAsyncThunk(
  "sdfts/api_v1_sdft_create",
  async payload => {
    const response = await apiService.api_v1_sdft_create(payload)
    return response.data
  }
)
export const api_v1_sdft_retrieve = createAsyncThunk(
  "sdfts/api_v1_sdft_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdft_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdft_update = createAsyncThunk(
  "sdfts/api_v1_sdft_update",
  async payload => {
    const response = await apiService.api_v1_sdft_update(payload)
    return response.data
  }
)
export const api_v1_sdft_partial_update = createAsyncThunk(
  "sdfts/api_v1_sdft_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdft_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdft_destroy = createAsyncThunk(
  "sdfts/api_v1_sdft_destroy",
  async payload => {
    const response = await apiService.api_v1_sdft_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sdftsSlice = createSlice({
  name: "sdfts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_sdft_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_sdft_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_sdft_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_sdft_list,
  api_v1_sdft_create,
  api_v1_sdft_retrieve,
  api_v1_sdft_update,
  api_v1_sdft_partial_update,
  api_v1_sdft_destroy,
  slice: sdftsSlice
}
