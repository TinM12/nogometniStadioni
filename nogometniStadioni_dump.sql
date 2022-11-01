--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: arhitekt; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.arhitekt (
    ime character varying(50) NOT NULL,
    prezime character varying(50) NOT NULL,
    idarhitekt bigint NOT NULL
);


ALTER TABLE public.arhitekt OWNER TO postgres;

--
-- Name: arhitekt_idarhitekt_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.arhitekt_idarhitekt_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.arhitekt_idarhitekt_seq OWNER TO postgres;

--
-- Name: arhitekt_idarhitekt_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.arhitekt_idarhitekt_seq OWNED BY public.arhitekt.idarhitekt;


--
-- Name: arhitektradiona; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.arhitektradiona (
    naziv character varying(50) NOT NULL,
    idarhitekt bigint NOT NULL
);


ALTER TABLE public.arhitektradiona OWNER TO postgres;

--
-- Name: arhitektradiona_idarhitekt_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.arhitektradiona_idarhitekt_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.arhitektradiona_idarhitekt_seq OWNER TO postgres;

--
-- Name: arhitektradiona_idarhitekt_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.arhitektradiona_idarhitekt_seq OWNED BY public.arhitektradiona.idarhitekt;


--
-- Name: drzava; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.drzava (
    nazivdrzava character varying(50) NOT NULL,
    sifdrzava bigint NOT NULL
);


ALTER TABLE public.drzava OWNER TO postgres;

--
-- Name: drzava_sifdrzava_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.drzava_sifdrzava_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.drzava_sifdrzava_seq OWNER TO postgres;

--
-- Name: drzava_sifdrzava_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.drzava_sifdrzava_seq OWNED BY public.drzava.sifdrzava;


--
-- Name: grad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grad (
    nazivgrad character varying(50) NOT NULL,
    sifgrad bigint NOT NULL,
    sifdrzava bigint NOT NULL
);


ALTER TABLE public.grad OWNER TO postgres;

--
-- Name: grad_sifdrzava_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grad_sifdrzava_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grad_sifdrzava_seq OWNER TO postgres;

--
-- Name: grad_sifdrzava_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grad_sifdrzava_seq OWNED BY public.grad.sifdrzava;


--
-- Name: grad_sifgrad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grad_sifgrad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grad_sifgrad_seq OWNER TO postgres;

--
-- Name: grad_sifgrad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grad_sifgrad_seq OWNED BY public.grad.sifgrad;


--
-- Name: klub; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.klub (
    imekluba character varying(50) NOT NULL,
    sifklub bigint NOT NULL
);


ALTER TABLE public.klub OWNER TO postgres;

--
-- Name: klub_sifklub_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.klub_sifklub_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.klub_sifklub_seq OWNER TO postgres;

--
-- Name: klub_sifklub_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.klub_sifklub_seq OWNED BY public.klub.sifklub;


--
-- Name: stadion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stadion (
    naziv character varying(50) NOT NULL,
    godinaotvorenja integer NOT NULL,
    kapacitet integer NOT NULL,
    rekordnaprisutnost integer NOT NULL,
    cijenaizgradnje integer NOT NULL,
    brojloza integer NOT NULL,
    sifgrad bigint NOT NULL,
    sifklub bigint NOT NULL
);


ALTER TABLE public.stadion OWNER TO postgres;

--
-- Name: stadion_sifgrad_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stadion_sifgrad_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stadion_sifgrad_seq OWNER TO postgres;

--
-- Name: stadion_sifgrad_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stadion_sifgrad_seq OWNED BY public.stadion.sifgrad;


--
-- Name: stadion_sifklub_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.stadion_sifklub_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.stadion_sifklub_seq OWNER TO postgres;

--
-- Name: stadion_sifklub_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.stadion_sifklub_seq OWNED BY public.stadion.sifklub;


--
-- Name: arhitekt idarhitekt; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitekt ALTER COLUMN idarhitekt SET DEFAULT nextval('public.arhitekt_idarhitekt_seq'::regclass);


