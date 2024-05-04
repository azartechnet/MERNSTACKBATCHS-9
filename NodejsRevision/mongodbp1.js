const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.brzpozp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db("employee")
        const collection=db.collection('mycol')
        var myobj={name:"azar1",age:33,email:"azar@gmail.com",salary:1000}
        console.log(await collection.insertOne(myobj))
        
        
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)