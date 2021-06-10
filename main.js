var ar1=[];
function submit(){
    
    ar1.push(document.getElementById("name1").value);
    document.getElementById("list").innerHTML=ar1;

}
function sort(){
 ar1.sort();
 var ar2=[];
 for(var k=0;k<ar1.length;k++){
    ar2.push("<h4>"+ar1[k]+"</h4>");
 }
 document.getElementById("list_unsort").innerHTML=ar2.join(" ");
}
function search(){
    var s=document.getElementById("name2").value;
    console.log(s);
    for(var i=0;i<ar1.length;i++){
             if(s == ar1[i]){
                 console.log(ar1[i]);
                 var k="found "+ar1[i];
                document.getElementById("search").innerHTML=k;
             }
            
    }
}
