

<template>
    <div class="container">
      <HelloComp name1="Rohit Kokate"/>
      <AddTask @add-task="addTask"/>
      <Button/>
      <Tasks :tasks="tasks"/>
    </div>
</template>
<script>
import HelloComp from './components/HelloComp.vue';
import Button from './components/Button.vue'
import AddTask from './components/AddTask.vue';
import Tasks from './components/Tasks.vue';

export default{
  name:'App',
  components: {
    HelloComp,
    Button,
    AddTask,
    Tasks
  },
  methods:{
    addTask(task){
        this.tasks=[...this.tasks,task]
    }
  },
  data(){
    return{
      tasks:[]
    }
  },
  created(){
    this.tasks=[
    {
      "id": "1",
      "text": "Doctors Appointment",
      "day": "March 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": "2",
      "text": "Meeting with boss",
      "day": "March 6th at 1:30pm",
      "reminder": true
    },
    {
      "id": "3",
      "text": "Food shopping",
      "day": "March 7th at 2:00pm",
      "reminder": false
    }
  ]
  },

}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 150%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
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
