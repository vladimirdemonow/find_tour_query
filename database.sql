CREATE TABLE tours(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE tour_timeslots (
    id SERIAL PRIMARY KEY,
    tours_id INTEGER,
    timeslot TIMESTAMP,
    left_places INTEGER,
    FOREIGN KEY (tours_id) REFERENCES tours (id)
);
