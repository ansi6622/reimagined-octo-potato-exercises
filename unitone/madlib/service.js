angular.module('madlibsapp')
.service('madservice', [function(){
  var _data = {};
  this.getData = function(){
    return _data;
  }
  this.changeData = function(bitsODataLibs){
    console.log(bitsODataLibs);
    _data = bitsODataLibs;
  }
  this.reset = function(){
    _data = {};
  }
}])
