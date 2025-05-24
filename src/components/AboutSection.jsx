export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:text-left">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate SOC Analyst & Beginner Bug Hunter
                        </h3>

                        <p className="text-muted-foreground">
                            With some experience in Security Analysis and Blue Teaming, I constantly experiment 
                            with new ways to enhance threat detection, break systems and improve my learning by starting my own SIEM system.
                        </p>

                        <p className="text-muted-foreground">
                            Graduating in September 2025 from the University of Adelaide, I hope to land a job in a company 
                            that values security, growth, and collaboration, where I can apply my skills and keep learning as a SOC Analyst.
                        </p>
    
                    </div>
                </div>
            </div>
        </section>
    )
}