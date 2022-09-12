function Factorial()
{
    let number=5;
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}
Factorial();
