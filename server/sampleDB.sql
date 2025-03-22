--before submitting ensure we create a new dump file that includes id_seq

-- PostgreSQL database dump
--

-- Dumped from database version 13.3
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

DROP TABLE IF EXISTS public.sightings CASCADE;
DROP TABLE IF EXISTS public.individuals CASCADE;
DROP TABLE IF EXISTS public.species CASCADE;

DROP SEQUENCE IF EXISTS public.sightings_id_seq;
DROP SEQUENCE IF EXISTS public.individuals_id_seq;
DROP SEQUENCE IF EXISTS public.species_id_seq;

--
-- Name: species; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.species (
    id serial PRIMARY KEY,
    species character varying(255),
    common_name character varying(255),
    scientific_name character varying(255),
    est_living_in_wild NUMERIC,
    conservation_status_code character varying(255),
    created_at timestamp NOT NULL DEFAULT NOW() 
);

--
-- Name: individuals; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.individuals (
    id serial PRIMARY KEY,
    nickname character varying(255),
    classification character varying(255),
    active_season character varying(255),
    created_at timestamp NOT NULL DEFAULT NOW() 
);

--
-- Name: sightings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sightings (
    id serial PRIMARY KEY,
    date_sighted date,
    individual_seen character varying(255),
    location_of_sighting character varying(255),
    health boolean,
    sighter_contact character varying(255),
    season_spotted character varying(255),
    created_at timestamp NOT NULL DEFAULT NOW() 
);


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.species (species, common_name, scientific_name, est_living_in_wild, conservation_status_code)
VALUES 
    ('mammal', 'jaguar', 'panthera_onca', 173000, 'en'),
    ('reptile', 'green anaconda', 'eunectes-murinus', 11, 'lc'),
    ('invertebrate', 'pink toe trantula', 'avicularia-avicularia', 8000, 'ne'),
    ('mammal', 'giant otter', 'pteronura-brasiliensis', 5000, 'en');

--
-- Data for Name: individuals; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.individuals (nickname, classification, active_season)
VALUES 
    ('spidey', 'invertebrate', 'summer'),
    ('puki', 'mammal', 'spring'),
    ('water-dog','mammal', 'spring'),
    ('green-snake', 'reptile', 'summer');

--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sightings (date_sighted, individual_seen, location_of_sighting, health, sighter_contact, season_spotted)
VALUES 
    ('2012-01-15', 'jaguar', 'mountains', true, 'contactemail@email.com','winter'),
    ('2025-08-10', 'green anaconda', 'amazon-rainforest', true, 'email@email.com', 'summer'),
    ('2019-10-05', 'pink toe trantula', 'south-east-forest', true, NULL, 'fall'),
    ('2023-09-09', 'giant otter', 'north-lake-forest', false, 'animalemail@animals.com','spring');
    
--
-- PostgreSQL database dump complete
--



