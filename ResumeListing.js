//This file is would be added in src/pages
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ResumeListing = (id) => {
  const [resumedata, setresumeData] = useState([]);
  const navigate = useNavigate();
  const LoadDetails = (id) => {
    navigate(`/resumeProfile/details/${id}`);
  };

  const LoadEdit = (id) => {
    navigate(`/resumeProfile/edit/${id}`);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?"));
    fetch(`http://localhost:3030/resumeProfile/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        alert("Remove sucessfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetch("http://localhost:3030/resumeProfile")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setresumeData(resp);
        //console.log("resp", resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>ResumeListing</h2>
          <div className="card-body">
            <div>
              <Link to="/resumeProfile/create" className="btn btn-success">
                CreateNewResume
              </Link>
            </div>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {console.log("resumedata", resumedata)}
              {resumedata &&
                resumedata.map((items, id) => (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.firstname}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td>
                      <Link
                        to={`/resumeProfile/edit/${id}`}
                        onClick={() => LoadEdit(items.id)}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/"
                        onClick={() => Removefunction(items.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </Link>
                      <Link
                        to={`/resumeProfile/Deatils/${id}`}
                        onClick={() => LoadDetails(items.id)}
                        className="btn btn-primary"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResumeListing;
