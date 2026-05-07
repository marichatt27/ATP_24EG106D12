  // TODO: Export these validation functions
                      
  // 1. Validate task title (not empty, min 3 chars)
        function validateTitle(title) {
            if(!title){
                return "title required"
            } 
            if(title.length<=3){
                return "min 3 chars required"
            }
            return "title is valid"
        }
                      
        // 2. Validate priority (must be: low, medium, high)
        function validatePriority(priority) {
            // Your code here
            return true;
        }
                      
    // 3. Validate due date (must be future date)
        function validateDueDate(date) {
            // Your code here
            let dueDate=new Date('2024-10-20')
            let today=new Date()
            if(dueDate>today){
                return "invalid date"
            }
            return true;
        }
export {validateDueDate,validatePriority,validateTitle}