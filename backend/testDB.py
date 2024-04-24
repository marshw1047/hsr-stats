import sqlite3
# characters.additions (blue number in more stats prob relics maybe traces/skills etc)
# characters.attributes (base stats)
# check .fields for...(atk, hp, def, spd, crit_rate, crit_dmg) then add .value

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT,
    age INTEGER
);