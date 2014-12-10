var People = function (arr){
  for (var i = 0; i < arr.length; i++) {
    //capitalize first letter of string
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  this.names = arr;
};

People.prototype.getNames = function(){

  return this.names;
};

People.prototype.sort = function (){
  this.names = this.names.sort();
  return this.names;
};

