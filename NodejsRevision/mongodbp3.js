const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.brzpozp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(uri)

async function run()
{
    try{
        await client.connect();
        const db=client.db("employee")
        const collection=db.collection('mycol')
       
        //delete
        const 
        
        =await collection.deleteOne(
            {"name":"xyz"}
        )
        console.log(cd.deletedCount)


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