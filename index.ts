import Counter from '@bit/robw-es.test-one.counter';

let counter = new Counter(3);

counter.add(2);

console.log(counter.getCount());