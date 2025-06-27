let book = {
    title: 'JavaScript本格入門',
    price: 3800,
    publisher: '技術評論社',
};
console.log(book.title); // JavaScript本格入門
console.log(book['title']); // JavaScript本格入門
console.log(book.price); // 3800
console.log(book['price']); // 3800
console.log(book.publisher); // 技術評論社
console.log(book['publisher']); // 技術評論社

book.author = '山田祥寛';
console.log(book.author); // 山田祥寛

book.author = {
    name: '山田祥寛',
    adress: '東京都千代田区',
};
console.log(book.author.name); // 山田祥寛
console.log(book.author.adress); // 東京都千代田区
