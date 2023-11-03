import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "enzyme";
class NotificationItem extends Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <>
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        )}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;
