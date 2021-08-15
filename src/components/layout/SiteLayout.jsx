import React, { Component } from "react";
import classes from "./SiteLayout.module.scss";

export default class SiteLayout extends Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.siteLayout}>hello</div>
      </div>
    );
  }
}
