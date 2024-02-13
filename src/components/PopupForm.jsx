import React, { useState, useEffect } from "react";
import "./PopupForm.css";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";

function PopupForm({ job, onClose }) {
  const [resume, setResume] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [showBufferAnimation, setShowBufferAnimation] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [countdown, setCountdown] = useState(5); // Countdown for 5 seconds

  useEffect(() => {
    document.body.classList.add("popup-open");

    return () => {
      document.body.classList.remove("popup-open");
    };
  }, []);

  const cloudinaryDetails = {
    cloud_name: "dd1vzsruc",
    api_key: "122952366476122",
    api_secret: "AVBPpHn9LcNhPLwyIMbrB4aMsg4",
    upload_preset: "Upload-Resume",
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }, job) => {
    const { fullName, email, phoneNumber } = values;

    try {
      if (!fullName || !email || !phoneNumber || !resume) {
        throw new Error(
          "Please fill in all fields and upload your resume before submitting the form."
        );
      }

      setShowBufferAnimation(true); // Show buffer animation

      const templateParams = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        job: job,
      };

      let resumeLink = null;

      if (resume) {
        const formData = new FormData();
        formData.append("file", resume);
        formData.append("upload_preset", cloudinaryDetails.upload_preset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudinaryDetails.cloud_name}/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error("Failed to upload file to Cloudinary");
        }

        const data = await response.json();
        resumeLink = data.secure_url;
        templateParams.resumeLink = resumeLink;
      }

      const emailResponse = await emailjs.send(
        "service_f4ug9qn",
        "template_dtxu0po",
        templateParams,
        "G0GF7MMYoYxAdLwgJ"
      );

      console.log("Email sent successfully!");
      setSubmitting(false);
      setResume(null);
      setUploadError(null);
      setShowThankYouMessage(true);
      startCountdown();
    } catch (error) {
      console.error("Error submitting form:", error);
      setUploadError("Your application has been submitted successfully.");
    } finally {
      setShowBufferAnimation(false);
      setSubmitting(false);
      resetForm();
    }
  };

  // Countdown function to automatically close popup after 5 seconds
  const startCountdown = () => {
    const interval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      onClose(); // Close the popup after countdown ends
    }, 5000);
  };

  return (
    <div
      className={`popup-overlay ${
        showThankYouMessage ? "blurred-background" : ""
      } locked-background`}
    >
      {showBufferAnimation && <div className="buffer-animation"></div>}
      <div className={`popup-container ${showBufferAnimation ? "blur" : ""}`}>
        <button className="close-button-popup" onClick={onClose}>
          x
        </button>
        <h2>Job Description for {job}</h2>
        <hr />
        <div className="job-description-container">
          <div className="job-description">
            {job === "Relationship Manager" && (
              <div className="wrap-job1">
                <h3>Position Overview:</h3>
                <br></br>
                <p className="desc1">
                  As a Relationship Manager at Fly Realty, you will be a
                  dedicated sales professional, providing exemplary service and
                  building lasting relationships with our clients. Your
                  strategic thinking, leadership skills, and passion for real
                  estate will be the driving force behind our continued growth
                  and success.
                </p>

                <br></br>
                <h3>Key Responsibilities:</h3>
                <br></br>
                <ul>
                  <li>
                    <b> Client Engagement: </b>Build and maintain strong
                    relationships with clients, understanding their emotional
                    and practical needs, and guiding them through the process.
                  </li>
                  <br></br>
                  <li>
                    <b>Market Analysis:</b> Stay updated on the real estate
                    market trends and competition in Bangalore, providing
                    insights and strategies to stay ahead in the industry.
                  </li>
                  <br></br>
                  <li>
                    <b> Sales Strategy:</b> Coordinate with the office presales
                    team for scheduling property site visit to be conducted by
                    field sales associates.
                  </li>
                  <br></br>
                  <li>
                    <b>Customer Satisfaction: </b>Ensure exceptional customer
                    satisfaction by overseeing the resolution of any client
                    concerns or issues promptly and effectively.
                  </li>
                  <br></br>
                  <li>
                    <b>Networking: </b>Establish and maintain strong
                    relationships with builders, developers, and industry
                    professionals to expand the company's network and
                    partnership opportunities.
                  </li>
                  <br></br>

                  <p className="desc1">
                    - Managing negotiations with Clients and customers and
                    ensuring deal closures.
                    <br></br>- Ensuring target are achieved.
                    <br></br>- Ensuring End to end sales of vacant properties to
                    prospective clients and customers.
                    <br></br>- Maintain and update databases of daily activities
                    as per company standards
                    <br></br>- Assist in preparing necessary paperwork/property
                    documentation.
                  </p>
                </ul>

                <br></br>

                <h3>Qualifications:</h3>
                <br></br>
                <ol>
                  <li>
                    <b>1.&nbsp;&nbsp;</b> Bachelor's Degree in Business,
                    Marketing, or a related field.
                  </li>
                  <li>
                    <b>2.&nbsp;&nbsp;</b> 1 - 3 Years of Experience in the Real
                    Estate Industry.
                  </li>
                  <li>
                    <b>3.&nbsp;&nbsp;</b> In-depth knowledge of the Real Estate
                    Market.
                  </li>
                  <li>
                    <b>4.&nbsp;&nbsp;</b> Strong leadership, interpersonal, and
                    communication skills.
                  </li>
                  <li>
                    <b>5.&nbsp;&nbsp;</b> A passion for connecting with clients
                    emotionally and providing exceptional customer service.
                  </li>
                  <li>
                    <b>6.&nbsp;&nbsp;</b> Ability to analyze data, set goals,
                    and drive results.
                  </li>
                  <li>
                    <b>7.&nbsp;&nbsp;</b> Knowledge of CRM software and real
                    estate industry tools.
                  </li>
                  <li>
                    <b>8.&nbsp;&nbsp;</b> Excellent negotiation and
                    problem-solving abilities.
                  </li>
                </ol>

                <br></br>

                <h3>Why Join Fly Realty:</h3>
                <br></br>

                <ol className="desc1">
                  <li>
                    <b>1. &nbsp;&nbsp;</b> Be part of a company with a unique
                    and emotional approach to real estate.
                  </li>
                  <li>
                    <b>2. &nbsp;&nbsp;</b> Opportunity to lead and grow a
                    high-performing sales team.
                  </li>
                  <li>
                    <b>3. &nbsp;&nbsp;</b> Competitive compensation package with
                    performance-based bonuses.
                  </li>
                  <li>
                    <b>4. &nbsp;&nbsp;</b> Ongoing professional development and
                    training opportunities.
                  </li>
                  <li>
                    <b>5. &nbsp;&nbsp;</b> A supportive and collaborative work
                    environment.
                  </li>
                </ol>

                <br></br>
                <br></br>

                {job && (
                  <Formik
                    initialValues={{
                      fullName: "",

                      phoneNumber: "",

                      email: "",
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) =>
                      handleSubmit(values, { setSubmitting, resetForm }, job)
                    }
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name:</label>
                          <Field type="text" id="fullName" name="fullName" />
                          <ErrorMessage name="fullName" component="div" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <Field type="email" id="email" name="email" />
                          <ErrorMessage name="email" component="div" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phoneNumber">Phone Number:</label>
                          <Field
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                          />
                          <ErrorMessage name="phoneNumber" component="div" />
                        </div>

                        <div className="form-group">
                          <label htmlFor="resume">Upload Resume:</label>
                          <input
                            type="file"
                            id="resume"
                            onChange={handleFileChange}
                          />
                        </div>
                        {uploadError && (
                          <div className="error-message">{uploadError}</div>
                        )}

                        <div className="form-group-submit">
                          <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            )}
            {job === "Senior Relationship Manager" && (
              <>
                <div className="wrap-job1">
                  <h3>Position Overview:</h3>
                  <br></br>
                  <p className="desc1">
                    As a Senior Relationship Manager at Fly Realty, you will be
                    a dedicated sales professional, providing exemplary service
                    and build lasting relationships with our clients. Your
                    strategic thinking, leadership skills, and passion for real
                    estate will be the driving force behind our continued growth
                    and success.
                  </p>

                  <br></br>
                  <h3>Key Responsibilities:</h3>
                  <br></br>
                  <ul>
                    <li>
                      <b> Client Engagement: </b>Build and maintain strong
                      relationships with clients, understanding their emotional
                      and practical needs, and guiding them through the process.
                    </li>
                    <br></br>
                    <li>
                      <b>Market Analysis:</b> Stay updated on the real estate
                      market trends and competition in Bangalore, providing
                      insights and strategies to stay ahead in the industry.
                    </li>
                    <br></br>
                    <li>
                      <b> Sales Strategy:</b> Coordinate with the office
                      presales team for scheduling property site visit to be
                      conducted by field sales associates.
                    </li>
                    <br></br>
                    <li>
                      <b>Customer Satisfaction: </b>Ensure exceptional customer
                      satisfaction by overseeing the resolution of any client
                      concerns or issues promptly and effectively.
                    </li>
                    <br></br>
                    <li>
                      <b>Networking: </b>Establish and maintain strong
                      relationships with builders, developers, and industry
                      professionals to expand the company's network and
                      partnership opportunities.
                    </li>
                    <br></br>

                    <p className="desc1">
                      - Managing negotiations with Clients and customers and
                      ensuring deal closures.
                      <br></br>- Ensuring target are achieved.
                      <br></br>- Ensuring End to end sales of vacant properties
                      to prospective clients and customers.
                      <br></br>- Maintain and update databases of daily
                      activities as per company standards
                      <br></br>- Assist in preparing necessary
                      paperwork/property documentation.
                    </p>
                  </ul>

                  <br></br>

                  <h3>Qualifications:</h3>
                  <br></br>
                  <ol>
                    <li>
                      <b>1.&nbsp;&nbsp;</b> Bachelor's Degree in Business,
                      Marketing, or a related field.
                    </li>
                    <li>
                      <b>2.&nbsp;&nbsp;</b> 3 - 6 Years of Experience in the
                      Real Estate Industry.
                    </li>
                    <li>
                      <b>3.&nbsp;&nbsp;</b> In-depth knowledge of the Real
                      Estate Market.
                    </li>
                    <li>
                      <b>4.&nbsp;&nbsp;</b> Strong leadership, interpersonal,
                      and communication skills.
                    </li>
                    <li>
                      <b>5.&nbsp;&nbsp;</b> A passion for connecting with
                      clients emotionally and providing exceptional customer
                      service.
                    </li>
                    <li>
                      <b>6.&nbsp;&nbsp;</b> Ability to analyze data, set goals,
                      and drive results.
                    </li>
                    <li>
                      <b>7.&nbsp;&nbsp;</b> Knowledge of CRM software and real
                      estate industry tools.
                    </li>
                    <li>
                      <b>8.&nbsp;&nbsp;</b> Excellent negotiation and
                      problem-solving abilities.
                    </li>
                  </ol>

                  <br></br>

                  <h3>Why Join Fly Realty:</h3>
                  <br></br>

                  <ol className="desc1">
                    <li>
                      <b>1. &nbsp;&nbsp;</b> Be part of a company with a unique
                      and emotional approach to real estate.
                    </li>
                    <li>
                      <b>2. &nbsp;&nbsp;</b> Opportunity to lead and grow a
                      high-performing sales team.
                    </li>
                    <li>
                      <b>3. &nbsp;&nbsp;</b> Competitive compensation package
                      with performance-based bonuses.
                    </li>
                    <li>
                      <b>4. &nbsp;&nbsp;</b> Ongoing professional development
                      and training opportunities.
                    </li>
                    <li>
                      <b>5. &nbsp;&nbsp;</b> A supportive and collaborative work
                      environment.
                    </li>
                  </ol>

                  <br></br>
                  <br></br>

                  {job && (
                    <Formik
                      initialValues={{
                        fullName: "",

                        phoneNumber: "",

                        email: "",
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) =>
                        handleSubmit(values, { setSubmitting, resetForm }, job)
                      }
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <Field type="text" id="fullName" name="fullName" />
                            <ErrorMessage name="fullName" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <Field
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                            />
                            <ErrorMessage name="phoneNumber" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="resume">Upload Resume:</label>
                            <input
                              type="file"
                              id="resume"
                              onChange={handleFileChange}
                            />
                          </div>
                          {uploadError && (
                            <div className="error-message">{uploadError}</div>
                          )}

                          <div className="form-group-submit">
                            <button
                              type="submit"
                              className="submit-button"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  )}
                </div>
              </>
            )}
            {job === "Team Leader" && (
              <>
                <div className="wrap-job1">
                  <h3>Position Overview:</h3>
                  <br></br>
                  <p className="desc1">
                    As a Team Leader at Fly Realty, you will be a dedicated
                    sales professional, providing exemplary service and build
                    lasting relationships with our clients. Your strategic
                    thinking, leadership skills, and passion for real estate
                    will be the driving force behind our continued growth and
                    success.
                  </p>

                  <br></br>
                  <h3>Key Responsibilities:</h3>
                  <br></br>
                  <ul>
                    <li>
                      <b> Target-Driven Team Management: </b>To ensure monthly
                      target achievement, establish clear objectives and
                      timelines with the team. Regularly monitor progress and
                      provide necessary support and resources to overcome
                      obstacles. Foster open communication and a collaborative
                      environment to maximize team performance and drive
                      success.
                    </li>
                    <br></br>
                    <li>
                      <b>Market Analysis:</b> Stay updated on the real estate
                      market trends and competition in Bangalore, providing
                      insights and strategies to stay ahead in the industry.
                    </li>
                    <br></br>
                    <li>
                      <b> Sales Strategy:</b> Coordinate with the office
                      presales team for scheduling property site visit to be
                      conducted by field sales associates.
                    </li>
                    <br></br>
                    <li>
                      <b>Customer Satisfaction: </b>Ensure exceptional customer
                      satisfaction by overseeing the resolution of any client
                      concerns or issues promptly and effectively.
                    </li>
                    <br></br>
                    <li>
                      <b>Networking: </b>Establish and maintain strong
                      relationships with builders, developers, and industry
                      professionals to expand the company's network and
                      partnership opportunities.
                    </li>
                    <br></br>

                    <p className="desc1">
                      - Managing negotiations with Clients and customers and
                      ensuring deal closures.
                      <br></br>- Ensuring target are achieved.
                      <br></br>- Ensuring End to end sales of vacant properties
                      to prospective clients and customers.
                      <br></br>- Maintain and update databases of daily
                      activities as per company standards
                      <br></br>- Assist in preparing necessary
                      paperwork/property documentation.
                    </p>
                  </ul>

                  <br></br>

                  <h3>Qualifications:</h3>
                  <br></br>
                  <ol>
                    <li>
                      <b>1.&nbsp;&nbsp;</b> Bachelor's Degree in Business,
                      Marketing, or a related field.
                    </li>
                    <li>
                      <b>2.&nbsp;&nbsp;</b> 6+ Years of Experience in the Real
                      Estate Industry.
                    </li>
                    <li>
                      <b>3.&nbsp;&nbsp;</b> In-depth knowledge of the Real
                      Estate Market.
                    </li>
                    <li>
                      <b>4.&nbsp;&nbsp;</b> Strong leadership, interpersonal,
                      and communication skills.
                    </li>
                    <li>
                      <b>5.&nbsp;&nbsp;</b> A passion for connecting with
                      clients emotionally and providing exceptional customer
                      service.
                    </li>
                    <li>
                      <b>6.&nbsp;&nbsp;</b> Ability to analyze data, set goals,
                      and drive results.
                    </li>
                    <li>
                      <b>7.&nbsp;&nbsp;</b> Knowledge of CRM software and real
                      estate industry tools.
                    </li>
                    <li>
                      <b>8.&nbsp;&nbsp;</b> Excellent negotiation and
                      problem-solving abilities.
                    </li>
                  </ol>

                  <br></br>

                  <h3>Why Join Fly Realty:</h3>
                  <br></br>

                  <ol className="desc1">
                    <li>
                      <b>1. &nbsp;&nbsp;</b> Be part of a company with a unique
                      and emotional approach to real estate.
                    </li>
                    <li>
                      <b>2. &nbsp;&nbsp;</b> Opportunity to lead and grow a
                      high-performing sales team.
                    </li>
                    <li>
                      <b>3. &nbsp;&nbsp;</b> Competitive compensation package
                      with performance-based bonuses.
                    </li>
                    <li>
                      <b>4. &nbsp;&nbsp;</b> Ongoing professional development
                      and training opportunities.
                    </li>
                    <li>
                      <b>5. &nbsp;&nbsp;</b> A supportive and collaborative work
                      environment.
                    </li>
                  </ol>

                  <br></br>
                  <br></br>

                  {job && (
                    <Formik
                      initialValues={{
                        fullName: "",

                        phoneNumber: "",

                        email: "",
                      }}
                      onSubmit={(values, { setSubmitting, resetForm }) =>
                        handleSubmit(values, { setSubmitting, resetForm }, job)
                      }
                    >
                      {({ isSubmitting }) => (
                        <Form>
                          <div className="form-group">
                            <label htmlFor="fullName">Full Name:</label>
                            <Field type="text" id="fullName" name="fullName" />
                            <ErrorMessage name="fullName" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <Field
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                            />
                            <ErrorMessage name="phoneNumber" component="div" />
                          </div>

                          <div className="form-group">
                            <label htmlFor="resume">Upload Resume:</label>
                            <input
                              type="file"
                              id="resume"
                              onChange={handleFileChange}
                            />
                          </div>
                          {uploadError && (
                            <div className="error-message">{uploadError}</div>
                          )}

                          <div className="form-group-submit">
                            <button
                              type="submit"
                              className="submit-button"
                              disabled={isSubmitting}
                            >
                              Submit
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Place the thank you message here */}
        {showThankYouMessage && (
          <div className="thank-you-message">
            Submitted! ( {countdown} seconds.)
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupForm;
