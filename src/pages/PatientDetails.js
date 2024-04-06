import { useLoaderData, Form, useSearchParams } from "react-router-dom";
import React, { useState } from "react";
import { format } from "date-fns";
const PatientDetails = () => {
  const [searchParams] = useSearchParams();
  const patientDetails = useLoaderData();
  const [isVisible, setIsVisible] = useState(false);

  console.log(patientDetails);
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
                  ID:{patient.id}
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
      <table className="table table-hover align-middle text-center">
        <thead className="align-middle">
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Summary</th>
            <th scope="col">Lab Work</th>
            <th scope="col">Prescriptions</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {patientDetails.medrec.map((record, ind) => {
          if (record.patientId == patientIdValue)
            return (
              <tbody>
                <tr>
                  <th scope="row">{(ind += 1)}</th>
                  <td>{record.visitSummary}</td>
                  <td>{record.labWork}</td>
                  <td>{record.prescriptions}</td>
                  <td>{format(record.createdDate, "MM/dd/yyyy")}</td>
                  <td>
                    <div className="row">
                      <a
                        className="col"
                        href={`/editpatientDetails/${patientIdValue}?medrecordId=${record.id}`}
                      >
                        <button type="submit" className="btn btn-primary">
                          EDIT
                        </button>
                      </a>
                      <Form
                        action={`/deletemedicalrecord/${record.id}`}
                        method="post"
                        className="col"
                      >
                        <button type="submit" className=" btn btn-primary">
                          DELETE
                        </button>
                      </Form>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
        })}
      </table>

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
