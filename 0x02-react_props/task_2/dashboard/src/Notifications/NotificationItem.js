import React from "react";

export default function NotificationItem({ type, html, value }) {
  console.log(html);
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
