//Q1.Write one example explaining how you can write a callback function?

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
 
setTimeout(message,1000);  

// Q2.Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const printNum = () => {
    let numbers = [1,2,3,4,5,6,7];
      console.log(numbers);
    
    setTimeout(()=>{
       console.log(numbers[0]);

        setTimeout(()=>{
           console.log(numbers[1]);
          
           setTimeout(()=>{
              console.log(numbers[2]);
      
              setTimeout(()=>{
                console.log(numbers[3]);

                setTimeout(()=>{
                    console.log(numbers[4]);

                    setTimeout(()=>{
                        console.log(numbers[5]);

                        setTimeout(()=>{
                            console.log(numbers[6]);
                        },7000);
                    },6000);
                },5000);
              },4000);
           },3000);
        },2000);
    },1000);         
}
printNum();


//Q3:Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

const promise = new Promise ((resolve,reject)=>{
    resolve()
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("1");  
    }, 1000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("2");  
    }, 2000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("3");  
    }, 3000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("4");  
    }, 4000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("5");  
    }, 5000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("6");  
    }, 6000);
  })
  promise.then(()=>{
    setTimeout(() => {
      console.log("7");  
    }, 7000);
  })

//Q4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

const promiseTwo = new Promise((resolve,reject) => {
    resolve();    
})

promiseTwo
.then((data) => {
    console.log("Promise resol");
})
.catch((error) => {
    console.log("promise reject");
})


//Q5.Create examples to explain callback function

const callBack = () =>{
    let numb = ["1","2","3","4","5"];
        console.log(numb); 
} 
setTimeout(callBack,2000);


//Q6.Create examples to explain callback hell function.




//Q7.Create examples to explain promises function.

const newM = new Promise((resolve,reject) => {
    setTimeout(() => {
        let Name = "Akki";
        resolve(Name);
        //reject("Error in reading data");
    }, 3000);
})

newM
.then((data) => {
    console.log(`Name printed successfully : ${data}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("successfully executed");
})

//Q8.Create examples to explain async await function

const oneReady = async () =>{
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res ("First");
            rej();
        },5000);
    })
}
const twoReady = () =>{
    return ("Second");
}
const Hello = async ()=>{
    let IN = await oneReady();
    console.log(IN);

    let PK = twoReady();
    console.log(PK);
}
Hello();

//Q9.Create examples to explain promise.all function.

const A = Promise.resolve(true);
const B = 'Akki';
const C = new Promise((resolve, reject) => {
  setTimeout(resolve, 'true', 1000);
});

Promise.all([A, B, C]).then((values) => {
  console.log(values);
});

