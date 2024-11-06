
# mainosbotti

Säälittävä (ja varsinkin vituttava) tekele, joka tulee häiriköimään sinun rentoa iltaasi Discordin parissa. Joudut aivan itse ymmärtämään, miten tämä roskakoodi toimii, sillä se on vanhempi kuin suurin osa internetistä, ja dokumentaatio on kadonnut aikojen saatossa kuin tuhka tuuleen. Jokainen klikkaus, jokainen hidas lataus ja virheilmoitus muistuttavat sinua siitä, että tämän ohjelman tekijä todennäköisesti unohti sen olemassaolon heti julkaisun jälkeen – ja toivoisi nyt itsekin, ettei sitä koskaan olisi luotu.
## Run Locally (Juokse Paikallisesti)
Tutorial how to use mainosbotti

Luo projektiin kansio nimeltä `Sounds` projektin kansion sisälle. Projektisi pitäisi näyttää suunnileen tältä:
```
mainosbotti/
├── Sounds
├── .env.example
├── LICENSE
├── Main.js
├── package.json
└── README.md
```

Asenna riippuvuuksia (real)

```bash
  npm install
```

Luo tiedosto nimeltä `.env` tai muuta `.env.example` nimeksi `.env`.

Nyt projektisi pitäisi näyttää tältä:
```
mainosbotti/
├── Sounds
├── .env
├── LICENSE
├── Main.js
├── package.json
└── README.md
```

Täytä bottisi token `.env` tiedostoon formaatissa `TOKEN = xxx`

Laita komentokehoitteeseen (command line) tämä erittäin luotettava teksti
```bash
  npm run start
```

Onnittelut, jos osasit, nyt sinulla on oma mainosbottisi.
## Mitä opin tästä projektista

Ei enää ikinä uudelleen