# wishLit Front End

## Summary of Project

I am an avid reader and there are times when I hear about a book or see one advertised and I would like a place to store it. That is why I created wishLit. It is a Single Page Application that allows a user to add specific titles to a wish list with fields of title, author, link to url, and price. A user may not have all of that information, so the only requirement is that a title be entered by a user. The title is then created and assigned to the specific user ID for the user and created in the API as a row in the books table. The title is displayed in the browser using handlebars and a user is able to update or remove each entry in the list. When removing, they are prompted with verification as to whether they would like to delete a book. When editing, they are able to update the fields of the item with the current fields returned to them.

This Readme focuses on the front-end of the project. The back-end API can be found here:

- [API README](https://github.com/kmlm/full-stack-project/blob/master/README.md)

## Development Process

I completed the project with a one to many relationship between a user and books. The Wish list relies on the books resource and pulls individual rows from that table to display for the user.




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

After metting the initial requirements, I tried to incorporate a third party npm package called price-finder to allow for a user to simply enter a url when they click the addLit button. The package would scrape the URL for specific items and I was hoping to use it to pull out Title, Author, and Price from the page and push that information into an AJAX POST request. I wasn't able to make that work, but in the future I would like to add that functionality to make it easier for users to add items to their list.

I would also like to incorporate more resources in the future. I was thinking that I could create a global resource that users could all have access to and pull books from that global resource into their individual wish lists. Another option would be a gift list where a user could add books that they were thinking about getting for others.

I was also thinking of incoporating an individual library where a user could click a purchased button to add the specific item to the library and it would be removed from the wish list.
