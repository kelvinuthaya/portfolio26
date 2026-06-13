// Competences.jsx — Section #competences : 6 compétences BUT en accordéon vertical
// + un bloc "Compétences techniques" classées par catégorie en bas de section.
//
// Comportement de l'accordéon : une seule ligne ouverte à la fois (useState openId + toggle).
// L'expansion utilise `grid-template-rows: 0fr → 1fr` au lieu d'un max-height fixe
// → le contenu pousse la ligne à sa taille réelle, pas de coupure si le texte est long.
//
// Couleur d'accent : rouge (--accent et --btn-bg sont overridés sur #competences dans index.css).
//
// Chaque entrée contient : body (paragraphes), sae (projets clés), outils (stack),
// fort (acquis — bloc vert), vigilance (point d'attention — bloc ambre).

import { useState } from 'react'

// Helper devicons — utilisé par le bloc "Compétences techniques".
const DEVICON = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`

// Compétences techniques classées par catégorie — affichées sous les 6 compétences BUT.
// `devicon` peut être absent (Notion, Klaxoon, MCD/MLD, UML…) → badge sans logo, juste le label.
const skillGroups = [
  {
    title: 'Frontend',
    items: [
      { label: 'React',      devicon: 'react' },
      { label: 'TypeScript', devicon: 'typescript' },
      { label: 'Flutter',    devicon: 'flutter' },
      { label: 'HTML',       devicon: 'html5' },
      { label: 'CSS',        devicon: 'css3' },
      { label: 'JavaScript', devicon: 'javascript' },
    ],
  },
  {
    title: 'Backend & Data',
    items: [
      { label: 'Supabase',   devicon: 'supabase' },
      { label: 'PostgreSQL', devicon: 'postgresql' },
      { label: 'Node.js',    devicon: 'nodejs' },
      { label: 'Express',    devicon: 'express' },
      { label: 'MongoDB',    devicon: 'mongodb' },
      { label: 'Python',     devicon: 'python' },
    ],
  },
  {
    title: 'Data Science & ML',
    items: [
      { label: 'scikit-learn', devicon: 'scikitlearn' },
      { label: 'Pandas',       devicon: 'pandas' },
      { label: 'NumPy',        devicon: 'numpy' },
      { label: 'R',            devicon: 'r' },
    ],
  },
  {
    title: 'Outils & Méthodes',
    items: [
      { label: 'Git',        devicon: 'git' },
      { label: 'GitHub',     devicon: 'github' },
      { label: 'Figma',      devicon: 'figma' },
      { label: 'Notion' },
      { label: 'M365 Admin' },
      { label: 'Klaxoon' },
    ],
  },
  {
    title: 'Conception',
    items: [
      { label: 'MCD / MLD' },
      { label: 'UML' },
      { label: 'SQL' },
    ],
  },
]

function SkillBadge({ item }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full shadow-card"
      style={{
        background: 'rgba(255,255,255,0.65)',
        border: '1px solid rgba(255,255,255,0.88)',
        padding: '5px 12px 5px 8px',
      }}
    >
      {item.devicon && (
        <img
          src={DEVICON(item.devicon)}
          alt=""
          aria-hidden="true"
          className="w-4 h-4 shrink-0"
          loading="lazy"
        />
      )}
      <span className="font-familjen font-medium text-[12.5px]" style={{ color: '#1a4a60' }}>
        {item.label}
      </span>
    </span>
  )
}

const competences = [
  {
    id: 'c1',
    num: '01',
    title: 'Réaliser',
    sub: 'Développer des applications informatiques simples à complexes',
    tags: ['TRACKSTAR', 'Panam\'arket', 'Wrap It All!'],
    body: [
      'Le développement logiciel est le cœur de ma formation. De la conception d\'une application mobile Flutter / Dart (TRACKSTAR) à la mise en production d\'une PWA full-stack React / Supabase (Panam\'arket), j\'ai progressivement maîtrisé l\'ensemble du cycle de développement : analyse du besoin, conception d\'architecture, codage, tests terrain et déploiement.',
      'La SAÉ TRACKSTAR m\'a imposé de structurer un algorithme de recommandation musicale offline-first avec ACP et K-means, dans une équipe de 6 personnes. Le projet Panam\'arket m\'a confronté à des contraintes plus dures : parsing de PDFs non documentés, architecture de données sous PostgreSQL, gestion d\'états React avec Supabase Auth, sécurisation par Row Level Security.',
      'Mes projets perso (Wrap It All! sur l\'API Spotify, TRACKSTAR CITY LO-FI en Pygame) prolongent cette compétence en dehors du cadre scolaire et nourrissent ma curiosité technique.',
    ],
    sae: 'TRACKSTAR · Panam\'arket · TRACKSTAR CITY LO-FI · Wrap It All!',
    outils: 'Flutter/Dart, React 18, Vite, Tailwind v3, Supabase, PostgreSQL, Python, Pygame, ZXing, jsPDF, OAuth 2.0',
    fort: 'Passer de specs floues à un produit déployé en production. Écrire du code lisible et maintenable par d\'autres.',
    vigilance: 'Intégrer les tests automatisés dès le début du développement plutôt qu\'en fin de sprint.',
  },
  {
    id: 'c2',
    num: '02',
    title: 'Optimiser',
    sub: 'Appréhender et construire des algorithmes',
    tags: ['THALES 6G', 'TRACKSTAR', 'Voronoï'],
    body: [
      'L\'optimisation s\'est exprimée chez moi de trois façons : algorithmique pure (complexité Big-O, structures de données), pipelines de traitement de données volumineuses, et performance applicative.',
      'Dans TRACKSTAR, j\'ai formalisé la complexité Big-O pour chaque composante de la recommandation : cold start O(k·n), profil vectoriel O(L·d), recherche de similarité O(n·d). J\'ai aussi documenté les pistes d\'optimisation (batching, KD-tree, préchargement, impact batterie).',
      'Dans THALES 6G, j\'ai contribué à un pipeline Python qui traite des centaines de fichiers Excel de brevets avec scraping, enrichissement par LLM (Mistral via Groq) et visualisation Plotly. Dans la SAÉ S601 Voronoï, j\'ai contribué à l\'implémentation d\'un algorithme from scratch en O(N²·k) avant de comparer à 4 IAGen afin de mieux comprendre le problème.',
    ],
    sae: 'TRACKSTAR (rapport complexité) · THALES 6G · SAÉ S601 Voronoï · Panam\'arket (parser PDF)',
    outils: 'Big-O, ACP, K-Means, Pandas, BeautifulSoup, Plotly, matplotlib, `Promise.all`, pdf.js',
    fort: 'Analyser et documenter la complexité algorithmique de façon rigoureuse, avec mesures et illustrations.',
    vigilance: 'Profiler avant d\'optimiser et penser la complexité dès la conception, pas en réaction.',
  },
  {
    id: 'c3',
    num: '03',
    title: 'Administrer',
    sub: 'Déployer, configurer et maintenir des systèmes',
    tags: ['CFP Group', 'Panam\'arket'],
    body: [
      'La compétence Administrer a pris son sens le plus concret lors de mon stage chez CFP Group : refonte du pôle IT dans un contexte de réorganisation interne, 18 onboardings et 22 offboardings supervisés en 2 mois, paramétrage Microsoft 365 (Outlook, Teams, OneDrive, MFA), configuration BitLocker sur les Surface Laptop 4.',
      'J\'ai mené un audit complet des comptes inactifs (Microsoft 365, Aircall), rédigé la charte informatique de l\'entreprise et conduit un audit Aircall qui a corrigé les fuseaux horaires, la distribution des appels et l\'arborescence du SVI Ubireal. Le rapport statistique R/ggplot2 a été présenté au CEO.',
      'Sur Panam\'arket, j\'ai configuré Supabase de bout en bout : variables d\'environnement, Row Level Security sur toutes les tables, authentification multi-rôles (employé / manager / gérant). Déploiement continu via Netlify, debug d\'un bug critique de variables d\'env corrompues (slash en trop + caractère `%` parasite).',
    ],
    sae: 'Stage CFP Group (Aircall, M365, BitLocker) · Stage Panam\'arket (Supabase, Netlify, RLS)',
    outils: 'Microsoft 365, Aircall, BitLocker, Bitwarden, Signwell, Supabase, Netlify, Windows 10/11, R / ggplot2',
    fort: 'La sécurité s\'architecture dès le début, pas en fin de sprint. Capable de mener un audit système complet et de le présenter à un CEO.',
    vigilance: 'Documenter les décisions techniques au fil de l\'eau, pas après coup.',
  },
  {
    id: 'c4',
    num: '04',
    title: 'Gérer',
    sub: 'Concevoir et gérer des bases de données',
    tags: ['Panam\'arket', 'THALES 6G', 'Enquête BUT SD'],
    body: [
      'Pour Panam\'arket, j\'ai conçu le schéma relationnel complet : tables `produits`, `transactions`, `livraisons`, `stock_dlc`, `ca_importe`. Contraintes FK, types Postgres avancés (`jsonb`, `uuid`, `timestamptz`, `numeric`), index sur les requêtes fréquentes, RLS par rôle.',
      'Dans THALES, j\'ai géré une base CSV de brevets enrichie automatiquement (URL, titre, date, claims, résumé LLM, problème, solution, domaine). Dans la SAÉ Enquête BUT SD, j\'ai conçu un questionnaire de 20 questions et analysé les réponses sous Pandas / matplotlib.',
    ],
    sae: 'Panam\'arket (5 tables, FK, RLS, jsonb) · THALES 6G (CSV enrichi LLM) · Enquête BUT SD',
    outils: 'PostgreSQL (Supabase), CSV, Excel, Pandas, Google Sheets, Google Forms',
    fort: 'Conception de schéma relationnel avec contraintes FK et sécurité RLS intégrée dès l\'origine.',
    vigilance: 'Valider les données réelles avant de figer un schéma et documenter les choix de modélisation en parallèle du code.',
  },
  {
    id: 'c5',
    num: '05',
    title: 'Conduire',
    sub: 'Satisfaire les besoins des utilisateurs avec une démarche projet',
    tags: ['TRACKSTAR', 'Panam\'arket', 'CFP Group'],
    body: [
      'Sur la quasi-totalité des SAÉ de mon parcours, j\'ai assumé le rôle de chef de projet. Sur TRACKSTAR (6 personnes), j\'ai coordonné l\'équipe, mis en place et maintenu les outils de pilotage (Trello, Google Drive), centralisé les échanges et supervisé l\'avancement, tout en contribuant au front-end et à l\'identité visuelle (logo, charte graphique).',
      'Cette posture de chef de projet s\'est nourrie de mes deux expériences professionnelles. Chez CFP Group comme chez Panam\'arket, j\'ai dû prendre de nombreuses initiatives par moi-même, en autonomie, sans attendre un cadre imposé. C\'est cette autonomie qui m\'a permis de tenir mes engagements et d\'avancer même quand le périmètre ou les priorités changeaient en cours de route.',
      'Hors SAÉ, j\'ai aussi conduit des projets sous contraintes fortes : Nuit de l\'Info (11 personnes, une nuit, livrable fonctionnel) et SAÉ Entrepreneuriat LinkUp (étude de marché, benchmark, SWOT, Business Model Canvas, MVP et stratégie de lancement Lean Startup).',
    ],
    sae: 'TRACKSTAR (chef de projet) · Stage Panam\'arket · Stage CFP Group · Nuit de l\'Info · SAÉ Entrepreneuriat LinkUp',
    outils: 'Trello, Notion, Figma, Klaxoon, Google Drive, BMC, SWOT, SMART, Lean Startup, Ahrefs',
    fort: 'Tenir la barre d\'un projet d\'équipe en prenant les initiatives sans attendre. Savoir dire non à une feature hors scope et tenir un délai sous pression.',
    vigilance: 'Cadrer le périmètre d\'un projet dès le départ et prototyper avant de formaliser.',
  },
  {
    id: 'c6',
    num: '06',
    title: 'Collaborer',
    sub: 'Travailler dans une équipe informatique',
    tags: ['CFP Group', 'TRACKSTAR', 'BDE IUT'],
    body: [
      'Mon rôle s\'est rarement limité à celui de simple membre d\'équipe. Sur TRACKSTAR, THALES 6G ou Voronoï, j\'ai endossé la double casquette de développeur et de chef de projet : coordination via Trello et Klaxoon, rédaction des rapports de mi-parcours et finaux, préparation des soutenances. Coordonner sans s\'imposer, écouter pour décider, garantir que chacun avance dans le bon sens.',
      'Cette autonomie s\'est forgée en entreprise. Chez CFP Group, j\'ai travaillé avec des interlocuteurs variés, de la direction aux équipes, en prenant les devants plutôt qu\'en attendant des instructions.',
      'En parallèle, mes responsabilités au sein du BDE de l\'IUT (Secrétaire et Responsable Communication) m\'ont entraîné à coordonner des événements impliquant des dizaines d\'étudiants et à gérer la communication externe de l\'association.',
    ],
    sae: 'TRACKSTAR · THALES 6G · Voronoï · Stage CFP Group · Stage Panam\'arket · BDE IUT (Secrétaire)',
    outils: 'Trello, Klaxoon, Notion, Discord, WhatsApp, Microsoft Teams, Git/GitHub, Markdown',
    fort: 'À l\'aise inter-équipes et avec des non-techniques. Capable de prendre des initiatives sans attendre un cadre imposé.',
    vigilance: 'Mieux structurer les revues de code en équipe pour partager les connaissances et homogénéiser le niveau.',
  },
]

export default function Competences() {
  const [openId, setOpenId] = useState(null)
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="competences" className="relative overflow-hidden">
<div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
        <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-12 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
          Compétences
        </h2>

        <div className="max-w-[1040px]">
          {competences.map((c) => {
            const isOpen = openId === c.id
            return (
              <div
                key={c.id}
                style={{ borderBottom: '1px solid rgba(20,100,130,0.12)' }}
              >
                <button
                  onClick={() => toggle(c.id)}
                  className="comp-row w-full grid grid-cols-[100px_minmax(0,1fr)_auto] items-center gap-4 py-7 text-left"
                  style={{
                    background: isOpen ? 'linear-gradient(90deg, rgba(255,255,255,0.55), transparent)' : undefined,
                    paddingLeft: isOpen ? '16px' : undefined,
                  }}
                >
                  <span
                    className="comp-num font-familjen font-bold text-[56px] leading-none transition-colors duration-200"
                    style={{ color: isOpen ? 'var(--accent)' : 'rgba(20,100,130,0.18)' }}
                  >
                    {c.num}
                  </span>
                  <div>
                    <div className="font-familjen font-bold text-[26px] text-ku-text leading-tight">
                      {c.title}
                    </div>
                    <div className="font-dm italic text-[14.5px] text-muted mt-1.5">
                      {c.sub}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="font-familjen font-medium text-[11px] uppercase bg-white/60 border border-white/[88%] rounded-[10px] shadow-card"
                          style={{ color: '#1a6a82', padding: '3px 10px', letterSpacing: '0.08em' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Bouton Voir le détail / Replier — pill ghost fermé, accent glossy ouvert.
                      Le <span> est purement décoratif (le clic est porté par le <button> parent). */}
                  <span
                    className="comp-cta inline-flex items-center gap-2 shrink-0 font-familjen font-semibold text-[12px] uppercase rounded-full transition-all duration-200"
                    style={
                      isOpen
                        ? {
                            background: 'var(--btn-bg)',
                            color: '#fff',
                            border: '1px solid transparent',
                            boxShadow: 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)',
                            padding: '9px 16px',
                            letterSpacing: '0.08em',
                          }
                        : {
                            background: 'rgba(255,255,255,0.55)',
                            color: '#1a5a72',
                            border: '1px solid var(--border-glass)',
                            boxShadow: 'var(--inset-shine), 0 2px 6px rgba(20,100,130,0.08)',
                            padding: '9px 16px',
                            letterSpacing: '0.08em',
                          }
                    }
                  >
                    {isOpen ? 'Replier' : 'Voir le détail'}
                    <span style={{ fontSize: '14px', lineHeight: 1 }} aria-hidden="true">
                      {isOpen ? '↑' : '↓'}
                    </span>
                  </span>
                </button>

                {/* Expandable body — astuce CSS : grid-template-rows interpolable entre 0fr (replié)
                    et 1fr (ouvert) au lieu d'un max-height fixe qui couperait le contenu long. */}
                <div
                  style={{
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 300ms ease',
                  }}
                >
                  <div style={{ minHeight: 0 }}>
                    <div className="pb-10 pl-[116px] pr-4">
                      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                        {/* Colonne texte */}
                        <div className="space-y-4">
                          <div className="font-dm text-[15px] leading-[1.85] text-ku-body space-y-3">
                            {c.body.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            <div
                              className="p-4 rounded-xl"
                              style={{ background: 'rgba(255,255,255,0.50)', border: '1px solid rgba(255,255,255,0.85)' }}
                            >
                              <div
                                className="font-familjen font-bold text-[10.5px] uppercase mb-2"
                                style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                              >
                                SAÉ & projets clés
                              </div>
                              <div className="font-dm text-[13.5px] leading-[1.6]" style={{ color: 'var(--text-body)' }}>
                                {c.sae}
                              </div>
                            </div>
                            <div
                              className="p-4 rounded-xl"
                              style={{ background: 'rgba(255,255,255,0.50)', border: '1px solid rgba(255,255,255,0.85)' }}
                            >
                              <div
                                className="font-familjen font-bold text-[10.5px] uppercase mb-2"
                                style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                              >
                                Outils & stack
                              </div>
                              <div className="font-dm text-[13.5px] leading-[1.6]" style={{ color: 'var(--text-body)' }}>
                                {c.outils}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Colonne acquis / vigilance */}
                        <div className="space-y-3">
                          <div
                            className="p-5 rounded-xl backdrop-blur-[8px]"
                            style={{ background: 'var(--retro-green-bg)', border: '1px solid var(--retro-green-border)' }}
                          >
                            <div
                              className="font-familjen font-bold text-[10.5px] uppercase mb-2"
                              style={{ color: 'var(--retro-green-title)', letterSpacing: '0.12em' }}
                            >
                              Acquis
                            </div>
                            <div className="font-dm text-[13.5px] leading-[1.65]" style={{ color: 'var(--retro-green-text)' }}>
                              {c.fort}
                            </div>
                          </div>
                          <div
                            className="p-5 rounded-xl backdrop-blur-[8px]"
                            style={{ background: 'var(--retro-amber-bg)', border: '1px solid var(--retro-amber-border)' }}
                          >
                            <div
                              className="font-familjen font-bold text-[10.5px] uppercase mb-2"
                              style={{ color: 'var(--retro-amber-title)', letterSpacing: '0.12em' }}
                            >
                              Vigilance
                            </div>
                            <div className="font-dm text-[13.5px] leading-[1.65]" style={{ color: 'var(--retro-amber-text)' }}>
                              {c.vigilance}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* ─────────── Compétences techniques classées ─────────── */}
        {/* Affichées sous l'accordéon BUT : 5 cards vitrées, accent rouge (var(--accent) overridé sur #competences). */}
        <div className="mt-20">
          <h3
            className="font-hyper text-[clamp(26px,2.8vw,36px)] text-ku-text leading-tight mb-2"
            style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}
          >
            Compétences techniques
          </h3>
          <p className="font-dm italic text-[14.5px] mb-8" style={{ color: '#5a8fa0' }}>
            Les outils que je manipule au quotidien.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl p-6"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-glass)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 16px rgba(20,100,130,0.08), inset 0 1px 0 rgba(255,255,255,0.90)',
                }}
              >
                <div
                  className="font-familjen font-bold text-[11px] uppercase mb-4 inline-flex items-center gap-2"
                  style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '2px',
                      borderRadius: '2px',
                      background: 'var(--accent)',
                    }}
                  />
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <SkillBadge key={it.label} item={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
