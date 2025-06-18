import { Box } from "lucide-react"

export const Writeup = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary transition-colors"> Writeups</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Read through some of my writeups I've completed!
            </p>
            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="/writeup"
                >
                    Writeups <Box size={16}/>
                </a>
            </div>
        </section>
    )
}