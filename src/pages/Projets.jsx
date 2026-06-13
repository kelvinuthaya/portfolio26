// Projets.jsx — Section #projets : carrousel de cards paginé par flèches.
//
// Mécanique :
//   - `cardsPerPage` s'adapte à la largeur écran (3 / 2 / 1 — voir useEffect resize).
//   - Le track est un flex de toutes les cards ; chaque "page" = translateX d'un viewport + 1 gap.
//   - Boutons flèches en haut + dots de pagination en bas pour aller directement à une page.
//
// Couleur d'accent : violet (overridé via #projets dans index.css).
// Les boutons "Voir le code / la démo / le dossier" et le badge année reprennent automatiquement
// `var(--btn-bg)` violet sans avoir à le coder dans chaque card.
//
// Ordre d'affichage : tri stable décroissant sur `sortKey` (le plus récent d'abord).

import { useEffect, useRef, useState } from 'react'

const DEVICON = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

// Liste des projets ordonnée du plus récent au plus ancien (sortKey = numéro de tri "manuel"
// pour gérer les égalités d'année — un projet du S6 est plus récent qu'un projet du S5).
const projetsSrc = [
  {
    id: 'panamarket',
    type: 'Stage BUT 3',
    year: '2026',
    sortKey: 2026.7,
    titre: 'Panam\'arket',
    objectif: 'Conception et développement d\'une Progressive Web App de gestion logistique pour un commerce de proximité, en complément d\'une caisse certifiée NF 525.',
    role: 'Conception de l\'architecture full-stack et développement des modules métier (Ruptures, Approvisionnement, Dashboard, Catalogue), authentification Supabase multi-rôles et intégration d\'un parser PDF custom.',
    techs: ['react', 'tailwindcss', 'supabase', 'postgresql'],
    duree: ' Avril → juillet 2026 (16 semaines)',
    stack: ['React 18', 'Vite', 'Tailwind v3', 'Supabase', 'PostgreSQL', 'ZXing', 'jsPDF', 'Recharts'],
  },
  {
    id: 'fmtm',
    type: 'Projet perso',
    year: '2026',
    sortKey: 2026.65,
    titre: 'FMTM',
    objectif: 'Application web de coaching sportif personnel : planification des entraînements, minuteur de séance interactif et suivi nutritionnel personnalisé.',
    role: 'Développeur full-stack : conception, design et développement.',
    techs: ['react', 'typescript', 'tailwindcss'],
    equipe: 'Projet personnel',
    duree: 'Avril 2026 — en cours',
    stack: ['React 18', 'Vite', 'Tailwind CSS', 'React Router v6', 'localStorage', 'Lucide React'],
    primary: { label: 'Github', href: 'https://github.com/kelvinuthaya/FMTM' },
  },
  {
    id: 'trackstar-lofi',
    type: 'Chef-d\'œuvre R506',
    year: '2026',
    sortKey: 2026.6,
    titre: 'TRACKSTAR CITY LO-FI',
    objectif: 'Créer une scène animée illustrant les notions de programmation multimédia : parallaxe, dessin procédural, animation, son.',
    role: 'Seul développeur : paysage urbain nocturne, McLaren P1, étoiles, arbres — 100 % vectoriel/procédural, zéro asset externe.',
    resultat: 'Scène fluide à FPS fixe, musique lofi intégrée, parallaxe multi-plans, rapport technique livré.',
    techs: ['python'],
    duree: 'Semestre 6 (2025-2026)',
    stack: ['Python', 'Pygame', 'Primitives géométriques', 'Canvas Cycle (inspiration)'],
    primary: { label: 'Github', href: 'https://github.com/kelvinuthaya/trackstar_city' },
  },
  {
    id: 'linkup',
    type: 'SAÉ Entrepreneuriat',
    year: '2026',
    sortKey: 2026.5,
    titre: 'LinkUp',
    objectif: 'Concevoir un projet entrepreneurial complet : app mobile d\'organisation de sorties entre amis (3 clics).',
    role: 'Co-fondateur : benchmark concurrentiel (Doodle, Partiful), SWOT, BMC, proposition de valeur, MVP, stratégie Lean.',
    resultat: 'Dossier Entrepreneurial complet + maquette MVP + objectif SMART (beta 3 mois, complétion ≥ 70 %).',
    techs: ['figma'],
    equipe: '4 personnes',
    duree: 'Semestre 6 (2025-2026)',
    stack: ['SWOT', 'BMC', 'SMART', 'Ahrefs', 'Google Maps API', 'Lean Startup'],
    primary: { label: 'Voir le dossier', href: '/linkup.pdf' },
  },
  {
    id: 'voronoi',
    type: 'SAÉ S601',
    year: '2026',
    sortKey: 2026.4,
    titre: 'Voronoï & Risques IA',
    objectif: 'Implémenter Voronoï from scratch sans IA, comparer à ≥ 4 IAGen, puis rédiger un rapport individuel sur les risques IA générative.',
    role: 'Chef de projet : coordination de l\'équipe et pilotage des livrables. Contribution au développement (Phase 1, rasterisation N×N).',
    resultat: 'Programme fonctionnel, rapport individuel "Risques IA : Environnement"',
    techs: ['python'],
    equipe: 'Équipe KEYRIL',
    duree: 'Semestre 6 (2025-2026)',
    stack: ['Python', 'matplotlib', 'ChatGPT', 'Copilot', 'Gemini', 'Mistral'],
    primary: { label: 'Github', href: 'https://github.com/404reo01/SAE_S6' },
  },
  {
    id: 'trackstar',
    type: 'SAÉ S501',
    year: '2025',
    sortKey: 2025.5,
    titre: 'TRACKSTAR',
    objectif: 'Application mobile de recommandation musicale 100 % offline avec filtrage collaboratif sur features audio Spotify.',
    role: 'Chef de projet : coordination de l\'équipe, mise en place des outils de pilotage (Trello, Google Drive), supervision de l\'avancement. Contributions front-end et identité visuelle (logo, charte).',
    resultat: 'App fonctionnelle livrée et rapport d\'optimisation algorithmique remis au jury.',
    techs: ['flutter', 'dart', 'python', 'sqlite'],
    equipe: 'Équipe KEYRIL — 6 personnes',
    duree: 'Semestre 5 (2025-2026)',
    stack: ['Flutter', 'Dart', 'SQLite', 'Node.js', 'ACP', 'K-Means'],
    primary: { label: 'Github', href: 'https://github.com/YannMKD/sae-but3-eco-mobile' },
  },
  {
    id: 'wrapitall',
    type: 'Projet perso',
    year: '2025',
    sortKey: 2025.3,
    titre: 'Wrap It All!',
    objectif: 'Extraire l\'historique Spotify d\'un utilisateur via OAuth 2.0, analyser ses patterns d\'écoute et les visualiser.',
    role: 'Seul développeur : flux OAuth 2.0, requêtes API Spotify, traitement Python, interface NiceGUI.',
    resultat: 'Outil personnel fonctionnel — sandbox pour explorer les APIs OAuth et la data viz Python.',
    techs: ['python'],
    equipe: 'Projet personnel',
    duree: 'Octobre 2025 → en cours',
    stack: ['Python', 'API Spotify', 'OAuth 2.0', 'NiceGUI'],
  },
  {
    id: 'thales',
    type: 'SAÉ MSI',
    year: '2024',
    sortKey: 2024.9,
    titre: 'THALES 6G',
    objectif: 'Automatiser collecte, analyse et visualisation de brevets 6G depuis Google Patents, enrichis par LLM (résumés, problèmes, solutions).',
    role: 'Réalisation de la web app Streamlit (filtres, graphiques Plotly, wordcloud) et prise en charge du rapport et de l\'organisation (Klaxoon, soutenances).',
    resultat: 'Base CSV de brevets enrichis + dashboard Streamlit interactif livré au commanditaire Thales.',
    techs: ['python', 'pandas'],
    equipe: '5 personnes',
    duree: 'Semestre 3 (2024-2025)',
    stack: ['Python', 'BeautifulSoup', 'pandas', 'Streamlit', 'Plotly', 'Mistral via Groq', 'HuggingFace'],
    primary: { label: 'Voir la démo', href: 'https://aadmsi.streamlit.app' },
  },
  {
    id: 'enquete',
    type: 'SAÉ',
    year: '2024',
    sortKey: 2024.8,
    titre: 'Enquête BUT SD',
    objectif: 'Mener une enquête complète sur le devenir des diplômés BUT Sciences des Données (contexte HCERES).',
    role: 'Enquêteur, rédacteur, analyste : entretiens directeur et chef de département, conception questionnaire, analyse Pandas.',
    resultat: 'Rapport d\'entretien + questionnaire 20 questions + notebooks Jupyter d\'analyse pour 30 diplômés cibles.',
    techs: ['python', 'pandas', 'jupyter'],
    equipe: '3 personnes',
    duree: 'Semestre 3 (2024-2025)',
    stack: ['Google Forms', 'Google Sheets', 'Python', 'Pandas', 'matplotlib'],
  },
  {
    id: 'nuitinfo',
    type: 'Concours',
    year: '2024',
    sortKey: 2024.0,
    titre: 'Nuit de l\'Info',
    objectif: 'Concours national : développer une app web éducative sur la relation océans / humains en une nuit blanche.',
    role: 'Contributeur dev front : intégration HTML/CSS, scénarisation pédagogique, livraison sous contrainte temps extrême.',
    resultat: 'Application web éducative livrée le matin même, présentée au jury, conduite sous pression réussie.',
    techs: ['html5', 'css3', 'javascript'],
    equipe: '11 personnes',
    duree: 'Décembre 2024',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
  },
]

