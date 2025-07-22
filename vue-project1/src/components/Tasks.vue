<template>
    <div>
        <!-- <pre>{{ tasks }}</pre> -->
        <div :key="task.id" v-for=" task in tasks">
            <Task :task="task"/>
        </div>
    </div>
        
</template>


<script>
import Task from './Task.vue';
    export default{
        name:'Tasks',
        components:{
            Task
        },
        props:{
            tasks:Array,
        },
    }
</script>

<style>

</style>