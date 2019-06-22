# resful-crud-node-mysql
practical coding exam for questronix

NOTES:

    Create a database named 'inventory' with a table named 'item' with columns 'id', 'name', 'quantity',       and 'amount'

    To see all items type localhost:3000/inventory on your browser
    To see a specific item type localhost:3000/inventory/(item id number) on your browser
    To delete an item, must use third party app like Postman. Switch to DELETE request and type in 
        localhost:3000/inventory/(item id number)
    To add an item, use third party app (Postman). Switch to POST request and type in localhost/               inventory and below, type in your id, name, qty, and amount, in JSON format.
    To update an item, use third party app (Postman). Switch to POST request and type in localhost/            inventory and below, type in the id of the item you wanted to update, name, qty, and amount, in        JSON format.