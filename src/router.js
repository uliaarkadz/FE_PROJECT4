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
import EditPatientDetails from "./pages/EditPatientDetails";
import {
  patientsLoader,
  doctorsLoader,
  patientsMedicalRecordsLoader,
  medicalRecordsLoader,
} from "./loaders";
import {
  updateMedicalRecordAction,
  createPatientAction,
  createDoctorAction,
  createMedicalRecordAction,
  deletePatientAction,
  deleteMedicalAction,
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

      <Route
        path="/patientDetails/:patientId"
        element={<PatientDetails />}
        loader={patientsMedicalRecordsLoader}
      />
      <Route
        path="/editpatientDetails/:patientId"
        element={<EditPatientDetails />}
        loader={medicalRecordsLoader}
      />
      <Route path="createPatient" action={createPatientAction} />
      <Route path="deletePatient/:id" action={deletePatientAction} />
      <Route path="createDoctor" action={createDoctorAction} />
      <Route path="createmedicalrecord" action={createMedicalRecordAction} />
      <Route
        path="updatemedicalrecord/:id"
        action={updateMedicalRecordAction}
      />
      <Route path="deletemedicalrecord/:id" action={deleteMedicalAction} />
    </Route>
  )
);

export default router;