--
-- Name: arhitektradiona idarhitekt; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitektradiona ALTER COLUMN idarhitekt SET DEFAULT nextval('public.arhitektradiona_idarhitekt_seq'::regclass);


--
-- Name: drzava sifdrzava; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drzava ALTER COLUMN sifdrzava SET DEFAULT nextval('public.drzava_sifdrzava_seq'::regclass);


--
-- Name: grad sifgrad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grad ALTER COLUMN sifgrad SET DEFAULT nextval('public.grad_sifgrad_seq'::regclass);


--
-- Name: grad sifdrzava; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grad ALTER COLUMN sifdrzava SET DEFAULT nextval('public.grad_sifdrzava_seq'::regclass);


--
-- Name: klub sifklub; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.klub ALTER COLUMN sifklub SET DEFAULT nextval('public.klub_sifklub_seq'::regclass);


--
-- Name: stadion sifgrad; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stadion ALTER COLUMN sifgrad SET DEFAULT nextval('public.stadion_sifgrad_seq'::regclass);


--
-- Name: stadion sifklub; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stadion ALTER COLUMN sifklub SET DEFAULT nextval('public.stadion_sifklub_seq'::regclass);


--
-- Data for Name: arhitekt; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.arhitekt (ime, prezime, idarhitekt) FROM stdin;
Jacques	Herzog	1
Pierre	de Meuron	2
Manuel Muñoz	Monasterio	3
Luis Alemany	Soler	4
Antonio	Lamela	5
Francesc	Mitjans	6
Josep	Soteras	7
Archibald	Leitch	8
Ulisse	Stacchini	9
Alberto	Cugini	10
Roger	Taillibert	11
Siavash	Teimouri	12
Ulrich	Drahtler	13
Branko	Kincl	14
Tom	Jones	15
Marc	Spinner	16
Mark	Craine	17
John	Laing	18
Rob	Schuurman	19
Sjoerd	Soeters	20
Buro	Happold	21
Antonio	García	22
Henri	Ploquin 	23
Jean-Pierre	Buffi 	24
\.


--
-- Data for Name: arhitektradiona; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.arhitektradiona (naziv, idarhitekt) FROM stdin;
Santiago Bernabéu	3
Santiago Bernabéu	4
Santiago Bernabéu	5
Camp Nou	6
Camp Nou	7
Old Trafford	8
San Siro	9
San Siro	10
Parc des Princes	11
Parc des Princes	12
Signal Iduna Park	13
Allianz arena	1
Allianz arena	2
Stadion Maksimir	14
Emirates Stadium	15
Emirates Stadium	16
Emirates Stadium	17
Anfield	8
Etihad Stadium	18
Johan Cruijff Arena	19
Johan Cruijff Arena	20
Tottenham Hotspur Stadium	21
Estadio Metropolitano	22
Stade Vélodrome	23
Stade Vélodrome	24
\.


--
-- Data for Name: drzava; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.drzava (nazivdrzava, sifdrzava) FROM stdin;
Španjolska	1
Engleska	2
Francuska	3
Italija	4
Njemačka	5
Hrvatska	6
Nizozemska	7
\.


--
-- Data for Name: grad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grad (nazivgrad, sifgrad, sifdrzava) FROM stdin;
Barcelona	1	1
Madrid	2	1
Manchester	3	2
Milano	4	4
Pariz	5	3
Dortmund	6	5
München	7	5
Zagreb	8	6
London	9	2
Liverpool	10	2
Amsterdam	11	7
Marseille	12	3
\.


--
-- Data for Name: klub; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.klub (imekluba, sifklub) FROM stdin;
Real Madrid CF	1
FC Barcelona	2
Manchester United	3
Manchester City FC	4
Inter Milan	5
Paris Saint-Germain	6
BV Borussia Dortmund	7
FC Bayern München	8
GNK Dinamo Zagreb	9
Arsenal FC	10
Liverpool FC	11
AFC Ajax	12
Tottenham Hotspur FC	13
Club Atlético de Madrid	14
Olympique de Marseille	15
\.


