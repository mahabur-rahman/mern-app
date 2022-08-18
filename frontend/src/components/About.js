import React from "react";
import { Tabs, Tab } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <section id="aboutUs" className="py-5">
        <div className="container d-flex justify-content-between">
          <form className="row" method="GET">
            <div className="col">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                width="300"
                height="100"
                alt="Profile"
              />
              <h4>mahabur rahman</h4>
              <p>work</p>
              <span>Ranking : 1/10</span>
              <div>
                <button className="btn btn-warning mt-2">Edit Profile</button>
              </div>
              <div className="mt-5">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <br />
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  Youtube
                </a>
              </div>
            </div>
            {/* tabs */}

            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3 mt-4"
            >
              <Tab eventKey="about" title="About">
                <strong>User Id :</strong> 55245520011
                <br />
                <strong>Name : </strong> name
                <br />
                <strong>Email :</strong> a@gmail.com
                <br />
                <strong>Phone : </strong>
                phone <br />
                <strong>Profession : </strong> web dev
              </Tab>
              <Tab eventKey="profile" title="Profile">
                Timeline here
              </Tab>
            </Tabs>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
