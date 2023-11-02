import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Testing the <Notifications /> Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it("<Notifications /> is rendered without crashing", () => {
    expect(wrapper).to.not.be.an("undefined");
  });
  it("renders correct list items", () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    expect(wrapper.find("ul").children()).to.have.lengthOf(
      listNotifications.length
    );
    wrapper.find("ul").forEach((node) => {
      expect(node.equals(<NotificationItem />));
    });
    expect(wrapper.find("ul").childAt(0).html()).equal(
      '<li data-notification-type="default">New course available</li>'
    );
    expect(wrapper.find("ul").childAt(1).html()).equal(
      '<li data-notification-type="urgent">New resume available</li>'
    );
    expect(wrapper.find("ul").childAt(2).html()).equal(
      `<li data-notification-type="urgent">${getLatestNotification()}</li>`
    );
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(
      true
    );
  });
});
