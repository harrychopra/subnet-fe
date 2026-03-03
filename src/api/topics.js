import { baseUrl, throwResponseNotOKErr } from './base.js';

export async function fetchTopics() {
  const res = await fetch(`${baseUrl}/topics`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { topics } = await res.json();
  return topics;
}
