<template>
    <div class="geo-input">
        <span> {{ label }} </span>
        <input type="text" />
    </div>
</template>

<script>
    import { ref, getCurrentInstance } from 'vue' ;
    export default {
        setup(){
            console.log(getCurrentInstance)
            return {
                label : ref("Dummy Input")
            }
        }
    }
</script>

<style scoped>
.geo-input{
    padding: 8px;
}
</style>