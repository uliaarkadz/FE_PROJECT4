import { useLoaderData, useNavigate } from "react-router-dom";

const Landing = () => {
  const doctors = useLoaderData();

  console.log(doctors);

  let navigate = useNavigate();

  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }

  return (
    <div className="container">
      <div class="row justify-content-center">
        <div className="col-4">
          <h3>Select Doctor:</h3>
        </div>
      </div>
      <div class="row justify-content-center">
        <div className="col-4">
          <select
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
            onChange={(event) => handleChange(event.target.value)}
          >
            <option value="">Choose Doctor's Name</option>
            {doctors.map((doctor) => {
              return (
                <option value={`/patients/${doctor.id}`}>{doctor.name}</option>
              );
            })}
          </select>
        </div>
      </div>
      <a href={`/newdoctor`}>
        {" "}
        <div className="row justify-content-center">
          <div className="col-3">
            <button type="submit" className="btn btn-primary p-3">
              CREATE NEW DOCTOR
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Landing;
