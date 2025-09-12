const getData = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("Generated num ", num)
    if (num > 5) {
        resolve({ num: num })
    }
    else {
        reject({ err: "Data is not available" });
    }
})


getData.then(data => console.log('Promise Resolve',data))
    .catch(error => console.log(error))