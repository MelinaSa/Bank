class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}

function toGiveMoney()
{
    //input user
  var t = document.getElementById("money");
  money = parseInt(t.value);
  for(var bi of caja)
  {

    if(money > 0)
    {
      div = Math.floor(money / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      money = money - (bi.valor * papeles);
    }

  }

  if(money > 0)
  {
    resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 5) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );
var money = 0;
var div = 0;
var papeles = 0;

//Output
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", toGiveMoney);