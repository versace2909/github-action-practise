import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/", {
    mode: "cors",
  });
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <>
      <div>People</div>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading data...</div>}
      {status === "success" && (
        <div>
          {data.results.map((item) => {
            return <Person key={item.name} person={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default People;
