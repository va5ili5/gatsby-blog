import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import resume from '../data/resume.yml'

const Resume = () => (
    <Layout>
        <Header />
        <main>
            <section className="container">
                <h3 className="title">{resume.name}</h3>
                <div className="resume-data">
                    <h4>Contact Details</h4>
                    <ul className="contact">
                        {resume.contact.map(({ media, url, icon }, i) => (
                            <li key={i}>
                                <i className={icon}></i>
                                <a href={url}>
                                    {media}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="resume-data">
                    <h4>Summary</h4>
                    <p className="post-text">{resume.summary}</p>
                </div>
                <div className="resume-data">
                    <h4>Experience</h4>
                    {resume.experience.map((exp, i) => (
                        <div key={i}>
                            <div className="flex-header">
                                <div className="flex-header-title">
                                    <i className="fa fa-building pinfo"></i>
                                    <h5>{exp.position} @
                                            <a href={exp.url}>{exp.company}</a>
                                    </h5>
                                </div>
                                <div>
                                    <p>{exp.duration}</p>
                                </div>
                            </div>
                            <p>{exp.location}</p>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
                <div className="resume-data">
                    <h4>Education</h4>
                    {resume.education.map((edu, i) => (
                        <div key={i}>
                            <div className="flex-header">
                                <div className="flex-header-title">
                                    <i className="fas fa-university"></i><h5>{edu.school}</h5>
                                </div>
                                <div>
                                    <p>{edu.date}</p>
                                </div>
                            </div>
                            <p>{edu.location}</p>
                            <p>{edu.degree}</p>
                            <p>{edu.grade}</p>
                        </div>
                    ))}
                </div>
                <div className="resume-data">
                    <h4>Skills</h4>
                    {resume.skills.map((skill, i) => (
                        <div key={i}>
                            <p><span className="skill">{skill.skill.title}</span> {skill.skill.values}</p>
                        </div>
                    ))}
                </div>
                <div className="resume-data">
                    <h4>Soft Skills</h4>
                    {resume.softskills.map((skill, i) => (
                        <div key={i}>
                            <p>{skill.sskill}</p>
                        </div>
                    ))}
                </div>
                <div className="resume-data">
                    <h4>Languages</h4>
                    {resume.languages.map((language, i) => (
                        <div key={i}>
                            <p>{language.language}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
        <Footer />
    </Layout>
)


export default Resume;