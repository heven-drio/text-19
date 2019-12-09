class Diwuge{
    constructor(){
        this.url="http://localhost/天虹商场/json文件/goods4.json";
        this.right = document.querySelector(".cybj");
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
        <li>
            <a href="#"><img src="${this.res[i].img}" alt=""></a>
            <p>"${this.res[i].p}"</p>
            <span>"${this.res[i].span}"</span>
        </li>
            `
            // console.log(str)
            this.right.innerHTML = str;
        }
    }
}
new Diwuge;