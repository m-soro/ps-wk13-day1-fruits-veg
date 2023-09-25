import React from "react";
const DefaultLayout = require("../layouts/Default");

export default function Show({ vegetable }) {
  return (
    <DefaultLayout title={"Vegetables Show Page"}>
      <div>
        <h1> Show Page </h1>
        The {vegetable.name} is {vegetable.color}
        {vegetable.readyToEat
          ? "Its is ready to eat"
          : "It is not ready to eat... Cant touch this"}
        <br />
        <a href="/vegetables">Go Back</a>
      </div>
    </DefaultLayout>
  );
}
