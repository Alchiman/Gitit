SELECT users.phone
FROM users
JOIN orders ON orders.user_id = users.id
WHERE order_number = 3;
