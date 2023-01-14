// postgres://scsikejp:Qk7aT8L9sTMnIJJWqskJvi6WDbgR5CxS@mahmud.db.elephantsql.com/scsikejp
/*
CREATE TABLE users
(
    player_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(50)

);

CREATE TABLE characters
(
    character_id SERIAL PRIMARY KEY,
    player_id INT, FOREIGN KEY (player_id) REFERENCES users(player_id),
    name VARCHAR(50),
    race VARCHAR(50),
    class VARCHAR(50),
    alignment VARCHAR(50),
    skills VARCHAR(50),
    strength INT,
    dexterity INT,
    constitution INT,
    intelligence INT,
    wisdom INT,
    charisma INT,
    hitpoints INT,
    story
    picture
);

ALTER TABLE characters
ADD picture VARCHAR(10000);
