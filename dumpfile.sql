--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Homebrew)
-- Dumped by pg_dump version 14.15 (Homebrew)

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
-- Name: individuals; Type: TABLE; Schema: public; Owner: leahputlek
--

CREATE TABLE public.individuals (
    nickname character varying(255),
    classification character varying(255),
    active_season character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.individuals OWNER TO leahputlek;

--
-- Name: individuals_id_seq; Type: SEQUENCE; Schema: public; Owner: leahputlek
--

CREATE SEQUENCE public.individuals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.individuals_id_seq OWNER TO leahputlek;

--
-- Name: individuals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leahputlek
--

ALTER SEQUENCE public.individuals_id_seq OWNED BY public.individuals.id;


--
-- Name: sightings; Type: TABLE; Schema: public; Owner: leahputlek
--

CREATE TABLE public.sightings (
    date_sighted date,
    individual_seen character varying(255),
    location_of_sighting character varying(255),
    health boolean,
    sighter_contact character varying(255),
    season_spotted character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.sightings OWNER TO leahputlek;

--
-- Name: sightings_id_seq; Type: SEQUENCE; Schema: public; Owner: leahputlek
--

CREATE SEQUENCE public.sightings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_id_seq OWNER TO leahputlek;

--
-- Name: sightings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leahputlek
--

ALTER SEQUENCE public.sightings_id_seq OWNED BY public.sightings.id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: leahputlek
--

CREATE TABLE public.species (
    species character varying(255),
    common_name character varying(255),
    scientific_name character varying(255),
    est_living_in_wild numeric,
    conservation_status_code character varying(255),
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.species OWNER TO leahputlek;

--
-- Name: species_id_seq; Type: SEQUENCE; Schema: public; Owner: leahputlek
--

CREATE SEQUENCE public.species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_id_seq OWNER TO leahputlek;

--
-- Name: species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: leahputlek
--

ALTER SEQUENCE public.species_id_seq OWNED BY public.species.id;


--
-- Name: individuals id; Type: DEFAULT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.individuals ALTER COLUMN id SET DEFAULT nextval('public.individuals_id_seq'::regclass);


--
-- Name: sightings id; Type: DEFAULT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.sightings ALTER COLUMN id SET DEFAULT nextval('public.sightings_id_seq'::regclass);


--
-- Name: species id; Type: DEFAULT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.species ALTER COLUMN id SET DEFAULT nextval('public.species_id_seq'::regclass);


--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: leahputlek
--

COPY public.individuals (nickname, classification, active_season, created_at, id) FROM stdin;
puki	mammal	spring	2025-03-19 22:24:12.47562	2
green-snake	reptile	summer	2025-03-19 22:24:12.47562	4
crawly	invertebrate	spring	2025-03-20 20:10:29.805608	5
spidey	mammal	summer	2025-03-19 22:24:12.47562	1
			2025-03-21 15:34:16.278488	7
tset	asdf	asdfasdf	2025-03-21 16:25:46.638946	8
\.


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: leahputlek
--

COPY public.sightings (date_sighted, individual_seen, location_of_sighting, health, sighter_contact, season_spotted, created_at, id) FROM stdin;
2012-01-15	jaguar	mountains	t	contactemail@email.com	winter	2025-03-19 22:24:12.475847	1
2025-08-10	green anaconda	amazon-rainforest	t	email@email.com	summer	2025-03-19 22:24:12.475847	2
2019-10-05	pink toe trantula	south-east-forest	t	\N	fall	2025-03-19 22:24:12.475847	3
2023-09-09	giant otter	north-lake-forest	f	animalemail@animals.com	spring	2025-03-19 22:24:12.475847	4
2020-11-01	beatle	amazon-rainforest	t		winter	2025-03-20 20:57:48.390991	6
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: leahputlek
--

COPY public.species (species, common_name, scientific_name, est_living_in_wild, conservation_status_code, created_at, id) FROM stdin;
invertebrate	pink toe trantula	avicularia-avicularia	8000	ne	2025-03-19 22:24:12.474844	3
mammal	giant otter	pteronura-brasiliensis	5000	en	2025-03-19 22:24:12.474844	4
mammal	jaguar	panthera_onca	163000	en	2025-03-19 22:24:12.474844	1
reptile	green anaconda	eunectes-murinus	11	\N	2025-03-19 22:24:12.474844	2
test	test	test	0		2025-03-21 13:22:40.467108	8
			0		2025-03-21 14:26:48.33307	9
\N	\N	\N	\N		2025-03-21 14:31:14.479277	10
reptile	lizard	lizard_lizzy	0		2025-03-21 16:37:45.798648	12
African_wildCat	desert-cat	felis-lybica	0		2025-03-21 16:43:05.352499	13
flaingo	pinkonelegbird	rosabird	400000	lc	2025-03-21 16:44:22.146074	14
\.


--
-- Name: individuals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leahputlek
--

SELECT pg_catalog.setval('public.individuals_id_seq', 8, true);


--
-- Name: sightings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leahputlek
--

SELECT pg_catalog.setval('public.sightings_id_seq', 9, true);


--
-- Name: species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: leahputlek
--

SELECT pg_catalog.setval('public.species_id_seq', 14, true);


--
-- Name: individuals individuals_pkey; Type: CONSTRAINT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.individuals
    ADD CONSTRAINT individuals_pkey PRIMARY KEY (id);


--
-- Name: sightings sightings_pkey; Type: CONSTRAINT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT sightings_pkey PRIMARY KEY (id);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: leahputlek
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

