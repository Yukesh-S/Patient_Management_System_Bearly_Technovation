-- SaveMedicalHistory.sql

IF (@OpType = 'New')
BEGIN
    INSERT INTO tbl_MedicalHistory (
        Patient_ID,
        Doctor_ID,
        Appointment_ID,
        Diagnosis,
        Prescription,
        Notes,
        RecordDate,
        CreatedBy,
        CreatedOn
    )
    VALUES (
        @Patient_ID,
        @Doctor_ID,
        @Appointment_ID,
        @Diagnosis,
        @Prescription,
        @Notes,
        @RecordDate,
        @CreatedBy,
        GETDATE()
    );

    SELECT SCOPE_IDENTITY() AS History_ID;
END

ELSE IF (@OpType = 'Edit')
BEGIN
    UPDATE tbl_MedicalHistory
    SET
        Patient_ID = @Patient_ID,
        Doctor_ID = @Doctor_ID,
        Appointment_ID = @Appointment_ID,
        Diagnosis = @Diagnosis,
        Prescription = @Prescription,
        Notes = @Notes,
        RecordDate = @RecordDate,
        ModifiedBy = @ModifiedBy,
        ModifiedOn = GETDATE()
    WHERE History_ID = @History_ID;

    SELECT @History_ID AS History_ID;
END

ELSE IF (@OpType = 'Delete')
BEGIN
    DELETE FROM tbl_MedicalHistory WHERE History_ID = @History_ID;
    SELECT @History_ID AS DeletedHistory_ID;
END


-- {
--   "OpType": "New",
--   "Patient_ID": 1,
--   "Doctor_ID": 2,
--   "Appointment_ID": 3,
--   "Diagnosis": "Viral fever",
--   "Prescription": "Paracetamol 500mg, 3 days",
--   "Notes": "Take rest and fluids",
--   "RecordDate": "2025-09-06",
--   "CreatedBy": 1
-- }
