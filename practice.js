
function sorty(newarr){
    console.log(newarr + " sorty func")
    var i;
    var n = 1;
    for (i = 0; i < newarr.length; i++) {
    
        if (n > newarr.length -1){
            console.log(newarr + " return")
            return newarr;
        }
        if (newarr[i] === newarr[n]) {
           console.log("We have a match")
           var character1 = newarr[n]
           var character2 = newarr[i]
           var char1
           var char2
            if (character1 === character1.toUpperCase()) {
                char1 = true
            }
            else {char1 = false}
            if (character2 === character2.toUpperCase()){
                char2 = true
            }
            else {char2 = false}

            if (char1 === char2){
            console.log(char1 + "   "  + char2)
            console.log( "Char1 is equal to char2")
            newarr.splice(n,1)
       
            end = newarr.length -1
       
            almend = newarr.length -2
        
            if (newarr[end] === newarr[almend]) {
                newarr.splice(end,1)
        
                
            }
        
             sorty(newarr)

            }

        
        }
        else
        {
            
        }
        n++
    }
}
function uniqueInOrder(iterable){
        
   if (Array.isArray(iterable))
   {
    
     var test = sorty(iterable)
     console.log("return first test")
     return test
   }
    else
    {
      var newarr = iterable.split("");
      var test = sorty(newarr)
      console.log("return second test " + test)
      
     return test
    }  
  }

  var str1 = "AAA"

  var result = uniqueInOrder(str1)
  
console.log(result)



