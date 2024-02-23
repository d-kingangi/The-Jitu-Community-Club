CREATE OR ALTER PROCEDURE getallmembers
AS 
BEGIN 
    SELECT * FROM members
    WHERE isDeleted = 0
END