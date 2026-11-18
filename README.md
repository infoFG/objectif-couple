# objectif-couple

Copie statique du site **objectif-couple.com** — Centre de consultation conjugale du psychologue Dr André Surprenant.

## Provenance

- **Source :** https://objectif-couple.com (site copié le 2026-11-17)
- **Auteur original :** francismachabee.com
- **Copyright :** Objectif-couple.com

## Structure

Le site original est servi en PHP. Pour l'héberger en site statique (GitHub Pages), les fichiers `.php` (qui contenaient du HTML rendu) ont été renommés en `.html` et les liens internes ajustés en conséquence.

Pages (12 sections) :
- accueil (racine → redirige vers /accueil/)
- a-propos, psychologue, service-de-consultation, formation, texte-thematique, temoignage, FAQ, formulaire, contact, plan-du-site, entrevue par video

Ressources : `interface/include/stylesheet.css` + images `interface/image/`.

## Notes

- Le formulaire `formulaire/` poste vers `?action=send` (fonctionnalité PHP) — non fonctionnel en statique.
- Liens morts du site original conservés tels quels (ex. serge-tremblay, 005-sortir-seul).
