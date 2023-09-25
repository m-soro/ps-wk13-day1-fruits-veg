import React from "react";
const DefaultLayout = require("../layouts/Default");

export default function Index({ fruits }) {
  return (
    <DefaultLayout title={"Fruits Index Page"}>
      <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      <br />
      {fruits.map((fruit, i) => {
        return (
          <li key={i}>
            <a href={`/fruits/${fruit.id}`}>{fruit.name} </a>
            is {fruit.color} and
            {fruit.readyToEat ? (
              <span> It is ready to eat</span>
            ) : (
              <span> It is not ready to eat </span>
            )}{" "}
            <br />
            {/* FOR FORM TO ACTUALLY DELETE WE HAVE TO USE METHOD OVERRIDE */}
            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
              <input type="submit" value="DELETE" />
            </form>
            <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
          </li>
        );
      })}
    </DefaultLayout>
  );
}
