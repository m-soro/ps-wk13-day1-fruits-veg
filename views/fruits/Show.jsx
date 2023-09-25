import React from "react";
const DefaultLayout = require("../layouts/Default");

export default function Show({ fruit }) {
  return (
    <DefaultLayout title={"Fruits Show Page"}>
      <div>
        <h1> Show Page </h1>
        The {fruit.name} is {fruit.color}
        {fruit.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
        <br />
        <a href="/fruits">Go Back</a>
      </div>
    </DefaultLayout>
  );
}
