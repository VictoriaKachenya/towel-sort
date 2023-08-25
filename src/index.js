
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix===undefined){
    return [];
  }

  let result=[];
  for(let i=0; i<matrix.length;i++){
    if(i % 2==0){
      result[i]=matrix[i];
    }
    else if (i % 2!==0) {
      result[i]=matrix[i].reverse();
    }
  }
  let soleArr=[];
  for(let i=0; i<result.length; i++){
soleArr=soleArr.concat(result[i]);
  }
  return soleArr;
}