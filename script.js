
function calculator(a, b, operator)
{
	switch(operator)
	{
		case '+' : return a+b;
		case '-' : return a-b;
		case '*' : return a*b;
		case '/' : return a/b;
		default : return 'Not supported';
	}
}

function calculatorwithifelse(a, b, operator)
{
	if(operator == '+')
	{
		return a+b;
	}
	else if (operator == '-')
	{
		return a-b;
	}
	else if (operator == '*')
	{
		return a*b;
	}
	else if(operator == '/')
	{
		return a/b;
	}
	else 
	{
		return 'Not Supported'
	}
}
