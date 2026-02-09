const BASE_URL ="https://6988be1a780e8375a6890f03.mockapi.io/users";


export const createUser = async (data) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};


export const getUsers = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};


export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};


export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};


export const updateUser = async (id, data) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};