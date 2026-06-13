// Navbar.jsx — barre flottante "dynamic island" en haut, fixée pendant tout le scroll.
// - Détecte la section visible avec un IntersectionObserver pour surligner le lien actif.
// - Le wrapper extérieur centre via translateX(-50%) ; le nœud `<nav>` applique le backdrop-filter
//   isolé en couche GPU (translateZ(0)) — c'est CE découplage qui empêche le texte d'être flou.
// - Le bouton CV utilise le dégradé violet (couleur de la section Projets) pour ressortir du reste.

import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'

// Liens visibles dans la pill centrale + ancre pour chaque section.
const navLinks = [
  { href: '#hero',        label: 'Accueil',     sectionId: 'hero'        },
  { href: '#competences', label: 'Compétences', sectionId: 'competences' },
  { href: '#projets',     label: 'Projets',     sectionId: 'projets'     },
  { href: '#stages',      label: 'Stages',      sectionId: 'stages'      },
  { href: '#bilan',       label: 'Bilan',       sectionId: 'bilan'       },
]

// Toutes les sous-sections de la page d'accueil (hero, intro, formation, explorer)
// sont regroupées sous l'entrée nav "Accueil".
const sectionToActive = {
  hero: 'hero',
  introduction: 'hero',
  formation: 'hero',
  explorer: 'hero',
  competences: 'competences',
  projets: 'projets',
  stages: 'stages',
  bilan: 'bilan',
}

export default function Navbar() {
  const [active, setActive] = useState('hero')
  // État du panneau mobile (≤ 768 px). Ferme automatiquement après un clic sur un lien.
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  // Observe les sections : celle dont le haut est dans la "bande" centrale de l'écran
  // (entre 30 % du haut et 45 % du bas via rootMargin) devient la section active.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          const id = visible[0].target.id
          setActive(sectionToActive[id] || 'hero')
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    )

    Object.keys(sectionToActive).forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Le conteneur extérieur gère le centrage (transform: translateX) pour ne pas être
  // mêlé au backdrop-filter — un transform fractionnaire sur le même nœud que le blur
  // produit un flou sur le texte. Le nœud blur est isolé en couche GPU via translateZ(0).
  return (
    <div
      style={{
        position: 'fixed',
        top: '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        willChange: 'transform',
      }}
    >
      <nav
        className="navbar-pill flex items-center gap-3"
        style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(255,255,255,0.9)',
          borderRadius: '100px',
          // Padding gauche/droit plus généreux pour que le bouton CV ne mange pas la courbe pill.
          padding: '10px 14px 10px 18px',
          minHeight: '64px',
          boxShadow: '0 8px 32px rgba(20,100,130,0.14), inset 0 1px 0 rgba(255,255,255,0.95)',
          transform: 'translateZ(0)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* KU logo badge */}
        <a
          href="#hero"
          className="w-10 h-10 rounded-[14px] flex items-center justify-center text-white font-familjen font-bold text-[14px] shrink-0"
          style={{
            background: 'linear-gradient(145deg, #3ec8e0 0%, #1a8aaa 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.12), 0 2px 6px rgba(26,138,170,0.30)',
            letterSpacing: '0.02em',
          }}
          aria-label="Accueil"
        >
          KU
        </a>

        {/* Name */}
        <div className="hidden md:flex flex-col leading-tight shrink-0 pr-1">
          <span className="font-familjen font-bold text-[14px] text-ku-text">Kelvin</span>
          <span
            className="font-familjen text-[9px] uppercase"
            style={{ letterSpacing: '0.14em', color: '#5a9aaa' }}
          >
            UTHAYAKUMAR
          </span>
        </div>

        {/* Nav pills container */}
        <div
          className="hidden lg:flex items-center gap-1 rounded-full"
          style={{ background: 'rgba(20,100,130,0.06)', padding: '5px' }}
        >
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = active === sectionId
            return (
              <a
                key={href}
                href={href}
                className="block font-familjen font-semibold text-[13px] px-3.5 py-2 rounded-full transition-colors duration-200"
                style={
                  isActive
                    ? {
                        background: 'linear-gradient(145deg, #3ec8e0 0%, #1a8aaa 100%)',
                        color: '#fff',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), 0 2px 6px rgba(26,138,170,0.30)',
                        letterSpacing: '0.02em',
                      }
                    : { color: '#3a6a7a', letterSpacing: '0.02em' }
                }
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3 shrink-0 px-1">
          <a
            href="https://github.com/kelvinuthaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200"
            style={{ color: '#3a6a7a' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a7090')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#3a6a7a')}
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kelvinuthaya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200"
            style={{ color: '#3a6a7a' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a7090')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#3a6a7a')}
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="mailto:kelvinutk@gmail.com"
            aria-label="Email"
            className="transition-colors duration-200"
            style={{ color: '#3a6a7a' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a7090')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#3a6a7a')}
          >
            <FiMail size={18} />
          </a>
        </div>

        {/* CV CTA — dégradé violet (couleur de la section Projets) pour se distinguer du reste de la nav.
            Padding/font calibrés pour que le pill tienne dans la courbe du island. */}
        <a
          href="/CV_KELVIN_UTHAYAKUMAR_04_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-familjen font-semibold text-[12.5px] text-white rounded-full transition-opacity hover:opacity-90 shrink-0"
          style={{
            background: 'linear-gradient(145deg, var(--c-proj-light) 0%, var(--c-proj) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), 0 2px 6px var(--c-proj-shadow)',
            letterSpacing: '0.02em',
            padding: '8px 14px',
            lineHeight: 1.2,
          }}
        >
          CV
        </a>

        {/* Hamburger — visible UNIQUEMENT sous md (≤ 768 px) ; ouvre le panneau mobile ci-dessous. */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center shrink-0 rounded-full transition-colors"
          style={{
            width: '40px',
            height: '40px',
            background: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(255,255,255,0.85)',
            color: '#1a5a72',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.85)',
          }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Panneau mobile — nav links + socials, affiché sous le island uniquement quand menuOpen.
          `md:hidden` → invisible au-dessus de 768 px (le menu pills + socials reprennent leur place). */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '260px',
            background: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: '24px',
            padding: '12px',
            boxShadow: '0 12px 32px rgba(20,100,130,0.18), inset 0 1px 0 rgba(255,255,255,0.95)',
          }}
        >
          <div className="flex flex-col">
            {navLinks.map(({ href, label, sectionId }) => {
              const isActive = active === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="font-familjen font-semibold text-[15px] rounded-xl transition-colors"
                  style={{
                    padding: '12px 16px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    background: isActive ? 'linear-gradient(145deg, var(--c-proj-light) 0%, var(--c-proj) 100%)' : 'transparent',
                    color: isActive ? '#fff' : '#2a5060',
                    letterSpacing: '0.02em',
                  }}
                >
                  {label}
                </a>
              )
            })}
          </div>

          <div
            className="flex items-center justify-center gap-6 pt-3 mt-2"
            style={{ borderTop: '1px solid rgba(20,100,130,0.12)' }}
          >
            <a href="https://github.com/kelvinuthaya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#3a6a7a', padding: '8px' }}>
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/kelvinuthaya" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#3a6a7a', padding: '8px' }}>
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:kelvinutk@gmail.com" aria-label="Email" style={{ color: '#3a6a7a', padding: '8px' }}>
              <FiMail size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
