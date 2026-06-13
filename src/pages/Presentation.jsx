import { useRef, useCallback } from 'react'

// Presentation.jsx — page d'accueil composée de 4 sections empilées :
//   #hero          : prénom + nom + accroche + pills compétences + boutons CV/Découvrir
//   #introduction  : texte personnel sur le parcours + pyramide tech à droite (centrée verticalement)
//   #formation     : timeline verticale des diplômes (BUT 3, BUT 2, Licence SSS, Bac)
//   #explorer      : 4 cards d'entrée vers les autres sections, remplies de la couleur de la section cible
// Toutes ces sous-sections sont surlignées comme "Accueil" dans la navbar (cf. Navbar.jsx).

// Helper : génère l'URL d'un logo SVG depuis la CDN devicons.
const DEVICON = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

// Objets 3D PNG flottants du hero (dossier public/objets3d/).
// La zone `.float-zone` COUVRE TOUT le hero — les objets peuvent passer derrière le nom
// (le contenu hero est en z-index 2, la zone en z-index 1).
// `depth` (px) = amplitude de la parallaxe à la souris : plus l'objet est gros/proche, plus il bouge.
// `anim` (a→f) + `dur` + `delay` = flottement continu indépendant de la souris.
// `secondary: true` → caché sur mobile (on garde les 5 objets principaux : santé + computer + rocket).
const floatObjects = [
  // Toujours visibles — santé en avant (cerveau, médecin, stéthoscope) + computer + rocket
  { src: 'icons8-brain-94.png',                  size: 95,  depth: 24, top: '8%',  left: '60%', anim: 'a', dur: 6.5, delay: 0.1, alt: 'Cerveau (santé)' },
  { src: 'icons8-medical-doctor-94.png',         size: 102, depth: 26, top: '68%', left: '28%', anim: 'b', dur: 7.4, delay: 0.8, alt: 'Médecin (santé)' },
  { src: 'icons8-stethoscope-94.png',            size: 82,  depth: 20, top: '40%', left: '76%', anim: 'c', dur: 6.0, delay: 1.5, alt: 'Stéthoscope (santé)' },
  { src: '3dicons-computer-dynamic-color.png',   size: 110, depth: 30, top: '34%', left: '4%',  anim: 'd', dur: 8.0, delay: 0.4, alt: 'Ordinateur' },
  { src: '3dicons-rocket-dynamic-color.png',     size: 90,  depth: 22, top: '76%', left: '60%', anim: 'e', dur: 7.0, delay: 2.0, alt: 'Fusée' },
  // Secondaires — cachés sur mobile (< 640 px)
  { src: '3dicons-figma-dynamic-color.png',      size: 68,  depth: 14, top: '6%',  left: '8%',  anim: 'f', dur: 8.5, delay: 1.2, alt: 'Figma',     secondary: true },
  { src: '3dicons-chart-dynamic-color.png',      size: 78,  depth: 18, top: '74%', left: '82%', anim: 'a', dur: 9.0, delay: 0.6, alt: 'Graphique', secondary: true },
  { src: '3dicons-mobile-dynamic-color.png',     size: 72,  depth: 16, top: '14%', left: '88%', anim: 'b', dur: 6.8, delay: 1.8, alt: 'Mobile',    secondary: true },
  { src: '3dicons-folder-new-dynamic-color.png', size: 64,  depth: 12, top: '10%', left: '32%', anim: 'c', dur: 8.2, delay: 0.3, alt: 'Dossier',   secondary: true },
  { src: '3dicons-linkedin-dynamic-color.png',   size: 62,  depth: 11, top: '82%', left: '12%', anim: 'd', dur: 7.4, delay: 2.4, alt: 'LinkedIn',  secondary: true },
  { src: '3dicons-wifi-dynamic-color.png',       size: 58,  depth: 10, top: '54%', left: '50%', anim: 'e', dur: 9.5, delay: 1.0, alt: 'Wi-Fi',     secondary: true },
  { src: '3dicons-discord-dynamic-color.png',    size: 62,  depth: 11, top: '46%', left: '40%', anim: 'f', dur: 5.5, delay: 0.9, alt: 'Discord',   secondary: true },
]

