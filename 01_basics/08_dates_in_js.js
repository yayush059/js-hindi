// const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getFullYear())
// console.log(myDate.getHours())
// console.log(myDate.getMilliseconds())
// console.log(myDate.getMinutes())
// console.log(myDate.getMonth())
// console.log(myDate.toTimeString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

// let mycreatedDate = new Date(2023, 13, 23)
// // console.log(mycreatedDate)
// console.log(mycreatedDate.toDateString())

// let mycreatedDate1 = new Date(2023, 5, 25,5,3)
// console.log(mycreatedDate1.toLocaleString())

//let mycreatedDate2 = new Date("2024-08-5")      //YYYYMMDD,  MMDDYYYY
// console.log(mycreatedDate2.toLocaleString())

// let mytimestamp = Date.now()
// console.log(mytimestamp)

// let MyCreateDateTimeStamp = mycreatedDate2.getTime()
// console.log(MyCreateDateTimeStamp)
// console.log(MyCreateDateTimeStamp>mytimestamp)
// THIS IS used in projects to create timestamps to check if the date is after the tive date


//converting to seconds from miliseconds
// console.log(Date.now())        // this is in miliseconds
// console.log(Date.now()/10000)   // this will give decimal value
// console.log(Math.round(Date.now()/10000))

let newDate  = new Date()
console.log(newDate)
console.log(newDate.getDate())

//customized date formats

newDate.toLocaleString('default',{
    weekday: "long",
})


