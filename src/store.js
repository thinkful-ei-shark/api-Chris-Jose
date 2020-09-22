<<<<<<< HEAD

=======
// import item from './item';
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
<<<<<<< HEAD
=======
  
  
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
};

// const findAndToggleChecked = function (id) {
//   const currentItem = this.findById(id);
//   currentItem.checked = !currentItem.checked;
// };

// const findAndUpdateName = function (id, name) {
//   try {
//     item.validateName(name);
//     const currentItem = this.findById(id);
//     currentItem.name = name;
//   } catch (e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };
<<<<<<< HEAD

function findAndUpdate(id, newData) {
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
}

=======
function findAndUpdate(id, newData){
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
}
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
<<<<<<< HEAD
=======
  // findAndToggleChecked,
  // findAndUpdateName,
>>>>>>> 8e39f40a9d6ea7208ee9234174ad9f8bd5804ee3
  findAndDelete,
  toggleCheckedFilter
};