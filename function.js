
function double(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num%2==1){
            console.log(num,num*2);
        }
        
    }
}
var nums =[15,5,22,77,66,88,8,33,2,9];
double(nums);