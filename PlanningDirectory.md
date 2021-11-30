# Midterm Project

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

GET '/' -> check isAdmin (call getUserInfo)
GET /user/menu - shows menu
GET /admin/menu - shows menu
GET /user/items - gets all items
GET /admin/items - gets all items

USERS menu page
ORDER SUMMARY if there's nothing in cart, do not render
ACTIVE ORDER  if theres no active order, do not render
HISTORY always render
GET '/user/orders' - get userOrderHistory(user_id), getPrices({item_id: 3, sushi combo a: 4}) <- stretch >
POST '/user/orders' -> calls createOrder(), calls addLineItems(), and rerenders the page with active orders & history. Text message sends to Admin. 
POST '/user/orders/cancel' - cancelOrder(order_no), sends text msg to user and restaurant, call userGetOrderHistory to rerender the cancelled order into history, then redirect to menu in 2 seconds.

**How placing order works**
If an order has been requested by the user, then the order will be appended to the end of the **Pending** orders list.
Once an order is accepted, it will be moved to the bottom of the **Accepted** order list.

ADMINS page
If a customer places order, their orders page re-renders with the order to accept or reject

GET '/' - redirect to /admin/orders
GET '/admin/orders' - getOrders() show list of orders - if no orders, show "no active orders, check history"
                    - setInterval(3 seconds for demo) to check for getPendingOrders() Orders then render it
                  accept(frontend) - pop up modal, restaurant enters estimated time then presses accept
POST 'admin/orders/accept' - call acceptOrReject('accept', order_no), send text message with time, rerender order with button changed to fulfilled and take away reject button
                  reject(frontend) - pop up modal, reason for rejecting, then press reject
POST 'admin/orders/reject' - call acceptOrReject(reject, order_no), send text message with reason, show "your order has been rejected, you will be redirected in 3 seconds" then re-render orders page
                  fulfill(frontend) - show pop up modal, show undo button and redirect in 3 seconsd
                                    - the message in box should be 'The customer will be notified in 3 seconds'
                                    - if they press undo button, do not call post method, rerender orders page
POST 'admin/orders/fulfill' - after 3 seconds from frontend, call fulfillOrder(order_no), send text message

GET 'admin/history' - call getAdminHistory() (change getOrderHistory to getAdminHistory)
                    - render it all 

GET 'admin/menus' - call getAllItems() return that object
                  - render admin menu page with create/edit/delete buttons

POST 'admin/menus/create' - addNewItem(name, price, description, img_url)
                          - call getAllItems() and rerender admin menu page
POST 'admin/menus/edit' - updateItem(name, price, description, img_url, tag, originalName)
                        - call getAllItems() and rerender admin menu page
POST 'admin/menus/delete' - deleteItem(name)
                          - call getAllItems() and rerender admin menu page

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

- query for creating new items (insert) luis (done)
- query for updating items (alter) luis (done)
- query for deleting items (isActive / delete) luis (done)
- query for getting all accepted/pending orders for the active list (WHERE isAdmin = true) Alireza
- query for all fulfilled/rejected orders (for the history list) (WHERE isAdmin = true) Alireza
- query for updating the order status (alter) Alireza
  - change pending to accepted luis (done)
  - change accepted to fulfilled luis (done)
  - change pending to rejected Alireza
  - change accepted to cancelled (when user cancelled) Alireza

text message queries - get user phone number to make text message (WHERE user.id = user of order) Alireza - textUser() - get phone number with query - call api to text user - get orders and use the info in that to send text

## Query Functions

- addNewItem(name,price,description,img_url,tag OR params_obj)
- updateItem(name, price, description, img_url, tag) // default values in the form
- deleteItem(name)
- changeStatus(status, order_no) // handles all status changes
- getActiveOrders()
- getOrderHistory()
- getPhoneNumber(order_no)
- createOrder(itemList) example itemList Object: { alaskaRoll : 3}
  - create order number with new date() + order_id
  - use two queries here: insert order and then insert order line items
- **getOrder(order_no)**
  - gets the order and all order_line_items related to order_no
- **getUserInfo() - returns name, email, phone, is_admin**
- **updateUserInfo(name, email, phone)**
