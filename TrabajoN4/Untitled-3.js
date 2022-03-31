var saldo = 0,punto=0,numero1=0,numero2=0,
deposito=0,cero=0, switc=0;
let pantallav=0,s=0,pantalla="",cs=0;

function depositar(x) {
    if(x=="."){
        if(punto==0 && pantallav==0){
            pantalla=pantalla+"0."
            punto=1;           
        }
        else if(punto==0 && pantallav==1){
            pantalla=pantalla+x;
            punto=1;
        }
    }
    s=Number(x)
    
    if(!isNaN(s) && pantalla!="0" ){
        pantalla=pantalla+Number(x);
        pantallav=1
        
    }
    if(pantalla!="0"&& pantalla!=""&& x=="ne" ){
        cs=Number(pantalla)*(-1);
        pantalla=cs;
        pantalla=String(pantalla);
    }
    if(pantalla=="0" && x!=0){
        pantalla=x;
    }
    if(switc==0 && pantalla!="0"&& pantalla!=""){
        switch(x) {
            
            case "+":
                numero1=parseFloat(pantalla);
                pantalla=pantalla+x;
                switc=1;
            break;
            case "-":
                numero1=parseFloat(pantalla);
                pantalla=pantalla+x;
                switc=1;
            break;
            case "*":
                numero1=parseFloat(pantalla);
                pantalla=pantalla+x;
                switc=1;
                break;
            case "/":
                break;
            case "%":
                numero1=parseFloat(pantalla);
                pantalla=pantalla+x;
                switc=1;
            break;
            default:
        }
    }

    if(x=="c"){
        pantalla=""
    }
    if(pantalla==""){
        pantalla="0";
    }
    if(switc==0){
        document.getElementsByName("verificacion")[0].value = pantalla;
    }
    if(switc==1){
        document.getElementsByName("resulta")[0].value = pantalla;
        document.getElementsByName("verificacion")[0].value = resultado;
    }
}   