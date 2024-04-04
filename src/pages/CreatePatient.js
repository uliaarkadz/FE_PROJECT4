import { useLoaderData, Form } from "react-router-dom";

const CreatePatient = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const doctors = useLoaderData();

  console.log(doctors);

  return (
    <div>
      <div className="Section-header">
        <h3>Add New Doctor </h3>
      </div>

      <Form action="/createPatient" method="post">
        <input type="input" name="firstName" placeholder="Dr Name" />
        <input type="input" name="lastName" placeholder="Dr Name" />
        <input type="input" name="gender" placeholder="Dr Name" />
        <input type="date" name="dob" placeholder="License" />
        <select name="doctorId">
          <option value="">select</option>
          {doctors.map((doctor) => {
            return <option value={doctor.id}>{doctor.name}</option>;
          })}
        </select>
        <input type="submit" value="SAVE" />
      </Form>
    </div>
  );
};

export default CreatePatient;
