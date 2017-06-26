var vm = new Vue({
  el:'#app',
  data:{
    productList:[
      {
        "productId":"600100002115",
        "productName":"黄鹤楼香烟",
        "productPrice":19,
        "productQuantity":1,
        "productImage":"img/goods-1.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"打火机",
            "imgSrc":"img/part-1.jpg"
          },
          {
            "partsId":"10002",
            "partsName":"过滤嘴",
            "imgSrc":"img/part-1.jpg"
          }
        ]
      },
      {
        "productId":"600100002120",
        "productName":"加多宝",
        "productPrice":8,
        "productQuantity":5,
        "productImage":"img/goods-2.jpg",
        "parts":[
          {
            "partsId":"20001",
            "partsName":"吸管",
            "imgSrc":"img/part-2.jpg"
          }
        ]
      },
      {
        "productId":"600100002117",
        "productName":"金装黄鹤楼",
        "productPrice":25,
        "productQuantity":2,
        "productImage":"img/goods-1.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"打火机-1",
            "imgSrc":"img/part-1.jpg"
          },
          {
            "partsId":"10002",
            "partsName":"打火机-2",
            "imgSrc":"img/part-1.jpg"
          }
              ]
        }
      ],
    checkAllFlag:false,
    total: 0,
    delFlag:false,
    curProduct:''
  },
  filters:{
    formatMoney:function (value,type) {
      return "¥ " + value.toFixed(2) + ' ' + type;
    }
  },
  mounted:function (){
    this.$nextTick(function () {

    })
  },
  methods:{
    clacTotal:function () {
      this.total = 0;
      this.productList.forEach((item,index)=>{
        if(item.checked){
          this.total += item.productPrice * item.productQuantity;
        }
      })
    },
    changeMoney:function (product,way) {
      if(way > 0){
        product.productQuantity++;
      }else{
        product.productQuantity--;
        if(product.productQuantity < 1){
            product.productQuantity = 1;
        }
      }
      this.clacTotal();
    },
    selectedProduct:function (item) {
      if(typeof item.checked == 'undefined'){
        this.$set(item,'checked',true)
      }else{
        item.checked = !item.checked;
      }
      if(item.checked == false){
        this.checkAllFlag = false;
      }
      this.clacTotal();
    },
    checkAll:function (flag) {
      this.checkAllFlag = flag;
      this.productList.forEach((item,index)=>{
        if(typeof item.checked == 'undefined'){
          this.$set(item,'checked',flag)
        }else{
          item.checked = flag;
        }
      })
      this.clacTotal();
    },
    delConfirm:function (item) {
      this.delFlag = true;
      this.curProduct = item;
    },
    delProduct:function () {
      let index = this.productList.indexOf(this.curProduct);
      this.productList.splice(index,1);
      this.delFlag = false;
    }
  }
});
