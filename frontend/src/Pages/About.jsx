import React from "react";
import members_data from "../Components/Assets/data";

function AboutUs() {
  return (
    <div className="px-5 py-5 max-sm:p-0 max-md:p-0">
      <h1 className="text-3xl font-bold my-6 text-center">About Us</h1>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Profile</th>
              <th className="text-lg">Name</th>
              <th className="text-lg">Index Number</th>
            </tr>
          </thead>
          <tbody>
            {members_data.map((member) => (
              <tr className="hover" key={member.id}>
                <th className="">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={member.image} alt="member-avatar" />
                      </div>
                    </div>
                  </div>
                </th>
                <td>{member.name}</td>
                <td>{member.indexNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutUs;
