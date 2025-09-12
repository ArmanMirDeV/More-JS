fetch(" ")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))




    // Promise hell : :  :
fetch(" ")
    .then(res => res.json())
    .then(data => {
        fetch(" ")
            .then(res => res.json())
            .then(data => {
                fetch(" ")
                    .then(res => res.json())
                    .then(data => {
                        fetch(" ")
                            .then(res => res.json())
                            .then(data => console.log(data))
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))