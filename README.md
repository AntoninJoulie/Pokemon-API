# API Pokémon - PKMNAPI

![alt text](https://raw.githubusercontent.com/AntoninJoulie/Pokemon-API/master/public/favicon.png?token=Af8kQZaPOb871gwrZMLLOXPt_nDggVK3ks5clQdrwA%3D%3D "PKMNAPI")

## API

"En informatique, **une interface de programmation applicative** (souvent désignée par le terme API pour application programming interface) est un ensemble normalisé de classes, de méthodes ou de fonctions qui sert de façade par laquelle un logiciel offre des services à d'autres logiciels. Elle est offerte par une bibliothèque logicielle ou un service web, le plus souvent accompagnée d'une description qui spécifie comment des programmes consommateurs peuvent se servir des fonctionnalités du programme fournisseur."

[Wikipédia](https://fr.wikipedia.org/wiki/Interface_de_programmation), API

## Attrapez-les tous!

Vous pouvez allez voir notre API sur internet: [https://pkmnapi.herokuapp.com](https://pkmnapi.herokuapp.com)

Toutes les données Pokémon que vous avez toujours souhaitées :
- Dresseur
    - GET (`https://pkmnapi.herokuapp.com/trainer`)
    - GET ID (`https://pkmnapi.herokuapp.com/trainer/1`)
    - POST (`https://pkmnapi.herokuapp.com/trainer`)
    - PUT (`https://pkmnapi.herokuapp.com/trainer/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/trainer/1`)

- Pokémon
    - GET (`https://pkmnapi.herokuapp.com/pokemon`)
    - GET ID (`https://pkmnapi.herokuapp.com/pokemon/1`)
    - POST (`https://pkmnapi.herokuapp.com/pokemon`)
    - PUT (`https://pkmnapi.herokuapp.com/pokemon/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/pokemon/1`)

- Region
    - GET (`https://pkmnapi.herokuapp.com/region`)
    - GET ID (`https://pkmnapi.herokuapp.com/region/1`)
    - POST (`https://pkmnapi.herokuapp.com/region`)
    - PUT (`https://pkmnapi.herokuapp.com/region/1`)
    - DELETE (`https://pkmnapi.herokuapp.com/region/1`)

## Appclication / Logiciel / Web Services Utiliser



## Comment créer ça propre API ? ( à développer )


Installation NPM ( Node Packet Manager )

Instancier le projet NPM

    $ npm init



    $ npm i mongoose -s
    $ npm i express -s
    $ npm i body-parser -s
    $ npm i yargs -s


Si le projet est déja crée comme le notre vous pouvez utiliser cette commande pour récupérer les dépendances :

    $ npm install

## Heroku

Utilisation de Heroku pour déployer l'API :

L'installation :

sur macOS :

    $ brew tap heroku/brew && brew install heroku

sur Windows :

    $ npm install -g heroku

sur Ubuntu 16+ :

    $ sudo snap install --classic heroku

Il est possible d'installer directeur l'installeur sur le lien suivant : [https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

Une fois l'installation faites, nous pouvons passer au déploiement de l'application. Il faut donc créer une nouvelle application sur le site Heroku. De là, nous pouvons lier un dépot git afin de le déployer. Après avoir lié le git à Heroku, il faut se positionner dans le dépot à partir de l'invite de commande.

    $ heroku create

    $ git push heroku master

A partir de maintenant, l'application est déployé. Vous pouvez ouvrir l'application à partir de l'URL généré ou bien en tapant :

    $ heroku open

## MongoDB

Utilisation de MongoDB pour avoir une base de donnée :

L'installation :

Créer un Cluster qui va permettre de rentrer nos données et les réutiliser. Par la suite, créer des Users qui auront accès à la base de donnée. Enfin, Whitelister les IP qui peuvent accéder à l'utilisation de la base de donnée.

Pour connecter notre nouvelle base de donnée à notre application il suffit de rajouter dans le code ceci :

'mongodb+srv://<user>:<password>@cluster0-zd8v6.mongodb.net/test retryWrites=true'