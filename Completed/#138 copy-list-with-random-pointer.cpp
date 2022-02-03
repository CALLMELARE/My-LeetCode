/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;

    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution
{
public:
    Node *copyRandomList(Node *head)
    {
        if (head == NULL)
            return NULL;
        if (!nodeMap.count(head))
        {
            Node *newNode = new Node(head->val);
            nodeMap[head] = newNode;
            newNode->next = copyRandomList(head->next);
            newNode->random = copyRandomList(head->random);
        }
        return nodeMap[head];
    }

private:
    unordered_map<Node *, Node *> nodeMap;
};