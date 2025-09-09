SELECT
    Users_ID,
    User_Code,
    Email,
    Role,
    CreatedBy,
    CreatedOn
FROM tbl_Users
WHERE
    User_Code = @User_Code
    AND Password = @Password;