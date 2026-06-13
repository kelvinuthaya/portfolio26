# CLAUDE.md — Portfolio BUT 3 Informatique
Codex will review your output once you are done.
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
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

## Design system

- **Fond :** `#0b0c0e`
- **Surface :** `#111316`
- **Bordures :** `#1e2128`
- **Texte :** `#e8e6e0`
- **Muted :** `#6b6f7a`
- **Accent principal :** `#c8f060` (vert-jaune)
- **Accent 2 :** `#4fd1c5` (teal)
- **Accent 3 :** `#f0a060` (orange)
- **Typographies :** Syne (titres, 800), Fraunces (display italic), DM Mono (corps)
- **Google Fonts :** `Syne:wght@400;600;700;800`, `DM+Mono:ital,wght@0,300;0,400;1,300`, `Fraunces:ital,wght@0,300;0,700;1,300`

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
- Reprendre exactement le design system du HTML actuel (couleurs CSS variables, typographies Syne + Fraunces + DM Mono, fond sombre #0b0c0e)
- **Écriture** : style direct, personnel, comme un vrai portfolio de dev — pas de jargon académique lourd, pas de formulations type "ce stage mobilise l'ensemble des six compétences". Rester factuel et concis.
- Animations : fadeUp au chargement des pages, transition douce sur les accordéons compétences
- Responsive mobile

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
