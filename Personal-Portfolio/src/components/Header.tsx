import ThemeControl from "./ThemeControl";

export default function Header() {
  return (
    <header className="container site-header">
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#coursework">Coursework</a>
        <a href="#contact">Contact</a>
      </nav>

      <ThemeControl />
    </header>
  );
}
