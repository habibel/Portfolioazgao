import React from 'react'
import { SideBarContainer,
         Icon,
         CloseIcon,
         SideBarWrapper,
         SideBarMenu,
         SideBarLink} from './SideBarElements'

function SideBar({toggle, isOpen}) {
    return (
        <SideBarContainer onClick={toggle} isOpen={isOpen}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='About'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                        About
                    </SideBarLink>
                    <SideBarLink to='Services'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                        Services
                    </SideBarLink>
                    <SideBarLink to='Portfolio'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                        Portfolio
                    </SideBarLink>
                    <SideBarLink to='Contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}>
                        Contact
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
