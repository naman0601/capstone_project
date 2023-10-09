
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
const [user, setUser] = useState({});
  const Id = localStorage.getItem("userId");
  

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users?userId=${Id}`
        );
        setUser(response.data); // Update the user state
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [Id]);


  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    //       <h2 className="text-center" style={{ color: "purple" }}>
    //         User Profile
    //       </h2>
    //       {/* {user ? ( */}
    //       <div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Full Name:</label>
    //           <div>{user.fullName}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Email:</label>
    //           <div>{user.email}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Contact Number:</label>
    //           <div>{user.contactNumber}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Address:</label>
    //           <div>{user.address}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Date of Birth:</label>
    //           <div>{user.dob}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Employment Status:</label>
    //           <div>{user.employmentStatus}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">Employer Details:</label>
    //           <div>{user.employerDetails}</div>
    //         </div>
    //         <div className="mb-3">
    //           <label className="form-label text-left">PAN Card:</label>
    //           <div>{user.panCard}</div>
    //         </div>
    //       </div>

    //       {/* ) : (
    //         <p>Loading user data...</p>
    //       )} */}
    //     </div>
    //   </div>
    // </div>


    <div>{console.log(user)}</div>
  );
};

export default UserProfile;