// 3 couches imbriquées :
//   .float-obj        → position + parallaxe (transform piloté par --mx/--my/--depth via CSS)
//   .float-obj-anim   → keyframe flottement (translate + rotate)
//   .float-obj-inner  → image + drop-shadow
// Les transforms s'additionnent (chaque div applique son propre coordinate space).
function FloatingObject({ obj }) {
  return (
    <div
      className={`float-obj ${obj.secondary ? 'float-obj--secondary' : ''}`}
      style={{
        top: obj.top,
        left: obj.left,
        width: obj.size,
        height: obj.size,
        ['--depth']: `${obj.depth}px`,
      }}
    >
      <div
        className="float-obj-anim"
        style={{
          animationName: `float-${obj.anim}`,
          animationDuration: `${obj.dur}s`,
          animationDelay: `${obj.delay}s`,
        }}
      >
        <div className="float-obj-inner">
          <img src={`/objets3d/${obj.src}`} alt={obj.alt} loading="lazy" draggable={false} />
        </div>
      </div>
    </div>
  )
}

function TechTile({ name, label }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="tech-tile tech-tile--lg">
        <img src={DEVICON(name)} alt={label} className="w-11 h-11" loading="lazy" />
      </div>
      <span
        className="font-familjen text-[11px] uppercase"
        style={{ letterSpacing: '0.12em', color: '#5a8fa0' }}
      >
        {label}
      </span>
    </div>
  )
}

// Pyramide tech 3-4-5 : rangée du haut (3 technos majeures) à la base (5 fondations).
const pyramidRows = [
  [
    { name: 'react',      label: 'React' },
    { name: 'typescript', label: 'TypeScript' },
    { name: 'postgresql', label: 'PostgreSQL' },
  ],
  [
    { name: 'python',  label: 'Python' },
    { name: 'nodejs',  label: 'Node.js' },
    { name: 'flutter', label: 'Flutter' },
    { name: 'dart',    label: 'Dart' },
  ],
  [
    { name: 'git',      label: 'Git' },
    { name: 'figma',    label: 'Figma' },
    { name: 'r',        label: 'R' },
    { name: 'pandas',   label: 'Pandas' },
    { name: 'supabase', label: 'Supabase' },
  ],
]

// Parcours académique du plus récent au plus ancien — utilisé par la timeline section #formation.
const formationItems = [
  {
    dates: '2025 → 2026',
    diploma: 'BUT Informatique, 3ème année',
    sub: 'Parcours RADCV',
    location: 'IUT Villetaneuse, Sorbonne Paris Nord',
    detail: 'Formation au développement d\'applications, de la conception au déploiement, avec spécialisation en réalisation et conduite de projets.',
  },
  {
    dates: '2024 → 2025',
    diploma: 'BUT Informatique, 2ème année',
    sub: 'Passerelle Data Science',
    location: 'IUT Villetaneuse, Sorbonne Paris Nord',
    detail: 'Socle technique du développement full-stack, bases de données, algorithmique et gestion de projet.',
  },
  {
    dates: '2020 → 2024',
    diploma: 'Licence Sciences Sanitaires et Sociales',
    sub: 'LAS, 180 ECTS obtenus',
    location: 'Sorbonne Paris Nord, Bobigny',
    detail: 'Formation pluridisciplinaire en santé publique, sciences humaines et sociales appliquées au domaine de la santé.',
  },
  {
    dates: '2017 → 2020',
    diploma: 'Baccalauréat, spécialité SVT',
    sub: 'Mention Assez Bien',
    location: 'Lycée Blanche de Castille',
    detail: 'Spécialité sciences de la vie et de la terre.',
  },
]

