import React from 'react';


const OrderList= ({order}) =>{
return(
    <div className='orderList'>
            <div className='account__containers__orders--date'>
                         {order.date}
            </div>
</div>
);
};




export default OrderList;