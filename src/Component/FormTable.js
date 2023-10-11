import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FormTable=()=> {
  
    const [data, setdata] = useState([]);
    const [test, setTest] = useState([]);
  
    const deleteStudent= async (id) =>{
        const res = await axios.delete("http://localhost:8080/api/v1/Students",id);
        setTest((sagar)=>{
          return sagar.filter((arrElem,index)=>{
            return index !== id;
          });
        });
      //const sample = await res.json();
      console.log(res);
    }

    // const deleteItems=(id)=>{
  
    //   console.log("deleted");
    //   setTest((sagar)=>{
    //     return sagar.filter((arrElem,index)=>{
    //       return index !== id;
    //     });
    //   });


    const getCovidData = async () => {
      // const res = await fetch("http://localhost:8080/api/v1/Students");
      // const actualdata = await res.json();
      // setdata(actualdata);
      // console.log(actualdata);
  
      const res = await axios.get(`http://localhost:8080/api/v1/Students`);
      //const sample = await res.json();
      console.log(res);
      
     
      if (res.status === 200) {
     
        <div class="alert alert-success" role="alert">
          {alert("Data Fetch Sucessfully")}
        </div>;
      } else {
        alert("Something Wents Wrong");
      }
  
      setTest(res.data);
    };
  
    useEffect(() => {
      
      getCovidData();
    }, []);
  
    return (
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 ">Student Data</h1>
          <div className="table-responsive">
            {/* <table class="table-dark">...</table> */}
            <table className="table table-dark table-hover">
              <thead className="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>FName</th>
                  <th>LName</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {test.map((curr) => {
                  return (
                    <tr>
                      <td>{curr.id}</td>
                      <td>{curr.first_name}</td>
                      <td>{curr.last_name}</td>
                      <td>{curr.email_Id}</td>
                      <td>{curr.mobile_no}</td>
                      <td>{curr.course}</td>
                      <td>
                                            {/* <button onClick={ () => this.editEmployee(student.id)} className="btn btn-info">Update </button> */}
                                            <button style={{marginLeft: "10px"}} onClick={deleteStudent(curr.id)} className="btn btn-danger">Delete </button>
                                            {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(student.id)} className="btn btn-info">View </button> */}
                                        </td>
                    </tr>
                  );
                })}
  
                {/* {data.map((curr) => {
                  return (
                    <tr>
                      <td>{curr.id}</td>
                      <td>{curr.first_name}</td>
                      <td>{curr.last_name}</td>
                      <td>{curr.email_Id}</td>
                      <td>{curr.mobile_no}</td>
                      <td>{curr.course}</td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  
};

export default FormTable
