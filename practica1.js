 function cambiarDolares() {
    let dolarHoy=102
    
    let ingresoDolares=document.getElementById("dolares").value
    resultado = dolarHoy * ingresoDolares;
    impuestoPais = resultado * 0.30;
    retencionGan= resultado * 0.35;
    totalPagar = resultado + impuestoPais + retencionGan;
   
    if(ingresoDolares<=0){
        alert('No se puede calcular eso')
    }else if (ingresoDolares>6000){
        alert('No se puede cambiar mas de 6000')}
    else{
        alert('El Resultado de la conversión es $'+ resultado + ' ' + 'El Impuesto País es $' + impuestoPais + ' '+ 'Retención del 35% Ganancias es $' + retencionGan + ' ' + 'Total a Pagar es $'+ totalPagar);
    }


}

