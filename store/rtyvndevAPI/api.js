import axios from "axios"
const rtyvndevAPI = axios.create({
  baseURL: "https://rtyvn-dev-98178.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return rtyvndevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_hncnc_list(payload) {
  return rtyvndevAPI.get(`/api/v1/hncnc/`)
}
function api_v1_hncnc_create(payload) {
  return rtyvndevAPI.post(`/api/v1/hncnc/`, payload.data)
}
function api_v1_hncnc_retrieve(payload) {
  return rtyvndevAPI.get(`/api/v1/hncnc/${payload.id}/`)
}
function api_v1_hncnc_update(payload) {
  return rtyvndevAPI.put(`/api/v1/hncnc/${payload.id}/`, payload.data)
}
function api_v1_hncnc_partial_update(payload) {
  return rtyvndevAPI.patch(`/api/v1/hncnc/${payload.id}/`, payload.data)
}
function api_v1_hncnc_destroy(payload) {
  return rtyvndevAPI.delete(`/api/v1/hncnc/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return rtyvndevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_sdft_list(payload) {
  return rtyvndevAPI.get(`/api/v1/sdft/`)
}
function api_v1_sdft_create(payload) {
  return rtyvndevAPI.post(`/api/v1/sdft/`, payload.data)
}
function api_v1_sdft_retrieve(payload) {
  return rtyvndevAPI.get(`/api/v1/sdft/${payload.id}/`)
}
function api_v1_sdft_update(payload) {
  return rtyvndevAPI.put(`/api/v1/sdft/${payload.id}/`, payload.data)
}
function api_v1_sdft_partial_update(payload) {
  return rtyvndevAPI.patch(`/api/v1/sdft/${payload.id}/`, payload.data)
}
function api_v1_sdft_destroy(payload) {
  return rtyvndevAPI.delete(`/api/v1/sdft/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return rtyvndevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return rtyvndevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return rtyvndevAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return rtyvndevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return rtyvndevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return rtyvndevAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_hncnc_list,
  api_v1_hncnc_create,
  api_v1_hncnc_retrieve,
  api_v1_hncnc_update,
  api_v1_hncnc_partial_update,
  api_v1_hncnc_destroy,
  api_v1_login_create,
  api_v1_sdft_list,
  api_v1_sdft_create,
  api_v1_sdft_retrieve,
  api_v1_sdft_update,
  api_v1_sdft_partial_update,
  api_v1_sdft_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
