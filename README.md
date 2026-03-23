# TP 5 : Découvrir la gestion de l’état et la structuration des composants React

## Objectif du TP

Ce TP a pour objectif de découvrir les bases de React à travers :

* les formulaires contrôlés
* les formulaires non contrôlés
* le partage d’état entre composants
* l’utilisation du Context React

---

## Création du projet

Le projet a été créé avec les commandes suivantes :

npx create-react-app tp-react-debutant
cd tp-react-debutant
npm start

<img width="1917" height="982" alt="Capture d&#39;écran 2026-03-23 114858" src="https://github.com/user-attachments/assets/71158986-f517-49a9-997a-33509696db27" />

---

## Fonctionnalités

<img width="1123" height="985" alt="Capture d&#39;écran 2026-03-23 120210" src="https://github.com/user-attachments/assets/eb10bf4b-642a-4103-852c-a2dae370e77e" />


### Formulaire contrôlé

<img width="1919" height="1003" alt="Capture d&#39;écran 2026-03-23 120810" src="https://github.com/user-attachments/assets/b66c197f-50c8-42b0-8134-7c6daf064bdb" />


Un formulaire contrôlé a été réalisé avec useState.
Les champs sont liés au state et se mettent à jour à chaque saisie.

---

### Formulaire non contrôlé

<img width="1916" height="1003" alt="Capture d&#39;écran 2026-03-23 121027" src="https://github.com/user-attachments/assets/27d5cbb7-b829-4f65-8176-ebe585a99df3" />

 
Un formulaire non contrôlé a été réalisé avec useRef.
Les valeurs sont récupérées directement depuis les champs input.

---

### Partager l’état entre un parent et un enfant

<img width="1919" height="1005" alt="Capture d&#39;écran 2026-03-23 121050" src="https://github.com/user-attachments/assets/cf353ae9-0a68-4e60-bcd7-92026d23f1f4" />


Un composant permet de saisir une température.
Le state est géré dans le composant parent et transmis à l’enfant via les props.

---

### Context React

<img width="1919" height="994" alt="Capture d&#39;écran 2026-03-23 121105" src="https://github.com/user-attachments/assets/dd76d012-d873-4881-8b1f-f9197760685d" />


Un contexte utilisateur a été mis en place pour partager les données globales.
Un composant Profil permet d’afficher l’utilisateur et de gérer la déconnexion.

---

## Technologies utilisées

* React JS
* JavaScript
* HTML / CSS
* Hooks : useState, useRef, useContext

---

## Résultat

L’application contient :

* deux formulaires
* un champ de température
* un profil utilisateur


