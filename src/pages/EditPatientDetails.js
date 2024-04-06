import { useLoaderData, useSearchParams, Form } from "react-router-dom";

const EditPatientDetails = () => {
  const [searchParams] = useSearchParams();
  const medrecords = useLoaderData();

  const medRecordIdValue = searchParams.get("medrecordId");
  // eslint-disable-next-line
  const medrecord = medrecords.medrec.filter((record) => {
    if (record.id === medRecordIdValue) return record;
  });

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
            <label for="exampleFormControlInput1" className="form-label">
              Visit Summary
            </label>
            <textarea
              className="form-control"
              type="input"
              name="visitSummary"
              value={medrecord.visitSummary}
            />
          </div>
          <div className="col-md-8">
            <label for="exampleFormControlInput1" className="form-label">
              Prescriptions
            </label>
            <textarea
              className="form-control"
              type="input"
              name="prescriptions"
              value={medrecord.prescriptions}
            />
          </div>
          <div className="col-md-8">
            <label for="exampleFormControlInput1" className="form-label">
              Lab Work
            </label>
            <input
              className="form-control"
              type="input"
              name="labWork"
              value={medrecord.labWork}
            />
          </div>
          <div className="col-md-8">
            <label for="exampleFormControlInput1" className="form-label">
              Patient Id
            </label>
            <input
              readOnly
              className="form-control"
              type="number"
              name="patientId"
              value={medrecord.patientId}
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
