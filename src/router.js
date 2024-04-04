import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./pages/Index";
import Patients from "./pages/Patients";
import CreateDoctor from "./pages/CreateDoctor";
import PatientDetails from "./pages/PatientDetails";
import CreatePatient from "./pages/CreatePatient";
import CreatePatientDetails from "./pages/CreatePatientDetails";
import {
  patientsLoader,
  doctorsLoader,
  patientsMedicalRecordsLoader,
} from "./loaders";
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
      <Route
        path="/patients/:doctorId"
        element={<Patients />}
        loader={patientsLoader}
      />
      <Route path="/newdoctor" element={<CreateDoctor />} />
      <Route
        path="/newpatient"
        element={<CreatePatient />}
        loader={doctorsLoader}
      />
      {/* <Route path="/newpatientdetails" element={<CreatePatientDetails />} /> */}
      <Route
        path="/patientDetails/:doctorId/:patientId"
        element={<PatientDetails />}
        loader={patientsMedicalRecordsLoader}
      />
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
