import React from "react";
import profileImg from "../../../assests/imgae-1.jpg";

const Portfolio = () => {
  return (
    <div className="px-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <img
            src={profileImg}
            className="max-w-sm w-full rounded-full shadow-2xl mx-auto"
            alt=""
          />
          <div className="max-w-lg">
            <p className="text-xl">Hi !! I am </p>
            <h1 className="text-5xl font-bold">Md. Ashifur Rahaman</h1>
            <p className="py-2 text-md">
              Address: Jhalokathi sadar, Borishal, Dhaka 
              Bangladesh.
              <br /> <p>Mobile No: +8801748951131</p>
              <p className="font-bold">Email: ashifurrahamansajib@gmail.com</p>
            </p>
            <button className="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="card-body text-xl py-10">
        <div className="card-title text-2xl"> Career Objective:</div>
        <p>
          Innovative Front End Developer with 1 years training experience
          building and maintaining responsive websites in the recruiting
          industry. Proficient in HTML5, CSS3, JavaScript, React.js Passionate
          about usability and possess working knowledge of Adobe Photoshop,
          Figma, Photophea. Also Online Problem Solving.
        </p>
      </div>
      <div className="card-body text-2xl py-10 grid grid-cols-1">
        <div className="card-title">
          <h1>Project-1 </h1>
          <button></button>
        </div>
        <div className="card-title">
          <h1>Project-02</h1>
          <button></button>
        </div>
        <div className="card-title">
          <h1>Project-03</h1>
          <button></button>
        </div>
      </div>
      <div className="card-body text-2xl py-10">
        <div className="card-title text-2xl">Skills :</div>
        <p>
          <span className="text-xl">Language: </span>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap, Tailwind</li>
          <li>JavaScript, (ES6, OOP)</li>
          <li> React.js</li>
          <li> Next.js</li>
          <li> TypeScript</li>
          <li> Redux</li>
          <li> Mongoose</li>

          <li className="text-2xl font-bold">
            Backend: Node.js, Express.js, MongoDB, MySql.
          </li>
          <li className="text-2xl font-bold">Python and C++ (mid level)</li>
        </p>
      </div>

      {/* table */}

      <div className="py-10">
        <div className="overflow-x-auto w-full py-5">
          <h1 className="text-2xl font-bold py-3">Academic Qualification:</h1>
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Exam Title</th>
                <th>Concentration/Major</th>
                <th>Institute</th>
                <th>Pass. Year </th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>Diploma in Engineering</td>
                <td>Computer Science and Engineering(CSE)</td>
                <td>Barguna Polytechnic Institute</td>
                <td>2023</td>
                <td>4( Four)Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
