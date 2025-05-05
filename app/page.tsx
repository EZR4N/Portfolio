import About_me from "@/components/About-me/About_me";
import Navbar from "@/components/navbar/Navbar";
import Tech_stack from "@/components/tech_stack/Tech_stack";
import Projects from '../components/projects/Projects';
import Contact_form from "@/components/contact/Contact_form";
import Footer from "@/components/footer/Footer";
import { LanguagesProvider } from "@/context/language_context";
export default function Home() {
  
  return (
    <LanguagesProvider>
      <header className="bg-[#0d1116] z-50 w-full fixed">
        <Navbar/>
      </header>
      
      <main className="flex flex-col items-center bg-[#0D1117]">
        <About_me/>
        <Tech_stack/>
        <Projects/>
        <Contact_form/>
      </main>
      <footer className="bg-[#0D1117]">
        <Footer/>
      </footer>
    </LanguagesProvider>
  );
}
