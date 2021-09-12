import React,{useState, useEffect} from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { BiMenuAltRight } from "react-icons/bi";
import MyLogo from '../../images/MyLogo.svg'
import { Nav,
         NavContainer,
         NavLogo,
         NavItem,
         NavLinks,
         NavMenu,
         MobileIcon } from './NavbarElements'

function Navbar({toggle}) {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if (window.scrollY >= 80)
        {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

    }, []);

const toggleHome = () => {
    scroll.scrollToTop();
};

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={MyLogo} alt="" /></NavLogo>

                    <MobileIcon onClick={toggle}>
                        <BiMenuAltRight />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to='About'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Portfolio'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
