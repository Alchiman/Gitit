Midterm Project
=========

## Gitit - Food Pick-up Ordering
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

You can use a modern telecomm API service such as Twilio to implement SMS communication from the website to the client and restaurant.

For inspiration check out how Ritual works, but keep in mind that's implemented as a native app and serves more than one restaurant.

## User Stories
- As a logged in customer, I want to select one or more dishes and place an order for pick up, because I'm hungry.
- As a logged in customer, I want to be notified when my order is ready for pick up, because I don't want to be waiting forever.
- As a logged in customer, i want to be notified by text message, because I might miss other kinds of notifications.
- As a logged in customer, I want to see the prices of the food, because I want to know much I'm paying.
- As a logged in customer, I want to be notified of the progress of my order, because I want to plan for when my food is ordery.
- As a logged in customer, I want to see a menu with detailed information of the food, because I need to know the quality of the food.
- As a logged in customer, I want to see my order history, because I want to know what I ordered before.
- As a logged in customer, I want to see the ratings of the dishes, because I am indecisive.
- As a logged in customer, I want to see categories of the food, because it's easier to pick my food.
- As a logged in customer, I want to see a receipt with timestamps of my order, because I want to see how much I spent.

- As logged in restaurant, I would like to be notified by a text message when a customer places an order, because I need to prepare it.
- As logged in restaurant, I would like to be able to contact the customer, because complications may arise.
- As logged in restaurant, I would like to specify how long it will take to fulfill it, because I want my customer to know how long they need to wait.
- As logged in restaurant, I would like to send a receipt to my customer, because I want them to have a proof of order.
- As logged in restaurant, I would like to be able to add, edit, and delete menu items, because I want to be able to customize my menu.
- As logged in restaurant, I would like to be able to edit my menu items with prices, image, desciptions, and title, because I want to be able to customize my prices.
- As logged in restaurant, I want to see the order history of my customers, because I want to know the analytics for planning purposes.
- As logged in restaurant, I want to be able to see total pending orders ordered by time ordered, so I know which to prioritize.
- As logged in restaurant, I would like to be able to fulfill my order (button) and then notify the customer that the food is ready, because I want them to pick up the food.

## Routes
GET '/'
- Redirects to user menu if user, to orders if admin
- Redirects to active orders information if user has an active order

User and Admin Profiles
GET /user/profile -> to edit info
POST /user/profile -> change info in database
GET /admin/profile
POST /admin/profile

USERS menu page
POST '/user/order' -> POST entire order into database, sets order status to pending, and rerenders the page with active order & history. Text message sends to Admin
POST '/user/order/cancel'
POST 'user/order/cancel' set status of order in database to canceled, append order to history, DELAYED redirect to home
ALSO sends text message to restaurant about cancelled order.


<!-- IF user goes to home and adds a new menu item while there is still an active order then goes to order page
  => New order form (Add another order? <--text>) above active order & history -->

**How placing order works**
If an order has been requested by the user, then the order will be appended to the end of the **Pending** orders list.
Once an order is accepted, it will be moved to the bottom of the **Accepted** order list.

ADMINS page
If a customer places order, their orders page re-renders with the order to accept or reject

GET '/' - redirect to /orders
GET '/admin/orders' - show list of orders
POST 'admin/order/accept' - status of order in database changed to accepted, sends text message, appends order to accepted order list 
POST 'admin/order/reject' - status of order in database changed to rejected, send text message, append order to history 
POST 'admin/order/fulfill' - status of order in database changed to fulfilled, send text message, append order to history

GET 'admin/history' - shows history of orders

GET 'admin/menus' - Shows list of menu items and buttons to create/edit/delete menu items.

POST 'admin/menus/create' - Add menu item to database, create card element and append to HTML then refetch
POST 'admin/menus/edit' - Update menu item in database, update card element in HTML then refetch
POST 'admin/menus/delete' - Remove menu item in database, refetch card elements in HTML

## QUERIES 
- get user information (name, email, phone, isAdmin)
  - for rendering profile page
  - navbar user info
  - check if admin or not to render correct page

- query for updating user information

- query for creating new user (insert)
  - make sure all columns are filled 

- insert query for placing order: placeOrder()
  - insert order_master
  - insert order_line_items (with quantity) and give order id to it

- get (select) order_master and update restaurant's order page: getNewOrder()

- get menuItems (name, price, description, img, tag)

- get all orders associated with user (select orders where user id = the user)
 - with the order that has the status accepted on the top of the list 
 - orders under accepted list is sorted by newest order on top 

admin queries

  - query for creating new items (insert)
  - query for updating items (alter)
  - query for deleting items (isActive / delete)
  - query for getting all accepted/pending orders for the active list (WHERE isAdmin = true)
  - query for all fulfilled/rejected orders (for the history list) (WHERE isAdmin = true)
  - query for updating the order status (alter)
    - change pending to accepted
    - change accepted to fulfilled
    - change pending to rejected
    - change accepted to cancelled (when user cancelled)

text message queries
    - get user phone number to make text message (WHERE user.id = user of order)
    - textUser()
      - get phone number with query
      - call api to text user
      - get orders and use the info in that to send text msg


