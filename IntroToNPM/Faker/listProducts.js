var faker = require('faker');

console.log('================================');
console.log('Welcome to my shop!');
console.log('================================');

for (var i = 0; i < 10; i++) {
    console.log((i+1) + ". " + faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}