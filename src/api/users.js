import { baseUrl } from './base.js';

export async function fetchUsers() {
  const res = await fetch(`${baseUrl}/users`);
  if (!res.ok) await throwResponseNotOKErr(res);

  const { users } = await res.json();
  return users;
}
