# resful-crud-node-mysql
practical coding exam for questronix

NOTES:

    Create a database named 'inventory' with a table named 'items' with columns 'id', 'name', 'quantity',      and 'amount'
    Create stored procedure

        CREATE DEFINER=`root`@`localhost` PROCEDURE `addOrEditItem`(
        IN _id int,
        IN _name varchar(45),
        IN _qty int,
        IN _amount int
        )
        BEGIN
            IF _id = 0 THEN
                INSERT INTO items(name,qty,amount)
                VALUES(_name,_qty,_amount);
                
                SET _id = last_insert_id();
            ELSE
                UPDATE items
                SET
                    name = _name,
                    qty = _qty,
                    amount = _amount
                    WHERE id = _id;
            END IF;
        SELECT _id AS 'id';
        END
        
    To see all items type localhost:3000/inventory on your browser
    To see a specific item type localhost:3000/inventory/(item id number) on your browser
    To delete an item, must use third party app like Postman. Switch to DELETE request and type in localhost:3000/inventory/(item id number)
    To add an item, use third party app (Postman). Switch to POST request and type in localhost:3000/inventory and below, type in your id equal to 0, name, qty, and amount, in JSON format.
    To update an item, use third party app (Postman). Switch to POST request and type in localhost:3000/inventory and below, type in the id of the item you wanted to update, name, qty, and amount, in JSON format.