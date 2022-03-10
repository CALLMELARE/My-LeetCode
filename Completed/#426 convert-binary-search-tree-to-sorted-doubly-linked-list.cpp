/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;

    Node() {}

    Node(int _val) {
        val = _val;
        left = NULL;
        right = NULL;
    }

    Node(int _val, Node* _left, Node* _right) {
        val = _val;
        left = _left;
        right = _right;
    }
};
*/
class Solution {
public:
    void dfs(Node *p){
        if(p==NULL)return ;
        dfs(p->left);
        if(pre!=NULL)pre->right=p;
        else head=p;
        p->left=pre;
        pre=p;
        dfs(p->right);
    }
    Node* treeToDoublyList(Node* root) {
        if(root==NULL)return NULL;
        dfs(root);
        head->left=pre;
        pre->right=head;
        return head;
    }
private:
    Node *pre,*head;
};