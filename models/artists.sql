DROP DATABASE IF EXISTS artists_db;
CREATE DATABASE artists_db;

\c artists_db;

CREATE TABLE artists (
  ID SERIAL PRIMARY KEY,
  name TEXT,
  track TEXT,
  album TEXT
);

INSERT INTO artists (name, track, album)
VALUES ('Developer', 'In Pure Form', 'In Pure Form');

INSERT INTO artists (name, track, album)
VALUES ('DVS1', 'Black Russian', 'Klockworks13');

INSERT INTO artists (name, track, album)
VALUES ('Planetary Assault Systems', 'Dungeon - mixed', 'The Light Years Rework');

INSERT INTO artists (name, track, album)
VALUES ('Jonas Kopp', 'Akut - Original Mix', 'Beyond The Hypnosis');

INSERT INTO artists (name, track, album)
VALUES ('Function', 'Dissafected', 'The Light Years Rework');


CREATE TABLE favorites (
  ID SERIAL PRIMARY KEY,
  name TEXT,
  track TEXT,
  album TEXT
);

INSERT INTO favorites (name, track, album)
VALUES ('Unbalance', 'Mad Loop', 'Unknown');

INSERT INTO favorites (name, track, album)
VALUES ('Agony Forces', 'End Of Times', 'Unknown');

INSERT INTO favorites (name, track, album)
VALUES ('Advances Human', 'Seance', 'Unknown');


