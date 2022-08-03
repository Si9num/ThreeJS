class IndexedMap {
  obj = {};
  set(key, value) {
    this.obj[key] = value;
    console.log(this.obj);
  }
  has(key) {
    return this.obj.hasOwnProperty(key);
  }

  get(key) {
    for (let i in this.obj) {
      return (i = key ? this.obj[key] : false);
    }
  }

  remove(key) {
    for (let i in this.obj) {
      i = key ? delete this.obj[key] : undefined;
    }
  }
}

let map = new IndexedMap();
map.set(1, 1);
map.set(2, 2);
map.has(1);
