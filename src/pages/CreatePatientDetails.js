import { useLoaderData } from "react-router-dom";

const CreatePatientDetails = () => {
  const doctors = useLoaderData();

  console.log(doctors);

  return <div></div>;
};

export default CreatePatientDetails;
