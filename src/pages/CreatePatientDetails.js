import { useLoaderData, Form, useParams } from "react-router-dom";

const CreatePatientDetails = (params) => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const doctors = useLoaderData();

  console.log(doctors);

  return <div></div>;
};

export default CreatePatientDetails;
