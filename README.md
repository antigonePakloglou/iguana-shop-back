## Installation et lancement
Avant le premier lancement de l'application vous devez créer une base de donnée dans phpMyAdmin du nom de <bold>iguane_shop</bold>. </br>
Dans le fichier <bold>app.module</bold> verifiez que les attributs "username" et "password" sont correctement renseignés avec vos informations de connexion.
Pour lancer l'application executer la commande ci-dessous afin de récuperer les dépendances du projet. Le dossier node_modules sera ainsi créer.
```bash
$ npm install
```
Pour démarrer l'application :
```bash
$ npm run start
```
Pour récupérer les données l'application :
```bash
insérer les fichiers "iguane.sql" et "refuge.sql" dans les tables précédemment crées
```

Votre back est lancé, vous pouvez passer à la partie frontend.






