function ziplist(list1, list2) {
  const newlist = [];
  for (let i = 0; i < list1.length; i++) {
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}

function ziplistsimple(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'b'];

console.log(ziplist(list1, list2));
console.log(ziplistsimple(list1, list2));
