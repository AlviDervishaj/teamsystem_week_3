import { Project } from "./Project";
import { projects } from "../utils";
import { ProjectType } from "../types";
import { DataView } from 'primereact/dataview';

export const Projects = () => {

  const listTemplate = (_projects: ProjectType[]) => {
    if (!_projects || _projects.length === 0) return null;

    return <div className="grid grid-nogutter">{
      _projects.map((project, index) => {
        return <Project key={project.title} project={project} index={index} />
      })}</div>;
  };
  return (
    <div className="w-full h-fit px-2 pt-2 mx-auto" id="projects">
      <h1 className="text-center text-5xl p-6">Projects</h1>

      <div className="card">
        <DataView value={projects} listTemplate={listTemplate} />
      </div>
    </div>
  )
}
