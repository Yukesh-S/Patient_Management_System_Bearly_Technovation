-- GetAll
SELECT 
    a.Appointment_ID,
    a.Patient_ID,
    p.FirstName + ' ' + p.LastName AS PatientName,
    a.Doctor_ID,
    d.FirstName + ' ' + d.LastName AS DoctorName,
    a.ScheduledDateTime,
    a.Status,
    a.Notes,
    a.CreatedBy,
    a.CreatedOn,
    a.ModifiedBy,
    a.ModifiedOn
FROM dbo.tbl_Appointments a
left outer JOIN dbo.tbl_Patients p ON a.Patient_ID = p.Patient_ID
left outer JOIN dbo.tbl_Doctors d ON a.Doctor_ID = d.Doctor_ID
ORDER BY a.Appointment_ID;