import { Link } from "react-router-dom";
import backgroundImage from "../../images/support.jpg";
import styles from "./Support.module.scss";

const Home = () => {
  return (
    <>
      <header
        className={styles["bgimg-1"]}
        id='home'
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className='w3-display-left w3-text-white'
          style={{ padding: "48px" }}
        >
          <span className='w3-jumbo w3-hide-small'>Need Resources?</span>
          <br />
          <span className='w3-large'>
            Please feel free to use any of the provided resources if you need someone to talk to!
          </span>
          <p>
            <Link
              to='#about'
              className='w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off'
            >
              Learn more
            </Link>
          </p>
        </div>
      </header>

      <div
        className='w3-container w3-center'
        style={{ padding: "128px 16px" }}
        id='about'
      >
        <h3 className='w3-center'>Resources</h3>
        <div
          className='w3-row-padding'
          style={{ marginTop: "64px" }}
        >
          <div
            className='w3-quarter'
            style={{ marginLeft: "200px" }}
          >
            <i className='fa fa-desktop w3-margin-bottom w3-jumbo w3-center'></i>
            <p className='w3-large'>Live-Chat</p>
            <p>
              Need someone to talk to? Please reach out to our live-text chat where an agent can
              talk to you real-time anytime.
            </p>
          </div>
          <div className='w3-quarter'>
            <i className='fa fa-envelope w3-margin-bottom w3-jumbo'></i>
            <p className='w3-large'>Support</p>
            <p>
              Do you have any questions/comments/concerns that you would like to voice? Please send
              as an email us at <a href='mailto:support@safeversity.com'>support@safeversity.com</a>
            </p>
          </div>
          <div className='w3-quarter'>
            <i className='fa fa-phone w3-margin-bottom w3-jumbo'></i>
            <p className='w3-large'>Phone Number</p>
            <p>
              If you are experiencing an emergency please contact your campus police and/or dial
              911.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
