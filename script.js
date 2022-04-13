var names = new Array();
names[0]= "Aarav";
names[1]= "jack";
names[2]= "Rahul";
names[3]= "Jay";
names[4]= "jonson";
names[5]= "Joe";
names[6]= "Dinesh";
names[7]= "Sameer";
names[8]= "Sam";
names[9]= "Ronit";
names[10]= "Arun";

for(var i=0; i < names.length; i++){
    if(names[i].charAt(0)=='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}