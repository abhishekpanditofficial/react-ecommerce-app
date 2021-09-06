const INITIAL_STATE = {
    sections: [
      {
        title: 'Fruits',
        imageUrl: 'https://images.unsplash.com/photo-1465845075873-957c8326f63e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        id: 1,
        linkUrl: 'shop/fruits'
      },
      {
        title: 'Vegetables',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/04/14/14/47/farmers-market-1329008_1280.jpg',
        id: 2,
        linkUrl: 'shop/vegetables'
      },
      {
        title: 'Grocery',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/09/04/11/03/supermarket-435452_1280.jpg',
        id: 3,
        linkUrl: 'shop/grocery'
      },
      {
        title: 'Fooditems',
        imageUrl: 'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_1280.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/fooditems'
      },
      {
        title: 'Dryfruits',
        imageUrl: 'https://noroman.net/wp-content/uploads/2020/04/So-you-can-keep-the-nuts-in-good-condition.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/dryfruits'
      }
    ]
  };
  
  const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default directoryReducer;
