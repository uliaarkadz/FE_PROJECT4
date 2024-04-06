import { useLoaderData, Form } from "react-router-dom";

const CreateDoctor = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const patients = useLoaderData();

  console.log(patients);
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-3">
          <h3>Add New Doctor </h3>
        </div>
      </div>

      <Form action="/createDoctor" method="post">
        <div className="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            Doctor Name
          </label>
          <input
            className="form-control"
            type="input"
            name="name"
            placeholder="Dr Name"
          />
        </div>
        <div class="col-6">
          <label for="exampleFormControlInput1" class="form-label">
            License #
          </label>
          <input
            className="form-control"
            type="number"
            name="license"
            placeholder="License"
          />
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

export default CreateDoctor;
