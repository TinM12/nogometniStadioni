import React from 'react';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import OpisAtributa from '../components/opisAtributa';
import Header from '../components/Header';

function Home() {

    const navigateTo = useNavigate();

    const handleDataClick = () => {
        navigateTo('/data');
    };

    ///////////////////////////////////////////////////////////////////////////

    return(
        <div className='stadiumBackground'>
            <Header/>
            <br />
            <Paper className='naslov' style={{backgroundColor: '#292c2e'}}>
                <h1 style={{textAlign: 'center'}}>Nogometni stadioni</h1>
            </Paper>
            <br />
            <Container style={{display: 'flex'}} >
                <Paper className='opis' style={{backgroundColor: '#292c2e'}}>
                    <p>U ovom skupu podataka opisani su neki od najpoznatijih europskih nogometnih stadiona. 
                    Za pojedini stadion u skupu podataka pohranjene su informacije o nazivu stadiona, godini otvorenja, 
                    kapacitetu, rekordnoj prisutnosti, cijeni izgradnje, broju svečanih loža te državi i gradu u kojim se 
                    stadion nalazi. Skup podataka također sadrži imena i prezimena arhitekata koji su sudjelovali u izgradnji
                    stadiona. 
                    </p> 
                </Paper>
                <Paper style={{ width: '30%', marginLeft: '2rem' ,padding: '1rem', backgroundColor: '#292c2e', 
                    alignItems: 'center' }}>
                    <Stack direction='column' spacing='1rem'>
                        <Paper className='downloadOkvir' style={{ backgroundColor: '#90CAF9' }}>
                            <a href='nogometniStadioni.csv' style={{ color: 'black' }} download>
                                CSV DOWNLOAD
                            </a>
                        </Paper>
                        <br />
                        <Paper className='downloadOkvir' style={{ margin: 'auto', width: '100%', backgroundColor: '#90CAF9' }}>
                            <a href='nogometniStadioni.json' style={{ color: 'black' }} download>
                                JSON DOWNLOAD
                            </a>
                        </Paper>
                        <Button variant='contained' style={{ padding: '1rem' }} onClick={handleDataClick}>
                            <Typography>Datatable</Typography>
                        </Button>
                    </Stack>
                </Paper>
            </Container>
            <br />
            <Container style={{display: 'flex', justifyContent: 'center'}}>
                <Container>
                    <Paper style={{backgroundColor: '#292c2e', textAlign: 'center', width: '50%', margin: 'auto'}}>
                        <h1 style={{padding: '1rem'}}>Opis atributa</h1>
                    </Paper>
                <OpisAtributa />
                </Container>

                <Container style={{width: '70%'}}>
                    <Paper style={{backgroundColor: '#292c2e', textAlign: 'center', width: '50%', margin: 'auto'}}>
                        <h1 style={{padding: '1rem'}}>Općenito</h1>
                    </Paper>
                    <Paper style={{padding: '1rem', backgroundColor: '#292c2e', display:'flex',
                        fontSize: '18px'}}>
                        <ul>
                            <li>Autor: Tin Margetić</li>
                            <li>Kontakt: tin.margetic@fer.hr</li>
                            <li>Jezik: Hrvatski / Croatian</li>
                            <li>Licencija: Creative Commons Zero v1.0 Universal</li>
                            <li>URL repozitorija: <a href="https://github.com/TinM12/nogometniStadioni" 
                                style={{color: 'white'}}> https://github.com/TinM12/nogometniStadioni </a>
                            </li>
                            <li>Broj stadiona u skupu podataka: 15</li>
                            <li>Trenutačna verzija: 2.0 </li>
                        </ul>
                    </Paper>
                </Container>
            </Container>
            <br />
        </div>
    );
};

export default Home;