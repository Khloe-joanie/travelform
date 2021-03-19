import React, { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <div className="myfooter">
        <p className="foot">
          © 2021. All Rights reserved | Design by{" "}
          <span
            style={{
              fontFamily: "Romantica Regular",
              fontSize: "33px",
              color: "#f19e0c",
            }}
          >
            Joan Mumbi
          </span>
        </p>
      </div>
    );
  }
}

export default MyFooter;