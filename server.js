function sinTaylor(x)
{
   return x - x*x*x/6 + x*x*x*x*x/120;
}

console.log(sinTaylor(1.56));