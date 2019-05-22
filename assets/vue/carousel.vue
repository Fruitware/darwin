<template>
    <div class="carouselContainer">
        <div class="slidesContainer" :style="{gridTemplateColumns: 'repeat('+length+',100%)', transform: 'translateX(-'+activeImg*100+'%)'}">
            <slot/>
        </div>
        <div class="carouselPaginationContainer">
            <div class="carouselPagination" :style="{gridTemplateColumns: 'repeat('+length+',max-content)'}">
                <div @click="changeItem(index)" class="paginationItem" v-for="(item,index) in parseInt(length)" :class="{paginationItemActive: activeImg==index}"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        length: {
            type: String,
            default: 0,
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Number,
            default: 7000
        },
    },
    data() {
        return {
            activeImg: 0,
            autoplayInterval: ''
        }
    },
    methods: {
        nextImage: function(){
            if(this.activeImg!=this.length-1){
                this.activeImg++;
            }
            else {
                this.activeImg=0;
            }
        },
        changeItem: function(index){
            this.activeImg=index;
            clearInterval(this.autoplayInterval);
            this.autoplayInterval=setInterval(function(){this.nextImage()}.bind(this),this.delay)
        }
    },
    mounted() {
        if(this.autoplay){
            this.autoplayInterval=setInterval(function(){this.nextImage()}.bind(this),this.delay);
        }
    },
}
</script>