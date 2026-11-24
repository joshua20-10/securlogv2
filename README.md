# SecurLog

Application de main courante et de rondes pour la sécurité privée (PWA, Firebase).

- `index.html` : application complète (admin + agent)
- `sw.js`, `manifest.webmanifest`, `icon-*.png` : installation PWA et mode hors ligne
- `firestore.rules` : règles de sécurité à publier dans Firebase (Firestore › Règles)

## Clés d'accès (passkeys)
Bouton 🔐 dans l'en-tête : créer / retirer une clé d'accès (empreinte, visage ou code de l'appareil, via le gestionnaire de mots de passe Google ou iCloud).
Écran de connexion : « Se connecter avec une clé d'accès ». Le mot de passe reste utilisable. Nécessite https.

## V16
Main courante refaite (filtres, historique, compléments, saisie admin, sans export CSV), plans de site en image ou PDF, carte stabilisée avec points des agents.

## V18
Demandes d'aide à la connexion (collection `helpRequests` : republier firestore.rules), heure de prise / fin de service, précision obligatoire pour la catégorie « Autre ».
