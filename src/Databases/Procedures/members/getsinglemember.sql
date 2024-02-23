CREATE OR ALTER PROCEDURE getsinglemember (@memberId VARCHAR(255))
AS
BEGIN
    SELECT * FROM members WHERE memberId = @memberId
END