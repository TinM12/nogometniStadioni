import { Paper } from '@mui/material';
import React from 'react';

function opisAtributa() {
    return (
        <Paper style={{ backgroundColor: '#292c2e', display:'flex', fontSize: '18px'}}>
            <table>
                <tr>
                    <td>Ime atributa</td>
                    <td>Tip</td>
                    <td>Opis</td>
                </tr>
                <tr>
                    <td>naziv</td>
                    <td>VARCHAR</td>
                    <td>jedinstveni naziv stadiona</td>
                </tr>
                <tr>
                    <td>nazivDrzava</td>
                    <td>VARCHAR</td>
                    <td>naziv države u kojoj se stadion nalazi</td>
                </tr>
                <tr>
                    <td>nazivGrad</td>
                    <td>VARCHAR</td>
                    <td>naziv grada u kojem se stadion nalazi</td>
                </tr>
                <tr>
                    <td>godinaOtvorenja</td>
                    <td>INT</td>
                    <td>godina otvorenja stadiona</td>
                </tr>
                <tr>
                    <td>kapacitet</td>
                    <td>INT</td>
                    <td>kapacitet stadiona</td>
                </tr>
                <tr>
                    <td>rekordnaPrisutnost</td>
                    <td>INT</td>
                    <td>rekordna prisutnost u stadionu</td>
                </tr>
                <tr>
                    <td>imeKluba</td>
                    <td>VARCHAR</td>
                    <td>ime kluba koji je domaćin stadiona</td>
                </tr>
                <tr>
                    <td>cijenaIzgradnje</td>
                    <td>INT</td>
                    <td>cijena izgradnje stadiona u eurima</td>
                </tr>
                <tr>
                    <td>brojLoza</td>
                    <td>INT</td>
                    <td>broj svečanih loža u stadionu</td>
                </tr>
                <tr>
                    <td>ime</td>
                    <td>VARCHAR</td>
                    <td>ime arhitekta koji je sudjelovao u izgradnji stadiona</td>
                </tr>
                <tr>
                    <td>prezime</td>
                    <td>VARCHAR</td>
                    <td>prezime arhitekta koji je sudjelovao u izgradnji stadiona</td>
                </tr>
                <tr>
                    <td>arhitekti</td>
                    <td>ARRAY</td>
                    <td>polje koje sadrži imena i prezimena svih arhitekata koji su sudjelovali u izgradnji pojedinog stadiona</td>
                </tr>
            </table>
        </Paper>
    );
};


export default opisAtributa;