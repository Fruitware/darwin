<template>
    <div id="localHeaderContainer" v-if="tabs.length>0">
        <div id="localHeader" :class="'gridcolumns'+tabs.length">
            <div class="localHeaderItem" @click="$emit('openmenu')" id="phoneCategories"><span class="localHeaderItemHeadlineContainer"><i class="icon icon-menu" alt="Все категории" title="Все категории"></i><h3>Все категории</h3></span></div>
            <div class="localHeaderItem" v-for="(item,index) in tabs">
                <span class="localHeaderItemHeadlineContainer"><i class="icon" :class="'icon-'+categoriesDB[item].ico" :alt="categoriesDB[item].headline" :title="categoriesDB[item].headline"></i><h3>{{categoriesDB[item].headline}}</h3></span>
                <div class="localHeaderCategoryInfo defaultShadow" :class="{firstLocalHeaderItem: index==0 && tabs.length>=5, lastLocalHeaderItem: index==(tabs.length-1) && tabs.length>=5}">
                    <div>
                        <span class="localHeaderInfoHeadline"><i class="icon icon-cup"></i> Бренды</span>
                        <span class="localHeaderInfoItem" v-for="itemb in categoriesDB[item].brands">{{itemb}}</span>
                        <span class="localHeaderInfoItem text-gray">Все бренды</span>
                    </div>
                    <div>
                        <span class="localHeaderInfoHeadline"><i class="icon icon-coupon"></i> По Ценам</span>
                        <span class="localHeaderInfoItem" v-for="itemb in categoriesDB[item].prices">{{itemb}}</span>
                        <span class="localHeaderInfoOtherTabs" v-for="(itemb,indexb) in categoriesDB[item].otherTabs" :style="[indexb==0 ? {marginTop: '30px'} : {}]">{{itemb}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            categoriesDB: [
                {
                    headline: 'Смартфоны',
                    ico: 'smartphone',
                    brands: ['Apple','Samsung','Xiaomi','Huawei','One Plus', 'Meizu', 'Sony', 'Google', 'LG', 'Honor', 'Motorola', 'HTC'],
                    prices: ['До 1000 леев','До 3000 леев','До 5000 леев','До 10000 леев','От 10000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'Гаджеты',
                    ico: 'gadget',
                    brands: ['Acme','Samsung','Xiaomi','DJI','Beats', 'Capcom', 'Fury'],
                    prices: ['До 1000 леев','До 3000 леев','До 5000 леев','До 10000 леев','От 12000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'Транспорт',
                    ico: 'lightning',
                    brands: ['Xiaomi','Giant','Alma','Kawasaki','Razor', 'Wheel-a', 'Limar', 'Energy Monster'],
                    prices: ['До 4000 леев','До 10000 леев','До 20000 леев','До 35000 леев','От 35000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'Геймерам',
                    ico: 'cup',
                    brands: ['Apple','Samsung','Xiaomi','Acer','A4Tech', 'Dell', 'Asus', 'Fury', 'Genius', 'Razer', 'Ubisoft', 'Sven'],
                    prices: ['До 1000 леев','До 3000 леев','До 5000 леев','До 10000 леев','От 12000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'Ноутбуки',
                    ico: 'notebook',
                    brands: ['Apple','Acer','Asus','Dell','HP', 'Xiaomi'],
                    prices: ['До 5000 леев','До 9000 леев','До 13000 леев','До 170000 леев','От 17000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'Звук',
                    ico: 'sound',
                    brands: ['Apple','A4Tech','Xiaomi','AKG','Amazon', 'AWEI', 'Sony', 'Beats', 'Genius'],
                    prices: ['До 1000 леев','До 3000 леев','До 5000 леев','До 10000 леев','От 12000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
                {
                    headline: 'IQOS',
                    ico: 'iqos',
                    brands: ['Apple','Samsung','Xiaomi','Huawei','One Plus', 'Meizu', 'Sony', 'Google', 'LG', 'Honor', 'Motorola', 'HTC'],
                    prices: ['До 1000 леев','До 3000 леев','До 5000 леев','До 10000 леев','От 12000 леев',],
                    otherTabs: ['Популярное', 'Новинки', 'Аксессуары', 'Кредит 0%']
                },
            ]
        }
    },
    methods: {
        
    },
}
</script>