import Accueil from "@/app/components/accueil";
import About from "@/app/components/about";
import Portfolio from "@/app/components/portfolio";
import Contact from "@/app/components/contact";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
      <>
          <Navbar />
          <main>
              <Accueil />
              <About />
              <Portfolio />
              <Contact />
          </main>
      </>
  );
}
