import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Button, Stack, Toolbar } from '@mui/material';
import React from 'react';
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton'
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const { isAuthenticated } = useAuth0(); 

    const navigateTo = useNavigate();

    const handleProfileClick = async () => {
        navigateTo('/profile');
    };

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

    async function osvjeziPreslike(e) {
        e.preventDefault();
        var jsonPodaci;
        await fetch('/dataJSON')
        .then(res => res.json())
        .then(data => {
            jsonPodaci = data;
        });

        var csvPodaci;
        await fetch('/dataCSV')
        .then(res => res.json())
        .then(data => {
            csvPodaci = data;
        });        

        downloadFile({
            data: JSON.stringify(jsonPodaci),
            fileName: 'nogometniStadioni.json',
            fileType: 'text/json'
        });

        let headers = ['naziv,nazivdrzava,nazivgrad,godinaotvorenja,kapacitet,rekordnaprisutnost,imekluba,cijenaizgradnje,brojloza,ime,prezime'];
        
        let csvPodaciPravi = csvPodaci.reduce((acc, stadion) => {
            const { naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost, imekluba, cijenaizgradnje, brojloza, ime, prezime } = stadion
            acc.push([naziv, nazivdrzava, nazivgrad, godinaotvorenja, kapacitet, rekordnaprisutnost, imekluba, cijenaizgradnje, brojloza, ime, prezime].join(','))
            return acc
          }, [])

        downloadFile({
            data: [...headers, ...csvPodaciPravi].join('\n'),
            fileName: 'nogometniStadioni.csv',
            fileType: 'text/csv',
        })
    };

    return(
        <AppBar position='static'>
            <Toolbar>
                <Stack direction='row' spacing ='1rem' alignItems={'center'}>
                    <LoginButton />
                    <LogoutButton />
                    {isAuthenticated ? 
                        <Button variant='contained' onClick={handleProfileClick}>
                            Korisnički profil
                        </Button>
                        : undefined
                    }
                    {isAuthenticated ? 
                        <Button variant='contained' onClick={osvjeziPreslike}>
                            Osvježi preslike
                        </Button>
                        : undefined
                    }
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Header;