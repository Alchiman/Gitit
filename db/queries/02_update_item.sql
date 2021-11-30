-- updates existing item
UPDATE items
SET name = 'muffin',
 price = 3,
 description = 'looks good',
 img_url = 'urlhere',
 tag ='muffin'
WHERE name = 'muffin';
