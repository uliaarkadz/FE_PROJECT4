import { useLoaderData, Form } from "react-router-dom";

const CreateDoctor = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const patients = useLoaderData();

  console.log(patients);
  return (
    <div>
      <div className="Section-header">
        <h3>Add New Doctor </h3>
      </div>
      <Form action="/createDoctor" method="post">
        <input type="input" name="name" placeholder="Dr Name" />
        <input type="number" name="license" placeholder="License" />
        <input type="submit" value="SAVE" />
      </Form>
    </div>
  );
};

export default CreateDoctor;
