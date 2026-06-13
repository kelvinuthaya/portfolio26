// Navbar.jsx — barre flottante "dynamic island" en haut, fixée pendant tout le scroll.
// - Détecte la section visible avec un IntersectionObserver pour surligner le lien actif.
// - Le wrapper extérieur centre via translateX(-50%) ; le nœud <nav> applique le backdrop-filter
//   isolé en couche GPU (translateZ(0)) — c'est CE découplage qui empêche le texte d'être flou.
// - Le bouton CV utilise le dégradé violet (couleur de la section Projets) pour ressortir du reste.
// - FIX bouton CV : la nav a maintenant un max-width explicite + overflow:hidden sur le conteneur
//   pour que le bouton ne puisse jamais déborder de la courbe pill.

import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { href: '#hero',        label: 'Accueil',     sectionId: 'hero'        },
  { href: '#competences', label: 'Compétences', sectionId: 'competences' },
  { href: '#projets',     label: 'Projets',     sectionId: 'projets'     },
  { href: '#stages',      label: 'Stages',      sectionId: 'stages'      },
  { href: '#bilan',       label: 'Bilan',       sectionId: 'bilan'       },
]

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
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

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

  return (
    // Wrapper de centrage — translateX séparé du nœud blur pour éviter le flou texte.
    // max-width: calc(100vw - 32px) garantit que la pill ne dépasse jamais l'écran.
    <div
      style={{
        position: 'fixed',
        top: '18px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        willChange: 'transform',
        maxWidth: 'calc(100vw - 32px)',
        width: 'max-content',
      }}
    >
      <nav
        // overflow:hidden coupe tout ce qui sort du border-radius pill — le bouton CV
        // ne peut plus physiquement dépasser la bordure arrondie.
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(20px) saturate(140%)',
          WebkitBackdropFilter: 'blur(20px) saturate(140%)',
          border: '1px solid rgba(255,255,255,0.9)',
          borderRadius: '100px',
          // padding-right serré : le bouton CV est le dernier enfant et se cale
          // naturellement contre la bordure arrondie avec 12px de marge interne.
          padding: '8px 10px 8px 10px',
          minHeight: '60px',
          boxShadow: '0 8px 32px rgba(20,100,130,0.14), inset 0 1px 0 rgba(255,255,255,0.95)',
          transform: 'translateZ(0)',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          overflow: 'hidden',
        }}
      >
        {/* Photo de profil */}
        <a href="#hero" aria-label="Accueil" style={{ flexShrink: 0, marginLeft: '2px' }}>
          <img
            src="/pp.JPG"
            alt="Kelvin Uthayakumar"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              objectFit: 'cover',
              display: 'block',
              boxShadow: '0 2px 6px rgba(26,138,170,0.22)',
            }}
          />
        </a>

        {/* Nom — caché sous 768 px */}
        <div
          className="nav-name"
          style={{ flexDirection: 'column', lineHeight: 1.2, flexShrink: 0, paddingRight: '4px' }}
        >
          <span style={{ fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 700, fontSize: '14px', color: '#0a1a24' }}>
            Kelvin
          </span>
          <span style={{ fontFamily: "'Familjen Grotesk', sans-serif", fontSize: '9px', letterSpacing: '0.14em', color: '#5a9aaa', textTransform: 'uppercase' }}>
            UTHAYAKUMAR
          </span>
        </div>

        {/* Pills de navigation — cachées sous 768 px, remplacées par le hamburger */}
        <div
          className="nav-pills"
          style={{
            alignItems: 'center',
            gap: '2px',
            borderRadius: '100px',
            background: 'rgba(20,100,130,0.06)',
            padding: '4px',
            flexShrink: 0,
          }}
        >
          {navLinks.map(({ href, label, sectionId }) => {
            const isActive = active === sectionId
            return (
              <a
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontFamily: "'Familjen Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  padding: '7px 13px',
                  borderRadius: '100px',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  ...(isActive
                    ? {
                        background: 'linear-gradient(145deg, #3ec8e0 0%, #1a8aaa 100%)',
                        color: '#fff',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), 0 2px 6px rgba(26,138,170,0.30)',
                      }
                    : { color: '#3a6a7a' }),
                }}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Icônes sociales — cachées sous 768 px */}
        <div
          className="nav-socials"
          style={{ alignItems: 'center', gap: '10px', flexShrink: 0, padding: '0 4px' }}
        >
          {[
            { href: 'https://github.com/kelvinuthaya', icon: <FiGithub size={17} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/kelvinuthaya', icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
            { href: 'mailto:kelvinutk@gmail.com', icon: <FiMail size={17} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              style={{ color: '#3a6a7a', display: 'flex', alignItems: 'center', padding: '4px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a7090')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#3a6a7a')}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bouton CV — dernier enfant, collé contre le bord droit de la pill.
            marginRight: 0 + padding interne calibré pour rester dans la courbe. */}
        <a
          href="/CV_KELVIN_UTHAYAKUMAR_04_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Familjen Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '12px',
            color: '#fff',
            background: 'linear-gradient(145deg, var(--c-proj-light) 0%, var(--c-proj) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), 0 2px 6px var(--c-proj-shadow)',
            letterSpacing: '0.04em',
            // Padding horizontal réduit pour rester dans la pill + marginRight pour l'espace final
            padding: '9px 16px',
            borderRadius: '100px',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            display: 'inline-block',
            lineHeight: 1,
            marginRight: '2px',
          }}
        >
          CV
        </a>

        {/* Hamburger — uniquement sous 768 px */}
        <button
          type="button"
          className="nav-burger"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            width: '38px',
            height: '38px',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(255,255,255,0.85)',
            color: '#1a5a72',
            cursor: 'pointer',
            marginRight: '2px',
          }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {/* Panneau mobile */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: '260px',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px) saturate(140%)',
            WebkitBackdropFilter: 'blur(20px) saturate(140%)',
            border: '1px solid rgba(255,255,255,0.9)',
            borderRadius: '24px',
            padding: '12px',
            boxShadow: '0 12px 32px rgba(20,100,130,0.18), inset 0 1px 0 rgba(255,255,255,0.95)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map(({ href, label, sectionId }) => {
              const isActive = active === sectionId
              return (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  style={{
                    fontFamily: "'Familjen Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '15px',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    background: isActive
                      ? 'linear-gradient(145deg, var(--c-proj-light) 0%, var(--c-proj) 100%)'
                      : 'transparent',
                    color: isActive ? '#fff' : '#2a5060',
                  }}
                >
                  {label}
                </a>
              )
            })}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              paddingTop: '12px',
              marginTop: '8px',
              borderTop: '1px solid rgba(20,100,130,0.12)',
            }}
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