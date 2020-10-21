import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
   <div>
     <h1>BSc (H) Software Systems Practice - Modules table</h1>
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
         <td>Web App Development</td>
         <td>3</td>
         <td>3</td>
       </tr>
       <tr>
         <td>Agile Software Practice</td>
         <td>3</td>
         <td>3</td>
       </tr>
       <tr>
         <td>Enterprise Systems Arch</td>
         <td>2</td>
         <td>3</td>
       </tr>
       <tr>
         <td>Business Analytics</td>
         <td>2</td>
         <td>3</td>
       </tr>
       </tbody>
     </table>
   </div> 
  );
};

export default Demo;
