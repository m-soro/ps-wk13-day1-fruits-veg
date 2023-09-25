import React from "react";
const DefaultLayout = require("../layouts/Default");

export default function Index({ vegetables }) {
  return (
    <DefaultLayout title={"Vegetables Index Page"}>
      <nav>
        <a href="/vegetables/new">Create a New Vegetable</a>
      </nav>
      <br />
      {vegetables.map((vegetable, i) => {
        return (
          <li key={i}>
            <a href={`/vegetables/${vegetable.id}`}>{vegetable.name} </a>
            is {vegetable.color} and
            {vegetable.readyToEat ? (
              <span> It is ready to eat</span>
            ) : (
              <span> It is not ready to eat </span>
            )}{" "}
            <br />
            {/* FOR FORM TO ACTUALLY DELETE WE HAVE TO USE METHOD OVERRIDE */}
            <form
              action={`/vegetables/${vegetable._id}?_method=DELETE`}
              method="POST"
            >
              <input type="submit" value="DELETE" />
            </form>
            <a href={`/vegetables/${vegetable._id}/edit`}>
              Edit This Vegetable
            </a>
          </li>
        );
      })}
    </DefaultLayout>
  );
}
