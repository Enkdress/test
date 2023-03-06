import React from "react";

// Define data
const bikes = [
  {
    id: 1,
    model: "2021",
    brand: "scott",
  },
  {
    id: 2,
    model: "2022",
    brand: "specialized",
  },
  {
    id: 1,
    model: "2023",
    brand: "trek",
  },
];

const Bike = ({ bike }) => (
  <li>
    <span>
      {bike.brand} {bike.model}
    </span>
  </li>
);

export default function Bikes() {
  return (
    <section>
      <h1>Exercise 2.2</h1>
      <ul>
        {bikes.map((bike) => (
          <Bike bike={bike} key={bike.id} />
        ))}
      </ul>
    </section>
  );
}
