import React, { Component } from "react";
import classes from "../styles/index.css";

class Price extends React.Component {
  render() {
    return (
      <main className={classes.main}>
        <section className={classes.header}>
          <p className={classes.title}>100k PAGEVIEWS</p>
          <p className={classes.cost}>
            $16.00 <span className={classes["cost-month"]}>/ month</span>
          </p>
        </section>
        <section className={classes["slider-section"]}>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            <span>sldier</span>
          </label>
          <input type="range" />
        </section>
        <footer>
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownershiop</li>
            <li>Email reports</li>
          </ul>
          <button>Start my trail</button>
        </footer>
      </main>
    );
  }
}

export default Price;
