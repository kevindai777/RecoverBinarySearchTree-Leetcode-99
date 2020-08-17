//Objective is, given two values in a BSt are incorrect, to recover the
//correct BST

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 6)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 2)
tree.addRightNode(tree.root.left, 4)


//O(n) where n is the number of nodes in the BST
//We do a BFS inorder traversal to find the two nodes that are out of order

let root = tree.root

let stack = []
    
//'x' represents the first out of order node
//'y' represents the second out of order node
//'prev' represents the predecessor
let x = null, y = null, prev = null

while (stack.length > 0 || root) {
    while (root) {
        stack.push(root)
        root = root.left
    }
    
    root = stack.pop()
    
    //In our inorder traversal, it must be in ascending order
    if (prev != null && prev.val > root.val) {
        y = root
        
        //If x is marked already, don't replace it
        //Else, just mark it with the previous node
        if (x == null) {
            x = prev
        } else {
            break
        }
    }
    
    prev = root
    root = root.right
}

swap(x, y)

function swap(node1, node2) {
    let temp = node1.val 
    node1.val = node2.val 
    node2.val = temp
}