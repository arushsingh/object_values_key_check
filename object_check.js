var obj = {
   key1: 'value1',
   key2: '',
   key3: 'value3',
   key4: 'value4'
};

var value = Object.values(obj);
var key = Object.keys(obj);

function check(test){
  for (let i = 0 ; i < test.length ; i++){
     if(test[i] === ''){
       alert(`index ${key[i]} is empty`);
       console.log('test it buddy');
     }
    console.log('DID it do anything');
  }
  console.log("test");
}

check(value);
