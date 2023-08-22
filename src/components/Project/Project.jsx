import React, { useRef, useState } from "react";
import Button from "../../UI/Button/Button";
import projects from "../../utils/projects";

const Project = () => {
  const [load, setLoad] = useState(6);
  const [loadingStatus, setLoadingStatus] = useState("more");
  const projectLoadRef = useRef(null);

  const handleLoading = () => {
    setLoad((prev) => prev + 4);
    if (load >= projects.length - 4) setLoadingStatus("less");
    if (loadingStatus === "less") {
      setLoadingStatus("more");
      setLoad(6);
    }
    projectLoadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="py-8 lg:py-16 border-b border-text-primary">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl lg:text-7xl font-semibold sm:font-bold">
          Projects
        </h1>
        <Button url="mailto:ram706860@gmail.com" text="contact me" />
      </div>
      <div className="projects uppercase py-8 lg:py-16 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-x-8 sm:gap-y-16">
        {projects.map((project, index) => {
          const { name, img, tags, repo, website } = project;
          return (
            index < load && (
              <div
                className="project flex flex-col gap-2"
                key={Date.now() * Math.random()}
              >
                <div className="project_img relative group">
                  <div className="hidden group-hover:lg:flex flex-col justify-center items-center gap-8 absolute top-0 left-0 w-full h-full bg-backdrop text-lg">
                    <Button text={"view project"} url={website} />
                    <Button text={"view code"} url={repo} />
                  </div>
                  <img
                    className="object-cover"
                    src={img}
                    alt={name}
                    loading="lazy"
                  />
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
                <div className="lg:hidden flex gap-4 mt-2">
                  <Button text={"view project"} url={website} />
                  <Button text={"view code"} url={repo} />
                </div>
              </div>
            )
          );
        })}
      </div>
      <div
        className="dropdown flex justify-center lg:justify-start"
        onClick={handleLoading}
        id="loading_status"
        ref={projectLoadRef}
      >
        <Button text={`show ${loadingStatus}...`} url={""} />
      </div>
    </div>
  );
};

export default React.memo(Project);
