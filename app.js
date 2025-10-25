console.log("taqqoslash operatrlari")
// taqqoslash operatrlari
console.log(Boolean(10==10))
console.log(Boolean(10=="10"))
console.log(Boolean(10==="10"))

console.log(Boolean(10!="10"))
console.log(Boolean(10!=="10"))

console.log(Boolean(10<10))
console.log(Boolean(10>9))

console.log(Boolean(10<=10))
console.log(Boolean(10>=10))
// mantiqiy operatrlari
console.log("mantiqiy operatrlari")
console.log(Boolean(10<=10 && 5>9))
console.log(Boolean(10<=10 || 5>9))

console.log(Boolean(!(10<=10 && 5>9)))
console.log(Boolean(!(10<=10 || 5>9)))
// belgilash operatrlari
console.log("belgilash operatrlari")
let x = 5
console.log(x)

x += 5
console.log(x)


let y = 5
console.log(y)

y -= 5
console.log(y)

let z = 5
console.log(z)

z /= 5
console.log(z)

let a = 5
console.log(a)

a *= 5
console.log(a)
// shart operatrlari
console.log("shart operatrlari");

let yosh = 16
let natija = (yosh >= 18) ? "ish laydi " : "hali yosh"
console.log(natija);

if (yosh >= 18) {
    console.log("ish laydi");   
}
else{
    console.log("hali yosh")
}
// typeof
console.log("typeof");

console.log(typeof yosh);
console.log(typeof natija);
