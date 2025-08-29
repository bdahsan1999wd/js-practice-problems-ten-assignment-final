## **Problem-01: Tax Calculator**

⚠️ Function Name Must be **calculateTax()**

Harun is a successful hotel entrepreneur. His hotel has become very popular, and by the end of each month, it is very important for him to have a clear understanding of his income and expenses. You need to create a function to help him calculate the correct tax based on his monthly income and expenses.

Your function will take **two inputs**:

1. **Monthly Income** – A positive number representing Harun's monthly income.
2. **Monthly Expense** – A positive number representing Harun's monthly expense.

The function should calculate **20% of the difference between income and expense** and return it as the tax.

| Input | The first input is a positive number representing monthly income (0 <= income). The second input is a positive number representing monthly expense (0 <= expense). _Income will always be equal to or greater than expense (income >= expense)._ |
| :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| Output | The function should return the calculated tax. The output can be a decimal number. |
| :----- | :--------------------------------------------------------------------------------- |

| Challenge 📢 | If any input is not a positive number, or if expense is greater than income, return the string `"Invalid Input"`. |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |

| Hints 💡 | If income is 10000 and expense is 3000, the difference is 10000 - 3000 = 7000. Therefore, the tax is 7000 \* 0.20 = 1400. |
| :------- | :------------------------------------------------------------------------------------------------------------------------ |

| SAMPLE INPUT | SAMPLE OUTPUT     |
| :----------- | :---------------- |
| 10000, 3000  | 1400              |
| 34000, 1753  | 6449.400000000001 |
| 5000, 1500   | 700               |
| 7000, 7000   | 0                 |
| -5000, 2000  | Invalid Input     |
| 6000, -1500  | Invalid Input     |

---

## Problem-02: Notification Generator

⚠️ **Function Name Must be `sendNotification()`**

An email consists of two parts: a `username` and a `domain name`.
For example, in `zihad.ph@gmail.com`, `zihad.ph` is the username and `gmail.com` is the domain name.

Create a function that takes an email as input. The function should use the `username` and `domain name` from the email to generate a notification message.

The function should return a new string where the `username` and `domain name` are used to create a notification message.

| Input | The input will be a string representing an email (e.g., `zihad@gmail.com`). The `@` character will appear **exactly once**, separating the username and the domain name. |
| :---- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

| Output | For the email `zihad.ph@gmail.com`, the output should be exactly: `zihad.ph sent you an email from gmail.com` |
| :----- | :------------------------------------------------------------------------------------------------------------ |

| Challenge 📢 | If the input is not a valid email (does not contain `@`), return the error message `"Invalid Email"`. |
| :----------- | :---------------------------------------------------------------------------------------------------- |

| Hints 💡 | You can use `split()` or `indexOf()` methods. |
| :------- | :-------------------------------------------- |

| SAMPLE INPUT            | SAMPLE OUTPUT                                  |
| :---------------------- | :--------------------------------------------- |
| zihad@gmail.com         | zihad sent you an email from gmail.com         |
| farhan34@yahoo.com      | farhan34 sent you an email from yahoo.com      |
| nadim.naem5@outlook.com | nadim.naem5 sent you an email from outlook.com |
| fahim234.hotmail.com    | Invalid Email                                  |
| sadia8icloud.com        | Invalid Email                                  |

---

## Problem-03: Checking Digits Inside a Name

⚠️ **Function Name Must be `checkDigitsInName()`**

Raju has created a new website for passport registration.
Many users mistakenly enter numbers along with their names.
Raju does not want this at all.

You need to help Raju by writing a function called **checkDigitsInName()** which takes a string as input and checks if there are any digits inside the name.

- If the name contains any digits, the function should return `true`.
- If the name does not contain any digits, the function should return `false`.
- If the input is not a string, return `"Invalid Input"`.

| Input | A string input representing a name. |
| :---- | :---------------------------------- |

| Output | Returns a boolean value: `true` or `false`. Returns `true` if any digits are found inside the name; otherwise returns `false`. |
| :----- | :----------------------------------------------------------------------------------------------------------------------------- |

