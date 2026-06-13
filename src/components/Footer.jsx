// Footer.jsx — Pied de page minimaliste : favicon centré + email + GitHub + LinkedIn séparés par des points.
// Police Ultra Hyper appliquée en inline (fontFamily) car la classe Tailwind `font-hyper` se fait
// stripper les guillemets au build et certains navigateurs (Safari) ne résolvent pas correctement
// les family-names multi-mots sans quotes → fallback silencieux.
const HYPER = "'Ultra Hyper', 'Familjen Grotesk', sans-serif"

export default function Footer() {
  return (
    <footer
      className="max-w-[1280px] mx-auto px-16 py-8 mt-16 flex flex-col justify-center items-center gap-5"
      style={{ borderTop: '1px solid var(--border-divider)' }}
    >
      <div className="flex items-center gap-4">
        <a
          href="mailto:kelvinutk@gmail.com"
          className="text-[14px] text-muted hover:text-accent transition-colors duration-200"
          style={{ fontFamily: HYPER, letterSpacing: '0.05em' }}
        >
          kelvinutk@gmail.com
        </a>
        <span className="text-muted/30 select-none">·</span>
        <img
          src="/favicon.jpg"
          alt=""
          aria-hidden="true"
          className="w-10 h-10 rounded-xl object-cover"
        />
        <span className="text-muted/30 select-none">·</span>
        <a
          href="https://github.com/kelvinuthaya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-muted hover:text-accent transition-colors duration-200"
          style={{ fontFamily: HYPER, letterSpacing: '0.05em' }}
        >
          GitHub
        </a>
        <span className="text-muted/30 select-none">·</span>
        <a
          href="https://www.linkedin.com/in/kelvinuthaya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-muted hover:text-accent transition-colors duration-200"
          style={{ fontFamily: HYPER, letterSpacing: '0.05em' }}
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
