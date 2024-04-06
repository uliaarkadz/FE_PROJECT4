import { useLoaderData, Form } from "react-router-dom";

const CreatePatient = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const doctors = useLoaderData();

  console.log(doctors);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>ADD NEW PATIENT </h3>
        </div>
      </div>

      <Form action="/createPatient" method="post">
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input className="form-control" type="input" name="firstName" />
        </div>
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input className="form-control" type="input" name="lastName" />
        </div>
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            Gender
          </label>
          <input className="form-control" type="input" name="gender" />
        </div>
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            DOB
          </label>
          <input className="form-control" type="date" name="dob" />
        </div>
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            Doctor
          </label>
          <select
            name="doctorId"
            className="form-select form-select-lg mb-3"
            aria-label="Default select example"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => {
              return <option value={doctor.id}>{doctor.name}</option>;
            })}
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            CREATE NEW RECORD
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePatient;
