// Stages.jsx — Section #stages : 2 cards dépliables (Panam'arket + CFP Group).
//
// Chaque card contient, en plus du contexte et des missions, une rétrospective en 4 quadrants :
//   - Points forts        (palette verte)
//   - Points de vigilance (palette ambre)
//   - Bonnes surprises    (palette bleue)
//   - Si c'était à refaire (palette violette)
//
// L'expansion fonctionne comme pour Compétences : grid-template-rows 0fr → 1fr (interpolable).
// Couleur d'accent générale de la section : vert (overridé via #stages dans index.css).

import { useState } from 'react'

const stages = [
  {
    id: 'panamarket',
    dates: 'Avril → Juillet 2026',
    name: 'Panam\'arket',
    role: 'Développement PWA full-stack',
    location: 'Commerce de proximité, Paris · 16 semaines ',
    contexte: 'Panam\'arket utilise Secure Caisse (NF 525) pour l\'encaissement légal mais ce logiciel est aveugle sur le stock physique. Mission : concevoir et déployer une PWA logistique complémentaire qui comble cet angle mort.',
    missions: [
      'Architecture full-stack React (PWA) + Supabase (PostgreSQL) + Netlify',
      'Modules Ruptures / Approvisionnement / Achats',
      'Module Dashboard : 4 métriques cards (CA jour, articles vendus, ruptures, stocks insuffisants), graphique Recharts 7 jours, top 5 produits, sélecteur de mois, import PDF/CSV des exports Secure Caisse via parser custom (pdf.js + latin-1)',
      'Module Catalogue : CRUD produits, scan code-barres, auto-remplissage via API Open Food Facts',
      'Auth Supabase 3 rôles (employé / manager / gérant), AuthContext centralisé, guards de route, normalisation des rôles (accents, casse)',
    ],
    stack: ['React 18', 'Vite', 'Tailwind v3', 'Supabase', 'PostgreSQL', 'Netlify', 'ZXing', 'jsPDF', 'Recharts', 'pdf.js', 'Open Food Facts API'],
    forts: [
      'Livrable fonctionnel déployé en production',
      'Architecture propre et évolutive',
      'Usage professionnel de l\'IA en workflow complémentaire (Claude Code + Claude.ai)',
      'Gestion des cas limites réels : codes-barres corrompus, format PDF non documenté, encodage latin-1, collisions de colonnes',
    ],
    vigilances: [
      'Sous-estimation du parsing PDF : le format réel différait des suppositions : toujours valider les données réelles avant de coder',
      'Documentation du schéma BDD tardive (écrite après la conception plutôt qu\'en parallèle)',
      'Gestion du scope sous pression : périmètre évolué plusieurs fois',
      
      ],
    surprises: [
      'RLS Supabase très puissant et simple à mettre en place une fois compris',
      'API Open Food Facts gratuite et fiable pour l\'auto-remplissage produits',
      'Scanner USB code-barres compatible nativement (clavier + Enter)',
      'Tuteur très impliqué dans les tests terrain, retours rapides et concrets',
    ],
    refaire: [
      'Cadrer le périmètre avec le tuteur dès la semaine 1',
      'Prototyper le parsing PDF dès le départ en lisant les vrais fichiers avant d\'écrire du code',
      'Écrire les tests unitaires en parallèle du développement (pas à la fin)',
      'Documenter les décisions techniques au fil de l\'eau (Architecture Decision Records)',
    ],
    accent: 'var(--retro-green-title)',
  },
  {
    id: 'cfp',
    dates: 'Juin → Août 2025',
    name: 'CFP Group',
    role: 'Assistant IT & coordination projets IT',
    location: 'Start-up immobilière, Montrouge (92) · 8 semaines',
    contexte: [
      'CFP Group (Cash Flow Positif) est une start-up de conseil en investissement immobilier locatif, comportant 5 filiales (CFP, Ubireal, Revaloc, Banquos, Squibly). Mission : contribuer à la restructuration et à la continuité opérationnelle du pôle IT dans un contexte de réorganisation interne, après le départ de l\'ancien responsable IT.',
    ],
    missions: [
      'Onboardings / Offboardings : restructuration complète du processus d\'intégration et de sortie des collaborateurs, formalisation des procédures, création de guides et de checklists.',
      'Inventaire complet du parc informatique et coordination des réparations avec WIREP, audit Microsoft 365.',
      'Mission prioritaire Aircall (~3 semaines) : audit lignes VoIP, reconfiguration de la distribution des appels, remaniement du SVI (arborescence + voix off pro)',
      'Rapport statistique en R (taux de réponse global et par collaborateur) présenté au CEO lors des Weekly Aircall',
      'Support utilisateurs : Outlook/Teams MFA, lenteurs Windows, matériel audiovisuel, guide de prévention du phishing',
    ],
    stack: ['Microsoft 365', 'Outlook', 'Teams', 'Aircall', 'BitLocker', 'Bitwarden', 'Signwell', 'Excel', 'R / R Markdown / ggplot2', 'Windows 10/11'],
    forts: [
      'Impact immédiat et mesurable : temps d\'onboarding réduit de 1h30 à 45 min, taux de réponse Aircall +15 % en 2 semaines',
      'Rôle de relais entre besoins métier et solutions techniques',
      'Audit Aircall devenu base d\'une solution automatisée reprise par le pôle Tech',
      'Production documentaire riche : guide d\'onboarding, charte informatique, guides techniques pour le pôle IT.',
    ],
    vigilances: [
      'Absence de feuille de route : priorités changeantes, urgences non planifiées',
      'Mission de développement (application ONOFFBOARD, automatisation Python) non réalisée faute de temps',
      'Pas de système de ticketing au départ : traçabilité des interventions à reconstruire après coup',
    ],
    surprises: [
      'Communication avec le CEO et les responsables de pôles plus régulière qu\'attendue (Weekly Aircall)',
      'Confiance rapide du tuteur sur des missions sensibles (gestion accès, comptes inactifs), liberté de proposer des solutions et de les mettre en œuvre',
      'Diversité des interlocuteurs : du CEO au stagiaire RH, en passant par le prestataire externe (WIREP)',
      'RStudio mobilisé sur un contexte 100 % entreprise, hors cadre data académique',
    ],
    refaire: [
      'Négocier dès le départ un périmètre de missions plus clair avec le tuteur',
      'Bloquer du temps dédié au développement malgré les urgences opérationnelles',
      'Mettre en place un système de ticketing dès le début pour mieux tracer les interventions',
      'Provisionner du temps de documentation au fil de l\'eau plutôt qu\'en fin de stage',
    ],
    accent: 'var(--retro-amber-title)',
  },
]

