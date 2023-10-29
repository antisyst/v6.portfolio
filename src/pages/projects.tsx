import React from 'react';
import styled from 'styled-components';
import ScrollReveal from '@/utils/ScrollReveal';
import projects from '@/config/projects.json'; 


const ProjectsRouteMain = styled.main `
  text-align: left;
  margin-top: 3vh;
`
const ProjectsConfigContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4vh;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`
const RouterActionTitle = styled.h1 `
  font-family: var(--font-clash);
  color: var(--color-component-white);
  border-bottom: 10px solid var(--color-component-main);
  padding-bottom: 6px;
  text-transform: uppercase;
  width: 20%;
  font-size: calc(10px + 5vmin);
  text-align: left;
  margin-bottom: 4vh;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`
const ProjectConfigItem = styled.div `
  display: flex;
  justify-content: center;
  width: 340px;
  flex-direction: column;
  align-items: center;
  padding: 17px;
  border-radius: 30px;
  border: 1.7px solid var(--color-component-main);
  height: 200px;
  background: rgba(0,0,0, 0.5);

  @media only screen and (max-width: 700px) {
    width: 330px;
  }
`
const ProjectItemName = styled.h2 `
  font-family: var(--font-clash);
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 6px;
`
const ProjectButtonRouter = styled.a `
  text-decoration: none;
  filter: drop-shadow(0 0 0.7rem var(--color-component-main));
  font-family: var(--font-clash);
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
  background: var(--color-component-main);
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
  border-radius: 30px;
  margin-top: 10px;
  transition: all 0.1s linear;
  color: var(--color-component-white);

  &:hover {
    filter: drop-shadow(0 0 0.4rem var(--color-component-main));
  }
`
interface WorkItem {
  WorksH1: string;
  domain: string;
}

const Projects = ({ projects }: { projects: WorkItem[] }) => {
  return (
    <ProjectsRouteMain>
      <ScrollReveal>
        <RouterActionTitle>Projects</RouterActionTitle>
      </ScrollReveal>
      <ProjectsConfigContainer>
        {projects.map((project: WorkItem, index: number) => (
          <ScrollReveal key={index}>
            <ProjectConfigItem>
              <ProjectItemName>{project.WorksH1}</ProjectItemName>
              <ProjectButtonRouter href={project.domain} target='_blank'>Visit Project</ProjectButtonRouter>
            </ProjectConfigItem>
          </ScrollReveal>
        ))}
      </ProjectsConfigContainer>
    </ProjectsRouteMain>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://raw.githubusercontent.com/antisyst/v5.portfolio/main/src/config/projects.json');
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}

export default Projects;