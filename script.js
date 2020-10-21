

let last_index_input=1;

function addInputBotton(){
    let c = document.getElementById(last_index_input).value;
    
    

    let next = document.createElement("input");
    next.id=last_index_input+1;
    last_index_input++;
    next.value="---";

    if (c !== "555") {
        next.value = c;
    }

    console.log("ch ",next.id," ost", next.id%2);
    if (next.id%2==0) {
        next.value = next.value.toUpperCase();
    } else{
        next.value = next.value.toLowerCase();
    }
    
    
     let nextp = document.createElement("p");
     document.body.append(nextp);    
     nextp.after(next);
    


}
