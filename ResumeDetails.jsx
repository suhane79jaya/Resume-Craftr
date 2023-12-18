import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ResumeDetails = (id) => {
  const { resid } = useParams();

  const [resdata, setResdata] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3030/resumeProfile/${resid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        //setResdata(resp);
        console.log("detailsresp", resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [resid]);
  return (
    <div className="card" style={{ textAlign: "left" }}>
      <div className="card-title">
        <h2>Resume Create</h2>
      </div>
      <div className="card-body">
        {resdata && (
          <div>
            <h2>
              The profile Name is:<b>{resdata.firstname}</b>({resdata.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is:{resdata.email}</h5>
            <h5>Phone is:{resdata.phone}</h5>
            <Link to="/" className="btn btn-danger">
              BackTo Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeDetails;
