const os=require("os");


///prints the os architecture (like : 64 bit)
console.log(os.arch());


///prints the free memory
console.log(`${os.freemem()}` + " bytes");      ///As os.freemem() returns an integer... 
console.log(`${os.freemem()/1024/1024/1024}` + " GB");


///prints the total memory
console.log(`${os.totalmem()}` + " bytes");      ///As os.freemem() returns an integer... 
console.log(`${os.totalmem()/1024/1024/1024}` + " GB");


///prints the host name
console.log(os.hostname());



// /*
// For more fuctionalities see :- "https://nodejs.org/api/os.html"

// */