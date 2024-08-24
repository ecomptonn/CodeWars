function isValidWalk(walk) {
    const counter = {n:0 , s:0, w:0, e:0};
    walk.forEach((direction) => counter[direction]++);
    return walk.length === 10 && counter.n == counter.s && counter.w === counter.e;
  }