import React from "react";
import { FaDesktop, FaHeart, FaCog } from "react-icons/fa";

const About = () => {
  return (
    <div
      className='w3-container w3-center'
      style={{ padding: "128px 16px" }}
      id='about'
    >
      <h3 className='w3-center'>ABOUT OUR PLATFORM</h3>
      <p className='w3-center w3-large'>Key features</p>
      <div
        className='w3-row-padding'
        style={{ marginTop: "64px" }}
      >
        <div
          className='w3-quarter'
          style={{ marginLeft: "200px" }}
        >
          <FaDesktop className='w3-margin-bottom w3-jumbo w3-center' />
          <p className='w3-large'>Report</p>
          <p>
            Report any incidents that take place. Find out more about incidents that have been
            reported on campus. Each post will provide detailed information about the specific
            incident.
          </p>
        </div>
        <div className='w3-quarter'>
          <FaHeart className='w3-margin-bottom w3-jumbo' />
          <p className='w3-large'>Support</p>
          <p>
            You are not alone in this. Receive support for any incidents you have experienced or
            witnessed. These services can provide emotional support, guidance, and resources to help
            you cope with the incident and any related trauma.
          </p>
        </div>

        <div className='w3-quarter'>
          <FaCog className='w3-margin-bottom w3-jumbo' />
          <p className='w3-large'>Protect your privacy</p>
          <p>
            The information you provide will remain confidential and your privacy will be protected.
            Anonymity is offered as well as to those who are reporting incidents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
