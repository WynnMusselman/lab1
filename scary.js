let isScary = false;
//

function makeScary(){
    if(isScary === false){
        document.getElementById("cute-content").style.display = "none";
        document.getElementById("scary-content").style.display = "block";
        document.getElementById("wrapper").style.backgroundImage = "url('https://images.unsplash.com/photo-1534193708707-6be94c4f67d3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JlZXB5JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')";
        isScary = true;
    }
    else{
        document.getElementById("cute-content").style.display = "block";
        document.getElementById("scary-content").style.display = "none";

        document.getElementById("wrapper").style.backgroundImage = "none";

        document.getElementById("wrapper").style.backgroundColor = "orange";

        isScary = false;
    }
}