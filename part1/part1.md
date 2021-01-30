### Part 1
* 1: Line 11 prints the length of prices because i is incremented to that value and javascript vars are scoped to the whole function
* 2: Line 12 prints the discountedPrice of the final item in prices because javascript vars are scoped to the whole function 
* 3: Line 13 prints the finalPrice of the last item in prices because that's what finalPrice was set to in the final iteration of the loop and javascript vars are scoped to the function
* 4: It will return [50, 100, 150] because for each item in prices it will push a discounted price of 50% of prices[i] to discounted.  
* 5: Line 11 will print the value of i (the length of prices) because Js let is block scoped and i is in the same block as line 11.
* 6: Line 12 returns an error saying discountedPrice isn't defined because line 6 saying 'let discountedPrice = ..." is block scoped and isn't in the same code block{} as line 12.
* 7: Nothing because it won't run. But if it were to run it would return the discounted price of the last item in prices because letfinalPrice = 0 on line 3 is in the same block as line 13.
* 8: Nothing because it exits with code=1
* 9: won't run because TypeError: Assignment to constant variable. i is declared as constant so no changes allowed
* 10: won't run because TypeError: Assignment to constant variable. discountedPrice is declared as constant so no changes allowed
* 11: won't run because TypeError: Assignment to constant variable. finalPrice is declared as constant so no changes allowed
* 12: It won't return anything because it exits with code=1
* 13A: student.name
* 13B: student['Grad Year']
* 13C: student.greeting()
* 13D: student['Favorite Teacher'].name
* 13E: student.courseLoad[0]
* 14A: 32 because '3' is string and 2 becomes '2' and concatenates
* 14B: 1 because - is a number operator and changes "3" to 3 and subtracts 2
* 14C: 3 because null becomes 0
* 14D: 3null because null becomes string "null" and gets concatenated
* 14E: 4. booleans become numbers so 3 + 1 (true)
* 14F: 0. false + null makes false 0 and null 0, so 0 + 0
* 14G: NaN. minus wants to make it math so 3 - undefined is undefined
* 15A: true. When comparing values of different types, JavaScript converts the values to numbers.
* 15B: false. for these 2 strings alphabetically 2 is greater than 1 so '2' is greater than '12'
* 15C: true. When comparing values of different types, JavaScript converts the values to numbers.
* 15D: false. Strict equality checks equality without type conversion
* 15E: false. When comparing values of different types, JavaScript converts the values to numbers. 1 != 2
* 15F: true. Boolean(2) is true so true === true
* 16: == checks equality and will typecast automatically for different data types (by converting values to numbers) while === will not typecast and strictly check equality
* 17: Will print how are you? because true gets automatically casted to 1, and 1 != 2. However, 2 is considered true because not 0 and casted to boolean true so how are you gets printed
* 19: [6, 8, 10]. For each item in the array the callback makes it the item + 2, then it pushes that x by 2 to newArray which is returned at the end. 
* 21: 1, 4, 3, 2