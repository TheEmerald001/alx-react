import React from "react";
import PropTypes from "prop-types";
export default function NotificationItem({ type, html, value }) {
  return (
    <>
      {html ? (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : (
        <li data-notification-type={type}>{value}</li>
      )}
    </>
  );
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
