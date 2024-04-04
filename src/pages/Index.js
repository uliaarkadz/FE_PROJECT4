import { useLoaderData, Form, useNavigate, Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Landing = () => {
  const doctors = useLoaderData();

  console.log(doctors);

  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  return (
    <div>
      <div className="Section-header">
        <a href={`/newdoctor`}>
          <button>Create new Doctor</button>
        </a>
      </div>
      <div className="Section-header">
        <h3>Doctors Selection</h3>
      </div>
      {/* {doctors.map((doctor) => {
        return (
          <div key={doctor.id} className="doctor">
            <a href={`/patients/${doctor.id}`}>
              <h1>{doctor.name}</h1>
            </a>
            <h1>{doctor.license}</h1>
          </div>
        );
      })} */}

      <select onChange={(event) => handleChange(event.target.value)}>
        <option value="">select</option>
        {doctors.map((doctor) => {
          return (
            <option value={`/patients/${doctor.id}`}>{doctor.name}</option>
          );
        })}
      </select>
    </div>
  );
};

export default Landing;
