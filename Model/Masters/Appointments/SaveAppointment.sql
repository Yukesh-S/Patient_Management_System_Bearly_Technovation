
IF @OpType = 'New'
BEGIN
    INSERT INTO dbo.tbl_Appointments (
        Patient_ID,
        Doctor_ID,
        ScheduledDateTime,
        Status,
        Notes,
        CreatedBy,
        CreatedOn,
        ModifiedBy,
        ModifiedOn
    )
    VALUES (
        @Patient_ID,
        @Doctor_ID,
        @ScheduledDateTime,
        @Status,
        @Notes,
        @CreatedBy,
        GETDATE(),
        @ModifiedBy,
        GETDATE()
    );

    SELECT SCOPE_IDENTITY() AS Appointment_ID;
END
ELSE IF @OpType = 'Edit'
BEGIN
    UPDATE dbo.tbl_Appointments
    SET 
        Patient_ID = @Patient_ID,
        Doctor_ID = @Doctor_ID,
        ScheduledDateTime = @ScheduledDateTime,
        Status = @Status,
        Notes = @Notes,
        ModifiedBy = @ModifiedBy,
        ModifiedOn = GETDATE()
    WHERE Appointment_ID = @Appointment_ID;

    SELECT @Appointment_ID AS Appointment_ID;
END
ELSE IF @OpType = 'Delete'
BEGIN
    DELETE FROM dbo.tbl_Appointments
    WHERE Appointment_ID = @Appointment_ID;

    SELECT @Appointment_ID AS Appointment_ID;
END
