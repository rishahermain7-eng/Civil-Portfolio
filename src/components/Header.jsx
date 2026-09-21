function Header() {
  return (
    <header className="header">
      <div className="logo">
        CK<span>.</span>
      </div>

      <nav className="nav">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <a
        href="/resume/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        RESUME <span>↗</span>
      </a>
    </header>
  );
}

export default Header;