| Challenge 📢 | If the input is not a string, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------ |

| SAMPLE INPUT | SAMPLE OUTPUT |
| :----------- | :------------ |
| Raj123       | true          |
| n9ayeem      | true          |
| e1mu3        | true          |
| Suman        | false         |
| Name2024     | true          |
| !@#          | false         |
| ["Raj"]      | Invalid Input |

---

## Problem-04: Calculate Admission Final Score

⚠️ **Function Name Must be `calculateFinalScore()`**

Rakib works as a programmer in a software company.
His younger brother, Rajib, has taken an entrance exam for a reputed university.
The admission result will be determined based on various criteria.

You need to write a function **calculateFinalScore()** which takes Rajib's information as input and calculates his final score.
If the final score is 80 or above, he will be admitted. Otherwise, he will not be admitted.

### Scoring Criteria

- **testScore**: Maximum 50 points
- **schoolGrade**: Maximum 30 points
- **Parent Profession**: If `"farmer"`, add 20 points

### Input

The input will be an **object** with the following properties:

| Property    | Type    | Notes                                  |
| :---------- | :------ | :------------------------------------- |
| name        | string  | Name of the candidate                  |
| testScore   | number  | Score of the entrance test (≤ 50)      |
| schoolGrade | number  | School grade score (≤ 30)              |
| isFFamily   | boolean | True if parent is a farmer, else false |

### Output

Return a boolean value:

- `true` if the final score is 80 or above
- `false` otherwise

### Challenge 📢

If the input is not an object, return the error message `"Invalid Input"`.

| SAMPLE INPUT                                                        | SAMPLE OUTPUT |
| :------------------------------------------------------------------ | :------------ |
| { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }  | true          |
| { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false } | false         |
| "hello"                                                             | Invalid Input |
| { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }  | false         |

---

## Problem-05: Predict Average Waiting Time

⚠️ **Function Name Must be `waitingTime()`**

Israt is waiting for a job interview.
When his serial number comes, he will be called.
On the wall, a screen shows the list of people who have already finished their interview along with the time each took.

Israt cannot figure out how much more time it will take for him.

You need to create a function **waitingTime()** that calculates how much time Israt has to wait.

The function takes **two inputs**:

1. An array of numbers representing the interview times of people who have already finished.
2. Israt's serial number (a number).

The function should calculate the **rounded average interview time** of the completed interviews.
Then, it should find out how many people are left before Israt and multiply that by the average to get the predicted waiting time.
Finally, return this waiting time.

| Input | The function takes two inputs: an Array (interview times of those who finished) and Israt's serial number. Serial number > length of array. |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------ |

| Output | Calculate the rounded average of the completed interviews. Count how many people are left before Israt. Multiply the two to get Israt's waiting time and return it. |
| :----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Example:**

Array = `[3, 5, 7, 11, 6]`, Serial Number = 10

- 5 interviews have been completed; their average time = 6 minutes (rounded)
- Israt's serial number = 10, meaning 9 people are ahead of him
- 5 people already done → remaining = 9 - 5 = 4 people
- Predicted waiting time = 4 \* 6 = 24 minutes

| Challenge 📢 | If the first input is not an array or the second input is not a number, return `"Invalid Input"`. |
| :----------- | :------------------------------------------------------------------------------------------------ |

| SAMPLE INPUT         | SAMPLE OUTPUT |
| :------------------- | :------------ |
| [3, 5, 7, 11, 6], 10 | 24            |
| [13, 2], 6           | 24            |
| [13, 2, 6, 7, 10], 6 | 0             |
| [6], 4               | 12            |
| 7, 10                | Invalid Input |
| "[6,2]", 9           | Invalid Input |
| [7, 8, 3, 4, 5], "9" | Invalid Input |

---

## Problem-06: Calculate Delivery Charge

⚠️ **Function Name Must be `calculateDelivery()`**

An online shop determines delivery charge based on the order's weight and delivery zone.
Create a function to calculate delivery charge based on weight and zone.

