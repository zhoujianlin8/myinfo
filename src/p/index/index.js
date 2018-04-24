
import './index.scss';
import Index from './mod/index';
import $ from 'zepto';
const page = {
    init(){
        this.view();
        this.bindEvent();
    },
    view(){
        $('body').append('hello world')
    },
    bindEvent(){

    }
};

$(function () {
    page.init();
});
