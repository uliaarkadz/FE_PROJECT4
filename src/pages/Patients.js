import { useLoaderData, Form, useParams } from "react-router-dom";

const Patients = (params) => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const patients = useLoaderData();

  console.log(patients);
  return (
    <div>
      <div className="Section-header">
        <a href={`/newpatient`}>
          <button>Create new Patient</button>
        </a>
      </div>
      <div className="Section-header">
        <h3>Patients List </h3>
      </div>
      {patients.map((patient) => {
        return (
          <div key={patient.id} className="patuent">
            <a href={`/patientDetails/${patient.doctorId}/${patient.id}`}>
              <h1>
                {patient.firstName} {patient.lastName}
              </h1>
            </a>
            <h2>{patient.dob}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Patients;
