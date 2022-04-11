import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`, {
    method: "GET",
  });
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(
    ["planets", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );

  return (
    <>
      <div>Planets</div>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <>
          <button onClick={() => setPage((old) => Math.max(old - 1, 1))}>
            Previous
          </button>
          {page}
          <button
            onClick={() =>
              setPage((old) => (!data || !data.next ? old : old + 1))
            }
          >
            Next
          </button>
          <div>
            {data.results.map((item) => {
              return <Planet key={item.name} planet={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Planets;
