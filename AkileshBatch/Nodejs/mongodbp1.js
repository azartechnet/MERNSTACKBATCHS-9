const {MongoClient}=require('mongodb');
var url = "mongodb+srv://admin:admin@cluster0.gowyg6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('employee')
        const collection=db.collection('mycollection');
        var obj={name:"azar1",age:33,email:"azar@gmail.com",salary:10000}
        await collection.insertOne(obj);
        console.log("Data inserted");
        
        //find data in the database
         var result=(await collection.find({}).toArray());
         console.log(`Result from find operation  ${result}`);
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)