import tabs from './modules/tabs';
import {openModal} from './modules/modal';
import modal from './modules/modal';
import calc from './modules/calc';
import forms from './modules/forms';
import timer from './modules/timer';
import cards from './modules/cards';
import slide from './modules/slide';


window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);


    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    forms('form', modalTimerId);
    timer('.timer','2020-06-11');
    cards();
    slide({
        slide: '.offer__slide',
        container: '.offer__slider',
        nexArrow: '.offer__slider-next',
        prev: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});