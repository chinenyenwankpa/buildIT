import styles from "./home.module.css";

import Navbar from "../navbar/Navbar";
import Faq from "../faq/Faq"
import ServiceCarousel from "../serviceCarousel/ServiceCarousel"
// import { useState } from "react"

import cement from "../../assets/img/cement.png";
import wood from "../../assets/img/woodFoundation.png";
import servicesimg1 from "../../assets/img/servicesimg1.png";
import servicesimg2 from "../../assets/img/servicesimg2.png";
import servicesimg3 from "../../assets/img/servicesimg3.png";
import servicesimg4 from "../../assets/img/servicesimg4.png";
import servicesimg5 from "../../assets/img/servicesimg5.png";
import line from "../../assets/img/line.png";
import bigLogo from "../../assets/img/bigLogo.png";

const Home = () => {
  return (
    <div>
      <div>
        <div className={styles.home}>
          <Navbar />
          <img src={wood} alt="" className={styles.wood} />
        </div>
      </div>
      <div className={styles.buildvision}>
        <p>
          Building a vision that
          <span style={{ color: "#0D45B6" }}> extends to society,</span>
          <br />
          standing as a symbol of hope dedicating a <br />
          percentage of
          <span style={{ color: "#0D45B6" }}>profits to support people</span>
          in <br />
          need through impactful social initiatives
        </p>
        <img src={cement} alt="" className={styles.cement} />
      </div>
      <div className={styles.serviceContainer}>
        <div>
          <div className={styles.serviceText}>
            <h5>Our Services</h5>
            <p>
              We pride ourselves on our comprehensive approach to the
              construction industry covering everything from land and property
              sales, through the building process, material sourcing, and both
              pre- and post-construction activities.
            </p>
          </div>
          <ServiceCarousel/>
        </div>
      </div>
      <Faq />
      <div className={styles.buildItContainer}>
        <div className={styles.detailsOverallcontainer}>
          <p>We’re easy to reach and ready to build quality with you</p>
          <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <div>
                <p>Full name</p>
                <img src={line} alt="" className={styles.line} />
              </div>
              <div>
                <p>Email</p>
                <img src={line} alt="" className={styles.line} />
              </div>
            </div>
            <div className={styles.details}>
              <div>
                <p>Phone</p>
                <img src={line} alt="" className={styles.line} />
              </div>
              <div>
                <p>Project type</p>
                <img src={line} alt="" className={styles.line} />
              </div>
            </div>
            <div className={styles.details}>
              <div>
                <p>Location</p>
                <img src={line} alt="" className={styles.line} />
              </div>
              <div>
                <p>When to start</p>
                <img src={line} alt="" className={styles.line} />
              </div>
            </div>
            <div>
              <div>
                <p>About project</p>
                <img src={line} alt="" className={styles.line} />
              </div>
            </div>
          </div>
          <button className={styles.submitButton}>Submit</button>
        </div>
        <div className={styles.contactContainer}>
          <ul className={styles.contactSocials}>
            <li>About</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className={styles.contactNumber}>
            <p>+234 7014409074, +234 9093886643</p>
            <li>nbuildit.com</li>
          </div>
        </div>

        <img src={bigLogo} alt="" className={styles.bigLogo} />
      </div>
    </div>
  );
};

export default Home;
