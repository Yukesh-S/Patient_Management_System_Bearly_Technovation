
IF @OpType = 'New'
BEGIN
    INSERT INTO tbl_Patients (
        User_ID,
        FirstName,
        LastName,
        DateOfBirth,
        Gender,
        ContactNumber,
        Address1,
        Address2,
        CreatedBy,
        CreatedOn
        
    )
    VALUES (
        @User_ID,
        @FirstName,
        @LastName,
        @DateOfBirth,
        @Gender,
        @ContactNumber,
        @Address1,
        @Address2,
        @CreatedBy,
        @CreatedOn
       
    );

    SELECT SCOPE_IDENTITY() AS Patient_ID;
END
ELSE IF @OpType = 'Edit'
BEGIN
    UPDATE tbl_Patients
    SET 
        User_ID = @User_ID,
        FirstName = @FirstName,
        LastName = @LastName,
        DateOfBirth = @DateOfBirth,
        Gender = @Gender,
        ContactNumber = @ContactNumber,
        Address1 = @Address1,
        Address2 = @Address2,
        ModifiedBy = @ModifiedBy,
        ModifiedOn = @ModifiedOn
    WHERE Patient_ID = @Patient_ID;

    SELECT @Patient_ID AS UpdatedPatient_ID;
END
ELSE IF @OpType = 'Delete'
BEGIN
    DELETE FROM tbl_Patients
    WHERE Patient_ID = @Patient_ID;

    SELECT @Patient_ID AS DeletedPatient_ID;
END
