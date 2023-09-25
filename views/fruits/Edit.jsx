import React from "react";
// As you can see we are using the app layout
const DefaultLayout = require("../layouts/Default.jsx");

export default function Edit({ fruit }) {
  return (
    <DefaultLayout title="Fruits Edit Page">
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
      {/* form is not complete we will do that below*/}
      <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={fruit.name} />
        <br />
        Color: <input type="text" name="color" defaultValue={fruit.color} />
        <br />
        Is Ready To Eat:
        {fruit.readyToEat ? (
          <input type="checkbox" name="readyToEat" defaultChecked />
        ) : (
          <input type="checkbox" name="readyToEat" />
        )}
        <br />
        <input type="submit" value="Submit Changes" />
      </form>
    </DefaultLayout>
  );
}
