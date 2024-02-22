const express=require("express");
const app=express();
require("./conn");
// array all questions based on coding in javascript 
 console.log("hii this is abhishek yadav developer ");
 // distinct values
// let arr=[12,34,56,89,68,12,34];
//        for(let i=0;i<arr.length;i++){
//             let count=0;
//             for(let j=0;j<arr.length;j++){
//                 if(arr[i]==arr[j]){
//                     count++;
//                 }
//             }
//             if(count==1){
//                 console.log(arr[i]);
//             }
//        }         

// reverse elements
// let arr2=[12,4,5,65,78,90];
//   for(let i=arr2.length-1;i>=0;i--){
//     console.log(arr2[i]);    
//  }

//   let arr = [1, 2, 3, 2, 3, 4, 5, 
//     5, 6, 1, 1, 4, 5, 7, 8, 8];

// const count = {};

// for (let i = 0; i < arr.length; i++) {
// let ele = arr[i];
// if (count[ele]) {
//  count[ele] += 1;
// } else {
//  count[ele] = 1;
// }
// }
//console.log(count);
// fibonacci series
  // let a=0;
  // let b=1;
  // console.log(a," ",b);
  // let n=8;
  // for(let i=3;i<=n;i++){
  //   let c=a+b;
  //   console.log(c);
  //   a=b;
  //   b=c;

  // } 
  // let arr=[1,3,4,5];
  // let exp_elements=arr.length+1;
  // let total_sum=exp_elements*(exp_elements+1)/2;
  // let sum=0;
  // for(let i=0;i<arr.length;i++){
  //   sum=sum+arr[i];
  // }
  // console.log("missing elements is",total_sum-sum);
     
  // let arr=[12,8,7,6,4,5];
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i]%2==0)
  //   console.log(arr[i]);
  // }
    // let arr2=[2,1,7,9,5,3];
    // for(let i=0;i<arr.length;i++){
    //   for(let j=i+1;j<arr.length;j++){
    //     if(arr[i]>arr[j]){
    //       let temp=arr[i];
    //       arr[i]=arr[j];
    //       arr[j]=temp;
    //     }
    //   }
    //   console.log(arr2)
    // }
//  let string="amandeep";
//    for(let i=0;i<string.length;i++){
//     console.log(string[i]);
//    }
// console.log(string[4]);

// let arr=[12,4,7,11,13];
// let res=arr.filter(isPrime);
//  console.log(res);
//   function isPrime(num){
//       for( var i=2;i<num;i++){
//           if(num%i==0){
//               break;
//           }
//       }
//       if(i==num){
//           return num;
//       }
      
//   }



//  let arr=[2,7,6,8,9,11,19];
//  let res=arr.filter(isPrime);
//  console.log(res)
//   function isPrime(num){
//       for(let i=2;i<num;i++){
//           if(num%i==0){
//               return false;
//           }
//       }
//       return num;
//   }

// maP FUNCTION ALWAYS return the new array of same length 

// let arr=[12,23,24,25,29];
// let res=arr.map(isPrime);
// console.log(res);
// function isPrime(num){
//     for(var i=2;i<num;i++){
//         if(num%i==0){
//             break;
//         }
//     }
//     if(i===num){
//         return num;
//     }
// }

// let a=36;
// for(let i=1;i<=10;i++){
//     if(i*i==a){
//         console.log(i)
//     }
// }


// strings problems


// let str = "abhishek";
// let wordsArray = str.split('');
// console.log(wordsArray);

// let arr=[1,3,4,5,8,9];
// let newdata=78;
// let position=3;
// for(let i=arr.length-1;i>=0;i--){
    
//     if(i>=position){
//         arr[i+1]=arr[i];
//         arr[i]=newdata;
//     }
// }
// console.log(arr)
// let arr=[1,3,4,5,8,9];

// let position=2;
// for(let i=position;i<arr.length-1;i++){
//     arr[i]=arr[i+1];
    
// }
// arr.length=arr.length-1
// console.log(arr)

let arr=[7,8,3,1,2];
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);

// class HelloWorld {
//     public static void printSum(int i,int num,int sum){
//         if(i==num){
//             sum=sum+i;
//             System.out.println(sum);
//             return;
//         }
//          sum=sum+i;
//         printSum(i+1,num,sum );
//     }
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//         int num=5;
//         int sum=0;
//         int i=1;
//         printSum(i,num,sum);
//     }
// }




// class HelloWorld {
//     public static int findFact(int i,int num, int fact){
//         if(i==num){
//             fact=fact*i;
//             return (fact);
//         }
//         fact=fact*i;
//        return findFact(i+1,num,fact);
//     }
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
        
//         int n=5;
//         int i=1;
//         int fact=1;
//         int answer=findFact(i,n,fact);
//         System.out.println(answer);
//     } 
// }

// class HelloWorld {
//     public static void printRev(String str,int index){
//         if(index==0){
//             System.out.println(str.charAt(index));
//             return;
//         }
//         System.out.println(str.charAt(index));
//         printRev(str,index-1);
        
//     }
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//         String str="abcd";
//         int index=str.length()-1;
//         printRev(str,index);
//     }
// }





// class HelloWorld {
//     public static int first=-1;
//     public static int last=-1;
//     public static void findOccurence(String str,int index, char elem){
//         if(index==str.length()){
//             System.out.println(first);
//             System.out.println(last);
//             return;
//         }
//         char currChar=str.charAt(index);
//         if(currChar==elem){
//             if(first==-1){
//                 first=index;
//             }else{
//                 last=index;
//             }
//         }
        
//         findOccurence(str,index+1,elem);
        
//     }
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//         String str="abcdaba";
//         char elem='a';
        
//         findOccurence(str,0,'a');
//     }
// }

//move all the x to the ned of  strings

// class HelloWorld {
//     public static void main(String[] args) {
//         System.out.println("Hello, World!");
//         String str="abxcdxx";
//         int count=0;
//         char elem='x';
//         String newString="";
//         for(int i=0;i<str.length();i++){
//             if(str.charAt(i)==elem){
//                 count++;
//             }else{
//                 newString=newString+str.charAt(i);
//             }
//         }
//         for(int i=0;i<count;i++){
//             newString=newString+'x';
//         }
//         System.out.println(newString);
        
//     }
// }



// function removeDuplicates(str) {
//     let set = new Set();
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str.charAt(i);
//         if (!set.has(char)) {
//             set.add(char);
//             result += char;
//         }
//     }

//     return result;
// }

// let str = "hello";
// let result = removeDuplicates(str);
// console.log(result); // Output: helo



 app.listen(3000,function(){
     console.log("this server is running st 3000 port number");
 });