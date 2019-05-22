<template>
    <div class="sliderContainer dcontainer" :style="[paddingTop!=undefined ? {paddingTop: paddingTop+'px'} : {},paddingBottom!=undefined ? {paddingBottom: paddingBottom+'px'} : {}]">
        <div class="arrowContainer" @click="scrollFunc('left')"><i class="icon icon-arrowleft" v-if="scrollBlocks>1"></i></div>
        <div class="slider" :style="{gridTemplateColumns: 'repeat('+scrollBlocks+',100%)'}">
            <slot></slot>
        </div>
        <div class="arrowContainer" @click="scrollFunc('right')"><i class="icon icon-arrowright" v-if="scrollBlocks>1"></i></div>
    </div>
</template>

<script>
import VueScrollTo from "vue-scrollto";
export default {
    props: ['scrollBlocks','paddingTop','paddingBottom'],
    data() {
        return {
            scrollNow: 0,
            availableArrow: true,
            options: {
                container: 'body',
                easing: 'ease',
                offset: 0,
                force: true,
                cancelable: false,
                x: true,
                y: false
            }
        }
    },
    methods: {
        scrollFunc: function(direction){
            if(this.availableArrow==true){
                if(direction=='left'){
                    if(this.scrollNow>0){
                        this.scrollNow--;
                    }
                    else {
                        this.scrollNow=this.scrollBlocks-1;
                    }
                }
                else if(direction=='right'){
                    if(this.scrollNow<this.scrollBlocks-1){
                        this.scrollNow++;
                    }
                    else {
                        this.scrollNow=0;
                    }
                }
                let item = this.$el.getElementsByClassName('itemToScroll')[this.scrollNow];
                if(item!=undefined){
                    this.availableArrow=false;
                    setTimeout(function(){this.availableArrow=true}.bind(this),500);
                    VueScrollTo.scrollTo(item, 500, this.options);
                }
            }
        }
    },
    mounted() {
        this.options.container = this.$el.querySelector('.slider');
    },
}
</script>