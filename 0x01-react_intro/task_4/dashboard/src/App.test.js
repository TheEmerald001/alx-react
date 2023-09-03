import { shallow } from "enzyme";
import App from "./App";

describe("Test App.js", () => {
  it("App renders without crashing", (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it("div with the class App-header exists", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className="App-header" />));
    done();
  });

  it("div with the class App-body exists", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className="App-body" />));
    done();
  });

  it("div with the class App-footer exists", (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className="App-footer" />));
    done();
  });
});
