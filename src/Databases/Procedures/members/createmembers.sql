CREATE OR ALTER PROCEDURE createmembers(
    @memberId VARCHAR(255),
    @firstname VARCHAR(255),
    @lastname VARCHAR(255),
    @email VARCHAR(255),
    @cohortno VARCHAR(255)
)
AS
BEGIN
    INSERT INTO members(memberId, firstname, lastname, email, cohortno)
    VALUES(@memberId, @firstname, @lastname, @email, @cohortno)
END