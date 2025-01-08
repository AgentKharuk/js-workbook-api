function showLastCharExceptSoftSign(x) {
    const lastChar = x.length -1; 
    if (x.charAt(lastChar) === "ь") {
        const penultimateChar = x.length -2;
        console.log(x.charAt(penultimateChar))
    } else {
        console.log(x.charAt(lastChar))
    }
}  
    
          
        
      
  
