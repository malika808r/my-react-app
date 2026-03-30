export const fetchItems = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) throw new Error("Error fetching data");

  return res.json();

};

export const fetchItem = async (id) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) throw new Error("Error fetching item");

  return res.json();

};