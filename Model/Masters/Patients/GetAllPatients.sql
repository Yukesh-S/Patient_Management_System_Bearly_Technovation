SELECT 
    Patient_ID,
    User_ID,
    FirstName,
    LastName,
    DateOfBirth,
    Gender,
    ContactNumber,
    Address1,
    Address2,
    CreatedBy,
    CreatedOn,
    ModifiedBy,
    ModifiedOn
FROM tbl_Patients
ORDER BY Patient_ID;
