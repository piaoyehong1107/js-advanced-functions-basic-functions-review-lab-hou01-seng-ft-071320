function saturdayFun(act="roller-skate"){
  return `This Saturday, I want to ${act}!`;
}

function mondayWork(act="go to the office"){
  return `This Monday, I will ${act}.`
}

function wrapAdjective(str="*") {
  return function(par="special") {
    return `You are ${str}${par}${str}!`;
    }
}

const Calculator={
  add: function add(){
    return 1 + 3
  },
  subtract: function subtract(){
    return 1 - 3
  },
   multiply: function multiply(){
    return 1 * 3
  },
   divide: function divide(){
    return 10 / 5
  }
}


 function actionApplyer(str, arr) {
  let a = str

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }

  return a
}

 function actionApplyer(start, ray) {
  let a = start
  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}