// Petit composant réutilisé 4 fois par stage — une boîte colorée avec un titre + liste à puces.
// `palette` choisit le set CSS (green / amber / blue / purple) défini dans :root (index.css).
function RetroBlock({ label, items, palette }) {
  return (
    <div
      className="p-5 rounded-[13px] backdrop-blur-[8px]"
      style={{
        background: `var(--retro-${palette}-bg)`,
        border: `1px solid var(--retro-${palette}-border)`,
      }}
    >
      <div
        className="font-familjen font-bold text-[11px] uppercase mb-3"
        style={{ color: `var(--retro-${palette}-title)`, letterSpacing: '0.12em' }}
      >
        {label}
      </div>
      <ul className="font-dm text-[13px] leading-[1.7] space-y-1.5" style={{ color: `var(--retro-${palette}-text)`, listStyle: 'none' }}>
        {items.map((it, i) => (
          <li key={i} style={{ display: 'flex', gap: '8px' }}>
            <span aria-hidden="true">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Stages() {
  const [openId, setOpenId] = useState('panamarket')
  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="stages" className="relative overflow-hidden">
<div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
        <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-10 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
          Stages
        </h2>

        <div className="space-y-8">
          {stages.map((s) => {
            const isOpen = openId === s.id
            return (
              <div
                key={s.id}
                className="rounded-[22px] overflow-hidden"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border-glass)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 16px rgba(20,100,130,0.08), inset 0 1px 0 rgba(255,255,255,0.90)',
                }}
              >
                {/* En-tête cliquable */}
                <button
                  onClick={() => toggle(s.id)}
                  className="w-full p-7 text-left grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-4 items-start"
                >
                  <div>
                    <div className="font-dm italic text-[14px]" style={{ color: '#1e7a96' }}>
                      {s.dates}
                    </div>
                    <div className="font-familjen font-bold text-[32px] text-ku-text mt-1 leading-tight">
                      {s.name}
                    </div>
                    <div className="font-dm text-[15px] mt-1.5" style={{ color: '#3a6a7a' }}>
                      {s.role}
                    </div>
                    <div className="font-dm italic text-[13px] mt-1.5" style={{ color: '#5a8fa0' }}>
                      {s.location}
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 shrink-0 self-center font-familjen font-semibold text-[12px] uppercase rounded-full"
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

                {/* Contenu déplié */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 320ms ease',
                  }}
                >
                  <div style={{ minHeight: 0, overflow: 'hidden' }}>
                    <div className="px-7 pb-7" style={{ borderTop: '1px solid var(--border-divider)' }}>
                      {/* Contexte */}
                      <div className="pt-7 mb-8">
                        <div
                          className="font-familjen font-bold text-[11px] uppercase mb-3"
                          style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                        >
                          Contexte
                        </div>
                        <p className="font-dm text-[15px] leading-[1.8]" style={{ color: 'var(--text-body)' }}>
                          {s.contexte}
                        </p>
                      </div>

                      {/* Missions + Stack */}
                      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 mb-9">
                        <div>
                          <div
                            className="font-familjen font-bold text-[11px] uppercase mb-3"
                            style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                          >
                            Missions clés
                          </div>
                          <ul className="font-dm text-[14.5px] leading-[1.75] space-y-2" style={{ color: 'var(--text-body)', listStyle: 'none' }}>
                            {s.missions.map((m, i) => (
                              <li key={i} style={{ display: 'flex', gap: '10px' }}>
                                <span aria-hidden="true" style={{ color: 'var(--accent-light)' }}>·</span>
                                <span>{m}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div
                            className="font-familjen font-bold text-[11px] uppercase mb-3"
                            style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                          >
                            Stack & outils
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {s.stack.map((t) => (
                              <span
                                key={t}
                                className="font-familjen font-medium text-[12px]"
                                style={{
                                  background: 'rgba(255,255,255,0.60)',
                                  color: '#1a6a82',
                                  border: '1px solid rgba(255,255,255,0.88)',
                                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.90)',
                                  borderRadius: '12px',
                                  padding: '4px 12px',
                                  letterSpacing: '0.03em',
                                }}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Retro 4 quadrants */}
                      <div
                        className="font-familjen font-bold text-[11px] uppercase mb-4"
                        style={{ color: 'var(--accent)', letterSpacing: '0.14em' }}
                      >
                        Rétrospective
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <RetroBlock label="Points forts" items={s.forts} palette="green" />
                        <RetroBlock label="Points de vigilance" items={s.vigilances} palette="amber" />
                        <RetroBlock label="Bonnes surprises" items={s.surprises} palette="blue" />
                        <RetroBlock label="Si c'était à refaire" items={s.refaire} palette="purple" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
