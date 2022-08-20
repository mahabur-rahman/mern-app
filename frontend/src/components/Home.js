import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("/getData");
      setUserName(res.data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="my-5 py-5 text-center">
        <h1 className="text-uppercase mt-5 pt-5">Welcome to home page</h1>
        <h1>{userName}</h1>
        <h4 className="w-50 mx-auto">
          {show ? "Happy to see you back" : "We are the mern developer"}
        </h4>
      </div>
    </>
  );
};

export default Home;
