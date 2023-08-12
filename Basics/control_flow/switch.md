# Switch

 The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value

## Syntax

```js
 switch (key) {
         case value:
        
        break;// Without the break statement, execution would simply continue to the next case except default

default:// When none of the case values are equal to the expression of switch statement then default case is executed
                 break;
      }
```

## Example

```js
const month = "march"

switch (month) {
    case "january":
        console.log("January");
        break;
    case "february":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
```
