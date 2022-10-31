# Nogometni stadioni

Ovo je repozitorij namijenjen otvorenom skupu podataka o nogometnim stadionima. 

## Opis skupa podataka

- Naslov: Nogometni stadioni
- Trenutačna verzija: 1.0
- Autor: Tin Margetić
- Jezik: hrvatski
- Datum otvaranja: 31. 10. 2022.

## Opis atributa
---

- stadion - entitet opisuje nogometne stadione
   - atributi: 
      - naziv - jedinstveni naziv stadiona
      - godinaOtvorenja - godina otvorenja stadiona
      - kapacitet - kapacitet stadiona
      - rekordnaPrisutnost - rekordna prisutnost u stadionu
      - cijenaIzgradnje - cijena izgradnje stadiona u eurima
      - brojLoza - broj svečanih loža u stadionu
      - sifGrad - jedinstvena šifra grada u kojem se stadion nalazi
      - sifKlub - jedinstvena šifra kluba koji je domaćin stadiona


---

- klub - entitet opisuje nogometne klubove
   - atributi:
      - imeKluba - ime nogometnog kluba
      - sifKlub - jedinstvena šifra nogometnog kluba

---

- grad - entitet opisuje gradove
   - atributi:
      - nazivGrad - naziv grada
      - sifGrad - jedinstvena šifra grada
      - sifDrzava - jedinstvena šifra države u kojoj se grad nalazi

---

- drzava - entitet opisuje države
   - atributi: 
      - nazivDrzava - naziv države
      - sifDrzava - jedinstvena šifra države

---

- arhitekt - entitet opisuje arhitekte
   - atributi: 
      - ime - ime arhitekta
      - prezime - prezime arhitekta
      - sifArhitekt - jedinstvena šifra arhitekta

---

- arhitektRadioNa - entitet povezuje stadione sa njihovi arhitektima
   - sifArhitekt - jedinstvena šifra arhitekta
   - naziv - jedinstveni naziv stadiona 

---