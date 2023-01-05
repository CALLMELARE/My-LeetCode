/*
 * @lc app=leetcode.cn id=27 lang=cpp
 *
 * [27] 移除元素
 */

// @lc code=start
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int count = 0;
        for(int i = 0; i < nums.size();i++){
            if(nums[i] == val){
                count++;
            }
            if(count > 0 && i+count<= nums.size()){
                nums[i]=nums[i+count];
            }
        }
        return count;
    }
};
// @lc code=end

