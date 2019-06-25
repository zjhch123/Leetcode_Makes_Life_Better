/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.frequence = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const index = this.frequence.indexOf(key)
    this.frequence.splice(index, 1)
    this.frequence.push(key)

    return this.cache.get(key)
  }

  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    const index = this.frequence.indexOf(key)
    this.frequence.splice(index, 1)
  } else if (this.cache.size === this.capacity) {
    const deleteIndex = this.frequence.shift()
    this.cache.delete(deleteIndex)
  }

  this.cache.set(key, value)
  this.frequence.push(key)
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */