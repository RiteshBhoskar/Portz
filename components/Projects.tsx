import { projectsData } from "@/lib/data";


export default function Projects() {
    return (
        <section className="h-full w-full flex flex-col sm:flex-row sm:flex-wrap">
            {projectsData.map((project) => (
                <div key={project.id} className="w-full sm:w-1/2 p-4 flex flex-col ">
                    <div className="h-full w-full overflow-clip rounded-md">
                    <img src={project.image} alt="project image " className="rounded-md project-image transition-transform duration-300 hover:cur hover:scale-105" />
                    </div>
                    <div className="flex justify-between text-xl font-inter font-semibold text-white py-7">
                        <h4 className="flex flex-col">
                            <span>
                            (COST©-{
                                project.cost
                            })
                            </span>
                            <span>
                            {project.title}
                            </span>
                        </h4>
                        <p className="items-end flex">
                            ({project.tag})
                        </p>
                        <p className="items-end flex">
                            [
                             {
                              project.id
                             }
                            ]
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}