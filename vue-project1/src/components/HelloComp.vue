<script>
    export default{
        name:'Header',
        // props:['name1']
    }
</script>
<template>
    <header>
        <h1>Task Tracker</h1>
        <!-- <h1>Hello {{ name1 }}</h1> -->
    </header>
    
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>