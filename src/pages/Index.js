import { useLoaderData, Form } from "react-router-dom";

const Landing = () => {
  const doctors = useLoaderData();

  return (
    <div>
      <div className="Section-header">
        <h3>Doctors List </h3>
      </div>
      {doctors.map((doctor) => {
        return (
          <div key={doctor._id} className="bookmark">
            <a href="/patients" target="_blank" rel="noopener noreferrer">
              <h1>{doctor.name}</h1>
            </a>
            <h1>{doctor.license}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
