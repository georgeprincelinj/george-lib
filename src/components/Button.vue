<template>
    <div class="geo-btn">
        <button>
            {{ label }}
        </button>
    </div>
</template>

<script>
    import { useGeoBase } from './geoBase.js'
    export default {
        setup(){
            return {
                label : useGeoBase()
            }
        }
    }
</script>

<style scoped>
.geo-btn{
    padding: 8px;
}
</style>