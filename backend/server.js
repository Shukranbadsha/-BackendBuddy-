import express from "express"

const app= express();


const data=[{
    id:1,
    title:"shukran",
    content:"shukran here"
},
{
    id:1,
    title:"rayyan",
    content:"rayyan here"
},

]
app.get("/api/detailes", (req,res)=>{
res.send(data)
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
