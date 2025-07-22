<template>
    <div class="task">
        <h3>{{ task.text }}
            <i class="fas fas-time"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>
export default{
    name:'Task',
    props:{
        task:Object
    },
}
</script>


<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 15px;
  padding: 10px 20px;
  /* width: 200%; */ /* Remove or adjust as needed */
  cursor: pointer;
  color: red; /* Fixed typo */
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>