class Lppcx{
    constructor(){
        this.url="http://localhost/天虹商场/json文件/Lppcx.json";
        this.right = document.querySelector(".ppcx");
        
        this.load()
    }
    load(){
        var that = this;
       ajaxGet(this.url,function(res){
           that.res = JSON.parse(res);
           console.log(0)
        that.display();
       })
    }
    display(){
        var str="";
        for(var i=0; i<this.res.length;i++){
            str+=`
            <li><img src="${this.res[i].img}" alt="">
            </li>
            `
            // console.log(str)
            this.right.innerHTML = str;
        }
    }
}
new Lppcx;