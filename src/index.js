import 'normalize.css';
import './index.css';

<<<<<<< HEAD
import $ from 'jquery';
import api from './api';
import store from './store';

=======

import api from './api';
import store from './store';
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
import shoppingList from './shopping-list';





const main = function () {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
<<<<<<< HEAD
=======
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
      api.getItems()
    .then(res => res.json())
    .then((items) => {
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
<<<<<<< HEAD
    
    api.getItems()
      .then(res => res.json())
      .then((items) => {
        items.forEach((item) => store.addItem(item));
        shoppingList.render();
      });
      
  const item = store.items[0];
  console.log('current name: ' + item.name);
  store.findAndUpdate(item.id, { name: 'barbaz' });
  console.log('new name: ' + item.name);

  
=======
    });

    const item = store.items[0];
console.log('current name: ' + item.name);
store.findAndUpdate(item.id, { name: 'barbaz' });
console.log('new name: ' + item.name);


>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
  shoppingList.bindEventListeners();
  shoppingList.render();



};

$(main);