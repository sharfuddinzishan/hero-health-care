import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <>
            <section className="about-section p-5">
                <div className="container">
                    <div className="p-3">
                        <h2 className="section-title lh-1 fs-1 pb-3 fw-normal text-center">About <b>Us</b></h2>
                        <h1 className="section-title lh-1 fs-1 pb-3 fw-bold text-center">
                            We enable patients to connect with BD clinicians
                        </h1>
                        <p className="text-muted fs-6 text-center">
                            At Virtually, we trully believe that all individuals should have the tools to flexibly manage their
                            own healthcare. We are a healthcare company first! Our deepest purpose as an organization is helping
                            support the health and wellbeing of Canadians..
                        </p>
                        <ul className="nav justify-content-end social-medie">
                            <li className="px-2">
                                <a href="https://www.facebook.com/hhcare" target="_blank" rel="noreferrer">
                                    <i className="fa fa-facebook"> </i>
                                </a>
                            </li>
                            <li className="px-2">
                                <a href="https://www.twitter.com/hhcare" target="_blank" rel="noreferrer">
                                    <i className="fa fa-twitter"> </i>
                                </a>
                            </li>
                            <li className="px-2">
                                <a href="https://www.linkedin.com/hhcare" target="_blank" rel="noreferrer">
                                    <i className="fa fa-linkedin"> </i>
                                </a>
                            </li>

                        </ul>
                        <Link to="account" className="text-decoration-none">
                            <button className=" y-1 d-block mx-auto animated zoomIn delay-1s btn btn-lg btn-outline-secondary">
                                Register
                            </button>
                        </Link>
                    </div>
                    <hr className="my-5" />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-3">
                                <h2 className="section-title lh-1 fs-1 pb-3 fw-normal">Who <b>We Are</b></h2>
                                <p className="text-muted fs-6 text-start">
                                    We provide care for about 15,000 patients living across of all age groups with a
                                    variety of health conditions.Some of our patients have multiple and complex health
                                    problems.
                                    <br /><br />
                                    We welcome patients of all ages and genders regardless of how often you need to see us.We
                                    are regulated by the Care Quality Commission and received a rating of “Good” the last time
                                    we were inspected in 2018.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid"
                                src="https://i.ibb.co/Db9F2G3/Group-770-449x456.png" alt="" />
                        </div>
                        <hr className="my-3" />
                        <div className="col-md-6">
                            <img className="img-fluid"
                                src="https://i.ibb.co/T8ynxjV/Group-707-528x430.png" alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="p-3">
                                <h2 className="section-title lh-1 fs-1 pb-3 fw-normal">Our <strong>Clinicians</strong></h2>
                                <h1 className="section-title lh-1 fs-1 pb-3 fw-bold">
                                    A team of certified doctors
                                </h1>
                                <p className="text-muted fs-6 text-start">
                                    All our clinicians are registered with their appropriate professional body.For doctors this
                                    is the General Medical Council and for nurses it is the Nursing and Midwifery Council.
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-5" />
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className="single-aim shadow p-3">
                                <h4 className="lh-lg mt-1">Our Mission</h4>
                                <p className="fs-6 text-muted">
                                    <small>
                                        Our deepest purpose as an organization is helping support the health
                                        and wellbeing of Canadians by leveraging the use of our advanced virtual healthcare
                                        platform - a system designed to improve the lives of patients 7-days a week.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-aim shadow p-3">
                                <h4 className="lh-lg mt-1">Our Essence</h4>
                                <p className="fs-6 text-muted">
                                    <small>
                                        At our core, HHCare operates on empathy, compassion, inclusivity, and impact.We are
                                        about people and genuine care is provided by people and exists to help people.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-aim shadow p-3">
                                <h4 className="lh-lg mt-1">Our Vision</h4>
                                <p className="fs-6 text-muted">
                                    <small>
                                        To shape the future of healthcare delivery by providing convenient and accessible
                                        healthcare to every resident.
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-aim shadow p-3">
                                <h4 className="lh-lg mt-1">Our Vibe</h4>
                                <p className="fs-6 text-muted">
                                    <small>
                                        Every day, we are inventing what is
                                        possible.We make connections.We solve problems.We serve as a partner that patients
                                        can trust.
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;