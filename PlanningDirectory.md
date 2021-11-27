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
