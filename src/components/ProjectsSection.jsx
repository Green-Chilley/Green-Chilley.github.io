
const projects = [
    {
        id: 1,
        title: "Small Game on Roblox",
        description: "A backrooms inspired game using procedural generation.",
        image: "/projects/project1.png",
        tags: ["Luau"],
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Small VR game created with Unity",
        description: "My first project using Unity and VR API horror based game.",
        image: "/projects/project2.png",
        tags: ["Unity, C#"],
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Reverse Engineering Tool",
        description: "A GNU Radio application for RF telemetry signal decoding and analysing remote control car signals.",
        image: "/projects/project3.png",
        tags: ["C++, Python"],
        githubUrl: "#",
    },
]

export const ProjectsSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my completed projects done over my time in University.
                </p>
            </div>
        </section>
    )
}