| Input        | weight (in kg), zone (string: "local", "national", "international") |
| :----------- | :------------------------------------------------------------------ |
| Output       | Delivery charge as number (decimal allowed)                         |
| Challenge 📢 | If weight is negative or zone is invalid, return `"Invalid Input"`  |

| SAMPLE INPUT       | SAMPLE OUTPUT |
| :----------------- | :------------ |
| 2, "local"         | 50            |
| 5.5, "national"    | 192.5         |
| 1, "international" | 300           |
| -2, "local"        | Invalid Input |
| 2, "city"          | Invalid Input |

---

## Problem-07: Student Grade Checker (Bangladeshi Education System)

⚠️ **Function Name Must be `checkGrade()`**

A school assigns grades based on a student's marks (Bangladeshi grading system):

- 80–100 → A+
- 70–79 → A
- 60–69 → A-
- 50–59 → B
- 40–49 → C
- 33–39 → D
- Below 33 → F

Create a function that takes a student's marks as input and returns the corresponding grade.

| Input        | marks (number, 0–100)                                                           |
| :----------- | :------------------------------------------------------------------------------ |
| Output       | grade (string: "A+", "A", "A-", etc.)                                           |
| Challenge 📢 | If marks is not a number or is out of the range 0–100, return `"Invalid Input"` |

| SAMPLE INPUT | SAMPLE OUTPUT |
| :----------- | :------------ |
| 95           | A+            |
| 75           | A             |
| 65           | A-            |
| 55           | B             |
| 45           | C             |
| 35           | D             |
| 25           | F             |
| 120          | Invalid Input |
| "85"         | Invalid Input |

---

## Problem-08: Temperature Converter

⚠️ **Function Name Must be `convertTemperature()`**

Write a function that converts a given temperature between Celsius, Fahrenheit, and Kelvin.

| Input        | temperature (number), unit (string: "C", "F", "K"), targetUnit (string: "C", "F", "K") |
| :----------- | :------------------------------------------------------------------------------------- |
| Output       | converted temperature as number                                                        |
| Challenge 📢 | If input is not a number or if unit/targetUnit is invalid, return `"Invalid Input"`    |

| SAMPLE INPUT  | SAMPLE OUTPUT |
| :------------ | :------------ |
| 0, "C", "F"   | 32            |
| 100, "C", "K" | 373.15        |
| 212, "F", "C" | 100           |
| 300, "K", "C" | 26.85         |
| 30, "X", "F"  | Invalid Input |

---

## Problem-09: Distance Converter (Kilometer ↔ Mile)

⚠️ **Function Name Must be `convertDistance()`**

Write a function that converts a given distance between **Kilometer (km)** and **Mile (mi)**.

- 1 kilometer = 0.621371 mile
- 1 mile = 1.60934 kilometer

| Input        | distance (number), unit (string: "km" or "mi"), targetUnit (string: "km" or "mi")            |
| :----------- | :------------------------------------------------------------------------------------------- |
| Output       | converted distance as number (decimal allowed)                                               |
| Challenge 📢 | If input is not a number or if unit/targetUnit is not "km" or "mi", return `"Invalid Input"` |

| SAMPLE INPUT    | SAMPLE OUTPUT |
| :-------------- | :------------ |
| 10, "km", "mi"  | 6.21371       |
| 5, "mi", "km"   | 8.0467        |
| 0, "km", "mi"   | 0             |
| 1, "mi", "mi"   | 1             |
| 10, "X", "mi"   | Invalid Input |
| 10, "km", "Y"   | Invalid Input |
| "5", "km", "mi" | Invalid Input |

---

## Problem-10: Currency Converter (USD ↔ BDT)

⚠️ **Function Name Must be `convertCurrency()`**

Write a function that converts a given amount between **US Dollar (USD)** and **Bangladeshi Taka (BDT)**.

- Use the updated conversion rate:
  - 1 USD = 122 BDT
  - 1 BDT ≈ 0.0081967 USD

| Input        | amount (number), currency (string: "USD" or "BDT"), targetCurrency (string: "USD" or "BDT")            |
| :----------- | :----------------------------------------------------------------------------------------------------- |
| Output       | converted amount as number (decimal allowed)                                                           |
| Challenge 📢 | If input is not a number or if currency/targetCurrency is not "USD" or "BDT", return `"Invalid Input"` |

