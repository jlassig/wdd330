//from video:  https://www.youtube.com/watch?v=cRHQNNcYf6s

export default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

export function printName(user) {
  console.log(`User's name is ${user.name}`)
}

export function printAge(user) {
  console.log(`User is ${user.age} years old`)
}

////either export down here like this:  Or inline like above
// export default User
//export {printName, printAge}
