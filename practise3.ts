import { People } from "./practisenw3";

class Triangle implements People
{
    
   
    
simple()
{
     console.log('sonali');
    var a=""
    //var i,j;
    for(var i = 1; i <= 6; i++)
    {
        a=""
        for(var j = 1; j <= i; j++)
         {
                a=a+"*"
         }
        console.log(a);
    }
}
}
var str  = new Triangle();
str.simple();
