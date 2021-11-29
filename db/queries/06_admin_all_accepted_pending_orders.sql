SELECT *
FROM orders
WHERE status = 'pending'
OR status = 'accepted';
