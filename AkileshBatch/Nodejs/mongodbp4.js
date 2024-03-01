const {MongoClient}=require('mongodb');
var url = "mongodb+srv://admin:admin@cluster0.gowyg6w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('employee')
        const collection=db.collection('mycollection');
       
        //Delete
        const cd =await collection.deleteOne({name:"xyz"});

        console.log(cd.deletedCount)
        //display
         const cf=collection.find()
         const data=await cf.toArray()
         console.table(data)
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)