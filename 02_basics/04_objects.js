// const tinderUser = new Objects()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
            Userfullname: {
                firstname: "Shahzad",
                lastname: "Khan"
            }
        }
    }

// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email1: "s1@gmail.com"
    },
    {
        id: 2,
        email2: "s2@gmail.com"
    },
    {
        id: 3,
        email3: "s3@gmail.com"
    },
]

users[1].email1
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shahzad"
}

// course.courseInstructor

const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "shahzad",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]