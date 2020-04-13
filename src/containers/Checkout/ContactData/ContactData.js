import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: "",
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={classes.Input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className={classes.Input}
          />
          <input
            type="text"
            name="street"
            placeholder="Your street"
            className={classes.Input}
          />
          <input
            type="text"
            name="postcode"
            placeholder="Your postcode"
            className={classes.Input}
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