// Tri stable du plus récent au plus ancien — sortKey décroissant.
const projets = [...projetsSrc].sort((a, b) => b.sortKey - a.sortKey)

function ProjectCard({ p }) {
  return (
    <article
      className="proj-card relative shrink-0 rounded-[20px] p-6 flex flex-col w-full"
      style={{
        minHeight: '480px',
        background: 'var(--surface)',
        border: '1px solid var(--border-glass)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        boxShadow: '0 4px 16px rgba(20,100,130,0.08), inset 0 1px 0 rgba(255,255,255,0.90)',
      }}
    >
      {/* Year badge overflowing top — utilise var(--btn-bg) → prend automatiquement la couleur de section */}
      <div
        className="absolute font-familjen font-semibold text-[12px] text-white px-3 py-1 rounded-full"
        style={{
          top: '-10px',
          right: '16px',
          background: 'var(--btn-bg)',
          boxShadow: 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.40)',
          letterSpacing: '0.06em',
        }}
      >
        {p.year}
      </div>

      <div
        className="font-familjen font-semibold text-[10.5px] uppercase mb-1.5"
        style={{ color: '#5a8fa0', letterSpacing: '0.14em' }}
      >
        {p.type}
      </div>
      {/* Titre à gauche, période à droite — la durée est ainsi mise en avant à hauteur du titre
          plutôt que d'apparaître discrètement dans le footer. */}
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h3 className="font-familjen font-bold text-[24px] text-ku-text leading-tight">
          {p.titre}
        </h3>
        {p.duree && (
          <span
            className="font-dm italic text-[12px] shrink-0 text-right"
            style={{ color: '#1e7a96' }}
          >
            {p.duree}
          </span>
        )}
      </div>

      <div className="space-y-2.5 mb-4">
        <p className="font-dm text-[13.5px] leading-[1.65] text-ku-body">
          <span className="font-familjen font-semibold uppercase text-[10.5px] mr-1.5" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>Objectif</span>
          {p.objectif}
        </p>
        <p className="font-dm text-[13.5px] leading-[1.65] text-ku-soft">
          <span className="font-familjen font-semibold uppercase text-[10.5px] mr-1.5" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>Mon rôle</span>
          {p.role}
        </p>
        {p.resultat && (
          <p className="font-dm text-[13.5px] leading-[1.65] text-ku-soft">
            <span className="font-familjen font-semibold uppercase text-[10.5px] mr-1.5" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>Résultat</span>
            {p.resultat}
          </p>
        )}
      </div>

      {/* Stack badges textuels */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.stack.map((t) => (
          <span
            key={t}
            className="font-familjen font-medium text-[11px]"
            style={{
              background: 'rgba(255,255,255,0.60)',
              color: '#1a6a82',
              border: '1px solid rgba(255,255,255,0.88)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.90)',
              borderRadius: '12px',
              padding: '3px 10px',
              letterSpacing: '0.03em',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Tech logos */}
      <div className="flex flex-wrap gap-2 mb-4">
        {p.techs.map((t) => (
          <img
            key={t}
            src={DEVICON(t)}
            alt={t}
            className="w-6 h-6"
            loading="lazy"
            title={t}
          />
        ))}
      </div>

      {/* Footer — équipe + bouton prominent (la durée a été remontée à hauteur du titre). */}
      <div className="mt-auto pt-3" style={{ borderTop: '1px solid rgba(20,100,130,0.10)' }}>
        {p.equipe && (
          <div className="flex flex-col gap-1 mb-3">
            <span className="font-dm italic text-[12px]" style={{ color: '#5a8fa0' }}>
              {p.equipe}
            </span>
          </div>
        )}

        {p.primary && (
          <a
            href={p.primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-familjen font-semibold text-[12px] uppercase rounded-full transition-opacity hover:opacity-90"
            style={{
              background: 'var(--btn-bg)',
              color: '#fff',
              boxShadow: 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)',
              padding: '9px 16px',
              letterSpacing: '0.06em',
            }}
          >
            {p.primary.label}
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  )
}

function ArrowButton({ direction, disabled, onClick }) {
  const isLeft = direction === 'left'
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isLeft ? 'Page précédente' : 'Page suivante'}
      className="inline-flex items-center justify-center rounded-full transition-all duration-200"
      style={{
        width: '52px',
        height: '52px',
        background: disabled ? 'rgba(255,255,255,0.30)' : 'var(--btn-bg)',
        color: '#fff',
        border: `1px solid ${disabled ? 'rgba(255,255,255,0.50)' : 'transparent'}`,
        boxShadow: disabled
          ? 'inset 0 1px 0 rgba(255,255,255,0.70)'
          : 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)',
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '22px',
        lineHeight: 1,
      }}
    >
      <span aria-hidden="true">{isLeft ? '←' : '→'}</span>
    </button>
  )
}

export default function Projets() {
  const [cardsPerPage, setCardsPerPage] = useState(3)
  const [page, setPage] = useState(0)

  // Le nombre de cards visibles par page s'adapte à la largeur écran.
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      // ≤ 768 : 1 card (mobile, cf. règle générale de breakpoint).
      // 769-1099 : 2 cards (tablette paysage, petit desktop).
      // ≥ 1100 : 3 cards (desktop).
      if (w <= 768)       setCardsPerPage(1)
      else if (w < 1100)  setCardsPerPage(2)
      else                setCardsPerPage(3)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  const pageCount = Math.max(1, Math.ceil(projets.length / cardsPerPage))

  // Si la page courante dépasse le nouveau pageCount (resize → moins de pages), on rabote.
  useEffect(() => {
    setPage((p) => Math.min(p, pageCount - 1))
  }, [pageCount])

  const GAP = 22
  // 1 page = 100 % viewport (qui contient exactement N cards + (N-1) gaps).
  // Pour passer à la page suivante, on translate de 100 % + 1 gap (le gap qui suit la N-ième carte).
  const transform = `translateX(calc(${-page} * (100% + ${GAP}px)))`
  const slotFlex = `0 0 calc((100% - ${(cardsPerPage - 1) * GAP}px) / ${cardsPerPage})`

  // ─── Swipe tactile (mobile uniquement — un doigt sur le viewport déclenche prev/next) ───
  // On capture la position X de départ et la compare à la fin du geste. Si delta > seuil
  // et horizontal > vertical (pour ne pas confondre avec un scroll vertical), on tourne la page.
  const touchRef = useRef({ x: 0, y: 0, active: false })

  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchRef.current = { x: t.clientX, y: t.clientY, active: true }
  }
  const onTouchEnd = (e) => {
    if (!touchRef.current.active) return
    touchRef.current.active = false
    const t = e.changedTouches[0]
    const dx = t.clientX - touchRef.current.x
    const dy = t.clientY - touchRef.current.y
    const SWIPE_MIN = 40 // px — seuil pour considérer le geste comme un swipe horizontal
    if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy)) return
    if (dx < 0) setPage((p) => Math.min(pageCount - 1, p + 1)) // swipe gauche → next
    else        setPage((p) => Math.max(0, p - 1))             // swipe droite → prev
  }

  return (
    <section id="projets" className="relative overflow-hidden">
<div className="relative pt-24 pb-24">
        <div className="max-w-[1280px] mx-auto px-16 mb-10 flex items-end justify-between gap-4 flex-wrap">
          <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
            Projets
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <ArrowButton direction="left"  disabled={page === 0}              onClick={() => setPage((p) => Math.max(0, p - 1))} />
            <ArrowButton direction="right" disabled={page === pageCount - 1}  onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))} />
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-16">
          <div
            className="proj-viewport"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="proj-track" style={{ transform }}>
              {projets.map((p) => (
                <div key={p.id} className="proj-slot" style={{ flex: slotFlex }}>
                  <ProjectCard p={p} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicateurs de page */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: pageCount }).map((_, i) => {
              const active = i === page
              return (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Aller à la page ${i + 1}`}
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: active ? '28px' : '10px',
                    height: '10px',
                    background: active ? 'var(--accent)' : 'rgba(20,100,130,0.18)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
