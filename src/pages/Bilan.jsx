// Bilan.jsx — Section #bilan : synthèse finale du parcours BUT 3.
//
// Structure :
//   1. Intro narrative (un paragraphe).
//   2. Trois cards Points forts / Vigilances / Acquis — chacune avec la couleur
//      d'une section du portfolio (vert stages, rouge compétences, violet projets).
//   3. Section "Et après ?" — projection master + alternance + 2 cards info.
//   4. Section CV — boutons "Voir mon CV" + "Télécharger".
//
// Couleur d'accent générale : orange (overridé via #bilan dans index.css).

// Chaque card emprunte la palette d'une section : tint clair sur le fond, bordure
// section-light, titre en couleur deep, texte foncé pour la lisibilité.
const colonnes = [
  {
    title: 'Points forts identifiés',
    items: [
      'Full-stack React / Supabase opérationnel',
      'Capacité à livrer en contexte réel',
      'Profil cross-disciplinaire santé + tech',
      'Autonomie et prise d\'initiative',
      'Communication inter-profils tech / non-tech',
    ],
    // Vert — couleur de la section Stages (le terrain où ces forces se sont prouvées).
    bg: 'linear-gradient(160deg, rgba(46,168,106,0.18) 0%, rgba(46,168,106,0.08) 100%)',
    border: 'var(--c-stages-light)',
    titleColor: 'var(--c-stages-deep)',
    textColor: '#1a3a26',
  },
  {
    title: 'Points de vigilance',
    items: [
      'Tests automatisés à renforcer',
      'Documentation à écrire tôt',
      'DevOps / CI-CD à approfondir',
      'Algorithmique avancée à consolider',
    ],
    // Rouge — couleur de la section Compétences (ce qu'il reste à travailler).
    bg: 'linear-gradient(160deg, rgba(224,71,106,0.16) 0%, rgba(224,71,106,0.07) 100%)',
    border: 'var(--c-comp-light)',
    titleColor: 'var(--c-comp-deep)',
    textColor: '#5a1024',
  },
  {
    title: 'Acquis pour la suite',
    items: [
      'Cadrer le périmètre des missions dès le début',
      'Tests en parallèle du développement',
      'Docs architecture = acte de collaboration',
      'IA comme outil, pas comme oracle',
      'Sécurité par conception, pas en option',
    ],
    // Violet — couleur de la section Projets (les futurs projets qui en bénéficieront).
    bg: 'linear-gradient(160deg, rgba(124,77,204,0.16) 0%, rgba(124,77,204,0.07) 100%)',
    border: 'var(--c-proj-light)',
    titleColor: 'var(--c-proj-deep)',
    textColor: '#2a1450',
  },
]

