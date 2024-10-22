import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { ProjectType } from "../types";
import { Link } from 'react-router-dom';
export const Project = ({ project }: { project: ProjectType, index: number }) => {
  return (
    <div key={project.title} className="w-full p-1 mb-4 shadow-2 block xl:block mx-auto border-round">
      <div className="flex flex-column lg:flex-row xl:align-items-start p-4 gap-4">
        <img width={150} height={150} className="!aspect-square object-contain" src={project.image} alt={project.title} />
        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-900">{project.title}</div>
            <Rating value={project.rating} readOnly cancel={false}></Rating>
            <div className="flex align-items-center gap-3">
              <span className="flex align-items-center gap-2">
                <i className="pi pi-info-circle"></i>
                <span className="font-semibold">{project.description}</span>
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            <Button icon="pi pi-eye" iconPos="right" className="w-fit h-fit p-2 flex flex-row items-center content-center justify-center">
              <Link className="p-2" to={project.location}>
                View
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
