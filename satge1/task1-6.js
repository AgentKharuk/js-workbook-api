export function showLastCharExceptSoftSign(str) {
    const lastChar = str.length -1; 
    if (str.charAt(lastChar) === "ь") {
        const penultimateChar = str.length -2;
        console.log(str.charAt(penultimateChar));
        return str.charAt(penultimateChar);
    } else {
        console.log(str.charAt(lastChar));
        return str.charAt(lastChar);
    }
}  
    
          
        
      
  
