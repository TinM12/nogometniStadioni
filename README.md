# __Nogometni stadioni__

Ovaj repozitorij namijenjen je za pohranu otvorenog skupa podataka o nogometnim stadionima. Za pojedini stadion u skupu podataka možemo pronaći informacije o nazivu stadiona, godini otvorenja, kapacitetu, rekordnoj prisutnosti, cijeni izgradnje, broju svečanih loža te državi i gradu u kojim se stadion nalazi. Također možemo pronaći imena i prezimena arhitekata koji su sudjelovali u izgradnji stadiona. Skup podataka spremljen je u PostgreSQL bazu podataka.
<br></br>

## __Opis skupa podataka__

- Naslov: Nogometni stadioni
- Trenutačna verzija: 1.0
- Autor: Tin Margetić
- Jezik: hrvatski
- Datum otvaranja repozitorija: 31. 10. 2022.
- Licencija: Creative Commons Zero v1.0 Universal
- URI repozitorija: https://github.com/TinM12/nogometniStadioni
- Encoding: UTF-8
- kontakt e-mail: 
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