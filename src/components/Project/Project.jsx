import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import projects from "../../utils/projects";

const Project = () => {
  const [load, setLoad] = useState(6);
  return (
    <div className="py-8 lg:py-16 border-b border-text-primary">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl lg:text-7xl font-semibold sm:font-bold">
          Projects
        </h1>
        <Button url="mailto:ram706860@gmail.com" text="contact me" />
      </div>
      <div className="projects uppercase py-8 lg:py-16 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-8 sm:gap-y-16">
        {projects.map((project, index) => {
          const { name, img, tags, repo, website } = project;
          return (
            index < load && (
              <div
                className="project flex flex-col gap-2"
                key={Date.now() * Math.random()}
              >
                <div className="project_img">
                  <Link to={website}>
                    <img className="object-cover" src={img} alt={name} />
                  </Link>
                </div>
                <h1 className="text-xl lg:text-2xl font-bold">{name}</h1>
                <div className="tags flex gap-2">
                  {tags.map((tag) => (
                    <h2
                      className="text-sm text-text-primary font-bold"
                      key={Date.now() * Math.random()}
                    >
                      {tag}
                    </h2>
                  ))}
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Project;
