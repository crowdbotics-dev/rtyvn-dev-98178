import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_hncnc_list = createAsyncThunk(
  "hncncs/api_v1_hncnc_list",
  async payload => {
    const response = await apiService.api_v1_hncnc_list(payload)
    return response.data
  }
)
export const api_v1_hncnc_create = createAsyncThunk(
  "hncncs/api_v1_hncnc_create",
  async payload => {
    const response = await apiService.api_v1_hncnc_create(payload)
    return response.data
  }
)
export const api_v1_hncnc_retrieve = createAsyncThunk(
  "hncncs/api_v1_hncnc_retrieve",
  async payload => {
    const response = await apiService.api_v1_hncnc_retrieve(payload)
    return response.data
  }
)
export const api_v1_hncnc_update = createAsyncThunk(
  "hncncs/api_v1_hncnc_update",
  async payload => {
    const response = await apiService.api_v1_hncnc_update(payload)
    return response.data
  }
)
export const api_v1_hncnc_partial_update = createAsyncThunk(
  "hncncs/api_v1_hncnc_partial_update",
  async payload => {
    const response = await apiService.api_v1_hncnc_partial_update(payload)
    return response.data
  }
)
export const api_v1_hncnc_destroy = createAsyncThunk(
  "hncncs/api_v1_hncnc_destroy",
  async payload => {
    const response = await apiService.api_v1_hncnc_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const hncncsSlice = createSlice({
  name: "hncncs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_hncnc_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_hncnc_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_hncnc_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_hncnc_list,
  api_v1_hncnc_create,
  api_v1_hncnc_retrieve,
  api_v1_hncnc_update,
  api_v1_hncnc_partial_update,
  api_v1_hncnc_destroy,
  slice: hncncsSlice
}
