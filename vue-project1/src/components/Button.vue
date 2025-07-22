

<template>
    <button @click="onClick()" class="btn">Add Task</button>
</template>

<script>
export default{
    name:'Button',
    methods:{
        onClick(){
            console.log('Clicked');
        },
    }
}

</script>

<style scoped>


</style>