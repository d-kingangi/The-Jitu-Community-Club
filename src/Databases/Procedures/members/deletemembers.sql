CREATE OR ALTER PROCEDURE deletemembers
(@memberId VARCHAR(255))
AS
BEGIN
    UPDATE members SET isDeleted = 1 WHERE memberId = @memberId
END