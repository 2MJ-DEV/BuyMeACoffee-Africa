const DEFAULT_API_BASE_URL = "http://localhost:4000";

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL;
const sanitizedBaseUrl = rawBaseUrl.endsWith("/") ? rawBaseUrl.slice(0, -1) : rawBaseUrl;

export const API_BASE_URL = sanitizedBaseUrl;

const buildUrl = (path) => {
  if (!path) {
    return API_BASE_URL;
  }
  return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export async function apiRequest(path, options = {}) {
  const response = await fetch(buildUrl(path), {
    credentials: "include",
    ...options,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const isJson = contentType.includes("application/json");

  let payload;
  try {
    payload = isJson ? await response.json() : await response.text();
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    const message =
      typeof payload === "object" && payload !== null && "message" in payload
        ? payload.message
        : `Request failed with status ${response.status}`;

    const enhancedError = new Error(message);
    enhancedError.status = response.status;
    enhancedError.data = payload;
    throw enhancedError;
  }

  return payload;
}

export async function apiPost(path, body, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers ?? {}),
  };

  return apiRequest(path, {
    method: "POST",
    ...options,
    headers,
    body: JSON.stringify(body ?? {}),
  });
}
