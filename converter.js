let usdAmount = document.getElementById("from-input");
let rsdAmount = document.getElementById("to-input");
let convertBtn = document.getElementById("convert");


Converter(usd,rsd){
    if(rsd === "0" ){
       usd = usd * 116.4;
    };
    if(usd === "0"){
        rsd = rsd / 117.4;
    };

    
}

convertBtn.addEventListener("click", function(){
    if(rsdAmount.value === null){
        Converter(usdAmount.value, 0);


    };

    else if(usdAmount.value === null){
        Converter(0 ,rsdAmount.value);


    };


})