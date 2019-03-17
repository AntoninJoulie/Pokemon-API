# API Pokémon - PKMNAPI 
*Créée par : BIGEARD Robin - JOULIE Antonin - CAMBERT Killian*


![alt text](https://raw.githubusercontent.com/AntoninJoulie/Pokemon-API/master/public/favicon.png?token=Af8kQZaPOb871gwrZMLLOXPt_nDggVK3ks5clQdrwA%3D%3D "PKMNAPI")

## API

"En informatique, **une interface de programmation applicative** (souvent désignée par le terme API pour application programming interface) est un ensemble normalisé de classes, de méthodes ou de fonctions qui sert de façade par laquelle un logiciel offre des services à d'autres logiciels. Elle est offerte par une bibliothèque logicielle ou un service web, le plus souvent accompagnée d'une description qui spécifie comment des programmes consommateurs peuvent se servir des fonctionnalités du programme fournisseur."

[Wikipédia](https://fr.wikipedia.org/wiki/Interface_de_programmation), API

## Présentation du projet

Notre projet consistait à créer une API avec un thème et des données de notre choix.
Nous avons donc décider de créer un API concernant l'univers de Pokémon. Cette API est composée de trois modèles :

 - le modèle Trainer (dresseur en français)
 - le modèle Pokemon
 - le modèle Region

Dans le modèle Trainer on y retrouvera le nom, l'âge, le genre, la profession, les pokémons et la région du dresseur.

Dans le modèle Pokemon on y retrouvera le nom, le(s) type(s), le dresseur et la région du pokémon.

Dans le modèle Region on y retrouvera le nom, le(s) dresseur(s) natif(s) et le(s) pokémon(s) natif(s) de la région.

## Attrapez-les tous!

Vous pouvez allez voir notre API sur internet: [https://pkmnapi.herokuapp.com](https://pkmnapi.herokuapp.com)

Toutes les données Pokémon que vous avez toujours souhaitées :
- Dresseur
    - GET ([https://pkmnapi.herokuapp.com/trainer](https://pkmnapi.herokuapp.com/trainer))
    - GET ID ([https://pkmnapi.herokuapp.com/trainer/1](https://pkmnapi.herokuapp.com/trainer/1))
    - POST (`https://pkmnapi.herokuapp.com/trainer`)
    - PUT (`https://pkmnapi.herokuapp.com/trainer/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/trainer/1`)

- Pokémon
    - GET ([https://pkmnapi.herokuapp.com/pokemon](https://pkmnapi.herokuapp.com/pokemon))
    - GET ID ([https://pkmnapi.herokuapp.com/pokemon/1](https://pkmnapi.herokuapp.com/pokemon/1))
    - POST (`https://pkmnapi.herokuapp.com/pokemon`)
    - PUT (`https://pkmnapi.herokuapp.com/pokemon/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/pokemon/1`)

- Region
    - GET ([https://pkmnapi.herokuapp.com/region](https://pkmnapi.herokuapp.com/region))
    - GET ID ([https://pkmnapi.herokuapp.com/region/1](https://pkmnapi.herokuapp.com/region/1))
    - POST (`https://pkmnapi.herokuapp.com/region`)
    - PUT (`https://pkmnapi.herokuapp.com/region/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/region/1`)


## Les différentes méthodes

***La méthode GET***

----------

La méthode GET est utilisée lorsque des informations sont transmises. La méthode get permet de placer des paramètres directement dans une url et de les récupérer. 
GET est utilisé pour demander des données à une ressource spécifiée.

***La méthode POST***

----------

Le POST est utilisé pour envoyer des données à un serveur afin de créer / mettre à jour une ressource.

***La méthode PUT***

----------

PUT est utilisé pour envoyer des données à un serveur afin de créer / mettre à jour une ressource.
La différence entre POST et PUT est que les demandes PUT sont idempotentes. C'est-à-dire qu'appeler plusieurs fois la même demande PUT produira toujours le même résultat. En revanche, l’appel répété d’une requête POST a pour effet secondaire de créer plusieurs fois la même ressource.

***La méthode DELETE***

----------


La méthode DELETE supprime la ressource spécifiée.


----------


*Source `https://www.w3schools.com/tags/ref_httpmethods.asp`*

## Logiciel / Web Services / Package Utiliser

- Logiciel
    - Visual Studio Code est un éditeur de code.
    - Node.js est une plateforme de développement Javascript ( machine virtuelle V8 ).  
    - NPM, Node Packet Manager est le gestionnaire de paquets officiel de Node.js.
    - Un navigateur.

- Web Service
    - Github est un service de stockage dédié à la programmation qui est basé sur git.
    - Heroku permet le déploiement d'applications web gratuitement.
    - Mongodb est un système de gestion de base de données orientée documents et NoSQL.

- Package NPM
    - Mongoose permet de faire une intercation simple entre Mongodb et Node.js.
    - Express est un framework dédier a Node.js
    - Body Parser est un middleware.
    - Yargs simplifie les lignes de commande. 
    - EJS permet de générer des balisages HTML avec JavaScript.

## Comment utiliser NPM ?

Installation NPM 

Instancier le projet NPM

    $ npm init

Installation des packages

    $ npm i mongoose -s
    $ npm i express -s
    $ npm i body-parser -s
    $ npm i yargs -s
    $ npm i ejs -s

Si le projet est déja crée comme le notre vous pouvez utiliser cette commande pour récupérer les dépendances :

    $ npm install

## Node.js

Pour éxécuter le programme vous pouvez utiliser la commande suivante : 

    $ node app.js

Il y a plusieurs options disponibles dont l'**url** et le **port**. Par défaut les valeurs sont 
* URL: http://localhost:4000/
* PORT: 4000

Exemple de modification des options :
    
    $ node app.js --url="https://pkmnapi.herokuapp.com/" --port=4000


## Heroku

Utilisation de Heroku pour déployer l'API :

L'installation :

sur macOS :

    $ brew tap heroku/brew && brew install heroku

sur Windows :

    $ npm install -g heroku

sur Ubuntu 16+ :

    $ sudo snap install --classic heroku

Il est possible d'installer directement l'installeur sur le lien suivant : [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

Une fois l'installation faite, nous pouvons passer au déploiement de l'application. Il faut donc créer une nouvelle application sur le site Heroku. De là, nous pouvons lier un dépot git afin de le déployer. Après avoir lié le git à Heroku, il faut se positionner dans le dépot à partir de l'invite de commande.

    $ heroku create

    $ git push heroku master

A partir de maintenant, l'application est déployé. Vous pouvez ouvrir l'application à partir de l'URL généré ou bien en tapant :

    $ heroku open

## MongoDB

Utilisation de MongoDB pour avoir une base de donnée :

L'installation :

Créer un Cluster qui va permettre de rentrer nos données et les réutiliser. Par la suite, créer des Users qui auront accès à la base de donnée. Enfin, Whitelister les IP qui peuvent accéder à l'utilisation de la base de donnée.

Pour connecter notre nouvelle base de donnée à notre application il suffit de rajouter dans le code ceci :

'mongodb+srv://[user]:[password]@cluster0-zd8v6.mongodb.net/test retryWrites=true'