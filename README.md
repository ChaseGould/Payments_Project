# Comp 586 Project
## By Chase Gould
## 12/16/2019

## Requirements
1.	Authentication – Authentication is completed using the third-party service Firebase Authentication. To accomplish the authentication feature I implemented the Firebase sdk within my Angular Project. The authentication feature does not communicate with my ASP.NET Core Web API. Instead my authentication feature communicates with a database that I have hosted in firebase. I can manage registered users accounts from the firebase console which I can access from the web. Upon visiting my webpage users can register accounts and login to their accounts. To my understanding implementing a third-party authentication service is worth extra credit.
2.	ORM – I accomplished ORM by creating a database in Microsoft SQL Server Management Studio and then scaffolding that database in my ASP.NET Core application using Entity Framework. I did not meet the minimum requirement of having a one to many relationships in my database. I made an attempt to create a two-table database with a foreign key and one to many relationship. However, I ran into trouble trying to get my front-end application trying to communicate with the new API that was generated for the two-table database. My final submission only includes a one table database.
3.	MVC – MVC is used in both my Client Angular application and ASP.NET Core Web API
4.	Dependency Injection – Dependency Injection is present in both the Client and Web API applications.
5.	Deployment – Azure is used to deploy the Client Application, Web API, and a SQL Database. Firebase is used to deploy a NOSQL database which is used by the authentication service.
## Usage
### Webpage is hosted at https://586webapp2.azurewebsites.net/
### API is hosted at https://586webapp2.azurewebsites.net/api/PaymentDetails
Upon visiting the web page, the user will encounter the home page with the options to Register or Login. Users who have previously registered can select the login button. Users who have not previously registered will need to select register. When filling out the registration form it is not necessary for the user to use their real email address. I recommend that users do not enter a combination of a real email address and password that they use for other accounts as I cannot guarantee that my web page is secure. Upon successful registration users are automatically logged into the web page. The web page allows users to store their credit card information. Users can place a new entry, modify an existing entry, or delete an existing entry. To place a new entry, fill out the form and click submit. To modify an existing entry, click on an entry from the list. The form will be populated with details from the selected entry. The user can modify the form and click submit to complete the modification of an entry. To delete an entry the user can click on the delete button to the right of any existing entry in the list. There is a logout button located at the top of the webpage. Once logged out this is a good time for registered users to test the login button.

## Source Code
Please refer to the branch PaymentWithAuth for grading purposes.
My Repository contains two folders containing source code. The Payment folder contains my Web API source code created using ASP.NET Core. The testingAngular folder contains my source code created using Angular.





















