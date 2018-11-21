import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import resume from '../data/resume.yaml'

const Resume = () => {
    const title = 'My Resume';
    const tagline = 'Here you can a description of my experience and the positions I have worked so far.';
    
    return (
        <Layout>
            <Header title={title} tagline={tagline}/>
            <section className="container">
                <div className="flex-container">
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
                                    <i className="fa fa-building pinfo"></i><h5>{exp.position} @ {exp.company}</h5></div>
                                <p>{exp.location}</p>
                                <p>{exp.duration}</p>
                                <p>Duties:</p>
                                <ul className="contact">
                                    {exp.duties.map((duty, i) => (
                                        <li key={i}>{duty.duty}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="resume-data">
                        <h4>Education</h4>
                        {resume.education.map((edu, i) => (
                            <div key={i}>
                                <div className="flex-header">
                                    <i className="fas fa-university"></i><h5>{edu.school}</h5></div>
                                <p>{edu.location}</p>
                                <p>{edu.degree}</p>
                                <p>{edu.date}</p>
                                <p>{edu.grade}</p>
                            </div>
                        ))}
                    </div>
                    <div className="resume-data">
                        <h4>Skills</h4>
                        {resume.skills.map((skill, i) => (
                            <div key={i}>
                                <p>{skill.skill}</p>
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
                </div>

            </section>
        </Layout>
    )
}


export default Resume;