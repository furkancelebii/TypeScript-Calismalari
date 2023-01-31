let sehirler=["ankara","istanbul","izmir"]

for(let i=0;i<sehirler.length;i++){
    console.log(sehirler[i])
}

//in ile indexine ulaşırız.
for(let i in sehirler){
    console.log(i)
}
//of ile datanın kendisine ulaşırız.
for(let i of sehirler){
    console.log(i)
}