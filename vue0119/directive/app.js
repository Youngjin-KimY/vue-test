var items = [
    {
        name:'연필',
        quantity:0,
        price:300
    },
     {
        name:'공책',
        quantity:0,
        price:400
    },
    {
        name:'지우개',
        quantity:0,
        price:500
    }
]

var vm = new Vue({
    el:'#app',
    data:{
        items:items
    },
    filters:{
        numberWithDelimiter: function(value){
            if(!value){
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1')
        }
    },
    methods:{
        doBuy:function(){
            alert(this.totalPriceWithTax + '원 판매됨!')
            this.items.forEach(element => {
                element.quantity = 0
            })
        }
    },
    computed:{
        totalPrice:function(){
            return this.items.reduce(function(sum,item){
                return sum+(item.price*item.quantity)
            },0)
        },
        totalPriceWithTax:function(){
            return Math.floor(this.totalPrice * 1.10)
        },
        canBuy:function(){
            return this.totalPrice >= 1000
        },
        errorMessageStyle : function(){
            return {
                border:this.canBuy ? '' : '1px solid red',
                color:this.canBuy ? '' : 'red'
            }
        }
    }
})
window.vm = vm