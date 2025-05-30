
const wrapper  = document.querySelector(".wrapper")
const menuBtn = document.querySelector(".menu-btn")
const backBtn = document.querySelector(".back-btn")

const toggleScreen = ()=>{
    wrapper.classList.toggle("show-caterogy")
}

menuBtn.addEventListener("click", toggleScreen)
backBtn.addEventListener("click", toggleScreen)

const addTaskBtn = document.querySelector(".add-task-btn")
const addTaskForm = document.querySelector(".add-task")
const blackBackdrop = document.querySelector(".black-backdrop")

const toggleAddTaskFrom = ()=>{
    addTaskForm.classList.toggle("active")
    blackBackdrop.classList.toggle("active")
    addTaskBtn.classList.toggle("active")
}

addTaskBtn.addEventListener("click", toggleAddTaskFrom)
blackBackdrop.addEventListener("click", toggleAddTaskFrom)

// ajout des cathegories des taches 

let categories = [
    {
      title: "Personal",
      img: "boy.png",
    },
    {
      title: "Work",
      img: "briefcase.png",
    },
    {
      title: "Shopping",
      img: "shopping.png",
    },
    {
      title: "Coding",
      img: "web-design.png",
    },
    {
      title: "Health",
      img: "healthcare.png",
    },
    {
      title: "Fitness",
      img: "dumbbell.png",
    },
    {
      title: "Education",
      img: "education.png",
    },
    {
      title: "Finance",
      img: "saving.png",
    },
  ];
  
let tasks = [
    {
      id: 1,
      task: "Go to market",
      category: "Shopping",
      completed: false,
    },
    {
      id: 2,
      task: "Read a chapter of a book",
      category: "Personal",
      completed: false,
    },
    {
      id: 3,
      task: "Prepare presentation for meeting",
      category: "Work",
      completed: false,
    },
    {
      id: 4,
      task: "Complete coding challenge",
      category: "Coding",
      completed: false,
    },
    {
      id: 5,
      task: "Take a 30-minute walk",
      category: "Health",
      completed: false,
    },
    {
      id: 6,
      task: "Do a 20-minute HIIT workout",
      category: "Fitness",
      completed: false,
    },
    {
      id: 7,
      task: "Watch an educational video online",
      category: "Education",
      completed: false,
    },
    {
      id: 8,
      task: "Review monthly budget",
      category: "Finance",
      completed: false,
    },
    {
      id: 9,
      task: "Buy groceries for the week",
      category: "Shopping",
      completed: false,
    },
    {
      id: 10,
      task: "Write in a journal",
      category: "Personal",
      completed: false,
    },
    {
      id: 11,
      task: "Send follow-up emails",
      category: "Work",
      completed: false,
    },
    {
      id: 12,
      task: "Work on a coding side project",
      category: "Coding",
      completed: false,
    },
    {
      id: 13,
      task: "Try a new healthy recipe",
      category: "Health",
      completed: false,
    },
    {
      id: 14,
      task: "Attend a yoga class",
      category: "Fitness",
      completed: false,
    },
    {
      id: 15,
      task: "Read an article about a new topic",
      category: "Education",
      completed: false,
    },
    {
      id: 16,
      task: "Set up automatic bill payments",
      category: "Finance",
      completed: false,
    },
    {
        id: 17,
        task: "Buy new clothes",
        category: "Shopping",
        completed: false,
      },
      {
        id: 18,
        task: "Meditate for 10 minutes",
        category: "Personal",
        completed: false,
      },
      {
        id: 19,
        task: "Prepare agenda for team meeting",
        category: "Work",
        completed: false,
      },
      {
        id: 20,
        task: "Debug a software issue",
        category: "Coding",
        completed: false,
      },
      {
        id: 21,
        task: "Try a new recipe for lunch",
        category: "Health",
        completed: false,
      },
      {
        id: 22,
        task: "Go for a run",
        category: "Fitness",
        completed: false,
      },
      {
        id: 23,
        task: "Learn a new language online",
        category: "Education",
        completed: false,
      },
      {
        id: 24,
        task: "Read about history",
        category: "Education",
        completed: false,
      },
      {
        id: 25,
        task: "Review investment portfolio",
        category: "Finance",
        completed: false,
      },
]

let selectedCategory = categories[0]

const categoriesContainer = document.querySelector(".categories")
const categoryTitle = document.querySelector(".category-title")
const TotalcategoryTasks = document.querySelector(".category-tasks")
const categoryImg = document.querySelector("#category-img")
const totalTasks = document.querySelector(".totalTasks")

