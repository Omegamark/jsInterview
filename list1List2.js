const list1 = [1,2,3,4,5];
const list2 = list1;
list1.push(6,7,8);

console.log(list2)

// List 2 should show 1-8. Since they are pointing to the same underlying array in memory.