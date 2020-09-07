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

 function actionApplyer(str, ...arr){
    if (arr != []) 
    return arr()(str)
    else 
    return str;
  }
arrayOfTransforms = [
          function(a){ return a * 2 },
          function(a){ return a + 1000},
          function(a){ return a % 7 }
        ]
        expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