--
-- Data for Name: stadion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stadion (naziv, godinaotvorenja, kapacitet, rekordnaprisutnost, cijenaizgradnje, brojloza, sifgrad, sifklub) FROM stdin;
Santiago Bernabéu	1947	81044	129690	1732943000	245	2	1
Camp Nou	1957	99354	120000	1730916000	23	1	2
Old Trafford	1910	74310	76962	101000000	21	3	3
San Siro	1926	80018	82465	360000000	30	4	5
Parc des Princes	1972	48527	50370	750000000	20	5	6
Signal Iduna Park	1974	81365	83000	200000000	11	6	7
Allianz arena	2005	75024	76576	340000000	106	7	8
Stadion Maksimir	1912	35123	64138	47810000	8	8	9
Emirates Stadium	2006	60704	60161	454533000	152	9	10
Anfield	1884	54362	61905	221439000	64	10	11
Etihad Stadium	2003	53400	54523	130532000	70	3	4
Johan Cruijff Arena	1996	54990	54874	140000000	76	11	12
Tottenham Hotspur Stadium	2019	62850	62027	1161086729	70	9	13
Estadio Metropolitano	1994	68456	67942	240000000	78	2	14
Stade Vélodrome	1937	67394	65421	268000000	65	12	15
\.


--
-- Name: arhitekt_idarhitekt_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.arhitekt_idarhitekt_seq', 24, true);


--
-- Name: arhitektradiona_idarhitekt_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.arhitektradiona_idarhitekt_seq', 1, false);


--
-- Name: drzava_sifdrzava_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.drzava_sifdrzava_seq', 7, true);


--
-- Name: grad_sifdrzava_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grad_sifdrzava_seq', 1, false);


--
-- Name: grad_sifgrad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grad_sifgrad_seq', 12, true);


--
-- Name: klub_sifklub_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.klub_sifklub_seq', 15, true);


--
-- Name: stadion_sifgrad_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stadion_sifgrad_seq', 1, false);


--
-- Name: stadion_sifklub_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.stadion_sifklub_seq', 1, false);


--
-- Name: arhitekt arhitekt_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitekt
    ADD CONSTRAINT arhitekt_pkey PRIMARY KEY (idarhitekt);


--
-- Name: arhitektradiona arhitektradiona_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitektradiona
    ADD CONSTRAINT arhitektradiona_pkey PRIMARY KEY (naziv, idarhitekt);


--
-- Name: drzava drzava_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.drzava
    ADD CONSTRAINT drzava_pkey PRIMARY KEY (sifdrzava);


--
-- Name: grad grad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grad
    ADD CONSTRAINT grad_pkey PRIMARY KEY (sifgrad);


--
-- Name: klub klub_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.klub
    ADD CONSTRAINT klub_pkey PRIMARY KEY (sifklub);


--
-- Name: stadion stadion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stadion
    ADD CONSTRAINT stadion_pkey PRIMARY KEY (naziv);


--
-- Name: arhitektradiona arhitektradiona_idarhitekt_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitektradiona
    ADD CONSTRAINT arhitektradiona_idarhitekt_fkey FOREIGN KEY (idarhitekt) REFERENCES public.arhitekt(idarhitekt);


--
-- Name: arhitektradiona arhitektradiona_naziv_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.arhitektradiona
    ADD CONSTRAINT arhitektradiona_naziv_fkey FOREIGN KEY (naziv) REFERENCES public.stadion(naziv);


--
-- Name: grad grad_sifdrzava_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grad
    ADD CONSTRAINT grad_sifdrzava_fkey FOREIGN KEY (sifdrzava) REFERENCES public.drzava(sifdrzava);


--
-- Name: stadion stadion_sifgrad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stadion
    ADD CONSTRAINT stadion_sifgrad_fkey FOREIGN KEY (sifgrad) REFERENCES public.grad(sifgrad);


--
-- Name: stadion stadion_sifklub_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stadion
    ADD CONSTRAINT stadion_sifklub_fkey FOREIGN KEY (sifklub) REFERENCES public.klub(sifklub);


--
-- PostgreSQL database dump complete
--

