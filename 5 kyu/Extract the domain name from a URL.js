// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const domainName = url =>
  url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];

//-----------------------------------------------------------------------------------------------------------------
console.log(domainName('http://google.com')); //google
console.log(domainName('http://google.co.jp')); //google
console.log(domainName('www.xakep.ru')); //xakep
console.log(domainName('https://youtube.com')); //youtube
console.log(domainName('https://www.ywhnzh-pc3ycvkw3m.biz/warez/')); //ywhnzh-pc3ycvkw3m
