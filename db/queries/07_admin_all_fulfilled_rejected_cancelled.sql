SELECT *
FROM orders
WHERE status = 'fulfilled'
OR status = 'rejected'
OR status = 'cancelled'
ORDER BY date_created DESC;

