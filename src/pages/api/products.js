
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://testTask:5u0vVO4uEtjo5uE5@cluster0.jrrtzzi.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const productsCollection = client.db("pc_builders").collection("products");
    if (req.method === "GET") {
      // If the request URL contains the product ID as a parameter, fetch the single product
      if (req.query.productId) {
        const productId = req.query.productId;
        const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
        if (product) {
          res.send({ message: "Successfully Get Product", status: 200, data: product });
        } else {
          res.send({ message: "Product not found", status: 404 });
        }
      } else {
        // If the request URL does not contain a product ID parameter, fetch all products
        const products = await productsCollection.find({}).toArray();
        res.send({ message: "Successfully Get Products", status: 200, data: products });
      }
    } 
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
} 

export default run