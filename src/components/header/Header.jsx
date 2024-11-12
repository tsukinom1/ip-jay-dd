import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import MyButton from "../ui/MyButton.jsx";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";

import './Header.css'

import call from '../../assets/socials/call.png'
import whatsapp from '../../assets/socials/whatsapp-logo.png'
import telegram from '../../assets/socials/telegram-logo.png'
// import instagram from '../../assets/socials/instagram-logo.png'

function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        isDark
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark');

        localStorage.setItem('isDark', isDark);
    }, [isDark]);

    const changeTheme = () => {
        setIsDark(!isDark);
    }


    return (
        <Navbar className="navbar mb-5 p-3" expand="lg">
            <Container>
                <Navbar.Brand className="d-flex align-items-center"  as={Link} to="/about">
                    <span className="fs-24 ms-3" >IP JAY DD</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="fs-24 ms-3" as={Link} to="/about">О нас</Nav.Link>
                        <Nav.Link className="fs-24 ms-3" as={Link} to="/catalog">Каталог</Nav.Link>
                        <NavDropdown className="fs-24 ms-3" title="Связаться с нами">
                            <NavDropdown.Item href="#action/3.1">
                                <MyButton className="social-btn border-0">
                                    <a className="text-decoration-none text-white fs-18" href="tel:87478155105" target="_blank">
                                        <img className="social-img m-2" src={call} alt="call" /> Позвонить
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">
                                <MyButton className="social-btn border-0">
                                    <a className="text-decoration-none text-white fs-18" href="https://t.me/kakashi3592" target="_blank">
                                        <img className="social-img m-2" src={telegram} alt="telegram"/> Telegram
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <MyButton className="social-btn border-0">
                                <a className="text-decoration-none text-white fs-18" href="https://wa.me/7478155105" target="_blank">
                                        <img className="social-img m-2" src={whatsapp} alt="whatsapp" /> WhatsApp
                                    </a>
                                </MyButton>
                            </NavDropdown.Item>
                            {/*<NavDropdown.Item href="#action/3.3">*/}
                            {/*    <MyButton className="social-btn border-0">*/}
                            {/*        <a className="text-decoration-none text-white fs-18" href="#" target="_blank">*/}
                            {/*            <img className="social-img m-2" src={instagram} alt="viber" /> Instagram*/}
                            {/*        </a>*/}
                            {/*    </MyButton>*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                        <Button className='btn-secondary fs-24 ms-3' onClick={changeTheme}>Сменить тему</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;