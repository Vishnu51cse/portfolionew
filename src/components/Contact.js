import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="contact-container my-5 p-3 p-md-5">
            <h2>Contact Details</h2>
            <div className="contact-info">
                <p>Phone: +91-637-999-3561</p>
                <p>Email: <a href="mailto:vishnuprasad.contact@gmail.com">vishnuprasad.contact@gmail.com</a></p>
            </div>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/vishnuprasad5" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </button>
                </a>
                <a href="https://github.com/Vishnu51cse" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </button>
                </a>
                <a href="https://leetcode.com/vishnu5124/" target="_blank" rel="noopener noreferrer">
                    <button>
                        <FontAwesomeIcon icon={faLaptop} /> LeetCode
                    </button>
                </a>
            </div>
        </Container>
    );
};

export default Contact;
