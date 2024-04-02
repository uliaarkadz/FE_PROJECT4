import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Index";
import Patients from "./pages/Patients";
import { patientsLoader, doctorsLoader, medicalRecordsLoader } from "./loaders";
import {
  updatePatientAction,
  updateDoctorAction,
  updateMedicalRecordAction,
  createPatientAction,
  createDoctorAction,
  createMedicalRecordAction,
  deletePatientAction,
} from "./actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} loader={doctorsLoader} />
      <Route path="/patients" element={<Patients />} loader={patientsLoader}>
        <Route path="" loader={medicalRecordsLoader} />
      </Route>
      <Route path="createPatient" action={createPatientAction} />
      <Route path="updatePatient/:id" action={updatePatientAction} />
      <Route path="deletePatient/:id" action={deletePatientAction} />
      <Route path="createDoctor" action={createDoctorAction} />
      <Route path="updatedoctor/:id" action={updateDoctorAction} />
      <Route path="createmedicalrecord" action={createMedicalRecordAction} />
      <Route
        path="updatemedicalrecord/:id"
        action={updateMedicalRecordAction}
      />
    </Route>
  )
);

export default router;
