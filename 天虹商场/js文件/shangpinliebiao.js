class Shangpinliebiao{
    constructor(options){
        this.cont = options.cont;
        this.url = options.url;

        this.load();

        this.addEvent();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            console.log(res)
            that.display();
        })
    }
    
    display(){
        var str = "";
        for(var i =0;i<this.res.length;i++){
            str += `<div class="box" index="${this.res[i].goodsId}">
            <a href="http://localhost/tian/paging/magnifier.html"><img src="${this.res[i].img}" alt=""></a>
            <p>${this.res[i].name}</p>
                        <span>${this.res[i].price}</span>
                        <input type="button" value="加入购物车" class="btn" >
                    </div>`


        }
        this.cont.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.cont.onclick = function(eve){
            if(eve.target.className == "btn"){
               that.id = eve.target.parentNode.getAttribute("index");
                that.setCookie();
            }
        }
    }
    setCookie(){
       this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if(this.goods.length > 0){
             this.goods.push({
                 id:this.id,
                 num:1
             })
        }else{
            var onoff = true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id === this.id){
                    this.goods[i].num++;
                    onoff = false;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                }) 
            }
        }
        setCookie("goods",JSON.stringify(this.goods));

    }
}

new Shangpinliebiao({
    url:"http://localhost/天虹商场/json文件/shangpinliebiao.json",
    cont:document.querySelector(".cont")
})
