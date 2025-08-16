import { StarBackground } from "../components/StarBackgound"
import { ThemeToggle } from "../components/ThemeToggle"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillSection"
import { ProjectsSection } from "../components/ProjectSections"
import { ContactSection } from "@/components/ContactSection";
export const Home=() => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
        </div>
    )
}