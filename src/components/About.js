import React from 'react';
import './About.css'; // Import your custom CSS if needed
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="about-container my-5">
            <h2 className="text-center">About Me</h2>
            <Row>
                <Col xs={12}>
                    <h3>Experience</h3>
                    <ul>
                        <li>
                            <strong>Software Engineer Trainee </strong> (2025-Present)
                            <br />
                            Novac Technology Solutions ,Chennai.
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            <strong>Bachelor in Engineering (B.E.) in Computer Science And Engineering</strong> (2021 - 2025)
                            <br />
                            Kongu Engineering College, Perundurai. CGPA: 7.35
                        </li>
                        <li>
                            <strong>Higher Secondary Education</strong> (2021)
                            <br />
                            KVS English Medium School, Virudhunagar. Percentage: 92.2
                        </li>
                        <li>
                            <strong>Secondary Education</strong> (2019)
                            <br />
                            KVS English Medium School, Virudhunagar. Percentage: 86.6
                        </li>
                    </ul>
                </Col>
                <Col xs={12}>
                    <h3>Skills and Interests</h3>
                    <ul>
                        <li><strong>Languages:</strong> C#, VB.NET, JavaScript, Python, Java</li>
                        <li><strong>Frontend:</strong> HTML, CSS, React.js, Bootstrap</li>
                        <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
                        <li><strong>Database:</strong> SQL Server, MongoDB</li>
                        <li><strong>Tools:</strong> Git, GitHub, Bitbucket, Postman, Visual Studio, SSMS</li>
                        <li><strong>Practices:</strong> Agile, Jira</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
