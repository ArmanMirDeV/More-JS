async function loadData() {
    console.log("one");
    console.log("Two");

    /* fetch("https://jsonplaceholder.typicode.com/posts ")
        .then(res => res.json())
        .then(data => console.log("data got")) */


        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();
        console.log("data got await",data[0])


    console.log("Four");
    console.log("Five");

}

/* loadData();


try{
    
}
catch(error){

} */


const loadData2 = async () => {
    console.log(1);
    console.log(2);
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log("got data", data.length
        )
    }
    catch(error){
        console.log("error happened");

    }
    console.log(3);
    console.log(4);
}

loadData2();





