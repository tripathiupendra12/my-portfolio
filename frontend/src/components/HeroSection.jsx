import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section
         id="Home" 
         className="relative min-h-screen flex flex-col items-center justify-center px-4"
         >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Upendra</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">Tripathi</span>
                    </h1>

                    <p>
                        I'am a passionate Full Stack Developer with a strong focus on building modern, responsive, and efficient web applications.
                        This portfolio showcases my expertise and creative approach to presenting my technical skills, projects and my hands on 
                        experience
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-1">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
         </section>
    )
}