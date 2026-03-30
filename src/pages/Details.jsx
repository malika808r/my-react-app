import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { fetchItem } from "../api/api";

export default function Details() {

  const { id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {

    fetchItem(id).then(setItem);

  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (

    <div>

      <h2>{item.title}</h2>

      <p>{item.body}</p>

    </div>

  );

}