const calculateTotal = ()=>{
    const categoryTasks =  tasks.filter(
        (task) => task.category.toLocaleLowerCase() === selectedCategory.title.toLowerCase()
    )
    TotalcategoryTasks.innerHTML = `${categoryTasks.length} Tasks`
    totalTasks.innerHTML = tasks.length;
}
calculateTotal()

const renderCategories = ()=>{
    categoriesContainer.innerHTML =""
    categories.forEach((category) =>{
        //afficher touts les categories

        const categoryTasks =  tasks.filter(
            (task) => task.category.toLocaleLowerCase() === category.title.toLowerCase()
        )

        const div = document.createElement("div")
        div.classList.add("category")
        div.addEventListener("click",()=>{
            wrapper.classList.add("show-caterogy")
            selectedCategory = category;
            
            categoryTitle.innerHTML = category.title;
            categoryImg.src = `img/${category.img}`
            calculateTotal();
            renderTasks()

        })
        div.innerHTML = `<div class="left">
                            <img src="img/${category.img}" 
                            alt="${category.title}"/>
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTasks.length}</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C11.175 3 10.5 3.675 10.5 4.5C10.5 5.325 11.175 6 12 6C12.825 6 13.5 5.325 13.5 4.5C13.5 3.675 12.825 3 12 3ZM12 18C11.175 18 10.5 18.675 10.5 19.5C10.5 20.325 11.175 21 12 21C12.825 21 13.5 20.325 13.5 19.5C13.5 18.675 12.825 18 12 18ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>
                            </div>
                        </div>`;

        categoriesContainer.appendChild(div)
    })
}

const tasksContainer = document.querySelector(".tasks")
const renderTasks = ()=>{
    tasksContainer.innerHTML = ""
    const categoryTasks =  tasks.filter(
        (task) => task.category.toLocaleLowerCase() === selectedCategory.title.toLowerCase()
    )

    //si il n'ya pas de tache dans la category selectionnée
    if(categoryTasks.length === 0){
        tasksContainer.innerHTML = `
        <p class = "no-task" No tasks for this category</p>
    `}else{
        categoryTasks.forEach((task)=>{
            const div = document.createElement("div")
            div.classList.add("task-wrapper")
            const label = document.createElement("label")
            label.classList.add("task")
            label.setAttribute("for" , task.id)
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.id = task.id
            checkbox.checked =task.completed

            // tache completer
            checkbox.addEventListener("change",()=>{
                const index = tasks.findIndex((t) => t.id === task.id)
                tasks[index].completed = !tasks[index].completed
                saveLocal()
            })

            div.innerHTML =`
                 <div class="delete">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8ZM6 10V20H18V10H6ZM9 12H11V18H9V12ZM13 12H15V18H13V12ZM7 5V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V5H22V7H2V5H7ZM9 4V5H15V4H9Z"></path></svg>
                        </div>
            `
            label.innerHTML =`
                   <span class="checkmark">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z"></path></svg>
                            </span>
                            <p>${task.task}</p>
            `
            label.prepend(checkbox)
            div.prepend(label)
            tasksContainer.appendChild(div)

            // supp tache
            const deleteBtn = div.querySelector(".delete")
            deleteBtn.addEventListener("click", ()=>{
                const index = tasks.findIndex((t) => t.id === task.id)
                tasks.splice(index, 1)
                saveLocal()
                renderTasks()
            })
        })
        renderCategories()
        calculateTotal()
    }
}

//stockage local

const  saveLocal = ()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
const  getLocal = ()=>{
    const localTasks = JSON.parse(localStorage.getItem("tasks"))

    if(localTasks){
        tasks = localTasks
    }
}

//add taches
const categorySelect = document.querySelector("#category-select")
const cancelBtn = document.querySelector(".cancel-btn")
const addBtn = document.querySelector(".add-btn")
const taskInput = document.querySelector("#task-input")

cancelBtn.addEventListener("click", toggleAddTaskFrom)

addBtn.addEventListener("click", ()=>{
    const task = taskInput.value
    const category = categorySelect.value

    if((task ===  "")){
        alert("please enter a task")
    }else{
        const newtask = {
            id: tasks.length + 1,
            task,
            category,
            completed:false,
        }
        tasks.push(newtask)
        taskInput.value = "";
        saveLocal()
        toggleAddTaskFrom()
        renderTasks()
    }
})
categories.forEach((category)=>{
    const option = document.createElement("option")
    option.value = category.title.toLocaleLowerCase()
    option.textContent = category.title
    categorySelect.appendChild(option)
})

getLocal()
calculateTotal()
renderCategories()
renderTasks()