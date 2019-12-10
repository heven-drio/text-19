class Commodity{
    constructor(){
        this.url="http://localhost/天虹商场/json文件/goods.json";
        this.right = document.querySelector(".mstj");
        this.load()
    }
    load(){
        var that = this;
       ajaxGet(this.url,function(res){
           that.res = JSON.parse(res);
        //    console.log(that.res)
        that.display();
       })
    }
    display(){
        var str="";
        for(var i=0; i<this.res.length;i++){
            str+=`
            <li><img src="${this.res[i].img}" style="width:100px; height="226px;" alt="">
            <p>"${this.res[i].p}"</p>
            <span>"${this.res[i].span}"</span>
            </li>
            `
            // console.log(str)
            this.right.innerHTML = str;
        }
    }
}
new Commodity;