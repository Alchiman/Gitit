-- updates accepted to fulfilled
UPDATE orders 
SET status = 'fulfilled'
WHERE status = 'accepted' AND  order_number = 1;