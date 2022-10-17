const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(data) {
    this.data = data;
    this.treeRoot = null;
    this.left = null;
    this.right = null;
  }

  root() {
    let treeRoot = this.treeRoot;
    if (!treeRoot) {
    return null;
    }
    else {
      return treeRoot;
    }
  }

  add(data) {
      this.root = addWithin(this.root, data);
  
      function addWithin(node, data) {
        if (!node) {
          return new Node(data);
        }
  
        if (node.data === data) {
          return node;
        }
  
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
  
        return node;
    }
  
  }

  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return findWithin(this.root, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ?
        findWithin(node.left, data) :
        findWithin(node.right, data);
    }
  }

  remove(data) {
    
  }

  min() {
    
  }

  max() {
    
  }
}

module.exports = {
  BinarySearchTree
};


const tree = new BinarySearchTree();
tree.add(9);
      tree.add(14);
      tree.add(54);
      tree.add(2);
      tree.add(6);
      tree.add(8);
      tree.add(31);
      tree.add(1);
console.log(tree.has(54));