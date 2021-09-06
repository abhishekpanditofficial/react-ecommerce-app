import moment from "moment";

class Order {
  constructor(id,items,totalAmount,date){
      this.id=id;
      this.items=items;
      this.totalAmount=totalAmount;
      this.date=date;
  }

   get readableDate() {
       /* return this.date.toLocaleDateString('en-EN',{
        year:'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
       }); */
       // we will not use this method since android doesnot support this formatting

       return moment(this.date).format('MMMM Do YYYY,hh:mm');
   }
}

export default Order;