| SAMPLE INPUT       | SAMPLE OUTPUT |
| :----------------- | :------------ |
| 10, "USD", "BDT"   | 1220          |
| 2440, "BDT", "USD" | 20            |
| 0, "USD", "BDT"    | 0             |
| 100, "USD", "USD"  | 100           |
| 50, "X", "BDT"     | Invalid Input |
| 50, "USD", "Y"     | Invalid Input |
| "20", "USD", "BDT" | Invalid Input |

---

## **Problem-11: Theater Ticket Sale Profit Calculator**

⚠️ **Function Name Must be `calculateMoney()`**

A theater sells tickets at **120 BDT** each. Every month, the theater has some fixed and variable costs:

- **Fixed cost:** 500 BDT
- **Variable cost:** 50 BDT per staff member (8 staff members)

You need to create a function to calculate the **remaining money** after selling a certain number of tickets and subtracting all costs.

Your function will take **one input**:

1. **ticketSale** – A positive number representing the number of tickets sold.

The remaining money should be calculated as:

| Input | A positive number representing the number of tickets sold. |
| :---- | :--------------------------------------------------------- |

| Output | The remaining money after deducting all costs. |
| :----- | :--------------------------------------------- |

| Challenge 📢 | If the input is not a number or is negative, return `"Invalid number"`. |
| :----------- | :---------------------------------------------------------------------- |

| SAMPLE INPUT | SAMPLE OUTPUT  |
| :----------- | :------------- |
| 10           | 300            |
| 1055         | 125700         |
| 93           | 10260          |
| -130         | Invalid number |
| "Hello"      | Invalid number |

---

## **Problem-12: Good or Bad Name Checker**

⚠️ **Function Name Must be `checkName()`**

Create a function that checks whether a name is **good** or **bad** based on its **last letter**.

- If the last letter of the name is one of **['a', 'y', 'i', 'e', 'o', 'u', 'w']** (case-insensitive), it is considered a **good name**.
- Otherwise, it is considered a **bad name**.

Your function should handle invalid inputs properly.

### Input

1. **name** – A string representing a person's name.

| Input | A string representing the name. |
| :---- | :------------------------------ |

### Output

- `"Good Name"` if the last letter matches the criteria.
- `"Bad Name"` if the last letter does not match the criteria.
- `"Invalid"` if the input is not a string.

### Challenge 📢

- The comparison should be **case-insensitive**.
- Handle non-string inputs (numbers, arrays, objects, etc.) by returning `"Invalid"`.

| SAMPLE INPUT | SAMPLE OUTPUT |
| :----------- | :------------ |
| 'Salman'     | Bad Name      |
| 'RAFEE'      | Good Name     |
| 'jhankar'    | Bad Name      |
| 199          | Invalid       |
| ['Rashed']   | Invalid       |

---

## **Problem-13: Remove Invalid Numbers from Array**

⚠️ **Function Name Must be `deleteInvalids()`**

Create a function that takes an array and **removes all invalid elements**, keeping only valid numbers.

- A valid number is any element of type **number** and **not NaN**.
- All other types (`string`, `null`, `undefined`, `NaN`, objects, arrays, etc.) should be removed.

### Input

1. **array** – An array containing elements of any type.

| Input | An array of elements (numbers, strings, null, undefined, objects, etc.) |
| :---- | :---------------------------------------------------------------------- |

### Output

- A new array containing **only valid numbers**.
- If the input is not an array, return `"Invalid Array"`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                  | SAMPLE OUTPUT |
| :------------------------------------------------------------ | :------------ |
| [1, null, undefined, 18, -19, NaN, '12', [1,2], {ob: 'lala'}] | [1, 18, -19]  |
| ['1', { num: 2 }, NaN]                                        | []            |
| [1, 2, -3]                                                    | [1, 2, -3]    |
| { num: [1, 2, 3] }                                            | Invalid Array |

---

## **Problem-14: Password Generator**

