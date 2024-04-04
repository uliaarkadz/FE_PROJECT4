const URL = process.env.REACT_APP_URL;

export const patientsLoader = async ({ params }) => {
  const response = await fetch(`${URL}/patients/${params.doctorId}`);
  const bookmarks = await response.json();
  return bookmarks;
};

export const doctorsLoader = async () => {
  const response = await fetch(`${URL}/doctors/`);
  const bookmarks = await response.json();
  return bookmarks;
};

export const patientsMedicalRecordsLoader = async ({ params }) => {
  const docresponse = await fetch(`${URL}/medicalrecords/${params.patientId}`);
  const medrec = await docresponse.json();
  const patresponse = await fetch(`${URL}/patients/${params.patientId}`);
  const patients = await patresponse.json();
  return { medrec, patients };
};
