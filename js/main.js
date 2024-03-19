function pago (efectivo_o_tarjeta,monto){
    if (efectivo_o_tarjeta == "efectivo"){
        monto=monto*0.7
        alert(`su pago en efectivo es ${monto} con un descuento del 30%`)
    } 

    if (efectivo_o_tarjeta=="tarjeta"){
        let cuotas= parseInt( prompt ("en_3_6_o_12_cuotas")); 
        switch (cuotas){
            case 3:
                monto=monto/3
                alert(`en 3 cuotas de ${numero}`)
                break;
            case 6:
                monto=monto/6
                alert(`en 6 cuotas de ${numero}`)
                break;
            case 12:
                monto=monto/12
                alert(`en 12 cuotas de ${numero}`)
                break;
        }
    }

}

let numero= parseInt( prompt("ingrese el precio a pagar"));
if (numero>0){
    let forma_de_pago = prompt("paga en efectivo o tarjeta");
    pago(forma_de_pago,numero)
}
