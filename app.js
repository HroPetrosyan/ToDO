let newTask = document.querySelector(".newTask")
let addButton = document.querySelector(".addButton")
let clearAll = document.querySelector(".clearAll")
let pendingTask = document.querySelector(".pendingTask")
let count = 0

addButton.addEventListener("click",function(){
    //Creating NewTask
    if(newTask.value !== "" && count <5){
        let taskBox = document.querySelector(".taskbox")
        let task = document.createElement("div")
        task.className = "task"

        let clearBut = document.createElement("button")
        clearBut.className = "clear"
        clearBut.innerHTML = "X"

        let doneBut = document.createElement("input")
        doneBut.className = "done"
        doneBut.type = "checkbox"

        let taskName = document.createElement("p")
        taskName.className = "taskName"
        
        task.appendChild(clearBut)
        task.appendChild(doneBut)
        task.appendChild(taskName)
        taskName.innerHTML = newTask.value
        taskBox.appendChild(task)

        newTask.value = ""

        doneBut.addEventListener("click",function(){
            if(event.target.checked){
                task.style.backgroundColor = "green"
            }
            else{
                task.style.backgroundColor = "rgb(224, 224, 224)"
            }
        })

        clearBut.addEventListener("click",function(){
            taskBox.removeChild(task);
            count--
            pendingTask.innerHTML = `You have ${count} pending tasks`
        })

        clearAll.addEventListener("click",function(){
            taskBox.innerHTML = ""
            count = 0
            pendingTask.innerHTML = `You have ${count} pending tasks`
        })
        count++
        pendingTask.innerHTML = `You have ${count} pending tasks`
    }
    ////////////////
   
})