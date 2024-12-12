    document.getElementById("message1").innerHTML = "hello world";
    
    
    let a = 5;
    var b = "hello"
    const x = 10;

    console.log(b);

    add(5,10);

    //function
    function add(aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }

    let result = add(5,10);

    let add2 = function add(aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }

    let add3 = (a,b) => {
        let cc = aa + bb;
        console.log(cc);
    }

    //array
    let arr = [1,2,3,4,5];
    const car = [];
    car[0] = "Toyota";
    car[1] = "Honda";
    const fruit = ["Apple","Banana","Cherry"];

    console.log(car[1]);

    let colors = [[1,2,3],"green","blue"];
    console.log(colors[0][2]);

    //array method
    fruit.push("orange");
    console.log(fruit);

    arr.map((item) => {
        console.log(item);
    });

    //object
    let person = {
        firstname: "Tutu",
        lastName: "Chaiwut",
        age: 30,
        child: ["Chaiwut","Eiei"],
        fullname: function(){
            return this.firstname + " " + this.lastName;
        }
    };
    

    person.address ={
        street: "123 Main St",
        city: "esan",
    };
    
    console.log(person.fullname());

    //spread operator
    const arrCombine = [...arr, ...fruit];
    const arrCombine2 = [car, fruit];
    console.log(arrCombine);
    console.log(arrCombine2);

    if(x == 10){
        let c = "test";
        let d = "test2";
        console.log("a is equal to b");
    }
    //short term if else
    let e = x==10 ? "Yes" : "No";