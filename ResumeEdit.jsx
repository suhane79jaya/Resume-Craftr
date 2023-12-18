import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { useParams, Link, useNavigate } from "react-router-dom";
const ResumeEdit = () => {
  const { resid } = useParams().id;
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const resumedata = {
      id,
      firstname,
      lastname,
      website,
      email,
      phone,
      githb,
      location,
      summ,
    };
    fetch(`http://localhost:3030/resumeProfile/${resid}`, {
      method: "PUT",
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
  useEffect(() => {
    fetch(`http://localhost:3030/resumeProfile/${resid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //setResdata(resp);
        setId(resp.id);
        setFirstname(resp.firstname);
        setemail(resp.email);
        setgithb(resp.githb);
        setlastname(resp.lastname);
        setlocation(resp.location);
        setphone(resp.phone);
        setwebsite(resp.website);

        console.log("detailsresp", resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default ResumeEdit;
