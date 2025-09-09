 SELECT mh.*, p.FirstName AS PatientFirstName, p.LastName AS PatientLastName,
           d.FirstName AS DoctorFirstName, d.LastName AS DoctorLastName
    FROM tbl_MedicalHistory mh
    INNER JOIN tbl_Patients p ON mh.Patient_ID = p.Patient_ID
    INNER JOIN tbl_Doctors d ON mh.Doctor_ID = d.Doctor_ID
    WHERE mh.History_ID = @History_ID