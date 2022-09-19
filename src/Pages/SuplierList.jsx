import React, { useState, useEffect } from "react";

function SuplierList() {
  const [Contents, fetchUsers] = useState([]);

  const getData = () => {
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => res.json())
      .then((res) => {
        fetchUsers(res);
      });
  };
  const deleteData = (id) => {
    fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
      method: "DELETE",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Contact Name</th>
            <th scope="col">Contact Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Contents.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.companyName}</td>
              <td>{data.contactName}</td>
              <td>{data.contactTitle}</td>
              <td
                onClick={() => deleteData(data.id)}
                style={{ cursor: "pointer", color: "tomato" }}
              >
                Delete
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SuplierList;
