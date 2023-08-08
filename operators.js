//Important assignment operators
x <<= f();//left shift 
x >>= f();//right shift
x >>>= f();//unsigned right shift
x &= f();//bitwise and 
x ^= f();//bitwise xor
x |= f();//bitwise or
x &&= f();//logical and
x ||= f();//logical or
x ??= f();//nullish coalescing

//it is an error to assign values to unmodifiable properties


//avoid assignment chains.like
//const z=y=x=f();

//delete 
//the delete operator deletes an objects property
//syntax
//delete object.property;
//delete object[propertyKey];
//delete objectName[index];

//delete returns true if it can delete user-defined properties

//avoid deleting arrays instead overwrite the element value with undefined