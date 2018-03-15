var hashers = require('node-django-hashers');
//senha no banco 
// pbkdf2_sha256$36000$Fjy9L8Rawcvq$BIL/STN6j++8oHNhqNMg0ewqhh0fQrnr/HfMi+ys0Qc=
// nova
// pbkdf2_sha256$24000$3SSUqDYhgBI=$YTf6JmFrJTkpVWCY+NE0a8E8fOHPizYUknoRVs3QQ50=
// volta
// pbkdf2_sha256$24000$tTVCwwOinF0=$u3jlEz0qf3HUJNy8kRBIJbZJkzcoxfI1WUkFJDoLErY=

var h = new hashers.PBKDF2PasswordHasher();
var hash1 = h.encode("123456", h.salt());
console.log(hash1);
// console.log(h.verify("123456", hash1));

// var hash_password = "pbkdf2_sha256$36000$Fjy9L8Rawcvq$BIL/STN6j++8oHNhqNMg0ewqhh0fQrnr/HfMi+ys0Qc=";
 
// var hash_name = hashers.identifyHasher(hash1);
// console.log('HashName: ', hash_name);

// console.log(hashers.identifyHasher("pbkdf2_sha256$36000$Fjy9L8Rawcvq$BIL/STN6j++8oHNhqNMg0ewqhh0fQrnr/HfMi+ys0Qc="));

// var hash_algorithm = hashers.getHasher(hash_name);
// // console.log('HashAlgorithm: ', hash_name);
// console.log(hash_algorithm.verify("123456", hash_password)); // returns true 
// // console.log(hash_algorithm.verify("666544", hash_password)); // returns false