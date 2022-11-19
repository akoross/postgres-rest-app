CREATE TYPE genderEnum AS ENUM ('male', 'female');
CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    gender genderEnum,
    frends INT[],
    subscribers INT[]
);