// My soultion
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for nums1
    let p2 = n - 1; // Pointer for nums2
    let p = m + n - 1; // Pointer for the merged array
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--];
        } else {
            nums1[p--] = nums2[p2--];
        }
    }
    
    // If there are remaining elements in nums2, copy them to nums1
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }
};

// Copying the params from the problem
const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

// Calling the soultion function
merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]