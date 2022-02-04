import express from "express";
const app = express();

app.listen(2222,()=>{
    console.log('Server is running on port 2222');

})

export default app;