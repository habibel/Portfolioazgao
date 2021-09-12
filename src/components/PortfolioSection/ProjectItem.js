import React from 'react'


import {
    ProjectCard,
    LinkItem,
    ProjectImg,
    ProjectText,
    ProjectH2,
    ProjectP
                } from './PortfolioElements'

function ProjectItem({
    id,name, Description , img
}) {
    return (
        <>
            <ProjectCard>

                <LinkItem to="/project">
                    <ProjectImg src={img}/>
                </LinkItem>

                <ProjectText>
                    <ProjectH2>{name}</ProjectH2>
                    <ProjectP>{Description}</ProjectP>
                </ProjectText>

            </ProjectCard>
        </>
    )
}

export default ProjectItem
