function selectionSort (arr){
for(let i = 0;i<arr.length;i++){
 let lowest = i;
 for(let j = i+1;j<arr.length;j++){
  if(arr[j]<arr[lowest]){
   lowest = j;
  }
 }
 if(i !== lowest){
  let temp = arr[i];
  arr[i] = arr[lowest];
  arr[lowest] = temp;
  console.log(arr);
 }
}
return arr;
}

selectionSort([34,32,3,2,67,12]);