// Chaque card explorer est remplie d'un dégradé aux couleurs de la section qu'elle ouvre.
// Les gradients reproduisent le même schéma que `--btn-bg` (light → mid → deep).
const explorerCards = [
  {
    id: 'competences', title: 'COMPÉTENCES',
    bg: 'linear-gradient(145deg, var(--c-comp-light) 0%, var(--c-comp) 55%, var(--c-comp-deep) 100%)',
    shadow: 'var(--c-comp-shadow)',
  },
  {
    id: 'projets', title: 'PROJETS',
    bg: 'linear-gradient(145deg, var(--c-proj-light) 0%, var(--c-proj) 55%, var(--c-proj-deep) 100%)',
    shadow: 'var(--c-proj-shadow)',
  },
  {
    id: 'stages', title: 'STAGES',
    bg: 'linear-gradient(145deg, var(--c-stages-light) 0%, var(--c-stages) 55%, var(--c-stages-deep) 100%)',
    shadow: 'var(--c-stages-shadow)',
  },
  {
    id: 'bilan', title: 'BILAN',
    bg: 'linear-gradient(145deg, var(--c-bilan-light) 0%, var(--c-bilan) 55%, var(--c-bilan-deep) 100%)',
    shadow: 'var(--c-bilan-shadow)',
  },
]

