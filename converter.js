let usdAmount = document.getElementById("usdAmount");
let rsdAmount = document.getElementById("rsdAmount");
let convertBtn = document.getElementById("convertBtn");


function Converter(usd,rsd){
    if(rsd === "0" || !rsd){
       rsd = usd * 116.4;
    };
    if(usd === "0" || !usd){
        usd = rsd / 117.4;
    };

    usdAmount.value = usd;
    rsdAmount.value = rsd;
    
};

convertBtn.addEventListener("click", function(){
    if(!rsdAmount.value){
        Converter(usdAmount.value, 0);
    }else if(!usdAmount.value){
        Converter(0, rsdAmount.value);
    };


})