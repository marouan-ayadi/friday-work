function readline()
{
var nombre=prompt("Donner le nombre des étages");
return nombre;	
}

pyr=readline();
if(pyr<=25)
{
var str;
for(var counter=0;counter<pyr;counter++){
str='' ;
for(var counter0=1;counter0<pyr - counter;counter0++){
str+=" " 
}
for(var counter1=1;counter1<=2*counter+1;counter1++){
str+="#" ;
}
console.log(str);
}	
}
