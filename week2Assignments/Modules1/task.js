
                    // TODO: Import validator functions
                    import { validateTitle,validateDueDate,validatePriority } from "./validator.js";

                    
                    const tasks = [];
                    
                    // 1. Add new task
                    export function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      if(!validateTitle() && !validatePriority() && !validateDueDate()){
                        return 
                      }
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }

                  // Export functions