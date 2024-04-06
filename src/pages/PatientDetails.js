import { useLoaderData, Form, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { format } from "date-fns";
const PatientDetails = () => {
  // const { patients, medicalRecordsLoader } = useLoaderData();

  const [searchParams] = useSearchParams();
  const patientDetails = useLoaderData();
  const [isVisible, setIsVisible] = useState(false);

  const patientIdValue = searchParams.get("patientId");
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-3">
          <h3>PATIENT INFO</h3>
        </div>
      </div>
      {patientDetails.patients.map((patient) => {
        if (patient.id == patientIdValue)
          return (
            <div key={patient.id} className="patient">
              <div className="row border rounded-1">
                <div className="col-2 p-3 bg-light d-flex justify-content-center">
                  {patient.id}
                </div>
                <div class="col-2 p-3 bg-light d-flex justify-content-center">
                  {patient.firstName}
                </div>
                <div className="col-4 p-3 bg-light d-flex justify-content-center">
                  {patient.lastName}
                </div>
                <div class="col-2 p-3 bg-light d-flex justify-content-center">
                  {patient.dob}
                </div>
                <div class="col-2 p-3 bg-light d-flex justify-content-center">
                  {patient.gender}
                </div>
              </div>
            </div>
          );
      })}
      <div className="row justify-content-center gy-10">
        <div className="col-4">
          <h3>PATIENT MEDICAL INFO</h3>
        </div>
      </div>

      {patientDetails.medrec.map((record) => {
        return (
          <div key={record.id} className="patient">
            <div className="row border d-flex align-items-center justify-content-center">
              <div className="col-2 ">
                <label className="form-label">Summary: </label>
                {record.visitSummary}
              </div>
              <div className="col-2 ">
                <div className="col-2 ">
                  <label className="form-label">Lab Work: </label>
                  {record.visitSummary}
                </div>
                {record.labWork}
              </div>
              <div className="col-2">
                <div className="col-2 ">
                  <label className="form-label">Prescriptions: </label>
                  {record.visitSummary}
                </div>
                {record.prescriptions}
              </div>
              <div className="col-2">
                <div className="col-2 ">
                  <label className="form-label">Date: </label>
                  {record.visitSummary}
                </div>
                {format(record.createdDate, "MM/dd/yyyy")}
              </div>
              <div className="col-2 ">
                <a
                  href={`/editpatientDetails/${patientIdValue}?medrecordId=${record.id}`}
                >
                  <button type="submit" className="btn btn-primary mb-3">
                    EDIT
                  </button>
                </a>
              </div>

              <div className="col-2">
                <Form
                  action={`/deletemedicalrecord/${record.id}`}
                  method="post"
                >
                  <button type="submit" className=" btn btn-primary">
                    DELETE
                  </button>
                </Form>
              </div>
            </div>
            <div className="med"></div>
          </div>
        );
      })}
      <div className="row justify-content-center">
        <div className="col-auto">
          <button
            type="submit"
            className=" btn btn-primary"
            onClick={() => setIsVisible(!isVisible)}
          >
            Add Patient Visit Info
          </button>
        </div>
      </div>
      {isVisible && (
        <Form action="/createmedicalrecord" method="post">
          <div className="row align-items-center">
            <div className="col-md-4">
              <label className="form-label">Patient Id</label>
              <input
                readOnly
                className="form-control"
                type="number"
                value={`${patientIdValue}`}
                name="patientId"
              />
            </div>
          </div>
          <div className="col-md-8">
            <label className="form-label">Visit Summary</label>
            <textarea
              className="form-control"
              type="input"
              name="visitSummary"
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Prescriptions</label>
            <textarea
              className="form-control"
              type="input"
              name="prescriptions"
            />
          </div>
          <div className="col-md-8">
            <label className="form-label">Lab Work</label>
            <textarea className="form-control" type="input" name="labWork" />
          </div>

          <div className="row g-3 justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                SAVE NEW RECORD
              </button>
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default PatientDetails;
