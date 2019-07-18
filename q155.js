/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
  this.size = -1
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)

  if (this.size === -1) {
    this.minStack.push(x)
  } else {
    this.minStack.push(Math.min(this.minStack[this.size], x))
  }

  this.size += 1
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.size -= 1
  this.minStack.pop()
  return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.size]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.size]
};
