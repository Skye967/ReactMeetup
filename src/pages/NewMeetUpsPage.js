import { useHistory } from "react-router-dom";
import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetUpsPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://firstreact-9b1cc-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.replace("/"));
  }

  return (
    <section>
      <h1>Add New Meet Ups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUpsPage;
