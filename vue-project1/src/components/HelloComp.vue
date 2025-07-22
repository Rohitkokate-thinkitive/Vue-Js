<script>
    export default{
        name:'Header',
        props:['name1']
    }
</script>
<template>
    <header>
        <h1>Hello {{ name1 }}</h1>
    </header>
    
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: blueviolet;
    margin-bottom: 20px;
}
h1{
    font-weight: bold;
}
</style>