⚠️ **Function Name Must be `password()`**

Create a function that generates a password using the user's **name**, **birth year**, and **website name**.

The password format should be:
**CapitalizedSiteName#Name@BirthYear**

### Input

1. **obj** – An object containing the following properties:
   - `name` – User's name (string)
   - `birthYear` – User's birth year (number, 4 digits)
   - `siteName` – Name of the website (string)

| Input | An object with properties `name`, `birthYear`, and `siteName`. |
| :---- | :------------------------------------------------------------- |

### Output

- A string representing the generated password in the format **CapitalizedSiteName#Name@BirthYear**.
- If any property is missing or `birthYear` is not 4 digits, return `"Invalid"`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                | SAMPLE OUTPUT          |
| :---------------------------------------------------------- | :--------------------- |
| { name: 'kolimuddin', birthYear: 1999, siteName: 'google' } | Google#kolimuddin@1999 |
| { name: 'rahat', birthYear: 2002, siteName: 'Facebook' }    | Facebook#rahat@2002    |
| { name: 'toky', birthYear: 200, siteName: 'Facebook' }      | Invalid                |

---

## **Problem-15: Monthly Savings Calculator**

⚠️ **Function Name Must be `monthlySavings()`**

Create a function to calculate how much money a person saves at the end of the month after deducting **living costs** and applying **taxes** on high-income payments.

### Input

1. **arr** – An array of numbers representing monthly income payments.
2. **livingCost** – A number representing monthly living expenses.

### Rules

- For each payment in `arr`:
  - If payment is **≥ 3000**, apply **20% tax**.
  - If payment is **< 3000**, no tax is applied.
- Total income after tax minus `livingCost` is the monthly savings.
- If savings are negative, return `"earn more"`.

| Input | An array of numbers representing payments and a number for living costs. |
| :---- | :----------------------------------------------------------------------- |

### Output

- Returns a number representing savings, or `"earn more"` if the person is in deficit.
- If inputs are invalid (first input not array, second input not number), return `"Invalid input"`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT             | SAMPLE OUTPUT |
| :----------------------- | :------------ |
| [1000, 2000, 3000], 5400 | 100           |
| [1000, 2000, 2500], 5000 | 500           |
| [900, 2700, 3400], 10000 | earn more     |
| 100, [900, 2700, 3400]   | Invalid input |

---

## **Problem-16: Social Media Post Analytics**

⚠️ **Function Name Must be `postAnalytics()`**

Create a function that analyzes a list of posts and calculates total **likes**, **comments**, and **shares**.

### Input

- `posts` – An array of objects, where each object has:
  - `likes` (number)
  - `comments` (number)
  - `shares` (number)

| Input | An array of post objects with likes, comments, and shares. |
| :---- | :--------------------------------------------------------- |

### Rules

- Calculate the total likes, total comments, and total shares.
- Return an object with these three values.
- If the input is invalid, return `"Invalid input"`.

### Output

- Returns an object: `{ totalLikes, totalComments, totalShares }`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                                       | SAMPLE OUTPUT                                           |
| :--------------------------------------------------------------------------------- | :------------------------------------------------------ |
| [ {likes: 100, comments: 20, shares: 10}, {likes: 50, comments: 10, shares: 5} ]   | { totalLikes: 150, totalComments: 30, totalShares: 15 } |
| [ {likes: 200, comments: 30, shares: 25}, {likes: 100, comments: 20, shares: 10} ] | { totalLikes: 300, totalComments: 50, totalShares: 35 } |
| [ {likes: "abc", comments: 20, shares: 5} ]                                        | Invalid input                                           |

---

## Problem-17: Hospital Patient Management

⚠️ **Function Name Must be `managePatients()`**

Create a function to manage patient records in a hospital.

### Input

- `patients` – An array of objects, where each object has:
  - `name` (string)
  - `age` (number)
  - `disease` (string)
- `minAge` – A number representing the minimum age to filter patients.

| Input | An array of patient objects and a number for minimum age. |
| :---- | :-------------------------------------------------------- |

### Rules

