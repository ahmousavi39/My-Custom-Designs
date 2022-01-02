import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, Form, Offcanvas, FormControl, Button } from 'react-bootstrap';
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs"
import styles from './Navbar.module.css';


const NavbarCom = () => {
    let currentWidth = window.innerWidth;
    window.addEventListener("resize", function () {
        currentWidth = window.innerWidth;
    });

    return (
        <div>
            <Navbar bg="transparent" expand="lg" className={styles.navbar} id={styles.desktop} >
                <Container fluid >
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand href="/"><strong className={styles.brandName}>AmirTech</strong> <span id={styles.logoDivider}></span>
                        </Navbar.Brand>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', marginLeft: '15px' }}
                            navbarScroll
                        >
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/">Home</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/articles">Articles</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/podcasts">Podcasts</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/courses">Courses</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/open-source-projects">Open-Source-Projects</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <BsTwitter className={styles.socialMediaIcons}></BsTwitter>
                            <BsFacebook className={styles.socialMediaIcons}></BsFacebook>
                            <BsInstagram className={styles.socialMediaIcons}></BsInstagram>
                            <BsLinkedin className={styles.socialMediaIcons}></BsLinkedin>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <Navbar bg="transparent" expand={false} id={styles.mobile}>
                <Container fluid style={{margin: '0', padding: '0'}}>
                    <Navbar.Brand href="/"><Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.toggleIcon} style={{border: "none", boxShadow: "0 0 0 0rem"}}/> <strong className={styles.brandName}>AmirTech</strong></Navbar.Brand>
                    <Form className="d-flex" style={{marginBottom: '5px'}}>
                                <BsTwitter className={styles.socialMediaIcons}></BsTwitter>
                                <BsFacebook className={styles.socialMediaIcons}></BsFacebook>
                                <BsInstagram className={styles.socialMediaIcons}></BsInstagram>
                                <BsLinkedin className={styles.socialMediaIcons}></BsLinkedin>
                            </Form>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        style={{ maxWidth: '70%'}}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/">Home</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/articles">Articles</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/podcasts">Podcasts</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/courses">Courses</Nav.Link>
                            <Nav.Link className={styles.navbarlink} bsPrefix="nothing" href="/open-source-projects">Open-Source-Projects</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavbarCom;