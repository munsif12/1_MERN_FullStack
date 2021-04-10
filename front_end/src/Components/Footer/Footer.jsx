import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="folloeMeLogos">
        <div className="githubLogo">
          <a
            href="https://github.com/munsif12"
            style={{ color: "white" }}
            className="logo__footer"
          >
            <FacebookIcon />
          </a>
        </div>
        <div className="linkedInLogo">
          <a
            href="https://www.linkedin.com/in/munsif-ali-misri-8191261a8/"
            style={{ color: "white" }}
            className="logo__footer"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="twitterLogo">
          <a
            href="https://twitter.com/munsif_misri"
            style={{ color: "white" }}
            className="logo__footer"
          >
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="copyRight">
        <p>&copy; Munsif Ali Misri {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
