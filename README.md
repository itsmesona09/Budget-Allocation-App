# Budget-Allocation-App

- Budget Allocation Application is a rich Front-End application created with React and ES6. I have connected React components using data and stat and rich React components with advanced features like Hooks and Redux.
- It includes components such as Budget, RemainingBudget, ExpenseTotal, ExpenseList, Currency and AllocationForm.

# AppContext.js:
Defines the application context and provides a state management solution using React's context API. It includes an AppReducer for handling different actions like adding, reducing, or deleting expenses, setting the budget, and changing the currency.

# Budget.js: 
Allows users to input and update the overall budget for the company. It checks if the new budget is sufficient based on the total expenses.

# Remaining.js: 
Displays the remaining budget after deducting the total expenses. It dynamically changes the alert color based on whether the remaining budget is positive or negative.

# ExpenseTotal.js:
Shows the total amount spent so far based on the allocated budget.

# ExpenseList.js: 
Displays a table of allocated budgets for different departments. It utilizes the ExpenseItem component for each individual department.

# ExpenseItem.js: 
Represents an individual department's budget allocation. Users can increase the allocation by a fixed amount or delete the department.

# AllocationForm.js: 
Provides a form for users to allocate or reduce funds for different departments. It includes dropdowns for selecting the department and action (add or reduce), along with an input field for entering the cost.

# Currency.js
Allows users to dynamically change the currency used in the application. It is integrated with the global state through React's context API and communicates with the AppContext to dispatch changes.

# Features;
- Collectively provide a comprehensive budget management solution for a company, offering flexibility in budgeting, expense tracking, and currency preferences.
- Users can easily navigate through the application to make adjustments, ensuring effective financial management.



  
