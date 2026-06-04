import ContactUs from "@/components/ContactUs";

const Footer = () => (
  <footer className="mt-16 border-t border-white/10 bg-slate-950 text-slate-300">
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm md:grid-cols-[1fr_auto] md:px-6">
      <div>
        <p className="font-bold text-white">Tankistebi</p>
        <p className="mt-2 max-w-xl">Mission-based coding, maths, and physics practice with RPG progression.</p>
      </div>
      <nav className="flex flex-wrap gap-4 md:justify-end" aria-label="Footer navigation">
        <ContactUs />
      </nav>
    </div>
  </footer>
);

export default Footer;
