import { useLoaderData, Form } from "react-router-dom";

const PatientDetails = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const patientDetails = useLoaderData();

  console.log(patientDetails);
  return (
    <div>
      <div className="Section-header">
        <h3>Patients Info </h3>
      </div>
      {patientDetails.patients.map((patient) => {
        return (
          <div key={patient.id} className="patient">
            <div>
              {patient.id} {patient.firstName} {patient.lastName} {patient.dob}{" "}
              {patient.gender}
            </div>
          </div>
        );
      })}

      {patientDetails.medrec.map((record) => {
        return (
          <div key={record.id} className="patient">
            <div className="patientdetails">
              <div className="demo">
                {record.visitSummary} {record.labWork} {record.prescriptions}{" "}
                {record.createdDate} {record.patientId}
              </div>
              <div className="med">
                <Form
                  action={`/updatemedicalrecord/${record.id}`}
                  method="post"
                >
                  <button>EDIT</button>
                </Form>
                <Form action="/createmedicalrecord" method="post">
                  <button>DELETE</button>
                </Form>
              </div>
            </div>
          </div>
        );
      })}

      <div className="Section-header">
        <button>Add Patient Visit Info</button>
      </div>

      <Form action="/createmedicalrecord" method="post">
        <input type="input" name="visitSummary" placeholder="visitSummary" />
        <input type="input" name="prescriptions" placeholder="prescriptions" />
        <input type="input" name="labWork" placeholder="labWork" />
        <input type="number" name="patientId" placeholder="patientId" />
        <input type="number" name="doctorId" placeholder="doctorId" />
        <input type="submit" value="SAVE" />
      </Form>
    </div>
  );
};

export default PatientDetails;
