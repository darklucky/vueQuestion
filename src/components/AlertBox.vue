<template>
    <div class="alert-box-size alert-box-position" :class="boxClass">
      <strong>{{typeTip}}</strong>
      <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
    'type':{
        type: String,
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'prompt', 'warning', 'error'].indexOf(value) !== -1
      } 
    }
    },
    computed: {
        boxClass: function(){
            var className = 'alert-box' + this.type;
            return {
                className: true
            }
        },
        typeTip: function(){
            var tipMap = {
                'success': 'Success!',
                'prompt': 'Prompt!',
                'warning': 'Warning!',
                'error': 'Error!'
            };
            return tipMap[this.type];
        }
        
    },
    methods: {

    }


}
</script>
<style lang="less" scoped>
.alert-box-color-success{
    background: #64ec08;
    border: 1px solid #64ec08;
}
.alert-box-color-prompt{
    background: #73aef1;
    border: 1px solid #73aef1;
}
.alert-box-color-warning{
    background: #f5dc51;
    border: 1px solid #f5dc51;
}
.alert-box-color-error{
    background: #f3beb8;
    border: 1px solid #f09898;
}
.alert-box-size{
    width: 300px;
    max-width: 400px;
    padding: 10px 20px;
}
.alert-box-position{
    position: absolute;
    top: 20px;
    right:30px;
}
</style>


