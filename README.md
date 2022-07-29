# Pet's House App

https://pets-house-albert-sagol.netlify.app/list

## Purpose:

Front-end React app, made with typescript and styled components, full tested and build to work with a API and manage a list of Pets and their information, with two user tiers.

Tier User: Only have the acces to the list and pets information.
Tier Admin: They have the same access as users and can also create, edit and delete the pets.

### App components

- Login Page

  - Header with the title
  - Form to enter the data
    - Username and password

- Register Page to create a new User

  - Header with the title
  - Form to enter the data
    - Name, username, password and email

- List Page

  - Header with the title
    - And the button to create if you are Admin
  - Navigation Bar with icon to list and icon to logout
  - List of pets with maximum of 12 pets each page
    - Filter to choose type of animal or both
    - Pets in list with picture, name and sex
      - And the buttons to edit or delete if you are Admin
    - Pagination with icon to next or previous page and the number of actual  
      page

- Create Page

  - Header with the title
  - Navigation Bar with icon to list and icon to logout
  - Form to enter the data
    - Name, animal, sex, age, picture, description and special treatment

- Edit Page

  - Header with the title
  - Navigation Bar with icon to list and icon to logout
  - Form to change the actual data
    - Name, animal, sex, age, picture, description and special treatment

- Detail Page

  - Header with the title
  - Navigation Bar with icon to list and icon to logout
  - List of detail of the selected pet
    - Name, animal, sex, age, picture, description and special treatment

- Error Page

  - Header with the title
  - Navigation Bar with icon to list and icon to logout
  - Message of "404 not found"

- User feedback and errors
  - Made with toastify
