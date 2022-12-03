<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Installation et lancement
Avant le premier lancement de l'application vous devez créer une base de donnée dans phpMyAdmin du nom de <bold>iguane_shop</bold>. 
Dans le fichier <bold>app.module</bold> verifiez que les attributs "username" et "password" sont correctement renseignés avec vos informations de connexion.
Pour lancer l'application executer la commande ci-dessous afin de récuperer les dépendances du projet. Le dossier node_modules sera ainsi créer.
```bash
$ npm install
```
Pour démarrer l'application :
```bash
$ npm run start
```






