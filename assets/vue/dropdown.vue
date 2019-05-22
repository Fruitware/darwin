<template>
    <div class="dropDownContainer" :class="customClass">
        <div class="mainContainer" @click="dropDownToogle">
            <slot name="main"></slot>
        </div>
        <transition :name="anim">
        <div class="dropDown" @click="dropdownClicked" :class="{'toogled': enabled}" v-show="enabled" :style="{background: dropDownBackground}">
            <slot></slot>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        dropDownBackground: String,
        customClass: String,
        closeOnClick: {
            type: Boolean,
            default: true,
        },
        phoneOnly: {
            type: Boolean,
            default: false,
        },
        noAnimation: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            enabled: false,
        }
    },
    methods: {
        dropDownToogle: function(){
            if(this.phoneOnly){
                if(document.documentElement.clientWidth<=850 && this.phoneOnly){
                    this.enabled=!this.enabled;
                    if(this.enabled==false){
                        this.$el.querySelector('.mainContainer').querySelector('i').classList.remove("dropdownActive");
                    }
                    else {
                        this.$el.querySelector('.mainContainer').querySelector('i').classList.add("dropdownActive");
                    }
                }
            }
            else {
                this.enabled=!this.enabled;
                if(this.enabled==false){
                    this.$el.querySelector('.mainContainer').querySelector('i').classList.remove("dropdownActive");
                }
                else {
                    this.$el.querySelector('.mainContainer').querySelector('i').classList.add("dropdownActive");
                }
            }
        },
        dropdownClicked: function(){
            if(this.closeOnClick){
                this.dropDownToogle();
            }
        }
    },
    computed: {
        anim(){
            if(!this.noAnimation){
                return 'slideUp';
            }
            else {
                return '';
            }
        }
    },
}
</script>