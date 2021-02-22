import { getCurrentInstance } from 'vue' ;

export default {
    sss : () => {
        console.log(getCurrentInstance())
        return "Hello George"
    }
}