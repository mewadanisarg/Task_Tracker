<template>
  <div class="container">
    <Header title="My Task Tracker"/>
    <AddTask @add-task="add-task"/>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
    
  </div>
</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    Task,
    AddTask,
  },
  data(){
    return{
      tasks:[]
    }
  },
  methods: {
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
      if(confirm('Are you sure, you want to delete the task ?')){

        this.tasks = this.tasks.filter((task)=> task.id !== id)  // filter takes a function and it will loop through task.. We want "task.id" which is passed in the methods argument (id) and give us everything except the the id passed in the "method's" 'id' .  
      }
    },
    toggleReminder(id){
      // map () => We want to reminder the array of updated task, so we are using map(). 
      // for each (task) condition.:! if task.id is equal to id that is passed in and if it is true then, it return an array of object where it has inital task properties and we want to change the reminder whatever the opposite of the current task reminder is.  If it doesnt match the id than we want to return the task..!
      // this.task = this.tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task) 
      console.log(id);
    },
  },
  created() {
    this.tasks = [
      {
      id: "1",
      text: "Doctors Appointment",
      day: "March 5th at 2:30pm",
      reminder: true
      },
      {
        id: "2",
        text: "Meeting with boss",
        day: "March 6th at 1:30pm",
        reminder: true
      },
      {
        id: "3",
        text: "Food shopping",
        day: "March 7th at 2:00pm",
        reminder: false
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  /* background-image: url('https://onemamasdailydrama.com/wp-content/uploads/2019/12/desktop-organizer-wallpaper-feature.jpg');
  background-size: 100%;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%; */
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid rgb(20, 223, 189);
  padding: 30px;
  border-radius: 5px;
  
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
