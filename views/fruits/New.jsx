import React from "react";

export default function New() {
  return (
    <div className="container">
      <link rel="stylesheet" type="text/css" href="/pico.min.css" />
      <h1>New Fruit page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form action="/fruits" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Color: <input type="text" name="color" />
        <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <input type="submit" name="" value="Create Fruit" />
      </form>
    </div>
  );
}
