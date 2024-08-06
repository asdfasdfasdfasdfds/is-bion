import { Link } from "react-router-dom";
import React from "react";
import "../assets/styles/components/Button.css"

function Button({ button, hoverDark, href, handleClick }) {
  const linkHref = `${href}`;
  if (href) {
    return (
      <div className="button-box">
        {href ? (
          <Link className={hoverDark} to={linkHref}>
            {button}
          </Link>
        ) : (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            // eslint-disable-next-line no-script-url
            href="javascript:void(0)"
            onClick={handleClick}
            className={hoverDark}
          >
            {button}
          </a>
        )}
      </div>
    );
  } else {
    return (
      <div className="button-box">
        <a className={hoverDark}>{button}</a>
      </div>
    );
  }
}

export default Button;
