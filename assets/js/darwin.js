"use strict";
$(document).ready(function () {

    //Dropdown
    for (let item of $('.dropDownContainer')) {
        let root = $(item);
        let data = root.attr('data');
        let icon = root.find('.mainContainer').find('i');
        let dropdown = root.find('.dropDown');
        let enabled = false;

        dropdown.css({display:'none'});

        if (data!=undefined && data.includes('closeOnClick')) {
            root.find('.dropDown').bind('mousedown', function () {
                if (data.includes('phoneOnly')) {
                    if (document.documentElement.clientWidth <= 850) {
                        enabled = !enabled;
                        updateState();
                    }
                } else {
                    enabled = !enabled;
                    updateState();
                }
            });
        }

        root.find('.mainContainer').bind('mousedown', function () {
            if (data!=undefined && data.includes('phoneOnly')) {
                if (document.documentElement.clientWidth <= 850) {
                    enabled = !enabled;
                    updateState();
                }
            } else {
                enabled = !enabled;
                updateState();
            }
        });

        function updateState() {
            if (enabled) {
                icon.addClass('dropdownActive');
                dropdown.css({
                    display: 'block'
                });
            } else {
                icon.removeClass('dropdownActive');
                dropdown.css({
                    display: 'none'
                });
            }
        }
    }

    // Slider
    for (let item of $('.sliderContainer')) {
        let root = $(item);
        let scrollItems = root.find('.slider').find('.itemToScroll');
        let arrows = root.find('.arrowContainer').children();
        let scrollNum = 0;
        let scrollAvailable = true;
        root.find('.slider').css({
            gridTemplateColumns: `repeat(${scrollItems.length},100%)`
        });
        if (scrollItems.length <= 1) {
            arrows.css({
                display: 'none'
            });
        }
        arrows.bind('mousedown', function () {
            if (scrollAvailable == true) {
                let index = $(this).parent().index();
                if (index == 0) {
                    scroll('left')
                } else {
                    scroll('right')
                }
            }

            function scroll(direction) {
                scrollAvailable = false;
                if (direction == 'right' && scrollNum < scrollItems.length - 1) {
                    scrollNum++;
                } else if (direction == 'right' && scrollNum >= scrollItems.length - 1) {
                    scrollNum = 0;
                }
                if (direction == 'left' && scrollNum > 0) {
                    scrollNum--;
                } else if (direction == 'left' && scrollNum <= 0) {
                    scrollNum++;
                }
                root.find('.slider').animate({
                    scrollLeft: $(scrollItems[scrollNum]).position().left
                }, 800);
                setTimeout(function () {
                    scrollAvailable = true
                }.bind(this), 850);
            }
        });
    }

    // Collapse navigation
    $('.navbar-main .collapse').on('hide.bs.collapse', function () {
        var $this = $(this);
        $this.addClass('collapsing-out');
    });

    $('.navbar-main .collapse').on('hidden.bs.collapse', function () {
        var $this = $(this);
        $this.removeClass('collapsing-out');
    });

    $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
        var $this = $(this).find('.dropdown-menu');

        $this.addClass('close');

        setTimeout(function () {
            $this.removeClass('close');
        }, 200);

    });

    // Datepicker
    $('.datepicker')[0] && $('.datepicker').each(function () {
        $('.datepicker').datepicker({
            disableTouchKeyboard: true,
            autoclose: false
        });
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function () {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });

    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

});