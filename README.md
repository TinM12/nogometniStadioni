# __Nogometni stadioni__

Ovaj repozitorij namijenjen je otvorenom skupu podataka o nogometnim stadionima. Skup podataka spremljen je u bazu podataka PostgreSQL.
<br></br>

## __Opis skupa podataka__

- Naslov: Nogometni stadioni
- Trenutačna verzija: 1.0
- Autor: Tin Margetić
- Jezik: hrvatski
- Datum otvaranja repozitorija: 31. 10. 2022.
- Licencija: Creative Commons Zero v1.0 Universal
- URL repozitorija: https://github.com/TinM12/nogometniStadioni
- Encoding: UTF-8
<br></br>

## __Opis entiteta i atributa__

### stadion - entitet opisuje nogometne stadione

| Ime atributa | Tip | Opis |
| --- | --- | --- |
| naziv | VARCHAR | jedinstveni naziv stadiona |
| godinaOtvorenja | INT | godina otvorenja stadiona |
| kapacitet | INT | kapacitet stadiona |
| rekordnaPrisutnost | INT | rekordna prisutnost u stadionu| 
| cijenaIzgradnje | INT | cijena izgradnje stadiona u eurima |
| brojLoza | INT | broj svečanih loža u stadionu |
| sifGrad | INT | jedinstvena šifra grada u kojem se stadion nalazi |
| sifKlub | INT | jedinstvena šifra kluba koji je domaćin stadiona |

<br>

### klub - entitet opisuje nogometne klubove

| Ime atributa | Tip | Opis |
| --- | --- | --- |
| imeKluba | VARCHAR | ime nogometnog kluba |
| sifKlub | INT | jedinstvena šifra nogometnog kluba |

<br>

### grad - entitet opisuje gradove

| Ime atributa | Tip | Opis |
| --- | --- | --- |
| nazivGrad | VARCHAR | naziv grada |
| sifGrad | INT | jedinstvena šifra grada |
| sifDrzava | INT | jedinstvena šifra države u kojoj se grad nalazi |

<br>

### drzava - entitet opisuje države
| Ime atributa | Tip | Opis |
| --- | --- | --- |
| nazivDrzava | VARCHAR | naziv države |
| sifDrzava | INT | jedinstvena šifra države |

<br>

### arhitekt - entitet opisuje arhitekte

| Ime atributa | Tip | Opis |
| --- | --- | --- |
| ime | VARCHAR | ime arhitekta |
| prezime | VARCHAR | prezime arhitekta |
| sifArhitekt | INT | jedinstvena šifra arhitekta |

<br>

### arhitektRadioNa - entitet povezuje stadione sa njihovim arhitektima

| Ime atributa | Tip | Opis |
| --- | --- | --- |
| sifArhitekt | INT | jedinstvena šifra arhitekta |
| naziv | VARCHAR | jedinstveni naziv stadiona  |