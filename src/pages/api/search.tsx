// import React from "react";
// import { getDatabase } from "../../database";
// export default async (request, response) => {
//     const mongodb = await getDatabase();
//     const products = await mongodb
//     .db()
//     .collection("products")
//     .find({ designation: new RegExp(request.query.designation, "i") })
//     // .limit(10)
//     .toArray();
//     // console.log(products);
//     console.log(request.query.designation);
    
//     // if(request.method === "GET"){
            
//     //     //response.json(createdPlatform)
//     //     // save db
//     //     mongodb.db().collection("products").find();
//         response.status(201).json(products);
//     //     // 
    
//     //     // on redirige vers la nouvelle platform
//   //  response.redirect("/"+request.query.designation);
//         response.end();
//     // } else {
//     //     response.statusCode = 405;
//     //     response.end();
//     }