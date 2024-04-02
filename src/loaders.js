const URL = process.env.REACT_APP_URL;

export const patientsLoader = async () => {
  const response = await fetch(`${URL}/patients/`);
  const bookmarks = await response.json();
  return bookmarks;
};

export const doctorsLoader = async () => {
  const response = await fetch(`${URL}/doctors/`);
  const bookmarks = await response.json();
  return bookmarks;
};

export const medicalRecordsLoader = async () => {
  const response = await fetch(`${URL}/medicalrecords/`);
  const bookmarks = await response.json();
  return bookmarks;
};
