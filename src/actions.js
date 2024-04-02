import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;

export const updateDoctorAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedDoctor = {
    name: formData.get("name"),
    license: formData.get("license"),
  };
  await fetch(`${URL}/doctors/${params.id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedDoctor),
  });

  return redirect("/");
};

export const updatePatientAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedPatient = {
    lastName: formData.get("lastName"),
    firstName: formData.get("firstName"),
    gender: formData.get("gender"),
    doctorId: formData.get("doctorId"),
    dob: formData.get("dob"),
  };
  await fetch(`${URL}/patients/${params.id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPatient),
  });

  return redirect("/");
};

export const updateMedicalRecordAction = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedMedicalRecord = {
    visitSummary: formData.get("visitSummary"),
    prescriptions: formData.get("prescriptions"),
    labWork: formData.get("labWork"),
    patientId: formData.get("patientId"),
    doctorId: formData.get("doctorId"),
  };

  await fetch(`${URL}/medicalrecords/${params.id}/`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMedicalRecord),
  });

  return redirect("/");
};

export const createDoctorAction = async ({ request }) => {
  const formData = await request.formData();
  const createdDoctor = {
    name: formData.get("name"),
    license: formData.get("license"),
  };

  await fetch(`${URL}/doctors`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdDoctor),
  });

  return redirect("/");
};

export const createPatientAction = async ({ request }) => {
  const formData = await request.formData();
  const createdPatient = {
    lastName: formData.get("lastName"),
    firstName: formData.get("firstName"),
    gender: formData.get("gender"),
    doctorId: formData.get("doctorId"),
    dob: formData.get("dob"),
  };

  await fetch(`${URL}/patients`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdPatient),
  });

  return redirect("/");
};

export const createMedicalRecordAction = async ({ request }) => {
  const formData = await request.formData();
  const createdMedicalRecord = {
    visitSummary: formData.get("visitSummary"),
    prescriptions: formData.get("prescriptions"),
    labWork: formData.get("labWork"),
    patientId: formData.get("patientId"),
    doctorId: formData.get("doctorId"),
  };

  await fetch(`${URL}/medicalrecords`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createdMedicalRecord),
  });

  return redirect("/");
};

export const deletePatientAction = async ({ params }) => {
  await fetch(`${URL}/patients/${params.id}`, {
    method: "delete",
  });

  return redirect("/");
};