- Return a list of patients whose age is greater than or equal to `minAge`.
- If input is invalid, return `"Invalid input"`.

### Output

- Returns a filtered array of patient objects.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                                            | SAMPLE OUTPUT                                                                       |
| :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| [ {name: "A", age: 30, disease: "Flu"}, {name: "B", age: 20, disease: "Cold"} ], 25     | [ {name: "A", age: 30, disease: "Flu"} ]                                            |
| [ {name: "C", age: 40, disease: "Fever"}, {name: "D", age: 50, disease: "Asthma"} ], 35 | [ {name: "C", age: 40, disease: "Fever"}, {name: "D", age: 50, disease: "Asthma"} ] |
| [ {name: "E", age: "abc", disease: "Cough"} ], 20                                       | Invalid input                                                                       |

---

## Problem-18: Online Voting System

⚠️ **Function Name Must be `votingSystem()`**

Create a function that counts votes and determines the winner.

### Input

- `votes` – An array of strings where each string is a candidate's name.

| Input | An array of strings representing votes. |
| :---- | :-------------------------------------- |

### Rules

- Count how many votes each candidate got.
- Return the candidate with the highest votes.
- If there is a tie, return `"Tie"`.
- If input is invalid, return `"Invalid input"`.

### Output

- Returns a string (winner’s name) or `"Tie"`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                         | SAMPLE OUTPUT   |
| :----------------------------------- | :-------------- |
| ["Hasan", "Rafiq", "Hasan", "Amin"]  | "Hasan"         |
| ["Kamal", "Rafiq", "Kamal", "Rafiq"] | "Tie"           |
| [123, "Hasan"]                       | "Invalid input" |

---

## Problem-19: University Course Registration

⚠️ **Function Name Must be `registerCourse()`**

Create a function to handle student course registration.

### Input

- `students` – An array of objects, where each has:
  - `name` (string)
  - `courses` (array of strings)
- `studentName` – A string (name of student).
- `courseName` – A string (name of course to register).

| Input | An array of student objects, a string for student name, and a string for course name. |
| :---- | :------------------------------------------------------------------------------------ |

### Rules

- Add the `courseName` to the student's course list if not already enrolled.
- If the student does not exist, return `"Student not found"`.
- If inputs are invalid, return `"Invalid input"`.

### Output

- Returns the updated student object.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                                          | SAMPLE OUTPUT                             |
| :------------------------------------------------------------------------------------ | :---------------------------------------- |
| [ {name: "A", courses: ["Math"]}, {name: "B", courses: ["English"]} ], "A", "Science" | {name: "A", courses: ["Math", "Science"]} |
| [ {name: "C", courses: ["Biology"]} ], "D", "Physics"                                 | "Student not found"                       |
| [ {name: "E", courses: "NotArray"} ], "E", "Math"                                     | "Invalid input"                           |

---

## Problem-20: Bank Transaction Analyzer

⚠️ **Function Name Must be `analyzeTransactions()`**

Create a function that analyzes bank transactions.

### Input

- `transactions` – An array of objects, where each has:
  - `type` (string: "deposit" or "withdraw")
  - `amount` (number)

| Input | An array of transaction objects with type and amount. |
| :---- | :---------------------------------------------------- |

### Rules

- Calculate the total deposits, total withdrawals, and final balance.
- Initial balance is 0.
- If withdrawals exceed balance, return `"Insufficient funds"`.
- If input is invalid, return `"Invalid input"`.

### Output

- Returns an object: `{ totalDeposits, totalWithdrawals, balance }`.

### SAMPLE INPUT | SAMPLE OUTPUT

| SAMPLE INPUT                                                                                           | SAMPLE OUTPUT                                                  |
| :----------------------------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| [ {type: "deposit", amount: 5000}, {type: "withdraw", amount: 2000}, {type: "deposit", amount: 3000} ] | { totalDeposits: 8000, totalWithdrawals: 2000, balance: 6000 } |
| [ {type: "withdraw", amount: 1000} ]                                                                   | "Insufficient funds"                                           |
| [ {type: "deposit", amount: "abc"} ]                                                                   | "Invalid input"                                                |
