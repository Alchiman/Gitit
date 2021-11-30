--gets the order and all order_line_items related to order_no

SELECT orders.date_created ,order_line_items.quantity, items.name, items.price
FROM order_line_items
JOIN orders ON order_line_items.order_id = orders.id
JOIN items ON order_line_items.item_id = items.id
WHERE order_number = 3;