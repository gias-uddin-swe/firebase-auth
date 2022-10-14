import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faPhoneVolume,
  faBriefcaseMedical,
  faHospital,
  faClinicMedical,
  faAmbulance,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-main">
        <div className="row ">
          <div className="col-md-6">
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} /> + 8000123456
              <br />
              EMERGENCY CONTACT
            </p>
          </div>
          <div className="col-md-6">
            SUPPORT@IWTHEMES.COM
            <br />
            ONLINE CONSULTATION <FontAwesomeIcon icon={faBriefcaseMedical} />
          </div>
        </div>
        <h5 className="footer-title">
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faSignal} /> onLine Service
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faClinicMedical} /> onLine Service
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faAmbulance} /> onLine Service
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faHospital} /> onLine Service
          </span>
        </h5>
      </div>

      <footer className="main-footer">
        <p>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faSignal} />{" "}
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faClinicMedical} />{" "}
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faAmbulance} />{" "}
          </span>
          <span className="m-2 p-3">
            <FontAwesomeIcon icon={faHospital} />{" "}
          </span>
        </p>
        <p>
          <small>
            © 2017 - IWTHEMES® ENVATOenvato brand. ALL RIGHTS RESERVED. PRIVACY
            POLICY
          </small>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
