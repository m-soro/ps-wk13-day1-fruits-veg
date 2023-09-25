import React from "react";

export default function New() {
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="/pico.min.css" />
      <h1>New Vegetable page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create Vegetable" />
      </form>
    </div>
  );
}
