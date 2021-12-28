function runProgram(input){
    input = input.trim().split("\n");
    var line1 = input[0].trim().split(" ").map(Number);
    var line2 = input[1].trim().split(" ").map(Number);
    //  console.log(line1, line2)
    var Erun = Number(line2[0]);
    var Eover_run = Number(line2[1])
    var Efour = Number(line2[2])
    var Nrun = Number(line1[0]);
    var Nover_run = Number(line1)[1];
    var Nfour = Number(line1[2]);
    if(Nrun>Erun){
      console.log("New Zealand")
    }else if(Nover_run>Eover_run){
      console.log("New Zealand")
    }else if(Nfour>Efour){
      console.log("New Zealand")
    }else if(Nrun<Erun){
      console.log("England")
    }else if(Nover_run<Eover_run){
      console.log("England")
    }else if(Nfour<Efour){
      console.log("England")
    }
  }
    
    if (process.env.USERNAME === "ACER") {
        runProgram(`241 15 29
        241 15 26`);
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