CREATE  or ALTER PROCEDURE updatemember(
    @memberId VARCHAR(255),
    @firstname VARCHAR(255), 
    @lastname VARCHAR(255),
    @email VARCHAR(255),
    @cohortno INT)
AS
BEGIN
    UPDATE members SET 
        firstname = @firstname,
        lastname = @lastname, 
        email = @email,
        cohortno = @cohortno
    WHERE memberId = @memberId
END