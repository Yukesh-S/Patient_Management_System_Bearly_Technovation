SELECT 
    d.Doctor_ID,
    d.User_ID,
    u.User_Code,
    d.FirstName,
    d.LastName,
    d.Specialization,
    d.Department,
    d.Availability,
    d.CreatedBy,
    d.CreatedOn,
    d.ModifiedBy,
    d.ModifiedOn,
    u.Email,
    u.Role
FROM tbl_Doctors d
INNER JOIN tbl_Users u ON d.User_ID = u.Users_ID
ORDER BY d.FirstName, d.LastName;