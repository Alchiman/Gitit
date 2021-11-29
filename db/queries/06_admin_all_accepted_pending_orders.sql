SELECT *
FROM orders
WHERE status = 'pending'
OR status = 'accepted'
ORDER BY date_created;
