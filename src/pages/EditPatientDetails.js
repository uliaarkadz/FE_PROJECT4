import { useLoaderData, useSearchParams, Form } from "react-router-dom";

const EditPatientDetails = () => {
  const [searchParams] = useSearchParams();
  const medrecords = useLoaderData();

  const medRecordIdValue = Number(searchParams.get("medrecordId"));

  const medrecord = medrecords.medrec.filter((record) =>
    record.id === medRecordIdValue ? record : console.log("no")
  );

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3>EDIT PATIENT MEDICAL RECORD</h3>
        </div>
      </div>

      <Form
        action={`/updatemedicalrecord/${medRecordIdValue}`}
        method="post"
        className="row g-3"
      >
        <div className="row justify-content-center g-3">
          <div className="col-md-8">
            <label className="form-label">Patient Id</label>
            <input
              className="form-control"
              type="number"
              name="patientId"
              defaultValue={medrecord[0].patientId}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Visit Summary</label>
            <textarea
              className="form-control"
              type="input"
              name="visitSummary"
              defaultValue={medrecord[0].visitSummary}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Prescriptions</label>
            <textarea
              className="form-control"
              type="input"
              name="prescriptions"
              defaultValue={medrecord[0].prescriptions}
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Lab Work</label>
            <input
              className="form-control"
              type="input"
              name="labWork"
              defaultValue={medrecord[0].labWork}
            />
          </div>
        </div>
        <div className="row g-3 justify-content-center">
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              SAVE NEW RECORD
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EditPatientDetails;
