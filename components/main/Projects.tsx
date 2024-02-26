import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20 z-50 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="https://e-commerce-app-test.vercel.app/">
          <ProjectCard
           
            src="/e-commerce-app-test.vercel.app.png"
            title="E-commerce App With Nextjs"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Link>
        <Link href="https://courses-spider.vercel.app/">
          <ProjectCard
           
            src="/courses-spider.vercel.app.png"
            title="Courses webSite With Nextjs & Strapi"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </Link>
        <Link href="https://cafe-chi.vercel.app/">
          <ProjectCard
          
            src="/cafe-ezmodeus.vercel.app.png"
            title="Cafe Single app"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          /></Link>
      </div>
    </div>
  );
};

export default Projects;
