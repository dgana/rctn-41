let counter = {
  val: 0,
  result: function () {
    this.val++
  }
}

counter.result()
counter.result()
console.log(counter.val)

// var val = 1

// val++
// val += 1
// val = val + 1

// console.log(val)
