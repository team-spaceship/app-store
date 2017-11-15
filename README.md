# app-store

pre:
Install de laastste node versie (op RPI Zero gebruik dit [install script](https://github.com/sdesalas/node-pi-zero))
installeer yarn globally met: `npm install yarn -g`

Stap 1:
run `yarn install` in the root and then again in the react-ui folder.

Stap 2:
maar een `.env` file aan in de root van het project (in dit geval dus in de `app-store` folder)

Zet de volgende data in de env file:

``` md

MONGODB_URI=XXXX
PORT=3000

```

!! Zorg dat de de .env file niet commit naar de repo !!

Stap 3: Start de app!
run `yarn start`

Stap 4: open de app
open `http://localhost:3000`

Als je tegelijk ook de front-end met yarn wilt runnen, maak dan ook in de map `react-ui` een `.env`-bestand aan, met als inhoud
```
PORT=3001
```
Je kunt dan in de map `react-ui` ook `yarn start` geven om ze naast elkaar te draaien.
