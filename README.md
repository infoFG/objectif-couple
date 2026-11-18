# objectif-couple

Site du **centre de consultation conjugale Objectif-Couple** — psychologue Dr André Surprenant.

Refonte moderne du site original objectif-couple.com (HTML5 responsive, CSS, SEO, accessibilité).

## Site en ligne

🔗 https://infofg.github.io/objectif-couple/

## Structure

- `css/style.css` — feuille de style moderne (responsive, accessible)
- `js/main.js` — navigation mobile
- `sitemap.xml`, `robots.txt` — référencement
- 19 pages HTML5 sémantiques (accueil, à propos, psychologue, services, formation, textes thématiques, témoignages, FAQ, questionnaire, contact, plan du site, entrevue vidéo)

## Provenance

Copie du site original https://objectif-couple.com (2026-11-17), avec :

1. **Design responsive** — remplacement des tables HTML 4.01 par du HTML5 sémantique + CSS flexbox/grid
2. **Thème CSS** — suppression des images de mise en page au profit du CSS
3. **Navigation unifiée** — menu généré de façon cohérente sur toutes les pages
4. **Formulaire fonctionnel** — le questionnaire compose un courriel (mailto) plutôt que de poster vers un script PHP mort
5. **SEO** — titres et descriptions par page, données structurées schema.org (Psychologist), sitemap, canonical
6. **Accessibilité** — skip-link, focus visible, aria-current, lang fr, contrastes

## Notes

- Le formulaire utilise `mailto:` (ouvre le client courriel du visiteur). Pour une soumission serveur (sans client courriel), brancher un service comme Formspree ou Netlify Forms.
- « Thérapie individuelle » contient un texte à écrire (laissé tel quel depuis l'original).
