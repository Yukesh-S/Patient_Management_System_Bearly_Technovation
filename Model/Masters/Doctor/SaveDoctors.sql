IF @OpType = 'New'
BEGIN
    INSERT INTO tbl_Doctors (
        User_ID,
        FirstName,
        LastName,
        Specialization,
        Department,
        Availability,
        CreatedBy,
        CreatedOn
    )
    VALUES (
        @User_ID,
        @FirstName,
        @LastName,
        @Specialization,
        @Department,
        @Availability,
        @CreatedBy,
        @CreatedOn
    );

    SELECT SCOPE_IDENTITY() AS Doctor_ID;
END
ELSE IF @OpType = 'Edit'
BEGIN
    UPDATE tbl_Doctors
    SET 
        User_ID = @User_ID,
        FirstName = @FirstName,
        LastName = @LastName,
        Specialization = @Specialization,
        Department = @Department,
        Availability = @Availability,
        ModifiedBy = @ModifiedBy,
        ModifiedOn = @ModifiedOn
    WHERE Doctor_ID = @Doctor_ID;

    SELECT @Doctor_ID AS UpdatedDoctor_ID;
END
ELSE IF @OpType = 'Delete'
BEGIN
    DELETE FROM tbl_Doctors
    WHERE Doctor_ID = @Doctor_ID;

    SELECT @Doctor_ID AS DeletedDoctor_ID;
END



-- -- {
--   "OpType": "New",
--   "User_ID": 1,
--   "FirstName": "Dr. Sarah",
--   "LastName": "Johnson",
--   "Specialization": "Cardiology",
--   "Department": "Heart Center",
--   "Availability": "{\"monday\": \"9:00-17:00\", \"tuesday\": \"9:00-17:00\", \"wednesday\": \"9:00-13:00\", \"thursday\": \"9:00-17:00\", \"friday\": \"9:00-16:00\"}",
--   "CreatedBy": 1,
--   "ModifiedBy": 1
-- }