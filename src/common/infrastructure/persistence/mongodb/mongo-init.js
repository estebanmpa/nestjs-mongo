db = db.getSiblingDB('nestmongodb');

db.createCollection('products');

db.products.insertMany(
    [{"name":"Product 1","description":"High quality and durable","tags":["popular","best-seller"]},{"name":"Product 2","description":"An amazing gadget","tags":["durable","long-lasting"]},{"name":"Product 3","description":"The ultimate choice for professionals","tags":["premium","luxury"]},{"name":"Product 4","description":"Top-notch performance guaranteed","tags":["tech","new","innovation"]},{"name":"Product 5","description":"Affordable yet powerful","tags":["budget","affordable"]},{"name":"Product 6","description":"Reliable and efficient","tags":["popular","best-seller"]},{"name":"Product 7","description":"Built for performance","tags":["premium","luxury"]},{"name":"Product 8","description":"Affordable and durable","tags":["budget","long-lasting"]},{"name":"Product 9","description":"Perfect for everyday use","tags":["popular","best-seller"]},{"name":"Product 10","description":"High-end and durable","tags":["premium","luxury"]}]
);

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