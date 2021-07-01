const express=require("express");
const router=express.Router();
const Person=require('../model/person');



// // Create and Save a Record of a Model:
// let Person1 = new Person ({
//   name:"Ramla",
//   age: 26,
//   favoriteFoods :  ["Mlokhya", "Nwasser"],
//   });
  
//   Person1.save((err, data)=>{
//     err?console.log('error :',err) : console.log(data)
//    });

//ArrayOfPeople   
const ArrayOfPeople = [
   {
      name:"Amal",
      age: 25,
      favoriteFoods :  ["Salade César", "Sushi","Spaghetti pesto"],
    },

    { 
      name:"Oumayma",
      age: 24,
      favoriteFoods :  ["Pâte", "Mlokhya"],

      },


    {       
      name:"Sirine",
      age: 25,
      favoriteFoods :  ["Escalope", "Spaghetti fruit de mer"],
      
      
      },
    
    {
      name:"Meyssa",
      age: 52,
      favoriteFoods :  ["Pizza", "Burger","burrito"],
              },
   
  ];


//Create many records with Model.create(),
//using the function argument arrayOfPeople
//the data is saved in a collection named people of our db persons

Promise
    .all( ArrayOfPeople.map( el => {
        return Person.create( el ) 
                    .catch( error => ( { error } ) )
         }) )
    .then( ArrayOfPeople => {

          ArrayOfPeople.forEach( el => {
                  if ( el.error ) {
            console.log( " error :", el.error );
                  } else {
            console.log( "Yes" );
                  }
        } );

} );

// Use model.find() to Search Your Database
// Find all the people having a given name, using Model.find() -> [Person]
// Person  .find({"name": "Sirine"})
//    .then(doc => {
//     console.log("Find all the people having Sirine as  a name")
//     console.log(doc)
//   })
//    .catch(err => {
//     console.error(err)
//   })

//   Use model.findOne() to Return a Single Matching Document from Your Database
//   Find just one person which has a certain food in the person's favorites, using Model.findOne() -> Person. Use the function argument food as a search key.
  
// Person.findOne({favoriteFoods: 'Mlokhya'})
// .then(doc => {
//   console.log("Person Found")
//   console.log(doc)
// })
//  .catch(err => {
//   console.error( err)
// })

   

// // using Model.findById() -> Person
// Person.findById({ "_id" :"60d9cfcf263d3627144f4ffb"} ,
      
// (err,doc)=> {err ? console.log ("404 Not Found",err) : console.log ("found successfully",doc)}

// );


// //Find a person by _id . Add "hamburger" to the list of the person's favoriteFoods 
// //(use Array.push()). Then - inside the find callback - save() the updated Person.
// Person .findByIdAndUpdate({
//       "_id" : "60dd9257330669297830ce15"
//       },
//        { 
//         $push:{ favoriteFoods: "hamburger"},
//       }, 
//        (err)=> { err? console.log(err)     :     save() }    
//       );
//     //   Perform New Updates on a Document Using model.findOneAndUpdate()
//     //   Find a person by Name and set the person's age to 20. Use the function parameter personName as a search key.
      
//     //   Note: You should return the updated document. To do that you need to pass the options document { new: true } as the 3rd argument to findOneAndUpdate(). By default, these methods return the unmodified object. 

//       Person.findOneAndUpdate(
//   {name:"Sirine"},
//   {"age": 20},
// {new:true,} ,
  
//    (err,doc)=> {if (err ) {console.log (err)};
//     { console.log ("updated successfully!",doc);
//       }    }
//   );

// //Delete One Document Using model.findByIdAndRemove

// Person.findByIdAndRemove({
//       "_id" : "60dd9257330669297830ce15"
//       },
  
//       (err)=> {
        
//        if (err ) return console.log (err)
//        else
//        { console.log ("removed successfully!"); 
//           }    
//       })


//     //   MongoDB and Mongoose - Delete Many Documents with model.remove()

//   Person.remove({name:"Sirine"}, function (err,Found) {
//     if (err) return console.log(err);
//     else
//     {console.log("All persons named Sirine are removed with sucess")
//     done(null,Found)};
//   });

// //   Chain Search Query Helpers to Narrow Search Results
// //   Find people who like burritos. Sort them by name, limit the results to two documents, and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().
  
//   Person
//       .find({favoriteFoods:"burrito"})
//       .sort({name : "asc"})
//       .limit(2)
//       .select('-age') 
//       .exec()                   
//          .then(docs => {
//             console.log(docs)
//           })
//          .catch(err => {
//             console.error(err)
//           });


module.exports=router;