//This file is would be added in src/pages
import { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";

const ResumeCreate = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [website, setwebsite] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [githb, setgithb] = useState("");
  const [location, setlocation] = useState("");
  const [summ, setsumm] = useState("");
  // const [usdate, setusdate] = useState(""); //university education start date
  // const [uenddate, setuenddate] = useState(""); //university education end date
  // const [uinsname, setuinsname] = useState(""); //university institute name
  // const [ucity, setucity] = useState(""); ////university institute city
  // const [ucountry, setucountry] = useState(""); //university institute country

  // const [collsdate, setcollsdate] = useState(""); //college education start date
  // const [collenddate, setcollenddate] = useState(""); //college education end date
  // const [collinsname, setcollinsname] = useState(""); //college institute name
  // const [collcity, setcollcity] = useState(""); ////college institute city
  // const [collcountry, setcollcountry] = useState(""); //college institute

  // const [scsdate, setscsdate] = useState(""); //school education start date
  // const [scenddate, setscenddate] = useState(""); //school education end date
  // const [scinsname, setscinsname] = useState(""); //school institute name
  // const [sccity, setsccity] = useState(""); ////school city
  // const [sccountry, setsccountry] = useState(""); //school country

  // const [proEsdate, setproEsdate] = useState(""); //professional Experience start date
  // const [proEenddate, setproEenddate] = useState(""); //professional Experience end date
  // const [proEposition, setproEposition] = useState(""); //professional position name
  // const [proEcity, setproEcity] = useState(""); ////professional Experience city
  // const [proEcountry, setproEcountry] = useState(""); //professional Experience country
  // const [proEcomname, setproEcomname] = useState("");

  // const [proJtitle, setproJtitle] = useState(""); //project title
  // const [proJdes, setproJdes] = useState(""); //project description
  // const [proJtech, setproJtech] = useState([]); //used techonolies in project
  // const [proJurl, setproJurl] = useState("");
  // const [proJsdate, setproJsdate] = useState("");
  // const [proJenddate, setproJenddate] = useState("");

  // const [proJskill, setproJskill] = useState([]); //Skills set
  const handleSubmit = (e) => {
    e.preventDefault();

    const resumedata = {
      firstname,
      lastname,
      website,
      email,
      phone,
      githb,
      location,
      summ,
    };
    fetch("http://localhost:3030/resumeProfile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(resumedata),
    })
      .then((res) => {
        alert("saved sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card">
              <div className="card-title">
                <h2>Resume Create</h2>
              </div>
              <form className="container" onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                      <div className="form-group">
                        <label>ID</label>
                        <input
                          value={id}
                          onChange={(e) => setId(e.target.value)}
                          disabled="disabled"
                          type="number"
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                      <div className="form-group">
                        <label>PROFILE</label>

                        <Container className="col-lg-12">
                          <Row>
                            <Col sm={6}>FirstName</Col>{" "}
                            <input
                              required
                              value={firstname}
                              onChange={(e) => setFirstname(e.target.value)}
                              type="text"
                              className="form-control"
                            ></input>
                            <hr />
                            <Col sm={6}>LastName</Col>{" "}
                            <input
                              value={lastname}
                              onChange={(e) => setlastname(e.target.value)}
                              type="text"
                              className="form-control"
                            ></input>
                          </Row>
                        </Container>

                        <div className="form-group">
                          <label>PhoneNo</label>
                          <input
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Github Link</label>
                          <input
                            value={githb}
                            onChange={(e) => setgithb(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Website</label>
                          <input
                            value={website}
                            onChange={(e) => setwebsite(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input
                            value={location}
                            onChange={(e) => setlocation(e.target.value)}
                            className="form-control"
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12" style={{ textAlign: "left" }}>
                      <div className="form-group">
                        <label>About</label>
                        <textarea
                          value={summ}
                          onChange={(e) => setsumm(e.target.value)}
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <button type="submit" className="btn btn-success">
                          Save
                        </button>
                        <Link to="/" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreate;
