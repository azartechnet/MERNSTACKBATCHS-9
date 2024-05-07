const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.brzpozp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db("employee")
        const collection=db.collection('mycol')
        //update
        const cursorupdate=await collection.updateOne(
            {"name":"azar1"},{"$set":{"name":"xyz"}}
        );
        console.log(cursorupdate.modifiedCount)

        //Display

        const cf=collection.find()
        const data=await cf.toArray()
        console.table(data)
        
        
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)