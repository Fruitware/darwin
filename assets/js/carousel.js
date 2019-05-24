import $ from 'jquery';

class Carousel {
    constructor({root, delay, pagination, autoplay}) {
        this.delay = delay || 7000;
        if(autoplay==undefined) {this.autoplay = true}
        else {this.autoplay = autoplay}
        if(pagination==undefined) {this.pagination = true}
        else {this.pagination = pagination}
        this.root = $(root);
        this.index = 0;
        this.slidesContainer = this.root.find('.slidesContainer');
        this.totalSlides = this.root.find('.carouselSlide').length;
        this.slidesContainer.css({gridTemplateColumns:`repeat(${this.totalSlides},100%)`});

        if(this.autoplay==true){
            this.autoplayInterval = setInterval(function(){this.nextImage()}.bind(this),this.delay);
        }

        if(this.pagination==true){
            this.createPagination();
            this.paginationItems = this.root.find('.paginationItem');
            $(this.paginationItems[0]).addClass('paginationItemActive');
            let carousel = this;
            this.paginationItems.bind('mousedown', function(){
                let index = $(this).index();
                carousel.paginationItems.removeClass('paginationItemActive');
                carousel.slideTo(index);
                $(this).addClass('paginationItemActive');
                if(carousel.autoplay){
                    clearInterval(carousel.autoplayInterval);
                    carousel.autoplayInterval = setInterval(function(){carousel.nextImage()}.bind(this),carousel.delay);
                }
            });
        }
    }

    slideTo(index) {
        this.index=index;
        this.slidesContainer.css({transform: `translateX(-${100 * index}%)`});
    }
    nextImage(){
        if(this.index!=this.totalSlides-1){
            this.slideTo(this.index+1);
        }
        else {
            this.slideTo(0);
        }
        this.updatePagination();
    }
    updatePagination(){
        if(this.pagination){
            this.paginationItems.removeClass('paginationItemActive');
            $(this.paginationItems[this.index]).addClass('paginationItemActive');
        }
    }

    createPagination(){
        this.root.append('<div class="carouselPagination"></div>');
        for(let a=0;a<this.totalSlides;a++){
            this.root.find('.carouselPagination').append('<div class="paginationItem"></div>');
        }
    }
}

export default Carousel;