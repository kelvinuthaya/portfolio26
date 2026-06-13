# CLAUDE.md — Portfolio BUT 3 Informatique

## Comportement de l'IA (règles permanentes)

### 1. Réfléchir avant de coder
- Énoncer les hypothèses explicitement. Si ambigu, poser la question.
- Si plusieurs interprétations existent, les présenter — ne pas choisir silencieusement.
- Si une approche plus simple existe, la signaler.

### 2. Simplicité d'abord
- Minimum de code qui résout le problème. Rien de spéculatif.
- Pas de fonctionnalités au-delà de ce qui est demandé.
- Pas d'abstractions pour du code à usage unique.
- Si 200 lignes peuvent être 50, réécrire.

### 3. Changements chirurgicaux
- Toucher uniquement ce qui est nécessaire.
- Ne pas "améliorer" le code adjacent.
- Respecter le style existant, même si on ferait différemment.
- Si du code mort est repéré, le signaler — ne pas le supprimer.

### 4. Exécution orientée objectif
Pour les tâches multi-étapes, énoncer un plan bref :
1. [Étape] → vérification : [check]
2. [Étape] → vérification : [check]

### 5. Pédagogie
Kelvin est en BUT3 Informatique. Expliquer brièvement les choix non évidents en commentaire dans le code.

---

## Contexte du projet

**Projet :** Portfolio académique BUT 3 Informatique — livrable noté, deadline 14 juin 2026
**Auteur :** Kelvin Uthayakumar — étudiant BUT 3 Informatique, IUT Villetaneuse, Université Sorbonne Paris Nord
**Stack :** React 18 + Vite, Tailwind CSS v3, React Router v6 — même environnement que Panam'arket
**Déploiement cible :** GitHub Pages (repo : github.com/kelvinuthaya/portfolio)
**CV :** `CV_KELVIN_UTHAYAKUMAR_04_2026.pdf` → à placer dans `public/`

---

## Architecture des fichiers

```
portfolio-but3/
├── public/
│   └── CV_KELVIN_UTHAYAKUMAR_04_2026.pdf
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Presentation.jsx   # /
│       ├── Competences.jsx    # /competences
│       ├── Projets.jsx        # /projets
│       ├── Stages.jsx         # /stages
│       └── Bilan.jsx          # /bilan
├── index.html
└── vite.config.js
```

---

## Design system — CHARTE GRAPHIQUE OBLIGATOIRE

**STYLE : Frutiger Aero — fond aqua clair, surfaces vitrées, bokeh, gradients doux nature+tech. Texte toujours foncé sur fond clair.**

---

