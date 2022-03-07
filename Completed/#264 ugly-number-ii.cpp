class Solution {
public:
	int nthUglyNumber(int n) {
        set<double> s;
        double ans = 1;
        for (int i = 1; i < n; i++) {
            s.insert(ans * 2);
            s.insert(ans * 3);
            s.insert(ans * 5);
            ans = *s.begin(); s.erase(ans);
        }
        return ans;
    }	
};