# wishLit Front End

## Summary of Project

I am an avid reader and there are times when I hear about a book or see one advertised and I would like a place to store it. That is why I created wishLit. It is a Single Page Application that allows a user to add specific titles to a wish list with fields of title, author, link to url, and price. A user may not have all of that information, so the only requirement is that a title be entered by a user. The title is then created and assigned to the specific user ID for the user and created in the API as a row in the books table. The title is displayed in the browser using handlebars and a user is able to update or remove each entry in the list. When removing, they are prompted with verification as to whether they would like to delete a book. When editing, they are able to update the fields of the item with the current fields returned to them.

This Readme focuses on the front-end of the project. The back-end API can be found here:

- [API README](https://github.com/kmlm/full-stack-project/blob/master/README.md)

## Development Process

I completed the project with a one to many relationship between a user and books. The wish list is a representation of the books resource and pulls individual rows from that table to display for the user.

After setting up the relationship between user and books in the API and establishing the routes and testing via curl scripts, I started the workflow on the Front End.

I set up the page with HTML and CSS. Last project, I did not use modals and instead used different divs for login, sign up, etc. That made for a lot of hides and shows and ended up confusing me in the end when trying to troubleshoot and finish the project. This time, I decided to use modals to make life easier from that perspective. Modals were set up for sign up, sign in, change password, addLit, and editLit. Bootstrap buttons were used for sign out, myLit, and removing lit from the list. I used form fields in the modals where a user needed to enter information and then getFormFields() in the javascript to pull that information.

I set up authorization first for sign up, sign in, change password, and sign out. That process was straightforward as I was able to use code from the last project.

I then moved on to the individual resource requests. I started with post and set up the event for adding literature. The addLit button opened a modal with a form that allowed  user to input title, author, isbn, and price. After testing, I changed the isbn field to link as users most likely would not have access to an isbn but would like a way to directly link to the resource. HTML input types were set to ensure users entered a url for link, text for author and title, and a number for price set to two decimal places. The event function for adding literature used getFormFields() to pull the data from the form and pass it to the API via a POST AJAX request. UI was set to display a message saying that "title" had been created and the modal and form were cleared.

I moved on to retrieving the resources from the API with a GET request. By clicking the myLit button, a user invokes an event function that runs a GET AJAX request from the API. The books controller restricts the returned data to the user's based on the controller and the json data is converted to html in a content div using handlebars. An edit and remove button were added under each title.

I moved on to the delete request. By clicking the remove button under a specic title, the event function looks at the parent data-id of the button, which is the book id in the table and then runs an AJAX request to remove the book. I added a second modal that pops up first before running the AJAX request, which asks the user to verify that they would really like to remove the data.

The PATCH request was the most difficult for me. Initially by clicking the edit button under a title, a modal popped up with a blank form with the same fields offered to the user on adding literature. This meant that a user had to re-enter all the information for a title. To prevent that, I needed to find a way to pull back the specifc information for that title and populate the completed fields. I used a GET request for the specific title under the same event that opens the edit modal and then the UI used handlebars to fill in the fields that were filled in when the title was created. A user then only had to fill in fields that were missing or alter the fields that were already there.

After completing CRUD on the books resource, I moved onto messaging to ensure that each action taken has a corresponding UI action.

## Wireframes

-   [Sign In](https://i.imgur.com/13dBzWb.png)
-  [Sign Up](https://i.imgur.com/TR0GzUS.png)
-  [Landing](https://i.imgur.com/U8sQIH7.png)

## User Stories

- A user will create a unique user id with password and email address.
- Upon logging in, the user will be able to view their wish list or add a title to the list.
- Each book will be added to the wish list table under the unique user ID.
- A user can delete a book from their wish list
- A user will be able to update information on a book within the wish list or delete a book from the list.
- A user will be able to retrieve the wish list its entirety.

Stretch Goals:
- A user will be able to retrieve specific books from the wish list and inventory tables based
on specific information such as author name or title.
- A user will be able to add books to a gift list where they can add books they would buy for others.
- A user will be able to switch which list a book is on.

## ERD

-   [ERD](https://i.imgur.com/kkJ0NB1.png)

## Technology Used

I used html to set up the modals, input forms, and structure of the application. CSS was used for styling and to ensure that certain divs were hidden prior to certain actions being taken. CSS was also used via jQuery to change the position of divs after certain actions were taken. Javascript was used for the events functions and UI functions. jQuery was used in click handlers that triggered event funcitons and also in UI when they triggered certain actions on the DOM after event completions. AJAX requests were used for GET, PATCH, POST, and DELETE requests to the API.

## Future Iterations

After meeting the initial requirements, I tried to incorporate a third party npm package called price-finder to allow for a user to simply enter a url when they click the addLit button. The package would scrape the URL for specific items and I was hoping to use it to pull out Title, Author, and Price from the page and push that information into an AJAX POST request. I wasn't able to make that work, but in the future I would like to add that functionality to make it easier for users to add items to their list.

I would also like to incorporate more resources in the future. I was thinking that I could create a global resource that users could all have access to and pull books from that global resource into their individual wish lists. Another option would be a gift list where a user could add books that they were thinking about getting for others.

I was also thinking of incoporating an individual library where a user could click a purchased button to add the specific item to the library and it would be removed from the wish list.
