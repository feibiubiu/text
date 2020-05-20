import Vue from  'vue'
Vue.directive('changeColor',{
    bind(el,binding, vnode){
        console.log("el居然是这个东西",el)
        console.log("binding",binding)
        el.onclick = (e) => {
            console.log("点击了，是吗")
            return false
        }
    }
})