export default function Bilan() {
  return (
    <section id="bilan" className="relative overflow-hidden">
      <span className="watermark" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", top: '60px', right: '-30px' }}>BILAN</span>
      <div className="relative max-w-[1280px] mx-auto px-16 pt-24 pb-24">
        <h2 className="font-hyper text-[clamp(44px,6vw,68px)] text-ku-text mb-12 leading-[1.05]" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
          Bilan
        </h2>

        <div className="max-w-[760px] font-dm text-[16px] leading-[1.85] text-ku-body mb-14">
          <p>
            Ces trois années de BUT Informatique ont constitué une transformation profonde de mon
            rapport à la technique et au projet. Je suis entré dans ce cursus avec une culture de la
            santé et un intérêt pour les données ; j&apos;en sors avec des outils concrets pour agir sur
            ces deux champs simultanément.
          </p>
        </div>

        {/* 3 cards Points forts / Vigilances / Acquis — droites (sans rotation), aux couleurs des sections. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {colonnes.map((col) => (
            <div
              key={col.title}
              className="rounded-2xl backdrop-blur-[8px] p-7"
              style={{
                background: col.bg,
                border: `1px solid ${col.border}`,
                boxShadow: '0 6px 20px rgba(20,100,130,0.10), inset 0 1px 0 rgba(255,255,255,0.85)',
              }}
            >
              <div
                className="font-familjen font-bold text-[12.5px] uppercase mb-4"
                style={{ color: col.titleColor, letterSpacing: '0.12em' }}
              >
                {col.title}
              </div>
              <ul className="font-dm text-[14px] leading-[1.85] list-none" style={{ color: col.textColor }}>
                {col.items.map((i) => (
                  <li key={i} className="flex gap-2 items-start mb-1.5">
                    <span style={{ color: col.titleColor }} className="mt-0.5 shrink-0">·</span>
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Et après */}
        <div className="pt-12 mb-12" style={{ borderTop: '1px solid var(--border-divider)' }}>
          <h3 className="font-hyper text-[clamp(32px,3.5vw,44px)] text-ku-text mb-8 leading-tight" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
            Et après ?
          </h3>

          <div className="max-w-[760px] font-dm text-[16px] leading-[1.85] text-ku-body space-y-4 mb-8">
            <p>
              La trajectoire que j&apos;imagine pour la suite est claire : intégrer le{' '}
              <strong className="text-accent font-semibold">Master Informatique Biomédicale</strong> à
              Sorbonne Paris Nord, pour continuer à construire à l&apos;intersection du soin et du logiciel.
            </p>
            <p>
              À plus long terme : interopérabilité des systèmes de santé, exploitation des données cliniques,
              ingénierie des logiciels médicaux. Des sujets qui nécessitent à la fois une solide culture
              technique et une compréhension fine des enjeux cliniques, réglementaires et humains du secteur
              de la santé, un équilibre que je suis déterminé à cultiver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[580px]">
            {[
              { label: 'Objectif', title: 'Master Informatique Biomédicale', sub: 'Sorbonne Paris Nord' },
              { label: 'Format',   title: 'Alternance, Santé numérique',     sub: 'Septembre 2026' },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-2xl backdrop-blur-[10px] shadow-card p-5"
                style={{ background: 'var(--surface)', border: '1px solid var(--border-glass)' }}
              >
                <div
                  className="font-familjen font-semibold text-[11px] uppercase text-muted mb-2"
                  style={{ letterSpacing: '0.12em' }}
                >
                  {card.label}
                </div>
                <div className="font-familjen font-bold text-[16px] text-ku-text">{card.title}</div>
                <div className="font-dm text-[13px] text-muted mt-1 italic">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CV */}
        <div className="pt-12" style={{ borderTop: '1px solid var(--border-divider)' }}>
          <h3 className="font-hyper text-[clamp(26px,2.8vw,36px)] text-ku-text mb-6 leading-tight" style={{ fontFamily: "'Ultra Hyper', 'Familjen Grotesk', sans-serif", letterSpacing: '0.02em' }}>
            Curriculum Vitae
          </h3>

          <div className="flex gap-4 flex-wrap">
            <a
              href="/CV_KELVIN_UTHAYAKUMAR_04_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-familjen font-semibold text-[13px] uppercase px-7 py-3.5 rounded-[100px] text-white transition-opacity hover:opacity-90"
              style={{
                background: 'var(--btn-bg)',
                boxShadow: 'var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)',
                letterSpacing: '0.06em',
              }}
            >
              Voir mon CV
            </a>
            <a
              href="/CV_KELVIN_UTHAYAKUMAR_04_2026.pdf"
              download="CV_KELVIN_UTHAYAKUMAR.pdf"
              className="font-familjen font-medium text-[13px] uppercase px-7 py-3.5 rounded-[100px] transition-opacity hover:opacity-80"
              style={{
                background: 'rgba(255,255,255,0.50)',
                border: '1px solid var(--border-glass)',
                color: '#1a5a72',
                boxShadow: 'var(--inset-shine)',
                letterSpacing: '0.06em',
              }}
            >
              Télécharger
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
