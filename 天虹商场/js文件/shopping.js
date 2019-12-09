class Car{
    constructor(options){
        this.url = options.url;
        this.tbody = options.tbody;
        this.load();
        this.addEvent();
        
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.getCookie();
        })
    }
    getCookie(){
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        this.display();
    }
   display(){
         var str = "";
         for(var i=0;i<this.res.length;i++){
             for(var j=0;j<this.goods.length;j++){
                 if(this.res[i].goodsId === this.goods[j].id){
                     str += `<tr index="${this.goods[j].id}">
                                <td><input type="checkbox" class="te"></td>
                                <td><img src="${this.res[i].img}" alt=""></td>
                                <td><p>${this.res[i].name}</p></td>
                                <td>${this.res[i].price}</td>
                                <td></td>
                                <td><input type="number"" min="1"></td>
                                <td><span>删除</span></td>
                            </tr>`
                    }
             }
         }

         this.tbody.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.tbody.addEventListener("click",function(eve){
            if(eve.target.tagName == "SPAN"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                eve.target.parentNode.parentNode.remove();
                that.removeCookie();
            }
        })
        this.tbody.addEventListener("input",function(eve){
            if(eve.target.tagName == "INPUT"){
                that.id = eve.target.parentNode.parentNode.getAttribute("index");
                that.value = eve.target.value;
                that.changeCookie();
            }
        })
    }
    removeCookie(){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id === this.id){
                this.goods.splice(i,1);
            }
        }
        setCookie("goods",JSON.stringify(this.goods))
    }
    changeCookie(){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id === this.id){
                this.goods[i].num =this.value;
            }
        }
        setCookie("goods",JSON.stringify(this.goods))
    }

}
new Car({
    url:"http://localhost/天虹商场/json文件/shangpinliebiao.json",
    tbody:document.querySelector("tbody")
})