export default function Presentation() {
  // Parallaxe : on écrit `--mx` et `--my` (unitless, [-1, +1]) sur la float-zone à chaque mousemove.
  // CSS les multiplie par `--depth` de chaque objet (calc) → translate spécifique par objet.
  // Pas de useState pour éviter de re-render React 60 fois/sec ; on touche directement le DOM via ref.
  const heroRef = useRef(null)
  const zoneRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    const hero = heroRef.current
    const zone = zoneRef.current
    if (!hero || !zone) return
    const rect = hero.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width  - 0.5) * 2  // -1 → +1
    const my = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
    zone.style.setProperty('--mx', mx.toFixed(3))
    zone.style.setProperty('--my', my.toFixed(3))
  }, [])

  const onMouseLeave = useCallback(() => {
    const zone = zoneRef.current
    if (!zone) return
    zone.style.setProperty('--mx', '0')
    zone.style.setProperty('--my', '0')
  }, [])

  return (
    <>
      {/* ─────────── #hero — Plein écran, nom géant + blobs flottants colorés ─────────── */}
      <section
        id="hero"
        ref={heroRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[140px] pb-24"
      >
        {/* Blobs animés en arrière-plan : deux halos qui dérivent en boucle (keyframes blob-anim-* dans index.css) */}
        <div
          className="blob-anim-1 absolute rounded-full pointer-events-none"
          style={{
            width: 620, height: 620,
            top: '-120px', right: '-180px',
            background: 'radial-gradient(circle, rgba(60,200,224,0.32) 0%, transparent 70%)',
            filter: 'blur(70px)',
            zIndex: 0,
          }}
        />
        <div
          className="blob-anim-2 absolute rounded-full pointer-events-none"
          style={{
            width: 480, height: 480,
            bottom: '20px', left: '-160px',
            background: 'radial-gradient(circle, rgba(100,210,150,0.26) 0%, transparent 70%)',
            filter: 'blur(70px)',
            zIndex: 0,
          }}
        />

        {/* Zone d'objets 3D — absolute, COUVRE TOUT le hero, derrière le contenu (z-index 1).
            Reçoit les CSS vars --mx/--my mises à jour par onMouseMove ci-dessus → les objets
            enfants se décalent en parallaxe selon leur propre --depth. */}
        <div className="float-zone" ref={zoneRef} aria-hidden="true">
          {floatObjects.map((obj) => (
            <FloatingObject key={obj.src} obj={obj} />
          ))}
        </div>

        {/* Contenu texte — relative, z-index 2 → au premier plan, au-dessus des objets flottants. */}
        <div className="relative max-w-[1280px] mx-auto px-16 w-full" style={{ zIndex: 2 }}>
          {/* Le nom utilise la police signature Ultra Hyper (cf. @font-face dans index.css).
              `fontFamily` est posée en INLINE pour court-circuiter toute classe Tailwind qui
              pourrait écraser la police (font-familjen, font-bold sans glyphe correspondant…).
              `font-bold` est retiré : cette police n'existe qu'en Regular, et demander un poids 700
              inexistant peut faire retomber Safari sur la fallback.
              `.hero-name-glow` = halo blanc pour rester lisible quand un objet flotte derrière. */}
          {/* `max-md:!text-[clamp(...)]` réduit le min du clamp UNIQUEMENT sous 768 px,
              sinon UTHAYAKUMAR déborde sur iPhone 375 (le min 56 px serait trop large pour les
              11 lettres Ultra Hyper dans 335 px de contenu). Le ! force la priorité sur le clamp desktop. */}
          <h1
            className="hero-name-glow fade-up text-[clamp(56px,8vw,124px)] max-md:!text-[clamp(38px,11vw,52px)] leading-[0.95] text-ku-text mb-2"
            style={{
              fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif",
              /* Ultra Hyper a des glyphes très denses → +0.02em pour respirer sans dégrader l'impact. */
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif" }}>Kelvin</span><br />
            <em
              className="not-italic text-accent"
              style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif" }}
            >
              UTHAYAKUMAR
            </em>
          </h1>

          <p
            className="fade-up-1 font-dm text-[17px] text-muted mt-8 max-w-[560px] leading-[1.8]"
            style={{ fontStyle: 'italic', fontWeight: 300 }}
          >
            Étudiant en troisième année de BUT Informatique à l&apos;IUT de Villetaneuse, Sorbonne Paris Nord.<br />
            Développeur full-stack avec un œil sur la santé numérique.
          </p>

          <div className="fade-up-2 mt-10 flex flex-wrap gap-2">
            {['Réaliser', 'Optimiser', 'Administrer', 'Gérer', 'Conduire', 'Collaborer'].map((c) => (
              <span
                key={c}
                className="comp-pill font-familjen font-medium text-[12px] uppercase text-accent bg-white/60 border border-white/[88%] rounded-[12px] shadow-card"
                style={{ letterSpacing: '0.12em', padding: '4px 12px' }}
              >
                {c}
              </span>
            ))}
          </div>

          {/* `max-md:w-full` rend chaque bouton pleine largeur sous 768 px ; le flex-wrap les
              empile naturellement à la verticale. Aucun effet sur desktop. */}
          <div className="fade-up-3 mt-10 flex gap-3 flex-wrap items-center">
            <a
              href="/CV_KELVIN_UTHAYAKUMAR_04_2026.pdf"
              download="CV_KELVIN_UTHAYAKUMAR.pdf"
              className="font-familjen font-semibold text-[13px] uppercase px-7 py-3.5 rounded-[100px] text-white transition-opacity hover:opacity-90 max-md:w-full max-md:text-center"
              style={{
                background: 'var(--btn-bg)',
                boxShadow: 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)',
                letterSpacing: '0.06em',
              }}
            >
              Télécharger mon CV
            </a>
            <a
              href="#introduction"
              className="font-familjen font-medium text-[13px] uppercase px-7 py-3.5 rounded-[100px] transition-opacity hover:opacity-80 max-md:w-full max-md:text-center"
              style={{
                background: 'rgba(255,255,255,0.50)',
                border: '1px solid var(--border-glass)',
                color: '#1a5a72',
                boxShadow: 'var(--inset-shine)',
                letterSpacing: '0.06em',
              }}
            >
              Découvrir ↓
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── #introduction — Bio personnelle à gauche + pyramide tech à droite ─────────── */}
      <section id="introduction" className="relative overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-16 items-center">
            {/* Left: text */}
            <div className="max-w-[560px]">
              <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-10 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
                Introduction
              </h2>
              <div className="font-dm text-[16px] leading-[1.85] text-ku-body space-y-4">
                <p>
                  Mon parcours a la particularité d&apos;être à la croisée de deux champs : les{' '}
                  <strong className="text-accent font-semibold">sciences de la santé</strong> et l&apos;
                  <strong className="text-accent font-semibold">informatique</strong>. Après une licence en Sciences Sanitaires et Sociales
                  à Sorbonne Paris Nord, j&apos;ai choisi de me réorienter vers le BUT Informatique, non par rupture,
                  mais par conviction que la technologie peut être un levier de transformation dans les systèmes de santé.
                </p>
                <p>
                  Je souhaite acquérir les outils techniques nécessaires pour travailler, à terme, sur des problèmes
                  qui comptent : la donnée médicale, les outils d&apos;aide à la décision clinique, la digitalisation
                  des parcours de soins.
                </p>
                <p>
                  Ces trois années de BUT m&apos;ont permis de construire une base solide que j'ai pu appliquer dans un contexte réel à travers des projets et stages, renforçant ainsi ma compréhension des enjeux de l&apos;informatique.
                </p>
                <p>
                  Mes ambitions se dessinent autour du développement d&apos;applications dans le secteur de la santé
                  numérique dès septembre 2026, avec comme horizon une spécialisation en informatique biomédicale.
                </p>
              </div>
            </div>

            {/* Right: pyramid of tech logos */}
            <div className="flex flex-col gap-4 items-center shrink-0">
              {pyramidRows.map((row, ri) => (
                <div key={ri} className="flex gap-4 justify-center">
                  {row.map((t) => (
                    <TechTile key={t.name} name={t.name} label={t.label} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── #formation — Timeline verticale du parcours académique ─────────── */}
      <section id="formation" className="relative overflow-hidden">
        <span className="watermark" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", top: '70px', right: '-30px' }}>PARCOURS</span>
        <div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
          <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-16 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
            Formation
          </h2>

          <div className="relative max-w-[720px]">
            {/* Vertical timeline line */}
            <div
              className="absolute top-1.5 bottom-1.5 w-[2px] rounded"
              style={{ left: '7px', background: 'linear-gradient(to bottom, #3ec8e0, #2ea86a)' }}
            />

            {formationItems.map((item, i) => (
              <div key={i} className="relative pl-12 pb-12 last:pb-0">
                {/* Chromed dot */}
                <div
                  className="absolute w-4 h-4 rounded-full"
                  style={{
                    left: 0,
                    top: '4px',
                    background: 'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.92) 0%, rgba(90,210,240,0.7) 40%, rgba(22,130,170,0.95) 100%)',
                    boxShadow: '0 3px 8px rgba(22,130,170,0.42), inset 0 -2px 4px rgba(0,0,0,0.18), inset 1px 2px 3px rgba(255,255,255,0.5)',
                  }}
                />
                <div className="font-dm italic text-[14px]" style={{ color: '#1e7a96' }}>
                  {item.dates}
                </div>
                <div className="font-familjen font-bold text-[22px] text-ku-text mt-1 leading-tight">
                  {item.diploma}
                </div>
                {item.sub && (
                  <div className="font-dm text-[14px] mt-1" style={{ color: '#3a7a96' }}>
                    {item.sub}
                  </div>
                )}
                <div className="font-dm text-[14px] mt-1" style={{ color: '#5a8fa0' }}>
                  {item.location}
                </div>
                <p className="font-dm text-[14.5px] mt-2.5 leading-[1.75] max-w-[600px]" style={{ color: '#2a5060' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── #explorer — Hub d'entrée vers les 4 sections du portfolio ─────────── */}
      <section id="explorer" className="relative overflow-hidden">
        <div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
          <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-12 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
            Explorer
          </h2>

          {/* `max-md:!grid-cols-1` force 1 colonne sous 768 px sans toucher au comportement
              sm:grid-cols-2 au-dessus (le ! priorise sur le sm: à 640-767, plage qu'on veut mobile). */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-md:!grid-cols-1 gap-4 max-w-[760px]">
            {explorerCards.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="explorer-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  // Chaque card est remplie d'un dégradé glossy aux couleurs de sa section :
                  // `--card-bg` = fond complet, `--card-shadow` = halo coloré sous la card.
                  background: c.bg,
                  ['--card-shadow']: c.shadow,
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.50)',
                  boxShadow: `0 6px 20px ${c.shadow}, inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(0,0,0,0.12)`,
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="font-familjen font-bold text-[22px] text-white"
                    style={{ letterSpacing: '0.06em' }}
                  >
                    {c.title}
                  </span>
                  <span
                    className="explorer-arrow font-familjen font-semibold text-[12px] uppercase shrink-0 transition-all duration-200 group-hover:translate-x-1"
                    style={{ color: '#fff', letterSpacing: '0.08em', opacity: 0.92 }}
                  >
                    Explorer →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
