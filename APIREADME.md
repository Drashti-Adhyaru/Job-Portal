# Job Portal API Documentation

## Users

### Signup
- **Endpoint:** `http://localhost:3000/api/users/signup`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "firstName": "Ved",
    "lastName": "Adhyaru",
    "phone": 9909909999,
    "role": "employer",
    "email": "vat@gmail.com",
    "password": "Vatsal@12345"
  }





1\. Users Signup (role: employer, employee)

http://localhost:3000/api/users/signup Body: { \"firstName\": \"Ved\",
\"lastName\": \"Adhyaru\", \"phone\": 9909909999, \"role\":
\"employer\", \"email\": \"vat@gmail.com\", \"password\":
\"Vatsal@12345\" }

SignIn

http://localhost:3000/api/users/login Body: { \"email\":
\"vat@gmail.com\", \"password\": \"Vatsal@12345\" }

Logout

http://localhost:3000/api/users/logout

Me

http://localhost:3000/api/users/me

Get All Employees

http://localhost:3000/api/users/employees

2\. Jobs

Add Job

http://localhost:3000/api/jobs { \"title\": \"System Developer\",
\"companyName\": \"AHDH Corp\", \"description\": \"desc3\", \"type\":
\"Contract\", \"pay\": \"20000\$/3-months\", \"category\": \"IT\",
\"address\": \"GTA\" }

Jobs(all)

http://localhost:3000/api/jobs

Jobs by status( \'applied\', \'rejected\', \'accepted\', \'pending\')

http://localhost:3000/api/jobs/status?status=applied

Delete Job

http://localhost:3000/api/jobs?jobId=65d12a58c113812c64aabfc8

Update Job

http://localhost:3000/api/jobs?jobId=65d123bd25c7bdfafc40e53f

{ \"title\": \"Software Developer\", \"companyName\": \"AVF Corp\",
\"description\": \"desc3\", \"type\": \"Contract\", \"pay\":
\"20000\$/3-months\", \"category\": \"IT\", \"address\": \"GTA\" }

Filter Job

Can add all the filter types like : category, type, pay, location

http://localhost:3000/api/jobs/filter?category=IT&tyoe=parttime

3\. Resume Get resumes by userid http://localhost:3000/api/resumes

Create a resume

http://localhost:3000/api/resumes {

\"firstName\": \"Vatsal\", \"lastName\": \"Patel\", \"age\": \"23\",
\"experience\": \"4 years\", \"aboutYou\": \"great person\",
\"highestQualification\": \"B.tech\'s\", \"availibility\": \"Full
Time\", \"address\": \"60 stevenson\", \"status\": \"Unemployed\" }

Delete Resume by resumeid

http://localhost:3000/api/resumes?resumeId=65d12ac3c113812c64aabfcc

Update resume by resumeid
http://localhost:3000/api/resumes?resumeId=65d130a3c113812c64aabfd2

{

\"firstName\": \"Mehul\", \"lastName\": \"Patel\", \"age\": \"23\",
\"experience\": \"5 years\", \"aboutYou\": \"great person\",
\"highestQualification\": \"B.tech\'s\", \"availibility\": \"Full
Time\", \"address\": \"60 stevenson\", \"status\": \"Unemployed\" }

4\. Requests

Get Requests

http://localhost:3000/api/requests

Create a request http://localhost:3000/api/requests

{ \"jobId\": \"65d0e5b1048e1188d1eed8b3\", \"resumeId\":
\"65d0e7c8048e1188d1eed8b6\", \"status\": \"accepted\",
\"employerStatus\": \"viewed\", \"dateApplied\": \"17/02/2024\" }
