//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    listOfTasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    /*getTasksToDo: (tasks) => {
        return tasks.filter( (task) =>  task.completed === false)
    }*/
    getTasksToDo() {
        const pendingTasks = this.listOfTasks.filter( (task) =>  task.completed === false)
        return pendingTasks;
    }
}

console.log(tasks.getTasksToDo(tasks.listOfTasks))