### Google Fonts — coller dans `index.html` `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet">
```

- **Tous les titres, labels, nav, badges** → `'Familjen Grotesk', sans-serif`
- **Corps de texte, descriptions, paragraphes** → `'DM Sans', sans-serif`, `font-weight: 400`
- **Accroches hero et citations** → `'DM Sans'`, `font-style: italic`, `font-weight: 300`
- Jamais Inter, Nunito, Syne, ou une autre police — Familjen + DM Sans uniquement.

---

### Palette — coller tel quel dans `index.css`

```css
:root {
  /* Fond principal — aqua clair avec gradients */
  --bg:           #e0eff5;
  --bg-gradient:  radial-gradient(ellipse 55% 45% at 85% 5%,  rgba(170,225,255,0.65) 0%, transparent 65%),
                  radial-gradient(ellipse 45% 55% at 5%  90%, rgba(150,225,190,0.45) 0%, transparent 60%),
                  radial-gradient(ellipse 35% 35% at 45% 45%, rgba(210,240,255,0.25) 0%, transparent 70%);

  /* Surfaces vitrées */
  --surface:      rgba(255,255,255,0.45);   /* cartes */
  --surface-nav:  rgba(255,255,255,0.40);   /* navbar */
  --surface-quote:rgba(255,255,255,0.38);   /* blocs citation/quote */
  --border-glass: rgba(255,255,255,0.82);   /* bordure vitrée */
  --border-divider: rgba(255,255,255,0.70); /* dividers */
  --inset-shine:  inset 0 1px 0 rgba(255,255,255,0.90); /* reflet haut */

  /* Textes — TOUJOURS foncés */
  --text:         #0a1a24;   /* titres principaux */
  --text-body:    #2a5060;   /* corps de texte */
  --text-soft:    #2d5566;   /* descriptions */
  --text-muted:   #5a8fa0;   /* labels, nav liens inactifs */

  /* Accent aqua/bleu */
  --accent:       #1a7090;   /* couleur principale — liens, labels actifs */
  --accent-light: #3bbfd8;   /* dot kicker, highlights */

  /* Bouton principal glossy */
  --btn-bg:       linear-gradient(145deg, #3ec8e0 0%, #1a8aaa 50%, #0f6888 100%);
  --btn-shadow:   0 3px 14px rgba(26,138,170,0.38);

  /* Retro quadrants */
  --retro-green-bg:    rgba(200,245,220,0.55);
  --retro-green-border:rgba(100,210,150,0.30);
  --retro-green-title: #1a7a4a;
  --retro-green-text:  #1a4a30;

  --retro-amber-bg:    rgba(255,235,190,0.50);
  --retro-amber-border:rgba(220,170,80,0.25);
  --retro-amber-title: #9a6010;
  --retro-amber-text:  #6a4010;

  --retro-blue-bg:     rgba(200,235,255,0.50);
  --retro-blue-border: rgba(80,170,220,0.25);
  --retro-blue-title:  #1a5a8a;
  --retro-blue-text:   #0a3050;

  --retro-purple-bg:    rgba(220,205,255,0.45);
  --retro-purple-border:rgba(150,110,220,0.22);
  --retro-purple-title: #5a208a;
  --retro-purple-text:  #3a1060;
}
```

---

### Body / fond de page

```css
body {
  font-family: 'DM Sans', sans-serif;
  background-color: var(--bg);
  background-image: var(--bg-gradient);
  background-attachment: fixed;
  color: var(--text);
  min-height: 100vh;
}
```

---

### Bokeh — à ajouter dans App.jsx ou Layout.jsx, position fixed derrière tout

```jsx
<div aria-hidden="true" style={{position:'fixed',inset:0,pointerEvents:'none',zIndex:0}}>
  {[
    {w:100,h:100,top:'30px',right:'80px',op:1},
    {w:55, h:55, top:'160px',right:'220px',op:.6},
    {w:75, h:75, bottom:'160px',left:'40px',op:.45},
    {w:40, h:40, top:'70px',left:'260px',op:.4},
    {w:130,h:130,bottom:'40px',right:'30px',op:.25},
  ].map((b,i) => (
    <div key={i} style={{
      position:'absolute', borderRadius:'50%',
      width:b.w, height:b.h, top:b.top, right:b.right, bottom:b.bottom, left:b.left,
      opacity:b.op,
      background:'radial-gradient(circle, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.04) 55%, transparent 100%)'
    }}/>
  ))}
</div>
```

---

### Composants — specs précises

**Navbar**
```
position: fixed, top: 0
background: var(--surface-nav), backdrop-filter: blur(18px)
border-bottom: 1px solid var(--border-glass)
"Portfolio" à gauche : Familjen Grotesk 600, color: var(--accent), uppercase, letter-spacing 0.06em
"Kelvin Uthayakumar" au centre : Familjen Grotesk 700, color: var(--text)
liens à droite : DM Sans 400, color: var(--text-muted) → hover/active: var(--accent)
```

**Cards (compétences, projets, stages)**
```
background: var(--surface)
border: 1px solid var(--border-glass)
border-radius: 16px
backdrop-filter: blur(10px)
box-shadow: 0 2px 10px rgba(20,100,130,0.07), var(--inset-shine)
pseudo ::before: position absolute top-0, height 1px, gradient rgba(255,255,255,0.88) — reflet de bord haut

titre card  : Familjen Grotesk 700, color: var(--text)
label num   : Familjen Grotesk 600, uppercase, letter-spacing 0.12em, color: var(--accent)
contexte    : DM Sans 400 italic, color: var(--text-muted)
corps       : DM Sans 400, color: var(--text-soft), line-height 1.7
```

**Badges / tags technos**
```
font-family: Familjen Grotesk, 500, 10px
background: rgba(255,255,255,0.60)
color: #1a6a82
border: 1px solid rgba(255,255,255,0.88)
box-shadow: var(--inset-shine)
border-radius: 12px
padding: 2px 9px
```

**Accordéon compétences**
```
Fermé  : card normale, chevron ↓ color var(--text-muted)
Ouvert : border-left: 3px solid var(--accent), chevron ↑ color var(--accent)
Transition height: smooth 300ms ease
Une seule ouverte à la fois
```

**Bouton principal**
```
background: var(--btn-bg)    ← gradient aqua/bleu
color: #fff
border-radius: 24px
box-shadow: var(--btn-shadow), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(0,0,0,0.12)
font: Familjen Grotesk 600, 12px
```

**Bouton ghost**
```
background: rgba(255,255,255,0.50)
border: 1px solid var(--border-glass)
color: #1a5a72
border-radius: 24px
box-shadow: var(--inset-shine)
font: Familjen Grotesk 500, 12px
```

**Orbe hero**
```css
width: 110px; height: 110px; border-radius: 50%;
background: radial-gradient(circle at 32% 28%,
  rgba(255,255,255,0.88) 0%,
  rgba(90,210,240,0.65) 30%,
  rgba(22,130,170,0.90) 65%,
  rgba(8,70,110,0.96)   100%);
box-shadow: 0 8px 28px rgba(20,100,138,0.32),
            inset 0 -3px 10px rgba(0,0,0,0.14),
            inset 2px 3px 10px rgba(255,255,255,0.45);
/* ::after = reflet spéculaire : width 36%, height 20%, blur 4px, rotate -18deg, rgba(255,255,255,0.52) */
```

**Blocs retro (4 quadrants stage)**
```
Points forts  → bg: var(--retro-green-bg),  border: var(--retro-green-border),  label: var(--retro-green-title),  texte: var(--retro-green-text)
Vigilances    → bg: var(--retro-amber-bg),  border: var(--retro-amber-border),  label: var(--retro-amber-title),  texte: var(--retro-amber-text)
Surprises     → bg: var(--retro-blue-bg),   border: var(--retro-blue-border),   label: var(--retro-blue-title),   texte: var(--retro-blue-text)
Si c'était... → bg: var(--retro-purple-bg), border: var(--retro-purple-border), label: var(--retro-purple-title), texte: var(--retro-purple-text)
border-radius: 13px, backdrop-filter: blur(8px)
label: Familjen Grotesk 700, 9px, uppercase, letter-spacing 0.12em
texte: DM Sans 400, 11px, list-style none, ::before content '· '
```

**Section labels**
```
font: Familjen Grotesk 600, 10px, uppercase, letter-spacing 0.16em
color: var(--text-muted)
::before : width 20px, height 1.5px, background var(--text-muted), border-radius 2px
```

**Kicker hero (pill)**
```
background: rgba(255,255,255,0.52), border: 1px solid rgba(255,255,255,0.88)
border-radius: 20px, padding: 4px 14px
font: Familjen Grotesk 500, 10px, uppercase, letter-spacing 0.12em
color: var(--accent)
dot ::before : 6px, border-radius 50%, background var(--accent-light), box-shadow 0 0 5px rgba(59,191,216,0.7)
```

---

### Ce qu'il NE FAUT PAS faire

- ❌ Fond sombre (`#111`, `#0a0a0a`, dark mode) — le fond EST aqua clair
- ❌ Texte blanc sur fond blanc ou surface vitrée
- ❌ `color: white` ou `color: #fff` sans fond sombre derrière
- ❌ Inter, Nunito, Syne, Poppins ou toute autre police que Familjen Grotesk + DM Sans
- ❌ Tailwind `text-white` sur card ou surface vitrée
- ❌ Variables CSS utilisées sans être définies dans `:root`
- ❌ backdrop-filter sans fallback background (sinon fond transparent sur Firefox)

---

## Conventions de code

- CSS : Tailwind CSS v3 uniquement — pas de styles inline, pas de fichiers CSS séparés (sauf variables globales dans `index.css`)
- Composants : fonctionnels uniquement, pas de classes React
- Imports : toujours en haut de fichier
- Pas de librairies supplémentaires sans le signaler d'abord

---

# Prompt Claude Code — Refonte Portfolio BUT 3

## Contexte
Tu vas refondre un portfolio académique BUT 3 Informatique actuellement en HTML one-page.
Le fichier source est `portfolio_but3_kelvin.html` — lis-le entièrement avant de commencer.
Lis aussi tout le contenu du dossier `portfolio-ancien/` pour extraire des informations supplémentaires à intégrer.
Le CV est disponible dans `CV_KELVIN_UTHAYAKUMAR_04_2026.pdf`.

## Stack cible
React + Vite + React Router + Tailwind CSS v3
(même stack que le projet Panam'arket — tu connais l'environnement)

## Architecture des pages
Crée une app multi-pages avec React Router :

```
/                  → Présentation (Hero + résumé rapide du profil)
/competences       → 6 compétences BUT (Réaliser, Optimiser, Administrer, Gérer, Conduire, Collaborer)
/projets           → SAÉ + projets scolaires
/stages            → CFP Group (BUT 2) + Panam'arket (BUT 3)
/bilan             → Synthèse finale + points forts/vigilances/acquis + CV
```

## Navbar
- Logo/lien "Portfolio" à gauche
- "Kelvin UTHAYAKUMAR" au centre (texte simple, pas de lien)
- Liens de navigation à droite : Présentation · Compétences · Projets · Stages · Bilan
- Fond sombre, fixée en haut, backdrop-filter blur

## Page Présentation (/)
- Hero avec nom, titre ("Étudiant BUT 3 Informatique · Sorbonne Paris Nord"), accroche courte
- Section parcours (2-3 paragraphes, style direct et personnel — pas académique)
- Section formation (BUT 3 RADCV, BUT 2 passerelle, Licence SSS) — layout timeline ou cards simples
- Liens LinkedIn, GitHub, email

## Page Compétences (/competences)
- 6 cards pour les 6 compétences BUT
- **Chaque card est cliquable** : au clic elle s'expand (accordion) pour révéler le contenu détaillé
- État fermé : juste le titre de la compétence + une ligne de résumé + les tags technos
- État ouvert : description complète + SAÉ clés + éval (points forts / vigilances)
- Une seule compétence ouverte à la fois (ferme l'ancienne quand on en ouvre une nouvelle)

## Page Projets (/projets)
- Cards pour chaque SAÉ et projet scolaire :
  - SAÉ S501 TRACKSTAR (Flutter/Dart, ML, 6 personnes)
  - SAÉ THALES 6G (Python, LLMs, Streamlit, 5 personnes)
  - SAÉ Enquête BUT SD (Pandas, matplotlib, enquête qualitative)
  - SAÉ Entrepreneuriat LinkUp (BMC, SWOT, MVP mobile)
  - SAÉ S601 Voronoï + Risques IA (Python, analyse risques IA, rapport académique)
  - Projet R506 TRACKSTAR CITY LO-FI (Pygame, animation procédurale, chef-d'œuvre)
  - Nuit de l'Info (application web éducative océans/humains, 11 personnes, nuit blanche)
  - Wrap It All! (projet perso — Python, API Spotify, OAuth 2.0, NiceGUI)
- Chaque card : intitulé, équipe, stack (badges), résumé court (2-3 lignes), lien GitHub si disponible
- Filtre optionnel : SAÉ / Projet perso / Tout

## Page Stages (/stages)
- Deux sections : CFP Group (BUT 2, juin-août 2025) et Panam'arket (BUT 3, avril-juillet 2026)
- Pour chaque stage : contexte, missions listées, stack, retro en 4 quadrants (points forts / vigilances / bonnes surprises / si c'était à refaire)
- **Supprimer** le titre "Deux stages, deux contextes" — juste les deux blocs côte à côte ou empilés

## Page Bilan (/bilan)
- Introduction courte (2-3 phrases de synthèse personnelle)
- 3 colonnes : Points forts / Points de vigilance / Acquis pour la suite
- Section "Et après ?" : Master Informatique Biomédicale Sorbonne Paris Nord, alternance santé numérique sept. 2026
- **Section CV** : bouton "Voir mon CV" (ouvre le PDF dans un onglet) + bouton "Télécharger" — le PDF est `CV_KELVIN_UTHAYAKUMAR_04_2026.pdf`, place-le dans `public/`

## Style général
- **Charte Frutiger Aero** : appliquer la charte ci-dessus à la lettre. Fond aqua `#e0eff5` + gradients, surfaces vitrées `rgba(255,255,255,0.45)`, bokeh en position fixed.
- **Polices** : Familjen Grotesk (titres/labels) + DM Sans (corps/italic). Aucune autre.
- **Écriture** : style direct et personnel — pas de jargon académique, pas de "ce stage mobilise l'ensemble des six compétences". Phrases courtes, ton de vrai portfolio dev.
- **Animations** : fadeUp léger au chargement (opacity 0→1 + translateY 12px→0, 0.5s ease), transition accordéon 300ms ease.
- **z-index** : bokeh à z-index 0, contenu à z-index 2, navbar à z-index 10.
- Responsive mobile.

## Ce qu'il faut extraire du dossier portfolio-ancien/
Lis tous les fichiers du dossier `portfolio-ancien/` et récupère :
- Les projets ou expériences qui ne sont pas encore dans le HTML actuel
- Les descriptions de projets plus personnelles ou plus précises
- Les captures d'écran ou assets réutilisables (place-les dans `public/assets/`)
- Toute info de contact, lien, ou présentation personnelle utile

## Instructions d'exécution
1. Lire `portfolio_but3_kelvin.html` (contenu source HTML actuel)
2. Lire `sae_resume.md` — c'est la **source de vérité** pour tout le contenu : SAÉ, projets, stages avec détails complets, points forts, vigilances, acquis. Utilise ce fichier en priorité sur le HTML pour remplir les pages Projets et Stages.
3. Lire tout le dossier `portfolio-ancien/` pour extraire infos et assets supplémentaires
4. Créer le projet React avec `npm create vite@latest portfolio-but3 -- --template react`
5. Installer les dépendances : `react-router-dom`, `tailwindcss@3`, `postcss`, `autoprefixer`
6. Construire les composants page par page
7. Copier le CV dans `public/`
8. Lancer `npm run dev` pour vérifier

## Ce qu'il ne faut PAS faire
- Ne pas tout remettre sur une seule page
- Ne pas garder le titre "Deux stages, deux contextes"
- Ne pas écrire comme une réponse à des consignes académiques
- Ne pas utiliser de formulations lourdes type "ce stage mobilise l'ensemble des..."
- Ne pas mettre plus de 3-4 phrases par paragraphe
