CREATE DATABASE JobTrackerDB;
USE JobTrackerDB;
CREATE TABLE JobApplications (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Company NVARCHAR(255) NOT NULL,
    Position NVARCHAR(255) NOT NULL,
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending',
    AppliedDate DATETIME DEFAULT GETDATE()
);
INSERT INTO JobApplications (Company, Position, Status)
VALUES 
('Google', 'Software Engineer', 'Applied'),
('Microsoft', 'Frontend Developer', 'Interview Scheduled'),
('Amazon', 'Backend Developer', 'Rejected');
SELECT * FROM JobApplications;
SELECT name FROM sys.databases;
DBCC CHECKIDENT ('JobApplications', RESEED, 0);
