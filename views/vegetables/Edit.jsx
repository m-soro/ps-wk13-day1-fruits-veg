import React from "react";
// As you can see we are using the app layout
const DefaultLayout = require("../layouts/Default.jsx");

export default function Edit({ vegetable }) {
  return (
    <DefaultLayout title="Vegetable Edit Page">
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
      {/* form is not complete we will do that below*/}
      <form action={`/vegetables/${vegetable._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={vegetable.name} />
        <br />
        Color: <input type="text" name="color" defaultValue={vegetable.color} />
        <br />
        Is Ready To Eat:
        {vegetable.readyToEat ? (
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
