import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import DataTable from 'react-data-table-component';

function Data() {

    const navigateTo = useNavigate();

    const handleHomeClick = () => {
        navigateTo('/');
    };

    //#########################################################

    const [data, setData] = useState([{}]);
    var [podaci, setPodaci] = useState([{}]);

    useEffect(() => {
        fetch('/dataCSV').then(
            res => res.json()
        ).then(
            data => {setData(data); setPodaci(data);}
        )
    }, []);

    //#########################################################

    var [input, setInput] = useState("");
    const [select, setSelect] = useState(['wildcard', 'naziv', 'nazivdrzava', 'nazivgrad']);
    const stupci = data[0] && Object.keys(data[0]);

    function search() {
        if(select === "wildcard") {
            podaci = data.filter((stadion) => stupci.some((column) => 
                stadion[column].toString().toLowerCase().indexOf(input.toLowerCase())  > -1));
        } else if(select === "naziv" || select === "nazivgrad" || select === "nazivdrzava") {
            podaci = data.filter((stadion) => stadion[select].toLowerCase().indexOf(input.toLowerCase()) > -1)
        };
        if(input === "" || select === "") {
            podaci = data;
        };
        setPodaci(podaci);
    };

    //#########################################################

    function downloadFile({ data, fileName, fileType }) {
        const blob = new Blob([data], { type: fileType });
        const a = document.createElement('a');
        a.download = fileName;
        a.href = window.URL.createObjectURL(blob);
        const clickEvt = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
        });
        a.dispatchEvent(clickEvt);
        a.remove();
    }

    async function exportToJson(e) {
        e.preventDefault();
        var jsonPodaci;
        await fetch('/dataJSON')
        .then(res => res.json())
        .then(data => {
            jsonPodaci = data
        });
  
        var nazivi = [];
        podaci.map((stadion) => (nazivi.push(stadion.naziv)));
        jsonPodaci = jsonPodaci.filter((stadion) => (nazivi.includes(stadion.naziv)));
  
        var arhitekti = [];
        podaci.map((stadion) => arhitekti.push(stadion.ime + " " + stadion.prezime));
        jsonPodaci.map((stadion) => stadion.arhitekti = stadion.arhitekti.filter(
            (arhitekt) => arhitekti.includes(arhitekt.ime + " " + arhitekt.prezime)
        ));
  
        downloadFile({
            data: JSON.stringify(jsonPodaci),
            fileName: 'nogometniStadioniFiltered.json',
            fileType: 'text/json'
        });
    };

    //#########################################################


    const columns = [ 
        { name: "naziv", selector: row => row.naziv, sortable: true, width: '13rem' },
        { name: "nazivdrzava", selector: row => row.nazivdrzava, sortable: true, width: '8rem' },
        { name: "nazivgrad", selector: row => row.nazivgrad, sortable: true, width: '8rem' },
        { name: "godinaotvorenja", selector: row => row.godinaotvorenja, sortable: true, width: '9rem' },
        { name: "kapacitet", selector: row => row.kapacitet, sortable: true },
        { name: "rekordnaprisutnost", selector: row => row.rekordnaprisutnost, sortable: true, width: '10rem' },
        { name: "imekluba", selector: row => row.imekluba, sortable: true, width: '11rem' },
        { name: "cijenaizgradnje", selector: row => row.cijenaizgradnje, sortable: true, width: '9rem' },
        { name: "brojloza", selector: row => row.brojloza, sortable: true },
        { name: "ime", selector: row => row.ime, sortable: true, width: '8rem' },
        { name: "prezime", selector: row => row.prezime, sortable: true },
    ];

    //#########################################################

    return(
        <main className='stadiumBackground'>
            <br></br>
            <Container>
                <DataTable 
                    pagination columns={columns} data={podaci} theme="dark" title='Nogometni Stadioni' highlightOnHover
                    actions={
                        <Stack direction='row' spacing='2rem' style={{width: '70%', padding: '1rem', alignItems: 'center'}}>
                            <CSVLink data={podaci} filename={"nogometniStadioniFiltered.csv"} style={{color: 'black', textDecoration: 'none', width: '50%', 
                                fontSize: '1rem', backgroundColor: '#90CAF9', padding: '0.6rem', borderRadius: '2px',
                                textAlign: 'center'}}>CSV DOWNLOAD</CSVLink>
                            <br></br>
                            <Button variant='contained' style={{ padding: '0.6rem', width: '50%' }} onClick={exportToJson}>
                                <Typography>JSON download</Typography>
                            </Button>
                            <br></br>
                        </Stack>
                    }
                />
            </Container>
            <br />
            <Paper style={{padding: '3rem', width: '50%', margin: 'auto', backgroundColor: '#292c2e'}}>
                <Typography style={{fontSize: '25px'}}>Polje za pretraživanje</Typography>
                <br />
                <form>
                    <Stack direction='column' spacing='2rem'>
                        <TextField label="Unesite vrijednost" variant='standard' value={input} 
                            onChange={e => setInput(e.target.value)}></TextField>
                        <FormControl variant='standard'>
                            <InputLabel>Odaberite polje za pretragu</InputLabel>
                            <Select onChange={e => setSelect(e.target.value)} defaultValue="">
                                <MenuItem value={'wildcard'}>wildcard</MenuItem>
                                <MenuItem value={'naziv'}>naziv</MenuItem>
                                <MenuItem value={'nazivdrzava'}>nazivdrzava</MenuItem>
                                <MenuItem value={'nazivgrad'}>nazivgrad</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                    <br />
                    <br />
                    <Button variant='contained' style={{ padding: '0.6rem', width: '100%' }} onClick={search}>
                        <Typography>Pretraži</Typography>
                    </Button>
                </form>
                <br />
                <Button variant='contained' style={{ padding: '0.6rem', width: '100%'}} onClick={handleHomeClick}>
                    <Typography>Home</Typography>
                </Button>
            </Paper>
            <br />
        </main>
    );
};

export default Data;