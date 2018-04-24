
class Index{
    constructor(options) {
        this.options = options;
        this.init()
    }
    init(){
        this.view();
        this.bindEvent();
    }
    view(){}
    bindEvent(){}
    destroy(){

    }
}
export default Index;
