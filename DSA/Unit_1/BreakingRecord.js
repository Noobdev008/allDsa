function runProgram(input){
    input = input.trim().split("\n");
    var [Current,Sachin]  =input[0].trim().split(" ").map(Number);
    // console.log(Current,Sachin);
    if(Current<Sachin){
        console.log("Broken");
    }else if(Current>Sachin){
        console.log("Not Yet");
    }else{
        console.log("Wao");
    }
  }
    
    if (process.env.USERNAME === "ACER") {
        runProgram(`264 200`);
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