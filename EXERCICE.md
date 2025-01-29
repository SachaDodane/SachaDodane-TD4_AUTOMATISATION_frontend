# Exercice

## Ecrire des tests

[x] Ecrivez quelques tests pour l'application (Test composant).

## Creation d'un workflow

[x] Créer un workflow github action qui :

- Run le linter et formatteur (Commit les changement si besoin)
- Run les tests
- Build le dossier de prod (Dossier dist)
- Recupère le dossier dist 
- Deploie les sources sur Github Action

## Tips

- Gerer les permissions de votre workflow dans les paramètres du projet.
- Activer Github pages dans les paramètres
- Utilisez `npm ci` pour l'installation des dependances (évite la mise à jour du fichier lock)
- dans `vite.config.js` utilisez le paramètre `base`pour specifier le chemin de vos fichiers sources
- Utiliser des [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts)
