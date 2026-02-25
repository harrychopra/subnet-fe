export const baseUrl = 'https://subnet-be.onrender.com/api';
// export const baseUrl = 'http://localhost:9090/api';

export async function throwResponseNotOKErr(res) {
  let message = `${res.status}: Failed request: ${res.url}`;
  if (res.headers.get('Content-Type').includes('application/json')) {
    message += await res.text();
  }
  throw new Error(message);
}
