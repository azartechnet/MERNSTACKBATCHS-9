function number(x,y)
{
    if(x>y)
    {
        console.warn(x + " is greater than "+ y);  //prints the warning message
    }
    else
    {
        console.warn(y + " is greater than "+ x);   //prints the other warning message
    }
}
x=100
y=200
number(x,y)                            //calling the function with arguments x and y</s