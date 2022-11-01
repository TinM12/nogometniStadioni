# __Nogometni stadioni__

Ovo je repozitorij otvorenog skupa podataka o nogometnim stadionima. U skupu podataka opisani su neki od najpoznatijih europskih nogometnih stadiona. Za pojedini stadion u skupu podataka su pohranjene informacije o nazivu stadiona, godini otvorenja, kapacitetu, rekordnoj prisutnosti, cijeni izgradnje, broju svečanih loža te državi i gradu u kojim se stadion nalazi. Skup podataka također sadrži imena i prezimena arhitekata koji su sudjelovali u izgradnji stadiona.
<br></br>

## __Općenito__

- Naslov: Nogometni stadioni
- Autor: Tin Margetić
- Kontakt: tin.margetic@fer.hr
- Jezik: hrvatski
- Licencija: Creative Commons Zero v1.0 Universal
- URL repozitorija: https://github.com/TinM12/nogometniStadioni
- Baza podataka: PostgreSQL
- Broj stadiona u skupu podataka: 15
- Datum otvaranja repozitorija: 31. 10. 2022.
- Trenutačna verzija: 1.0
<br></br>

## __Opis atributa__


| Ime atributa | Tip | Opis |
| --- | --- | --- |
| naziv | VARCHAR | jedinstveni naziv stadiona |
| nazivDrzava | VARCHAR | naziv države u kojoj se stadion nalazi |
| nazivGrad | VARCHAR | naziv grada u kojem se stadion nalazi |
| godinaOtvorenja | INT | godina otvorenja stadiona |
| kapacitet | INT | kapacitet stadiona |
| rekordnaPrisutnost | INT | rekordna prisutnost u stadionu| 
| imeKluba | VARCHAR | ime kluba koji je domaćin stadiona|
| cijenaIzgradnje | INT | cijena izgradnje stadiona u eurima |
| brojLoza | INT | broj svečanih loža u stadionu |
| ime | VARCHAR | ime arhitekta koji je sudjelovao u izgradnji stadiona |
| prezime | VARCHAR | prezime arhitekta koji je sudjelovao u izgradnji stadiona |
| arhitekti | ARRAY | polje koje sadrži imena i prezimena svih arhitekata koji su sudjelovali u izgradnji pojedinog stadiona | 