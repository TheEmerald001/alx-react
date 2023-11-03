import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Testing the <Header /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("<Header /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });

  it("<Header /> renders an image and h1", () => {
    expect(wrapper.find("img")).to.have.lengthOf(1);    
    expect(wrapper.find("h1")).to.have.lengthOf(1);
  });
});
