import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
  const name = "BSc (H) Software Systems Practice ";
const modules = [
  {
    name: "Web App Development",
    noLectures: 3,
    noPracticals: 3
  },
  {
    name: "Agile Software Practice",
    noLectures: 3,
    noPracticals: 3
  },
  {
    name: "Enterprise Systems Arch",
    noLectures: 2,
    noPracticals: 3
  },
  {
    name: "Business Analytics",
    noLectures: 2,
    noPracticals: 3
  }
];
  return (
    <div>
     <h1>{name} - Modules table</h1>
     <table className="table table-bordered">
       <thead>
       <tr>
         <th>Name</th>
         <th>No lectures </th>
         <th>No practicals</th>
       </tr>
       </thead>
       <tbody>
       <tr>
       <td>{modules[0].name}</td>
       <td>{modules[0].noLectures}</td>
       <td>{modules[0].noPracticals}</td>
       </tr>
       <tr>
       <td>{modules[1].name}</td>
       <td>{modules[1].noLectures}</td>
       <td>{modules[1].noPracticals}</td>
       </tr>
       <tr>
       <td>{modules[2].name}</td>
       <td>{modules[2].noLectures}</td>
       <td>{modules[2].noPracticals}</td>
       </tr>
       <tr>
       <td>{modules[3].name}</td>
       <td>{modules[3].noLectures}</td>
       <td>{modules[3].noPracticals}</td>
       </tr>
       </tbody>
     </table>
   </div> 
  );
};

export default Demo;
