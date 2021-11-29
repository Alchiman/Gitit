-- update pending to accepted
UPDATE orders 
SET status = 'accepted'
WHERE status = 'pending' AND order_number =2;