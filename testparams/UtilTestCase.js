const UtilTestCase = {
  strikeCountTestCase:[
    ['123','321'],
    ['123','456'],
    ['123','623'],
    ['123','152'],
  ],

  ballCountTestCase:[
    ['123','321'],
    ['123','456'],
    ['123','623'],
    ['123','152'],
  ],

  strikeTestResult: [1,0,2,1],
  ballTestResult: [2,0,0,1],

  ValidationTestCase: ['123','112','12','e12','012'],
  ValidationTestResult: [true,false,false,false,false],

}

module.exports = UtilTestCase;