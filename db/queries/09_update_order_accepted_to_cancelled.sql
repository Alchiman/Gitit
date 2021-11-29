UPDATE orders
SET status = 'canceled'
WHERE status = 'accepted'
OR status = 'pending'
AND order_number = 3;
