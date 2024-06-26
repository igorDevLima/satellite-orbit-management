CREATE TABLE IF NOT EXISTS spacial_stations (
    OBJECT_ID varchar(20) NOT NULL PRIMARY KEY,
    OBJECT_NAME text NOT NULL,
    EPOCH timestamp(6) NOT NULL,
    MEAN_MOTION float NOT NULL,
    ECCENTRICIT float NOT NULL,
    INCLINATION float NOT NULL,
    RA_OF_ASC_NODE float NOT NULL,
    ARG_OF_PERICENTER float NOT NULL,
    MEAN_ANOMALY float NOT NULL,
    EPHEMERIS_TYPE integer NOT NULL,
    CLASSIFICATION_TYPE character NOT NULL,
    NORAD_CAT_ID integer NOT NULL,
    ELEMENT_SET_NO integer NOT NULL,
    REV_AT_EPOCH integer NOT NULL,
    BSTAR float NOT NULL,
    MEAN_MOTION_DOT float NOT NULL,
    MEAN_MOTION_DDOT integer NOT NULL
);