import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Testing the <Login /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("<Login /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });

  it("<Login /> renders input fields and labels", () => {
    expect(wrapper.find("input")).to.have.lengthOf(2);
    expect(wrapper.find("label")).to.have.lengthOf(2);
  });
});
