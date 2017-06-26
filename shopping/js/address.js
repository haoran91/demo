new Vue({
  el:'.container',
  data:{
    addressList:[
      {
        "addressId":"100001",
        "userName":"JackBean",
        "streetName":"北京市朝阳区朝阳公园1",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":true
      },
      {
        "addressId":"100002",
        "userName":"sanerfang",
        "streetName":"北京市朝阳区朝阳公园2",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":false
      },
      {
        "addressId":"100003",
        "userName":"WangZi",
        "streetName":"北京市朝阳区朝阳公园3",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":false
      },
      {
        "addressId":"100004",
        "userName":"XiaoShenYang",
        "streetName":"北京市朝阳区朝阳公园4",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":false
      },
      {
        "addressId":"100005",
        "userName":"JsdBo",
        "streetName":"北京市朝阳区朝阳公园5",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":false
      },
      {
        "addressId":"100006",
        "userName":"ZhenDe",
        "streetName":"北京市朝阳区朝阳公园6",
        "postCode":"100001",
        "tel":"15805485698",
        "isDefault":false
      }
    ],
    limitNum:3,
    currentIndex:0,
    shippingMethod:1,
    delFlag:false,
    mask:false,
    curProduct:'',
    add:false
  },
  mounted:function () {
    this.$nextTick(function () {

    });
  },
  methods:{
    loadLimit:function () {
      if(this.limitNum == 3 ){
        this.limitNum = this.addressList.length;
      }else{
        this.limitNum = 3;
      }
    },
    setDefault:function (addressId) {
      this.addressList.forEach(function (address,index) {
          if(address.addressId == addressId){
            address.isDefault = true;
          }else{
            address.isDefault = false;
          }
      })
    },
    delAddress:function () {
      this.delFlag = true;
      this.mask = true;
      this.curProduct = item;
    },
    delProduct:function () {
      let index = this.addressList.indexOf(this.curProduct);
      this.addressList.splice(index,1);
      this.delFlag = this.mask = false;
    }

  },
  computed:{
    filterAddress:function () {
      return this.addressList.slice(0,this.limitNum);
    }
  }
})
