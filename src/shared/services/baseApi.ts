/* eslint-disable @typescript-eslint/no-explicit-any */
const domain = import.meta.env.VITE_DOMAIN

const headers = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
})

export interface RequestParams {
  [key: string]: string | number | boolean
}

export interface RequestBody {
  [key: string]: any
}

function getUrl(path: string, params?: RequestParams) {
  let url = `${domain}${path}`
  if (params) {
    url += '?'
    Object.entries(params).forEach(([key, value]) => {
      url += `${key}=${value.toString()}&`
    })
  }
  return url
}

export async function apiGet<T = any>(path: string, params?: RequestParams) {
  const url = getUrl(path, params)
  const res = await fetch(url, {
    method: 'GET',
    headers,
  })
  return res.json() as Promise<T>
}

export async function apiPost<T = any>(
  path: string,
  body?: RequestBody,
  params?: RequestParams
) {
  const url = getUrl(path, params)
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return res.json() as Promise<T>
}

export async function apiPut<T = any>(
  path: string,
  body?: RequestBody,
  params?: RequestParams
) {
  const url = getUrl(path, params)
  const res = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  })
  return res.json() as Promise<T>
}

export async function apiDelete<T = any>(path: string, params?: RequestParams) {
  const url = getUrl(path, params)
  const res = await fetch(url, {
    method: 'DELETE',
    headers,
  })
  return res.json() as Promise<T>
}
