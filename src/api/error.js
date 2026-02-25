export async function throwResponseNotOKErr(res) {
  let message = `${res.status}: Failed request: ${res.url}`;
  if (res.headers.get('Content-Type').includes('application/json')) {
    message += await res.json();
  }
  throw new Error(message);
}
