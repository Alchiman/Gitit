-- updates accepted to fulfilled
UPDATE orders 
SET status = 'fulfilled',
date_finished = NOW()
WHERE status = 'accepted' AND  order_number = 1;