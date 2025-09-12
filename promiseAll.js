const getData1 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num1 ", num)
    if (num > 5) {
        resolve({ num1: num })
    }
    else {
        reject({ err: "Data is not available1" });
    }
})


//-----------------
const getData2 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num2 ", num)
    if (num > 5) {
        resolve({ num2: num })
    }
    else {
        reject({ err: "Data is not available1" });
    }
})


//-----------------

const getData3 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num3 ", num)
    if (num > 5) {
        resolve({ num3: num })
    }
    else {
        reject({ err: "Data is not available1" });
    }
})

// ----- -------------------------------- 

const getData4 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num4 ", num)
    if (num > 5) {
        resolve({ num4: num })
    }
    else {
        reject({ err: "Data is not available1" });
    }
})


//---------------------------- 


const getData5 = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num5 ", num)
    if (num > 5) {
        resolve({ num5: num })
    }
    else {
        reject({ err: "Data is not available1" });
    }
})



Promise.all([getData1, getData2, getData3, getData4, getData5]).then(res => console.log(res))
    .catch(error => console.log(error))