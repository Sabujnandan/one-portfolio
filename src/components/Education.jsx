import React from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      level: "B.Tech | Information Technology",
      school: "Techno Main Salt Lake ",
      cgpa: "8.5 CGPA",
      year: "2021 - 2025",
      sc:"College : ",
    },
    {
      id: 2,
      level: "Class 12th",
      school: "Bidhan Nagar Govt. High School",
      percentage: "92.4%",
      year: "2021",
      sc:"School : ",
    },
    {
      id: 3,
      level: "Class 10th",
      school: "The Scottish Church Collegiate School",
      percentage: "92.3%",
      year: "2019",
      sc:"School : ",

    },
  ];

  return (
    <div
      name="education"
      className="w-full h-115 bg-gradient-to-b from-black via-black to-gray-800 text-white p-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-115">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          {educationData.map(({ id, level, school, percentage, cgpa, year,sc }) => (
            <div
              key={id}
              className="bg-gray-700 bg-opacity-50 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-cyan-500">{level}</h2>
              <p className="mt-2 text-lg">
                <span className="font-medium text-white">{sc}</span>
                {school}
              </p>
              <p className="mt-2 text-lg">
                {percentage ? (
                  <>
                    <span className="font-medium text-white">Percentage: </span>
                    {percentage}
                  </>
                ) : (
                  <>
                    <span className="font-medium text-white">CGPA: </span>
                    {cgpa}
                  </>
                )}
              </p>
              <p className="mt-2 text-lg">
                <span className="font-medium text-white">Year: </span>
                {year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
