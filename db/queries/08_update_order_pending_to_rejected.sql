UPDATE orders
SET status = 'rejected'
WHERE status = 'pending'
AND order_number = 3;
