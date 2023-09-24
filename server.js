// Mathematic function
function sinTaylor(x)
{
   return x - x*x*x/6 + x*x*x*x*x/120 + x*x*x*x*x*x*x/5040;
}

console.log(sinTaylor(1.56));