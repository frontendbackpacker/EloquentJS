function loop(){	
  	var t="";
      
    for(var i=1;i<8;i++){
        for(var j=1;j<=i;j++){
            t+="*";
        }
      	
        console.log(t);
      	    
        t="";
    }
}

loop();
