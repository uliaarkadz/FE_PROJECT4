import { useLoaderData, Form } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Patients = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();
  <Outlet />;
  const patients = useLoaderData();
  const medicalRecordsLoader = useLoaderData();
  console.log(patients, medicalRecordsLoader);
  return (
    <div>
      <div className="Section-header">
        <h3>Patients List </h3>
      </div>
      {patients.map((patient) => {
        return (
          <div key={patient._id} className="bookmark">
            <h1>{patient.firstName}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Patients;
