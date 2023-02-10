

// for in, for loop



// let modifiedStr = '';
// for (let i = 0; i < str.length; i++) {

//     const element = str[i];
//     modifiedStr = element + modifiedStr;
// }


// str[i]; eta array na hoyew evabe access kra gelo kivabe?
// str.split('').reverse().join('');


// let text = "How are you doing today?";
// let myArray = text.split();
// console.log(myArray)


// slice(), endsWith(), replace(), splice(); join(), sort()




// জাভাস্ক্রিপ্টের split() মেথড যেকোনো স্ট্রিং এর উপর এপ্লাই করতে হয় । split() মেথড যেকোনো String কে split করে substrings গুলো নিয়ে নতুন একটি Array তৈরী করে রিটার্ন করে। original String কে কোনো ধরনের change করে না । এটা জাভাস্ক্রিপ্টের ECMAScript1 (ES1) এর feature । একে স্ট্রিং হেলপার মেথড ও বলা হয় ।

let text = "How are you doing today?";
let newArray = text.split();
console.log(newArray); // ["How are you doing today?"]

// এখানে স্ট্রিং কে নিয়ে একটা নতুন Array তৈরী হল। যেখানে Array এর একটা element হিসেবে আছে স্ট্রিং ।

// Syntax ঃ string.split(separator, limit)
// Parameters ঃ এই মেথড ২টা প্যারামিটার এক্সেপ্ট করে, তবে প্যারামিটার ২টা অপশনাল।

// separator => separator হিসেবে String অথবা regular expression দিতে পারেন। একটা String কে আপনি কি দিয়ে separate করতে চাচ্ছেন সেটার উপর নির্ভর করে।

text = "How are you doing today?";
newArray = text.split(' ');
console.log(newArray); // ['How', 'are', 'you', 'doing', 'today?']
// ধরেন, আমি এই স্ট্রিং কে 'স্পেস' দিয়ে split করতে চাই তাহলে separator হিসেবে " " দিলে সে পুরো স্ট্রিং এর মাঝে যত জায়গায় 'স্পেস' পাবে ততটা split ফেলবে । আর যদি separator হিসেবে যা দিব, তা যদি না পায় এই স্ট্রিং এর মাঝে তাহলে ডিফল্ট ভাবে কাজ করবে । 

text = "How are you doing today?";
newArray = text.split(',');
console.log(newArray); // ['How are you doing today?']
// এখানে আমি  separator হিসেবে স্ট্রিং এর মাঝে "কমা" দিয়ে দিলাম। এখন সে পুরো স্ট্রিং এর মাঝে "কমা" খুজবে। "কমা" খুজে পেলে split করবে আর না পেলে ডিফল্ট ভাবে কাজ করবে । 

// limit => আর লিমিট বলতে Array তে কয়টা element থাকবে সেটা বুঝায়। 

text = "How are you doing today?";
newArray = text.split(' ', 3);
console.log(newArray); // ['How', 'are', 'you']
// এখানে আমি লিমিট হিসেবে ৩ দিয়েছি। তাহলে এই স্ট্রিংকে " " split করে যেকয়টা substring করবে, শুধু প্রথম ৩টা substring নিয়ে নতুন একটা Array রিটার্ন করবে। আর লিমিট ০ করে দিলে Empty Array রিটার্ন করবে। 




const emptyString = "";

// string is empty and no separator is specified
console.log(emptyString.split());
// [""]

// string and separator are both empty strings
console.log(emptyString.split(emptyString));
// []









/****************************** slice() */
// JavaScript string are immutable
const name = "Kawsar";
console.log(name[0]);
name[0] = "J"
console.log(name)




// slice(start, end) => slice এর প্রথম প্যারামিটার হবে যেখান থেকে slice করা শুরু হবে সেটা । আর ২য় প্যারামিটার হবে যেখানে গিয়ে শেষ হবে তার আগ পর্যন্ত slice হবে। প্যারামিটার গুলো রিসিভ করে এরের ইন্ডেক্স নাম্বার তবে নেগেটিভ ভ্যালুর ক্রেত্রে ইন্ডেক্স নাম্বার ফলো করে না। 

// প্যারামিটার ২টা অপশনাল 
// start => 
// end=> end not included . Default is last element




// problem buji nai
// 53, 560, 209, 59, 28, 392 week 4.2 incomplete // week 5.2 radix sort incomplete
// 15





// And Operator 
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)
console.log(true && '')
console.log(true && ' ')
console.log(true && 'Hello')
console.log(false && 'Hello')
console.log(true && [])
console.log(true && {})

console.log(true && null)
console.log(false && null)

console.log(true && undefined)
console.log(false && undefined)

