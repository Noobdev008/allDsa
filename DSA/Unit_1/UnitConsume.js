function runProgram(input){
    input = input.trim().split("\n");
    //  var line = input[0].trim().split(" ").map(Number);
     var n = Number(input[0])
     if(n<=230){
       console.log((n-80)/3)
     }else if(n<=730){
       console.log(50+(n-230)/5)
     }else if(n>730){
       console.log(150+(n-730)/10)
     }
   
        
    }
  
    
    if (process.env.USERNAME === "ACER") {
        runProgram(`930`);
      } else {
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
          read += input;
        });
        process.stdin.on("end", function () {
          read = read.replace(/\n$/, "");
          read = read.replace(/\n$/, "");
          runProgram(read);
        });
        process.on("SIGINT", function () {
          read = read.replace(/\n$/, "");
          runProgram(read);
          process.exit(0);
        });
      }