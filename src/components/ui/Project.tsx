import { motion } from "framer-motion";

type ProjectType = {
  title: string,
  description: string,
  location: string,
  date: string,
  timestamp: number,
  rating: number,
}

/** Project representation class */
export class Project {
  _project: ProjectType;

  constructor(project: ProjectType) {
    this._project = project;
  }

  /** Get current project */
  get project(): ProjectType {
    return this._project;
  }

  /** Get project title */
  get title(): string {
    return this.project.title;
  }
  /** Get project location */
  get location(): string {
    return this.project.location;
  }
  /** Get project timestamp */
  get timestamp(): number {
    return this.project.timestamp;
  }
  /** Get project rating */
  get rating(): number {
    return this.project.rating;
  }

  /** Set new project */
  set project(project: ProjectType) {
    this._project = project;
  }

  /** Set project title */
  set title(newTitle: string) {
    this.project.title = newTitle;
  }
  /** Set project description */
  set description(newDescription: string) {
    this.project.description = newDescription;
  }
  /** Set project location */
  set location(newLocation: string) {
    this.project.location = newLocation;
  }
  /** Set project timestamp */
  set timestamp(newTimestamp: number) {
    this.project.timestamp = newTimestamp;
  }
  /** Set project rating */
  set rating(newRating: number) {
    this.project.rating = newRating;
  }

  public renderProject() {
    return (
      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-4xl"
        key={this.project.title}
      >
        {/* Project Showcase */}
        <div className="w-9/12 md:10/12 mx-auto lg:min-w-40 h-fit my-0">
          <article className="group">
            <a href={this.project.location} target="_blank">
              <h2 className="text-2xl md:text-3xl group-focus:text-blue-600 group-hover:text-blue-600 duration-300 ease-in-out transition-colors">{this.project.title}</h2>
              <p className="text-lg group-focus:text-slate-300 group-hover:text-slate-300 duration-300 ease-in-out transition-colors">{this.project.date}</p>
              <p className="text-lg group-focus:text-slate-300 group-hover:text-slate-300 duration-300 ease-in-out transition-colors">{this.project.description}</p>
            </a>
          </article>
        </div>
      </motion.div>
    )
  }
}
