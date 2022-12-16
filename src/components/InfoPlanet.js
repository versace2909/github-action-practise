import React, { useState } from "react";
import { useQuery } from "react-query";

const fetchPlanets = async (page) => {
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`, {
    method: "GET",
  });
  return res.json();
};

const InfoPlanet = React.memo(() => {
  const [page, setPage] = useState(1);
  const { data, status, isLoading, isFetched } = useQuery(
    ["planets-1", page],
    () => fetchPlanets(page),
    {
      keepPreviousData: true,
    }
  );
  return <>{isFetched ? <p>Total Planet: {data.count}</p> : null}</>;
});

export default InfoPlanet;
