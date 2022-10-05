function runProgram(input) {
    let priya=input.split("\n");
    let N=+priya[0];
    let str=priya[1].split(" ");
    let bag="";
    for(let p=0; p<str.length;p++){
        bag=bag+str[p];
    }console.log(bag);
    
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