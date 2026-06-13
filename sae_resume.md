# Portfolio BUT 3 Informatique — Kelvin UTHAYAKUMAR
## IUT de Villetaneuse — Université Sorbonne Paris Nord
### Récapitulatif des SAÉ, projets scolaires et stage

---

## TABLE DES MATIÈRES

1. [SAÉ](#saé)
   - [SAÉ S501 — TRACKSTAR (Développement avancé)](#saé-s501--trackstar-développement-avancé--s5-2025-2026)
   - [SAÉ MSI/Thales — Brevets 6G](#saé-msithales--acquisition-automatique-de-données-brevets-6g--s3-2024-2025)
   - [SAÉ N°1 BUT 2 — Enquête devenir BUT SD](#saé-n1-but-3--enquête-devenir-des-étudiants-but-sd--s3-2024-2025)
   - [SAÉ Entrepreneuriat — LinkUp](#saé-entrepreneuriat--linkup--s6-2025-2026)
   - [SAÉ S601 — Voronoï & Risques IA](#saé-s601--diagrammes-de-voronoï--risques-ia--s6-2025-2026)
2. [Projets scolaires](#projets-scolaires)
   - [R506 Chef-d'œuvre — TRACKSTAR CITY LO-FI](#projet-scolaire-r506--chef-dœuvre-trackstar-city-lo-fi--s6-2025-2026)
3. [Stage](#stage)
   - [Stage BUT 2 — Assistant IT @ CFP Group](#stage-but-2--assistant-it--cfp-group--juin--août-2025)
   - [Stage BUT 3 — Développeur FUllstack @ Panam'arket](#stage-but-3-dev-fullstack--panamarket--avril--juillet-2026)

---

## SAÉ

---

### SAÉ S501 — TRACKSTAR (Développement avancé) | S5, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | SAÉ |
| **Intitulé exact** | SAÉ S501 — Développement avancé d'application mobile : TRACKSTAR |
| **Contexte** | BUT 3 Informatique, Groupe Hauméa, S5. IUT de Villetaneuse. Enseignant responsable : Pierrick Siest |
| **Objectif** | Développer une application mobile de recommandation musicale fonctionnant entièrement hors ligne (offline-first), avec un algorithme de filtrage collaboratif basé sur des features audio |
| **Taille de l'équipe** | 6 membres — équipe "KEYRIL" |
| **Mon rôle** | Développeur & analyste algorithmique |
| **Durée** | Semestre 5 (2025-2026) |

**Membres de l'équipe :** Kelvin Uthayakumar, Edmilson Da Costa Sa, Yann Diarrassouba, Rayan El Ouazzani, Ilyes Medjdoub, Leelian Serrant

**Mes tâches concrètes :**
- Participation à la conception de l'architecture applicative (Flutter/SQLite)
- Contribution au développement des fonctionnalités de swipe et du moteur de recommandation
- Rédaction du rapport d'analyse algorithmique (complexité du cold start, du profil vectoriel, de la recherche de similarité)
- Analyse et modélisation de la complexité Big-O pour chaque composante de l'algorithme
- Contribution aux pistes d'optimisation (batching, préchargement, impact batterie)

**Outils / Stack technique :**
- Framework : **Flutter**, Langage : **Dart**
- Base de données locale : **SQLite**
- Serveur de tests : **Node.js / Express**
- Dataset : Spotify (Kaggle), features : tempo, énergie, valence, acoustique
- Algorithme : vecteur moyen (profil utilisateur), distance euclidienne, **ACP** (réduction dimensionnelle), **K-Means** (clustering)

**Résultats obtenus / Livrables :**
- Application mobile TRACKSTAR fonctionnelle (offline, recommandation par swipe)
- Rapport "Axes d'amélioration — Complexité algorithmique et optimisation" (SAÉ S501)
- Analyse formelle de la complexité : cold start O(k·n), profil vectoriel O(L·d), recherche de similarité O(n·d)

**Points forts :**
- Architecture totalement locale : pas de cloud, pas de dépendance réseau
- Analyse de complexité algorithmique rigoureuse et illustrée
- Réutilisation de Flutter/Dart acquis en BUT 2

**Difficultés / problèmes rencontrés :**
- Gestion du problème "cold start" (algorithme peu précis pour un nouveau profil vide)
- Équilibre entre précision des recommandations et performances sur mobile

**Ce que je referais différemment :**
- Implémenter un système de tests unitaires plus tôt dans le cycle de développement
- Utiliser une structure de données plus efficace (KD-tree) pour la recherche de voisins

**Acquis pour la suite :**
- Maîtrise de Flutter/Dart appliquée à un projet conséquent
- Capacité à analyser et documenter la complexité algorithmique
- Expérience du travail en équipe sur une application mobile complète

---

### SAÉ MSI/Thales — Acquisition automatique de données Brevets 6G | S3, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | SAÉ |
| **Intitulé exact** | Acquisition automatique de données : Brevets 6G (SAÉ Management des Systèmes d'Information) |
| **Contexte** | BUT 3 Informatique, S5. IUT de Villetaneuse, Groupe Hauméa. Sujet proposé par **Thales** (contact : ilyes.talaoubrid@thalesgroup.com). Cours MSI (Management des Systèmes d'Information) |
| **Objectif** | Automatiser la collecte, l'analyse et la visualisation de brevets sur la 6G et la sécurité (source : Google Patents), avec traitement LLM pour générer résumés, problèmes, solutions |
| **Taille de l'équipe** | 5 membres — Groupe 4 |
| **Mon rôle** | Chargé de rapport & gestion de l'organisation (+ contribution webapp finale) |
| **Durée** | ~8 semaines, Semestre 3 |

**Membres de l'équipe :** DA COSTA Edmilson & DIARRASSOUBA Yann (chefs projet), DANTON Emmanuel & FALL Habdallahi (développeurs), DIARRASSOUBA Yann & UTHAYAKUMAR Kelvin (rapport + organisation)

**Mes tâches concrètes :**
- Mise en place et supervision des outils collaboratifs : tableau **Klaxoon**, groupe **WhatsApp**, **Discord**
- Rédaction du rapport de mi-parcours et du rapport final de groupe (plan d'actions, répartition des tâches, résultats)
- Préparation et coordination de la soutenance de mi-parcours et de la soutenance finale (PowerPoint)
- Contribution au développement de la **webapp Streamlit** finale (`app.py`) : intégration des filtres, visualisations Plotly, wordcloud, tableau éditeur, bouton de téléchargement

**Outils / Stack technique :**
- **Python** (Google Colab), **BeautifulSoup**, **requests**, **pandas**
- **Google Drive API** (stockage cloud automatisé)
- LLMs : **HuggingFace**, **Mistral** (via API Groq — résumés, extraction problèmes/solutions)
- Visualisation : **Streamlit**, **Plotly Express**, **wordcloud**, **Power BI**
- Gestion de projet : **Klaxoon**, **Google Drive**, **Discord**, **WhatsApp**
- Formats de données : **CSV**, **Excel (xlsx)**

**Résultats obtenus / Livrables :**
- Base de données de brevets 6G en CSV (`brevets_6G.csv`) avec champs : URL, titre, date, keywords, abstract, claims, assignee, résumé LLM, problème, solution, domaine
- Tableau de bord Streamlit interactif (filtres par date, organisation, domaine ; graphiques par année, pie chart, word cloud, métriques clés)
- Rapports de mi-parcours et final
- Présentation PowerPoint soutenance

**Points forts :**
- Exposition réelle à un sujet industriel (Thales)
- Utilisation de LLMs pour l'enrichissement automatisé de données
- Application web fonctionnelle avec tableaux de bord interactifs

**Difficultés / problèmes rencontrés :**
- Retard au démarrage (mauvaise gestion du temps en début de projet)
- Coordination entre 5 membres de niveaux techniques hétérogènes
- Gestion des erreurs lors du scraping (pages manquantes, champs vides, hallucinations LLM)

**Ce que je referais différemment :**
- Clarifier dès le départ la répartition des tâches avec des livrables datés
- M'impliquer plus tôt dans la partie programmation

**Acquis pour la suite :**
- Web scraping Python (BeautifulSoup, requests)
- Utilisation pratique des APIs LLM (Groq, HuggingFace)
- Développement de dashboards avec Streamlit et Plotly
- Gestion de projet en équipe technique hétérogène

---

### SAÉ N°1 BUT 3 — Enquête devenir des étudiants BUT SD | S3, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | SAÉ |
| **Intitulé exact** | SAÉ N°1 — Rapport d'entretien et questionnaire : devenir des étudiants diplômés BUT SD |
| **Contexte** | BUT 3 Informatique, S5. IUT de Villetaneuse. Cours méthodologie/statistiques. Département Sciences des Données (chef : David Hébert). Contexte HCERES : point de vigilance sur le manque de données sur le devenir des diplômés BUT |
| **Objectif** | Mener une enquête complète (entretiens → questionnaire → analyse) sur les trajectoires post-BUT des diplômés de la filière BUT Science des Données de Villetaneuse |
| **Taille de l'équipe** | 3 membres |
| **Mon rôle** | Enquêteur, rédacteur, analyste |
| **Durée** | Semestre 3 |

**Membres de l'équipe :** Kelvin UTHAYAKUMAR, Yann DIARRASSOUBA, Edmilson DA COSTA SA

**Mes tâches concrètes :**
- Recherche et préparation des questions pour les 2 entretiens exploratoires (Matthieu Clertant, directeur des études, 30 min ; David Hébert, chef de département)
- Conduite des entretiens (temps de parole équilibré entre les 3 membres)
- Rédaction du rapport d'entretien (synthèse des lignes directrices, analyse des profils diplômés)
- Co-conception du questionnaire final (~20 questions) : bac, parcours, poursuite d'études, bien-être, insertion
- Analyse des données (Pandas, matplotlib) — visualisations (TP notebooks Jupyter)

**Outils / Stack technique :**
- **Google Forms**, **Google Sheets**
- **Python** : **Pandas**, **matplotlib** (notebooks Jupyter)
- Supports : fichiers Excel/CSV, comptes rendus d'entretien

**Résultats obtenus / Livrables :**
- Rapport d'entretien (3 pages) — analyse des besoins du département
- Questionnaire papier et numérique (~20 questions) destiné aux 30 diplômés BUT SD 2024
- Notebooks Jupyter d'analyse des réponses
- Synthèse finale SAÉ

**Points forts :**
- Démarche d'enquête complète de bout en bout (entretien → questionnaire → analyse)
- Approche rigoureuse (RGPD respecté : transmission via l'équipe pédagogique)
- Analyse croisant données quantitatives et qualitatives

**Difficultés / problèmes rencontrés :**
- Faible taux de réponse attendu (30 diplômés, échantillon réduit)
- Adapter les questions entre les besoins du chef de département (qualitatif/bien-être) et du directeur des études (quantitatif/statistiques)

**Ce que je referais différemment :**
- Prévoir dès le départ un second canal de diffusion (relances par email, réseau LinkedIn alumni)
- Tester le questionnaire sur un petit panel avant diffusion officielle

**Acquis pour la suite :**
- Méthodologie d'enquête (entretien semi-directif, questionnaire fermé/ouvert)
- Analyse de données sociales avec Pandas/matplotlib
- Sens de la communication avec des interlocuteurs institutionnels

---

### SAÉ Entrepreneuriat — LinkUp | S6, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | SAÉ |
| **Intitulé exact** | SAÉ Entrepreneuriat — LinkUp : application mobile d'organisation de sorties entre amis |
| **Contexte** | BUT 3 Informatique, IUT de Villetaneuse. Cours entrepreneuriat |
| **Objectif** | Concevoir un projet entrepreneurial complet : identifier un problème réel, proposer une solution numérique différenciée, construire le dossier business (étude de marché, BMC, MVP, stratégie de lancement) |
| **Taille de l'équipe** | 4 membres |
| **Mon rôle** | Co-fondateur, contributeur à toutes les phases (marché, stratégie, MVP) |
| **Durée** | Semestre 6 |

**Membres de l'équipe :** Rodrigues Kévin, Medjdoub Ilyes, Uthayakumar Kelvin, Serrant Leelian

**Problème adressé :** Les outils de messagerie (WhatsApp, Discord) sont inadaptés à l'organisation de sorties : informations perdues dans le flux, décisions interminables, aucune vision de qui est disponible.

**Solution LinkUp :** Application mobile centralisant l'intégralité du processus (date + lieu + budget) en 3 clics, via des sondages structurés et des rappels automatiques.

**Mes tâches concrètes :**
- Participation à l'identification du problème et à la définition de la solution
- Benchmark concurrentiel (Doodle, Framadate, Partiful) — analyse fonctionnalités, tarifs, avis
- Construction de la matrice SWOT
- Élaboration du Business Model Canvas
- Définition de la proposition de valeur (4 axes : simplification, centralisation, élimination du bruit, décision rapide)
- Description du MVP (interface de création de sortie : participants, lieu Google Maps, date, budget, sondage)
- Co-rédaction de la stratégie de lancement (approche Lean, cible 18-25 ans, beta région parisienne)
- Mise en place des outils de veille concurrentielle (Ahrefs, Google Alertes)

**Outils / Stack technique :**
- Business : matrice SWOT, BMC, matrice SMART, Ahrefs, Google Alertes
- Tech (MVP envisagé) : application mobile, **Google Maps API**, système de notifications push
- Inspiration UX : Instagram, Spotify (codes esthétiques)

**Résultats obtenus / Livrables :**
- Dossier Entrepreneurial complet (étude de marché, benchmark, SWOT, BMC, proposition de valeur, MVP, stratégie Lean)
- Maquette MVP de l'interface de création de sortie
- Objectif SMART : version beta fonctionnelle en 3 mois, taux de complétion des sorties ≥ 70 %

**Points forts :**
- Analyse concurrentielle sérieuse et différenciation clairement identifiée
- Proposition de valeur concrète et mesurable
- Stratégie de lancement réaliste pour une start-up étudiante (budget zéro, croissance organique)

**Difficultés / problèmes rencontrés :**
- Dépendance au réseau (utilité conditionnée à l'adoption collective)
- Risque de complexification si ajout de fonctionnalités au-delà du MVP
- Inertie des habitudes (les utilisateurs ont déjà WhatsApp)

**Ce que je referais différemment :**
- Réaliser des entretiens utilisateurs dès le départ pour valider les hypothèses du BMC
- Prototyper rapidement sur Figma avant de formaliser le dossier

**Acquis pour la suite :**
- Méthodologie entrepreneuriale (lean startup, BMC, SWOT, SMART)
- Analyse de marché et veille concurrentielle
- Structuration d'un pitch et d'une proposition de valeur

---

### SAÉ S601 — Diagrammes de Voronoï & Risques IA | S6, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | SAÉ |
| **Intitulé exact** | SAÉ S601 — Diagrammes de Voronoï & Risques des IA Génératives |
| **Contexte** | BUT 3 Informatique, Groupe Hauméa, S6. IUT de Villetaneuse. Responsables : Jean-Christophe Dubacq, Micaela Mayero, Haïfa Zargayouna |
| **Objectif** | Phase 1 : implémenter un algorithme de Voronoï sans aucune IA. Phase 2 : comparer avec ≥ 4 IAGen (prompts + mesure du temps de correction). Phase 3 : analyse individuelle des risques IA générative pour une entreprise |
| **Taille de l'équipe** | Équipe Hauméa (taille non précisée) |
| **Mon rôle** | Développeur (Phase 1) + Auteur du rapport individuel "Risques IA : Environnement" (Phase 3) |
| **Durée** | Semestre 6 (2025-2026) |

**Mes tâches concrètes :**

**Phase 1 — Algorithme Voronoï à la main :**
- Implémentation Python de `Algo_a_la_main.py` : lecture des points depuis `Points.txt`, calcul brut de la cellule la plus proche (distance euclidienne), rasterisation par maillage N×N de rectangles colorés, mesure du temps d'exécution, export `voronoi.png`
- Interface matplotlib (sans aucune aide IA)

**Phase 2 — Comparaison IAGen :**
- Utilisation de ≥ 4 outils IAGen pour générer l'application avec le même cahier des charges
- Rédaction des prompts utilisés + mesure du temps de correction pour atteindre le même niveau de qualité

**Phase 3 — Rapport risques IA : Environnement :**
- Analyse des 3 risques environnementaux : consommation électrique/carbone, dépendance matérielle/eau/déchets électroniques, pistes de limitation
- Rédaction d'un rapport académique de 4 pages avec sources scientifiques (ADEME, RTE France, Carbone 4, CESE, Nature Machine Intelligence)

**Outils / Stack technique :**
- **Python**, **matplotlib** (Phase 1)
- ≥ 4 IAGen (ChatGPT, Copilot, Gemini, Mistral…) (Phase 2)
- Sources : ADEME, RTE France, Carbone 4, CESE, Green IT, HAL (Phase 3)

**Résultats obtenus / Livrables :**
- `Algo_a_la_main.py` : algorithme Voronoï brut O(N²·k), générant `voronoi.png`
- Rapport individuel SAE S601 "Risques IA : Environnement" (4 pages, 9 références)
- Rapport collectif de comparaison IAGen + prompts utilisés

**Points forts :**
- Rapport environnemental documenté avec des chiffres précis (10 TWh consommés par les 300 datacenters français, 2,5 Mt de déchets électroniques d'ici 2030)
- Approche algorithmique "from scratch" qui force à comprendre réellement le problème avant d'utiliser des outils
- Recul critique sur les limites et apports des IAGen

**Difficultés / problèmes rencontrés :**
- Phase 1 contrainte : aucune aide IA autorisée, il faut maîtriser l'algorithme en profondeur
- Implémentation naïve O(N²·k) : lente pour N et k élevés

**Ce que je referais différemment :**
- Implémenter un algorithme de Fortune (O(n log n)) pour la Phase 1 plutôt que la rasterisation brute
- Ajouter un export SVG plus propre pour la visualisation finale

**Acquis pour la suite :**
- Algorithme de Voronoï (géométrie computationnelle)
- Analyse critique de l'impact environnemental de l'IA
- Rédaction académique avec sources primaires

---

## PROJETS SCOLAIRES

---


### Projet scolaire R506 — Chef-d'œuvre TRACKSTAR CITY LO-FI | S6, 2025-2026

| Champ | Détail |
|---|---|
| **Type** | Projet scolaire (chef-d'œuvre individuel) |
| **Intitulé exact** | R506 Programmation multimédia — Chef-d'œuvre : TRACKSTAR CITY LO-FI |
| **Contexte** | BUT 3 Informatique, S6. IUT de Villetaneuse. Cours R506 Programmation multimédia. Enseignant : Jean-Christophe Dubacq. Inspiré de la SAÉ TRACKSTAR |
| **Objectif** | Créer une scène animée illustrant les notions de programmation multimédia : parallaxe, dessin vectoriel procédural, animation image par image, gestion des événements, intégration sonore |
| **Taille de l'équipe** | Individuel |
| **Mon rôle** | Seul développeur |
| **Durée** | Semestre 6 |

**Mes tâches concrètes :**
- Conception et développement d'un paysage urbain nocturne animé : **TRACKSTAR CITY LO-FI** (hommage à la SAÉ TRACKSTAR)
- Implémentation du **parallaxe** (plans multiples à vitesses différentes pour simuler la profondeur 2D)
- Dessin **100% vectoriel / procédural** : bâtiments, étoiles, arbres, lampadaires, route, voiture de type McLaren P1 — aucune image externe
- Animation : boucle principale clock.tick(FPS), rotation des roues, déplacement des plans
- Effets d'éclairage dynamiques (variations visuelles nocturnes)
- Interactions clavier (modificateur de vitesse `mult`)
- Intégration d'une **musique instrumentale** jouée en boucle (lofi hip hop)
- Rédaction du rapport technique explicatif

**Outils / Stack technique :**
- **Python**, **Pygame**
- Primitives géométriques : Rectangle, dessins trigonométriques
- Modèle inspiré : Canvas Cycle (site web de paysages animés)

**Résultats obtenus / Livrables :**
- `TRACKSTAR_CITY_LOFI_UTHAYAKUMAR_KELVIN.zip` (code source)
- `TRACKSTAR_CITY_KELVIN_UTHAYAKUMAR_HAUMEA.pdf` (rapport)
- Scène animée fluide (FPS fixe), son intégré, parallaxe fonctionnel

**Points forts :**
- Approche purement procédurale/vectorielle (zéro ressource externe)
- Code structuré en 3 phases claires : événements → mise à jour → rendu
- Concept cohérent (hommage à la SAÉ TrackStar, esthétique lofi)

**Difficultés / problèmes rencontrés :**
- Imiter des effets visuels complexes (reflets, profondeur) avec uniquement des formes géométriques simples
- Optimisation du rendu pour maintenir un FPS constant

**Ce que je referais différemment :**
- Ajouter un système de génération procédurale des bâtiments pour une scène infinie
- Implémenter des sprites plus détaillés (personnage, intérieur voiture)

**Acquis pour la suite :**
- Animation image par image avec Pygame
- Programmation graphique procédurale (parallaxe, primitives géométriques)
- Intégration son/musique dans une application Python

---

## STAGE

---

### Stage BUT 2 — Assistant IT @ CFP Group | Juin – Août 2025

| Champ | Détail |
|---|---|
| **Type** | Stage |
| **Intitulé exact** | Stage Assistant IT & Coordination de Projets IT |
| **Contexte** | BUT 2 Informatique, Parcours Passerelle : Technologie de l'Information. IUT de Villetaneuse. Tuteur entreprise : M. Rémi Korzeniowski (Responsable IT / DPO). Tuteur académique : Mme Linda El Alaoui |
| **Entreprise** | **CFP Group** (Cash Flow Positif) — start-up de conseil en investissement immobilier locatif, ~80 employés, fondée en 2020 par Erwan Fleury, siège à Montrouge (92). 5 filiales : CFP, Ubireal, Revaloc, Banquos, Squibly |
| **Objectif** | Contribuer à la restructuration et à la continuité opérationnelle du pôle IT dans un contexte de réorganisation interne (départ de l'ancien responsable IT) |
| **Taille de l'équipe** | 4 personnes dans le pôle IT |
| **Mon rôle** | Stagiaire IT — missions opérationnelles et organisationnelles |
| **Durée** | **16 juin – 14 août 2025** (2 mois / 8 semaines) |

**Équipe pôle IT :** Rémi Korzeniowski (responsable IT, tuteur), Marie Salbert (stagiaire), Néhémie Makombo (stagiaire), Kelvin UTHAYAKUMAR (stagiaire)

---

#### Mission 1 — Gestion des Onboardings / Offboardings

**18 onboardings et 22 offboardings supervisés** sur la période.

**Onboarding :**
- Sélection et configuration des PC (Lenovo ThinkPad X270, Microsoft Surface Laptop 4)
- Réinitialisation Windows, session admin + session employé, installation des logiciels (Microsoft Teams, Office, Chrome, Aircall, apps internes CFP/Ubireal)
- Configuration BitLocker (chiffrement disque) sur les Surface Laptop 4
- Création des comptes dans l'ordre précis de l'écosystème numérique CFP
- Accueil le jour J : mise en service, présentation des règles de sécurité, signature via Signwell
- Réduction du temps d'onboarding de **1h30 → 45 min** (groupe de 5 personnes)
- Rédaction du **guide Onboarding complet (17 pages)**

**Offboarding :**
- Récupération et vérification du matériel, attestation Signwell
- Désactivation des accès sur toutes les applications
- Conversion du compte Microsoft en boîte aux lettres partagée (rattachée au manager)

---

#### Mission 2 — Sécurité et Gestion des Accès

- Audit et suppression des comptes inactifs (Microsoft 365, Aircall) — anciens collaborateurs encore actifs
- Rédaction de la **charte informatique** (règles d'usage, responsabilités) + version flyer affiché en open-space
- Rédaction du **guide des logiciels approuvés**
- Rédaction du **guide anti-phishing** (techniques d'hameçonnage, comment les détecter)

---

#### Mission 3 — Inventaire et Suivi du Matériel

- Recensement complet du parc informatique (type, marque, modèle, numéro de série, état, utilisateur) → base Excel
- Identification des machines défectueuses, comparaison de devis, coordination des réparations (prestataire **WIREP**)
- Intégration de l'inventaire dans le processus onboarding/offboarding (traçabilité continue)

---

#### Mission 4 — Audit et Optimisation Aircall (mission prioritaire ~3 semaines)

- Audit des lignes VoIP Aircall : création d'un fichier Excel de suivi (nom de ligne, date/heure, statut, réponse, temps d'attente)
- Identification et correction des anomalies : fuseaux horaires incorrects, utilisateurs obsolètes, distribution des appels sous-optimale
- Corrections directes dans Aircall : ajout/suppression de lignes, correction fuseaux, reconfiguration distribution (simultané, cascade, taux de réponse)
- Rencontres individuelles avec les responsables de pôles (Ubireal, RH, Sourcing, Comptabilité) pour adapter la configuration à leurs besoins
- Remaniement du **SVI Ubireal** (arborescence, enregistrement vocal professionnel)
- Production d'un **rapport statistique R Markdown** (taux de réponse global et par collaborateur, ggplot2)
- Présentation des résultats au CEO et aux responsables lors des **Weekly Aircall** hebdomadaires

---

#### Mission 5 — Maintenance et Support Utilisateurs

- Résolution d'incidents courants : connexion Outlook/Teams (MFA), lenteurs Windows 10/11, problèmes matériels (claviers, écrans), incidents Aircall
- Méthode : identification → tests → suivi auprès de l'utilisateur
- Rédaction de 4 guides techniques : résolution des problèmes courants, réinitialisation Windows 11 via clé USB, activation BitLocker, utilisation du matériel audiovisuel (TV/EPOS)

---

**Outils / Stack technique :**
- **Microsoft 365** : Outlook, Teams, OneDrive, Microsoft Authenticator
- **Aircall** (téléphonie VoIP), **Bitwarden** (gestionnaire mots de passe), **BitLocker** (chiffrement)
- **Signwell** (signature électronique), **Excel** (inventaire, audit)
- **R** / **R Markdown** / **ggplot2** (analyse statistique et visualisation)
- **Windows 10/11** (administration postes), **Lenovo ThinkPad X270**, **Microsoft Surface Laptop 4**

**Résultats obtenus / Livrables :**
- Guide Onboarding/Offboarding : 17 pages
- Charte informatique + flyer sécurité numérique
- Guide des logiciels approuvés + guide anti-phishing
- Inventaire Excel du parc informatique
- Rapport statistique Aircall (R Markdown / ggplot2) — présenté au CEO
- 4 guides techniques (Windows 11, BitLocker, audiovisuel, incidents courants)
- Base documentaire transmissible au futur pôle IT

**Points forts :**
- Impact immédiat et mesurable (18 onboardings, 22 offboardings, optimisation téléphonie)
- Travail transversal : collaboration avec CEO, CTO, DPO, managers, RH, collaborateurs
- Rôle de relais entre besoins métier et solutions techniques
- Audit Aircall devenu base pour une solution automatisée développée par le pôle Tech

**Difficultés / problèmes rencontrés :**
- Absence de feuille de route : priorités changeantes, urgences non planifiées
- Mission de développement (application ONOFFBOARD, automatisation Python) non réalisée faute de temps
- Gestion simultanée de plusieurs stagiaires et de leurs intégrations

**Ce que je referais différemment :**
- Négocier dès le départ un périmètre de missions plus clair avec le tuteur
- Bloquer du temps dédié au développement (ONOFFBOARD) malgré les urgences opérationnelles
- Mettre en place le système de ticketing dès le début pour mieux tracer les interventions

**Acquis pour la suite :**
- Administration systèmes Windows (configuration, sécurité, MDM)
- Gestion de parc informatique (inventaire, réparations, traçabilité)
- Processus IT d'entreprise (onboarding/offboarding, RGPD, charte informatique)
- Analyse de données et data visualisation (R, ggplot2)
- Communication avec des interlocuteurs de tous niveaux (CEO, DPO, équipes métier)
- Rigueur documentaire (guides, chartes, rapports transférables)

---

## SYNTHÈSE DES COMPÉTENCES DÉVELOPPÉES

| Domaine | Compétences clés |
|---|---|
| **Développement** | Flutter/Dart, Python (scraping, algorithmes, matplotlib, Pygame), SQLite, Node.js |
| **Data / IA** | Pandas, Streamlit, Plotly, Scikit-learn (ACP, K-Means), APIs LLM (Groq, HuggingFace), Power BI |
| **Administration IT** | Microsoft 365, Aircall, BitLocker, gestion de parc, onboarding/offboarding, RGPD |
| **Analyse / Statistiques** | R/ggplot2, matplotlib, enquête quantitative/qualitative, data visualisation |
| **Gestion de projet** | Klaxoon, Git, organisation d'équipes (3 à 6 personnes), documentation technique |
| **Entrepreneuriat** | BMC, SWOT, étude de marché, MVP, lean startup |
| **Rédaction** | Rapports académiques sourcés, documentation technique transférable, chartes internes |

---


---

# Stage BUT 3 — Panam'arket

## Informations générales

- **Type** : Stage
- **Entreprise** : Panam'arket (épicerie urbaine parisienne)
- **Période** : 7 avril – 31 juillet 2026
- **Durée** : 16 semaines
- **Équipe** : Seul développeur sur le projet
- **Stack** : React 18 + Vite, Tailwind CSS v3, Supabase (PostgreSQL), Netlify, ZXing, jsPDF, Recharts

---

## Contexte et problème résolu

Panam'arket utilise le logiciel de caisse **Secure Caisse** (certifié NF 525) pour l'encaissement légal. Mais ce logiciel est **totalement aveugle sur le stock physique** : la majorité des articles est encaissée sous la mention générique "Divers 5.5%". Il n'existait aucune gestion de stock — les ruptures étaient détectées visuellement dans les rayons, sans traçabilité ni outil dédié.

La mission : concevoir et développer une **PWA de gestion logistique complémentaire** qui n'entre pas en concurrence avec la caisse, mais comble son angle mort opérationnel.

---

## Missions réalisées

- Conception de l'architecture full-stack : React (PWA) + Supabase (PostgreSQL) + Netlify
- Module **Ruptures** : liste des produits en rupture totale ou stock insuffisant, bouton "Signaler rupture" avec écriture en base, filtres par statut, PWA installable sur iPhone
- Module **Approvisionnement / Achats** : liste de courses auto-générée depuis les ruptures, onglet Réception avec scan ZXing, saisie DLC avec formatage automatique, mise à jour du stock en `Promise.all`, historique des livraisons avec jointure SQL (`stock_dlc`)
- Module **Caisse simulée** : interface de vente avec compteurs +/-, barre de recherche, total temps réel, génération PDF (jsPDF), envoi mailto, scan code-barres ZXing, système de transactions immuables persistées en Supabase
- Module **Dashboard** : 4 métriques cards (CA du jour, articles vendus, ruptures, stocks insuffisants), graphique barres Recharts 7 jours, top 5 produits, sélecteur de mois, import PDF/CSV des exports Secure Caisse avec parser custom (pdf.js + encodage latin-1)
- Module **Catalogue** : CRUD produits, scan code-barres ZXing, auto-remplissage via API Open Food Facts, affichage DLC par produit avec badges colorés (rouge < 3j, orange < 14j)
- **Auth Supabase 3 rôles** : employé / manager / gérant via `@panamarket.fr`, AuthContext centralisé, guards de route, normalisation des rôles (accents, casse)
- **Sécurisation** : Row Level Security (RLS) activé sur toutes les tables, variables d'environnement protégées, régénération des clés compromises
- Import de 185 produits réels via script Node.js `scripts/importProduits.js`
- Rédaction d'un `CLAUDE.md` servant de mémoire permanente à Claude Code (contexte métier, schéma BDD, conventions de code, design system)
- Schéma BDD : tables `produits`, `transactions`, `livraisons`, `stock_dlc`, `ca_importe` — refactor en cours de projet pour éliminer redondance jsonb vs relationnel

---

## Compétences BUT mobilisées

- **Réaliser** : développement complet de la PWA, de la maquette au déploiement
- **Optimiser** : pipeline de parsing PDF/CSV, `Promise.all` pour requêtes parallèles, parser robuste gérant les cas limites (collisions de colonnes PDF, encodage latin-1)
- **Administrer** : configuration Supabase, déploiement Netlify, gestion des variables d'environnement, RLS
- **Gérer** : conception du schéma de données (5 tables), contraintes FK, index, refactor BDD en cours de projet
- **Conduire** : gestion itérative avec un commanditaire non-technique (Christian, le gérant), recadrages de périmètre, priorisation du backlog via Notion
- **Collaborer** : documentation du code via CLAUDE.md, journal de bord quotidien, communication régulière avec le gérant

---

## Points forts

- Livrable fonctionnel déployé en production et utilisé réellement en épicerie
- Autonomie totale sur l'ensemble du projet (design, architecture, développement, déploiement)
- App installable PWA adoptée immédiatement par le gérant (test iPhone réussi dès le Jour 5)
- Architecture propre et évolutive (séparation pages / components / lib / services)
- Usage professionnel de l'IA comme outil de développement (Claude Code + Claude.ai en workflow complémentaire)
- Gestion des cas limites réels : codes-barres corrompus dans le CSV, format PDF non documenté, encodage latin-1, collisions de colonnes à l'extraction texte

---

## Points de vigilance / difficultés rencontrées

- **Sous-estimation du parsing PDF** : le format réel des exports Secure Caisse différait des suppositions initiales — obligation de logger les lignes brutes avant d'écrire le parser (leçon : toujours valider les données réelles avant de coder)
- **Tests automatisés insuffisants** : sacrifiés sous pression de délai — `alert()` au lieu de toasts, absence de tests unitaires (Vitest) sur les parsers
- **Documentation du schéma BDD tardive** : écrite après la conception plutôt qu'en parallèle
- **Gestion du scope sous pression** : le périmètre a évolué plusieurs fois (ajout de la caisse simulée, fusion Approvisionnement+Livraison en un seul module Achats) — les recadrages ont été réactifs plutôt qu'anticipés
- **Variables d'environnement corrompues** (slash en trop dans l'URL Supabase + caractère `%` parasite dans l'ANON_KEY) : bug asymétrique qui cassait Supabase Auth sans bloquer les SELECT — diagnostic difficile
- **Piège du git worktree Claude Code** : l'app macOS Claude Code crée automatiquement un worktree isolé — les modifications n'apparaissaient pas dans `main`. Leçon : toujours lancer `claude` depuis le terminal dans le dossier projet
- **Authentification Supabase** : écran blanc au démarrage car `getSession()` peut échouer silencieusement — fix en passant à `onAuthStateChange` uniquement (pattern recommandé Supabase v2)
- **Rôle gérant null** : comparaison `'gérant'` (avec accent) vs `'gerant'` stocké en base — fix via normalisation NFD dans AuthContext

---

## Bonnes surprises

- RLS Supabase très puissant et simple à mettre en place une fois compris
- PWA installée et utilisée immédiatement sur iPhone sans friction
- API Open Food Facts gratuite et fiable pour l'auto-remplissage des produits au scan
- Scanner USB code-barres compatible nativement (simule un clavier + Enter) — aucune configuration nécessaire
- Le gérant très impliqué dans les tests terrain, retours rapides et concrets
- Workflow Claude Code + Claude.ai : productivité exceptionnelle (4 modules complets livrés en une journée)

---

## Si c'était à refaire

- Cadrer le périmètre avec le gérant dès la semaine 1 (document de scope signé)
- Prototyper le parsing PDF dès le départ en lisant les vrais fichiers avant d'écrire une seule ligne de code
- Écrire les tests unitaires en parallèle du développement (pas à la fin)
- Activer RLS dès le début, pas à la fin (sécurité par conception)
- Documenter les décisions techniques au fil de l'eau (Architecture Decision Records)
- Lancer `claude` depuis le terminal dès le Jour 1 pour éviter le piège du worktree

---

## Acquis pour la suite

- Maîtrise complète du cycle de développement full-stack React/Supabase en conditions réelles
- Conception de schéma relationnel avec contraintes FK, types Postgres avancés (`jsonb`, `uuid`, `timestamptz`, `numeric`)
- Gestion de l'asynchronisme complexe (`Promise.all`, `onAuthStateChange`, patterns de loading robustes)
- Parsing de formats binaires et textuels non documentés (PDF, CSV latin-1)
- Usage professionnel de l'IA comme outil de développement — savoir déléguer l'exécution à Claude Code tout en gardant la décision architecturale
- Comprendre que la sécurité (RLS, variables d'env, mots de passe) s'architecture dès le début, pas en fin de sprint
- Expérience de la relation développeur ↔ commanditaire non-technique en conditions réelles

---

## Liens

- Repo GitHub : [github.com/kelvinuthaya/panamarket](https://github.com/kelvinuthaya/panamarket) (public)
- Déploiement : Netlify (URL interne)
- Notion du projet : [Stage Panam'arket](https://www.notion.so/Stage-Panam-arket-341d6a7dcd6381ed9632d2f3d4b0f8c6)
