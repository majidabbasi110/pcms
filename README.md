

# PCMS

PCMS abbrevation for PIA Complaint Management System which is a Web based Application to be used for recording complaints within PIA departments.

## Description

The project heads wanted this Project to solve issue of delayed response when fixing things within PIA Departments. So this project came into existence. The aim of this Web Application is quickly forward the complaints to the relevant authorities. *This project is currently a work-in-progress.*

### Features
- Register User
- Login User
- Auhtenticate User
- Update User Information
- Admin Role
- Normal User Role
- Report Complaint
- Add Photos in Complaint
- See All the Complaints launched in the Admin Role
- Admin and Private routes for admin and local users respectively

#### Features yet to be Implemented
- Close a Complaint
- Direct a Complaint to relevant authorities


## Visuals

This is the registeration Page.

<img src='https://i.ibb.co/2WzbKnt/Register.jpg' >

This is the Login Page

<img src='https://i.ibb.co/8Prh3Nc/SignIn.jpg' >

This the complaint form which normal users will have access to.

<img src='https://i.ibb.co/RTjB016/Form.jpg' >

If an admin log in, they can see all the complaints which have been launched by the users.

<img src='https://i.ibb.co/jJsxb8z/Complaints.jpg' >

Clicking on the Action icon will take to another screen which will give a detailed description about the complaint.

<img src='https://i.ibb.co/HY5mH9f/Forward.jpg' >

Yet to be implemented is the functionality which directs the user to another page when they click on 'Send Complaint to' Button where they can forward this complaint to relevant people. 

## Installation

Pull the project using the Git Link. Install relevant packages which are needed using:
```javascript
npm install
```
After all the dependencies are installed, start the backend by going opening the terminal in the pcms folder and write:

```javascript
npm start
```
Then open another terminal in the front-end folder and write:

```javascript
npm start
```
The Project will start.


## Notes

- The Project follows the MVC Framework so you'll find the backend code in model, router and controller folders.
- The view(front-end) will be in the front-end folder.
- The Admin Folder in the front-end has code relevant to the admins.
- APIs are called from the apiAdmin file.
- The user folder in the front-end has code relevant to the normal user.
- Their APIs are called from the apiUser file.


## Contributors
- Abdul Moiz Asif
- Majid Abbasi
- Hassan Shah



