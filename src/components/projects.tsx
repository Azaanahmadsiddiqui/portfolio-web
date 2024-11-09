import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id:0,
        title:"Todo List",
        desc:"A React & TypeScript based app for managing and organizing your tasks efficiently.",
        img:"/project_01.png",
        tags: ["React", "Node", "CSS", "TypeScript"],
    },
    {
        id:1,
        title:"Countdown Timer",
        desc:"A Next.js and TypeScript powered website to track time with an interactive countdown feature.",
        img:"/project_02.png",
        tags:["Next.JS", "Node", "CSS", "TypeScript"], 
    },
]

const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grip gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects