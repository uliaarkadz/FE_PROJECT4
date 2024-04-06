import { useLoaderData } from "react-router-dom";

const Patients = () => {
  const patients = useLoaderData();

  console.log(patients);
  return (
    <div className="container">
      <div class="row justify-content-end">
        <div className="col-4">
          <a href={`/newpatient`}>
            <button type="submit" className="btn btn-primary mb-3">
              CREATE NEW PATIENT
            </button>
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>Patients List </h3>
        </div>
      </div>

      {patients.map((patient) => {
        return (
          <div key={patient.id} className="patient">
            <a href={`/patientDetails/${patient.id}?patientId=${patient.id}`}>
              <div className="row border patients">
                <div className="col-4 p-3 bg-light d-flex align-items-center justify-content-center">
                  {patient.firstName}
                </div>
                <div className="col-4 p-3 bg-light d-flex align-items-center justify-content-center ">
                  {patient.lastName}
                </div>
                <div className="col-4 p-3 bg-light  d-flex align-items-center justify-content-center">
                  {patient.dob}
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Patients;
