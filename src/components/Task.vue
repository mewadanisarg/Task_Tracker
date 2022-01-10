<template>
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{task.text}}
            <i class="fas fas-times"></i>
        </h3>
        <p>{{task.day}}</p>
    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task: Object,
    }
}
</script>

<style scoped>
.fas{
    color: red;
}
.task{
    background: rgb(230, 221, 185);
    border-color: rgb(180, 91, 91);
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.task.reminder{
    border-left: 5px solid rgb(15, 233, 81);
}

.task h3{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>