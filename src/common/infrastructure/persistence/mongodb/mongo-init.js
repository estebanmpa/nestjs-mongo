db = db.getSiblingDB('nestmongodb');

db.createCollection('products');

db.products.insertMany([
    {"_id":"8c7b54a6-5323-45a1-9ff4-cb0b8c74df10","name":"Product 1","description":"High quality and durable","tags":["popular","best-seller"]},
    {"_id":"d7d9e1db-222e-42c0-9fdd-52a8357e6d9e","name":"Product 2","description":"An amazing gadget","tags":["durable","long-lasting"]},
    {"_id":"3039d637-4380-4cb9-9868-1dc5879b4566","name":"Product 3","description":"The ultimate choice for professionals","tags":["premium","luxury"]},
    {"_id":"f979f23d-9084-44e1-8363-cb91b807e0b4","name":"Product 4","description":"Top-notch performance guaranteed","tags":["tech","new","innovation"]},
    {"_id":"7b1bb7a6-97da-4b9b-975a-ec25a8b807e9","name":"Product 5","description":"Affordable yet powerful","tags":["budget","affordable"]},
    {"_id":"9074f994-c42b-4d9b-b5e3-f640b92341f5","name":"Product 6","description":"Reliable and efficient","tags":["popular","best-seller"]},
    {"_id":"a50a502f-233a-4cf9-89da-2782f0d3f239","name":"Product 7","description":"Built for performance","tags":["premium","luxury"]},
    {"_id":"9a9d98b2-bc43-4ad5-a2a7-fb62e7dfc354","name":"Product 8","description":"Affordable and durable","tags":["budget","long-lasting"]},
    {"_id":"ab63c272-f6af-4785-91fc-3e9a1ebcc6c9","name":"Product 9","description":"Perfect for everyday use","tags":["popular","best-seller"]},
    {"_id":"60c80b38-6c1d-4e5c-bc6e-1fcf7c254a9b","name":"Product 10","description":"High-end and durable","tags":["premium","luxury"]}
]);

db.createUser({
    user: "mongouser",
    pwd: "p4ssw0rd",
    roles: [
        {
            role: "readWrite",
            db: "nestmongodb"
        }
    ]
});