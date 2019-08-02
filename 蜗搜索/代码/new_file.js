function(text1){
    	var a=[21,56,45,98,55];

     for(var i = 1 ;i<a.length;i++){
         for(var j=0;j<a.length-i;j++){
         if ( a[j]>a[j+1]){
              var c= a[j];
              a[j]=a[j+1];
               a[j+1]=c;
         }
   }
  }
  return tex1
  }