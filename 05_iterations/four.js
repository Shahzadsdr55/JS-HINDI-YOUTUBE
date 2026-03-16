const myObject = {
    js: 'javascript' ,
    cpp: 'C++' ,
    rb: 'ruby' ,
    swift: 'swift of'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const progeramming = ["js", "rb", "py", "java", "cpp"]

for (const key in progeramming) {
    // console.log(progeramming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "UNITED STATE OF AMARICA")
map.set('FR', "FRANCE")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}

