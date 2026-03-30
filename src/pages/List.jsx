
import { useEffect, useState } from "react";

import { fetchItems } from "../api/api";

import { Link } from "react-router-dom";

export default function List() {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetchItems()

      .then(setData)

      .catch(() => setError("Error loading data"))

      .finally(() => setLoading(false));

  }, []);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (

    <div>

      <h2>List</h2>

      {data.slice(0, 10).map(item => (

        <div key={item.id}>

          <Link to={`/details/${item.id}`}>

            {item.title}

          </Link>

        </div>

      ))}

    </div>

  );

}