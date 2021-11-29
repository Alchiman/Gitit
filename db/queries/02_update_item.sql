-- updates existing item
UPDATE items
SET id = 4, 
name = 'muffin',
 price = 3, 
 description = 'looks good',
 img_url = 'urlhere',
 tag ='muffin'
WHERE id = 4;