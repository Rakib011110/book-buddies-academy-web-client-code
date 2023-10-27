import React from "react";

const Teacher = ({ teacher }) => {
  const { name, title, address, phone, email, teacherPic } = teacher;

  return (
    <div className="max-w-xs">
      <div className="bg-white shadow-xl rounded-lg py-3">
        <div className="photo-wrapper ">
          <img
            className="w-48 h-32 rounded-full mx-auto"
            src={teacherPic}
            alt={name}
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{title}</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Address
                </td>
                <td className="px-2 py-2">{address}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">{phone}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="px-2 py-2">{email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
