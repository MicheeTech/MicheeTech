import Image from "next/image";
import { Header } from "./_components/Header";
import { Presentation } from "./_components/Presentation";
import { Projet } from "./_components/Projet";
import { Competences } from "./_components/Competences";
import Projects  from "./_components/Contact";
import { Footer } from "./_components/Footer";



export default function Home() {
  return (
   <main>
    <Header/>
    <Presentation/>
    <Projet/>
    <Competences/>
    <Projects/>
    <Footer/>
   </main>
  );
}
