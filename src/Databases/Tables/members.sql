CREATE TABLE members (
    memberId VArCHAR(255) UNIQUE,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    cohortno INT NOT NULL,
    isDeleted BIT DEFAULT 0
  );

  SELECT * FROM members