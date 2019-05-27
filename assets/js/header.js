"use strict";
$(document).ready(function () {
    
    /* PC CATEGORIES */
    var pcHeaderCategoriesState = false;
    $('#menuOpenDiv').bind('mousedown', function () {
        pcHeaderCategoriesState=!pcHeaderCategoriesState;
        if(pcHeaderCategoriesState){
            $('#menuOpenDiv').find('.categoriesClose').css({display: 'block'});
            $('#menuOpenDiv').find('.categoriesOpen').css({display: 'none'});
            $('#headerCategoriesContainer').css({display: 'flex'});
        }
        else {
            $('#menuOpenDiv').find('.categoriesClose').css({display: 'none'});
            $('#menuOpenDiv').find('.categoriesOpen').css({display: 'block'});
            $('#headerCategoriesContainer').css({display: 'none'});
        }
    });
    
    /* PC SEARCH */
    $('#desktopSearcInput').bind('focus', function () {
        pcHeaderCategoriesState = false;
        $('#menuOpenDiv').find('.categoriesClose').css({display: 'none'});
        $('#menuOpenDiv').find('.categoriesOpen').css({display: 'block'});
        $('#headerCategoriesContainer').css({display: 'none'});
        $('#desktopSearch').css({display: 'grid'});
    });
    $('#desktopSearcInput').bind('blur', function () {
        $('#desktopSearch').css({display: 'none'});
    });


    /* Mobile menu */
    $('#optionsMenuToogler').bind('mousedown', function () {
        $('#phoneMenu').css({display: 'grid'});
    });
    $('.phoneCategories').bind('mousedown', function () {
        $('#phoneMenu').css({display: 'grid'});
    });
    $('#phoneMenuCloseButton').bind('mousedown', function () {
        $('#phoneMenu').css({display: 'none'});
    });

    /* Mobile Search */
    $('#searchInputEnabler').bind('focus', function () {
        $('#phoneSearchContainer').css({display: 'grid'});
        $('#mainSearchInput').focus();
    });
    $('#searchCloseButton').bind('mousedown', function () {
        $('#phoneSearchContainer').css({display: 'none'});
    });
    $('#searchRemoveValue').bind('mousedown', function () {
        $('#mainSearchInput')[0].value='';
        $('.presearchBlock').css({display: 'block'});
        $('#mainSearchContainer').css({display: 'none'});
        $('#searchNotFound').css({display: 'none'});
        setTimeout(function(){$('#mainSearchInput').focus()},1);
    });
    $('#mainSearchInput').bind('input', function () {
        let input = this.value;
        if(input.length>=1){
            $('#searchRemoveValue').css({display: 'block'});
            $('#bottomLink').css({display: 'grid'});
        }
        else {
            $('#searchRemoveValue').css({display: 'none'});
            $('#bottomLink').css({display: 'none'});
        }
        if(input.length>=1 && input.length<5){
            $('#mainSearchContainer').css({display: 'block'});
            $('.presearchBlock').css({display: 'none'});
            $('#searchNotFound').css({display: 'none'});
        }
        else {
            $('.presearchBlock').css({display: 'block'});
            $('#mainSearchContainer').css({display: 'none'});
            $('#searchNotFound').css({display: 'block'});
        }
    });
});