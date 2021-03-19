import React, { Component } from "react";

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isOlives: false,
      peanuts: false,
      isVegan: false,
      isBerries: false,
      isCitrus: false,
      isGarlic: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value, checked, type } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          <h2 className="fill">Hi! Please fill out the following form:</h2>
          <section className="col-md-6">
            <form>
              <input
                className="myform"
                name="firstName"
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                className="myform"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                className="myform"
                name="age"
                placeholder="Your Age"
                value={this.state.age}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label>
                <input
                  name="gender"
                  type="radio"
                  value="Male"
                  checked={this.state.gender === "Male"}
                  onChange={this.handleChange}
                />
                &nbsp;
                <span>Male</span> &nbsp;
                <input
                  name="gender"
                  type="radio"
                  value="Female"
                  checked={this.state.gender === "Female"}
                  onChange={this.handleChange}
                />
                &nbsp;
                <span>Female</span>
              </label>
              <br />
              <br />
              <select
                className="mylocation"
                name="destination"
                onChange={this.handleChange}
                value={this.state.destination}
              >
                <option value="">--Please select your destination--</option>
                <option value="Finland">Finland</option>
                <option value="Malibu">Malibu</option>
                <option value="Seattle">Seattle</option>
                <option value="Dubai">Dubai</option>
                <option value="Kenya">Kenya</option>
              </select>
              <br />
              <br />
            </form>
          </section>

          <section className="col-md-6">
            <h2 className="mytitles">Any Food Allergies?</h2>
            <label style={{ paddingLeft: "14em" }}>
              <input
                name="isOlives"
                type="checkbox"
                checked={this.state.isOlives}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Olives</span>
              <br />
              <input
                name="peanuts"
                type="checkbox"
                checked={this.state.peanuts}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Peanuts</span>
              <br />
              <input
                name="isVegan"
                type="checkbox"
                checked={this.state.isVegan}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Vegan</span>
              <br />
              <input
                name="isBerries"
                type="checkbox"
                checked={this.state.isBerries}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Berries</span>
              <br />
              <input
                name="isCitrus"
                type="checkbox"
                checked={this.state.isCitrus}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Citrus</span>
              <br />
              <input
                name="isGarlic"
                type="checkbox"
                checked={this.state.isGarlic}
                onChange={this.handleChange}
              />
              &nbsp;
              <span>Garlic</span>
              <br />
            </label>
          </section>
          <button className="mybutton">Submit</button>
        </div>
        <div className="einfo">
          <h4 className="mytitles">
            <b>Entered Information:</b>
          </h4>
          <p>
            <b>Your Names:</b> {this.state.firstName} {this.state.lastName}
          </p>
          <br />
          <p>
            <b>Your Age:</b> {this.state.age} years old
          </p>
          <br />
          <p>
            <b>Your Gender:</b> {this.state.gender}
          </p>
          <br />
          <p>
            <b>Your Destination:</b> {this.state.destination}
          </p>
          <br />

          <h4 className="mytitles">
            <b>Dietary Restrictions:</b>
          </h4>
          <br />
          <p>
            <b>Olives: </b> {this.state.isOlives ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Peanuts: </b> {this.state.peanuts ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Vegan: </b> {this.state.isVegan ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Berries: </b> {this.state.isBerries ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Citrus: </b> {this.state.isCitrus ? "Yes" : "No"}
          </p>
          <br />
          <p>
            <b>Garlic: </b> {this.state.isGarlic ? "Yes" : "No"}
          </p>
          <br />
        </div>
      </main>
    );
  }
}

export default MyForm;
