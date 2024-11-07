# mainosbotti

Säälittävä (ja varsinkin vituttava) tekele, joka tulee häiriköimään sinun rentoa iltaasi Discordin parissa. Joudut aivan itse ymmärtämään, miten tämä roskakoodi toimii, sillä se on vanhempi kuin suurin osa internetistä, ja dokumentaatio on kadonnut aikojen saatossa kuin tuhka tuuleen.

> Tämä projekti on lisensoitu WTFPL-lisenssillä. Huomaa, että tämä koskee ainoastaan tässä repositoriossa olevaa koodia. Projektin suorittamiseen tarvittavat riippuvuudet ovat omien lisenssiensä alaisia.

## Run Locally (Juokse Paikallisesti)

Vaatimukset:

 - Tietokone
 - [Node.js](https://nodejs.org)
 - Jotain hassuja (.ogg) äänitiedostoja

Asenna riippuvuuksia (real)
```bash
npm  install
```

Luo tiedosto nimeltä `.env`.

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

Jos sinulla ei ole vielä bottia, mene tekemään sellainen [tänne](https://discord.com/developers/applications).
Täytä bottisi token `.env` tiedostoon formaatissa `TOKEN = xxx`

Siirrä haluamasi äänitiedostot (.ogg) `Sounds` kansion sisälle

Käynnistä botti

```bash
npm  run  start
```
Onnittelut, jos osasit, nyt sinulla on oma mainosbottisi (ehkä). Tarvittaessa saat apua ottamalla yhteyttä minna.mopo@gmail.com (vastausaika noin 1-154 arkipäivää)