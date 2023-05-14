import { useState } from "react";
import "./App.css";
import "../src/assets/search.png";
import "../src/assets/icon1.svg";

function App() {
  return (
    <div className="main">
      <nav>
        <ul className="lnav">
          <li>
            <h1 id="logo">EDYODA</h1>
          </li>
          <li>
            <select name="courses" id="course">
              <option defaultValue="courses" hidden>
                Courses
              </option>
              <option value="web">Web Development</option>
              <option value="fe">Front End</option>
              <option value="node">Node Js</option>
            </select>
          </li>
          <li>
            <select name="programs" id="programs">
              <option defaultValue="programs" hidden>
                Programs
              </option>
              <option value="web">Web Development</option>
              <option value="fe">Front End</option>
              <option value="node">Node Js</option>
            </select>
          </li>
        </ul>
        <ul className="rnav">
          <li>
            <img src="../src/assets/search.png" alt="" />
          </li>
          <button className="btnlogin">Log in</button>
          <button className="btnjoin">JOIN NOW</button>
        </ul>
      </nav>
      <div className="content">
        <div className="ldiv">
          <div className="ldiv-content">
            <div className="ldiv-heading">
              Access curated courses worth <span className="rupee">₹ </span>
              <span className="striketxt">
                <span style={{ color: "#ffffff", marginRight: "2%" }}>
                  18,500
                </span>
              </span>
              at just <span className="colortxt">₹ 99</span> per year!
            </div>
            <div className="ldiv-subcontent">
              <img src="../src/assets/icon1.svg" alt="" />
              <div className="txtcontent" style={{ width: "80%" }}>
                <span className="txtclr">100+ </span> Job relevant courses
              </div>
            </div>
            <div className="ldiv-subcontent">
              <img src="../src/assets/icon2.svg" alt="" />
              <div className="txtcontent" style={{ width: "80%" }}>
                <span className="txtclr">20,000+</span> Hours of content
              </div>
            </div>
            <div className="ldiv-subcontent">
              <img src="../src/assets/icon3.svg" alt="" />
              <div className="txtcontent" style={{ width: "80%" }}>
                <span className="txtclr">Exclusive</span> webinar access
              </div>
            </div>
            <div className="ldiv-subcontent">
              <img src="../src/assets/icon4.svg" alt="" />
              <div className="txtcontent" style={{ width: "80%" }}>
                Scholarship worth <span className="txtclr"> ₹94,500</span>
              </div>
            </div>
            <div className="ldiv-subcontent">
              <img src="../src/assets/icon5.svg" alt="" />
              <div className="txtcontent" style={{ width: "80%" }}>
                <span className="txtclr">Ad Free</span> learning experience
              </div>
            </div>
          </div>
        </div>
        <div className="rdiv">
          <div className="topcircle">
            <div className="circle">
              <img
                className="imgcircle"
                src="../src/assets/signup1.svg"
                alt=""
              />
              <span>Sign Up</span>
            </div>
            <div className="circle">
              <img
                className="imgcircle"
                src="../src/assets/subscribe.svg"
                alt=""
              />
              <span>Subscribe</span>
            </div>
          </div>
          <h2>Select your subcription plan</h2>
          <div className="subplans">
            <div
              className="subscriptionplan"
              style={{ color: "#BEBEBE", backgroundColor: "#E7E7E7",marginTop:'0px' }}
            >
              <div className="first">
                <input
                  type="radio"
                  disabled
                  defaultChecked
                  style={{ marginRight: "14px", marginLeft: "18px" }}
                />
                <div className="floattxt">
                  <p>Offer expired</p>
                </div>
                <h3>12 Months Subscription</h3>
              </div>
              <div className="second">
                <p>
                  Total
                  <span style={{ fontSize: "16px", marginLeft: "8px" }}>
                    ₹99
                  </span>
                </p>
                <p>
                  ₹8
                  <span
                    style={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: "#BEBEBE",
                    }}
                  >
                    /mo
                  </span>
                </p>
              </div>
            </div>
            <div
              className="subscriptionplan"
              style={{
                backgroundColor: "#D7EDDD",
                border: "2px solid #47BA68",
              }}
            >
              <div className="first">
                <input
                  className="checkbox"
                  type="checkbox"
                  defaultChecked
                  style={{ marginRight: "14px", marginLeft: "18px" }}
                />
                <span></span>
                <div className="floattxt">
                  <p style={{ backgroundColor: "#47BA68" }}>Recommended</p>
                </div>
                <h3>12 Months Subscription</h3>
              </div>
              <div className="second">
                <p>
                  Total
                  <span style={{ fontSize: "16px", marginLeft: "8px" }}>
                    ₹179
                  </span>
                </p>
                <p>
                  ₹15
                  <span
                    style={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: "#BEBEBE",
                    }}
                  >
                    /mo
                  </span>
                </p>
              </div>
            </div>
            <div className="subscriptionplan">
              <div className="first">
                <input
                  className="checkbox"
                  type="checkbox"
                  style={{ marginRight: "14px", marginLeft: "18px" }}
                />
                <span></span>
                <h3>6 Months Subscription</h3>
              </div>
              <div className="second">
                <p>
                  Total
                  <span style={{ fontSize: "16px", marginLeft: "8px" }}>
                    ₹149
                  </span>
                </p>
                <p>
                  ₹25
                  <span
                    style={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: "#BEBEBE",
                    }}
                  >
                    /mo
                  </span>
                </p>
              </div>
            </div>
            <div className="subscriptionplan">
              <div className="first">
                <input
                  className="checkbox"
                  type="checkbox"
                  style={{ marginRight: "14px", marginLeft: "18px" }}
                />
                <span></span>
                <h3>3 Months Subscription</h3>
              </div>
              <div className="second">
                <p>
                  Total
                  <span style={{ fontSize: "16px", marginLeft: "8px" }}>
                    ₹99
                  </span>
                </p>
                <p>
                  ₹33
                  <span
                    style={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: "#BEBEBE",
                    }}
                  >
                    /mo
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="subfee">
            <div className="subfeecontent">
              <p>Subscription Fee</p>
              <p style={{ fontWeight: "600", fontSize: "16px" }}>₹18,500</p>
            </div>
            <div className="limited">
              <div className="limitedleft">
                <p style={{ fontWeight: "600", fontSize: "16px" }}>
                  Limited time offer
                </p>
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "10px" }}
                >
                  <img
                    style={{ width: "20", height: "20px" }}
                    src="../src/assets/limited.svg"
                    alt=""
                  />
                  <p>Offer valid till March 2023</p>
                </div>
              </div>
              <div className="limitedright">
                <p style={{ fontWeight: "600", fontSize: "16px" }}>-₹18,401</p>
              </div>
            </div>
            <div className="subfeecontent">
              <p>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>
                  Total
                </span>
                (Incl. of 18% GST)
              </p>
              <p style={{ fontWeight: "700", fontSize: "24px" }}>₹149</p>
            </div>
          </div>
          <div className="btn">
            <button className="btncancel">CANCEL</button>
            <button className="btnproceed">PROCEED TO PAY</button>
          </div>
          <div className="razor">
            <img src="../src/assets/razor.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
