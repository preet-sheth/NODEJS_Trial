const fs=require("fs");


/* Synchronous API*/


// // overwrite or create file
// fs.writeFileSync("nnew.txt","Hello Boss");


// // append data to the file
// fs.appendFileSync("nnew.txt","\nappended text");


// // read file data 
// const buf_data=fs.readFileSync("nnew.txt");

// org_data=buf_data.toString();       //taking it into string format
// // console.log(buf_data);      ///data in ascii values format
// console.log(org_data);



// // rename file 
// fs.renameSync("nnew.txt","nnew2.txt");



/* ASynchronous API*/


// overwrite or create file
// The third argument is called call_back function!
fs.writeFile("nnew2.txt","today I learned fs in node js",(err) => {
    console.log("file is created");
    // console.log(err);       /// if there is an error and you want to print it.
});


// read file
// The third argument is called call_back function!
fs.readFile("nnew2.txt",(err,data) => {
    // console.log(data);       ///If you want ot read it in ascii format
    console.log(data.toString());
    // console.log(err);       /// if there is an error and you want to print it.
});




// /*
// For more fuctionalities see :- "https://nodejs.org/api/fs.html"

// */