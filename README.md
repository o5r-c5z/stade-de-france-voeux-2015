# Meilleurs vœux – Stade de France 2015

Carte de vœux interactive du Stade de France : une page unique qui lit une vidéo
en plein cadre, déclenche une piste audio et fait apparaître des liens vers les
réseaux sociaux et la programmation de fin d'année du site.

**Année de réalisation / livraison : 2015.** (Le lien « programmation » pointe
vers `programmation-noel_2015.pdf` et le titre de la page mentionne 2015.)

## Contenu

- `index.html` — page unique : élément `<audio>`, conteneur `<video>`, indicateur
  de chargement, liste de liens masquée au départ.
- `css/styles.css` — mise en page du conteneur vidéo (largeur max 1218 px,
  hauteur max 596 px), positionnement de l'indicateur de chargement, deux jeux de
  règles `@media` (au-dessus et en dessous de 992 px) pour la barre de liens.
- `js/scripts.js` — logique de lecture : détection mobile par `navigator.userAgent`,
  affichage des contrôles natifs et des liens sur mobile ; sur desktop, boucle de
  la vidéo toutes les 3 minutes, démarrage de l'audio à 56,8 s, apparition des
  liens à 38 s.
- `lib/jquery-2.1.3.min.js` — jQuery 2.1.3, seule dépendance JS.
- `audio/audio.{wav,mp3,ogg}` — piste audio, trois formats pour la compatibilité
  navigateur.
- `video/video.mp4` — vidéo de vœux (~37 Mo).
- `img/bt_*.png` — boutons Facebook, Twitter, Instagram, YouTube, téléchargement
  de la programmation, lien vers `stadefrance.com`.
- `img/loading.gif`, `img/wpspin_light.gif` — indicateurs de chargement
  (`wpspin_light.gif` n'est pas référencé dans le code).
- `SDF_00179.jpg` — photographie à la racine, non référencée dans le code.
- `.htaccess` — une seule directive : `AddType audio/wav .wav`.

## Stack technique

- Site statique : un seul fichier HTML, aucune étape de build.
- Pas de préprocesseur CSS ni de bundler ; CSS écrit à la main.
- jQuery 2.1.3 (chargé depuis `lib/`).
- API HTML5 `<video>` / `<audio>` pilotées par les événements `play` et
  `timeupdate`.
- `html5shiv` chargé conditionnellement pour IE < 9 (depuis un CDN externe qui
  n'est plus disponible).
- Aucun gestionnaire de dépendances (pas de `package.json`, `bower.json`, etc.).

## Développement

Prérequis : un serveur HTTP statique (les éléments `<video>` / `<audio>` ne se
chargent pas de façon fiable via `file://`).

```sh
# depuis la racine du dépôt
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Notes de configuration :

- Le type MIME `audio/wav` est ajouté via `.htaccess` (serveur Apache). Sur un
  autre serveur, configurer ce type manuellement ou s'appuyer sur les sources
  `.mp3` / `.ogg`.
- Les liens externes (`facebook`, `twitter`, `instagram`, `youtube`,
  `telecharger`, `site`) sont codés en dur dans `index.html`.
- Les seuils temporels (38 s, 56,8 s, boucle de 3 min) sont codés en dur dans
  `js/scripts.js` et dépendent de la durée de `video/video.mp4`.

## Crédits

- **Design** — Marina Roel.
- **Développement / intégration** — Iboo Interactive & Olivier Charvoz.
- **Commanditaire** — Stade de France.

Copyright © 2015 Stade de France. Tous droits réservés.
