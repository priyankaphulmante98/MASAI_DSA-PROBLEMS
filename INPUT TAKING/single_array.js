function runProgram(input) {
    let priya=input.trim().split("\n");
    let N=+priya[0];
    let arr=priya[1].split(" ").map(Number);
    let bag="";
    for(let p=0; p<arr.length; p++){
        bag=bag+(arr[p]+1)+" ";
    }
    console.log(bag); 
}
if (process.env.USER === "") {
    runProgram(``);
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