/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adjacencyList = buildAdjacencyList(numCourses, prerequisites);
  const visited = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(adjacencyList, i, visited)) {
      return false;
    }
  }

  return true;
};
function buildAdjacencyList(numCourses, prerequisites) {
  const adjacencyList = new Array(numCourses).fill(null).map(() => []);

  for (const [course, prerequisite] of prerequisites) {
    adjacencyList[course].push(prerequisite);
  }

  return adjacencyList;
}

function dfs(adjacencyList, course, visited) {
  if (visited[course] === 1) {
    return false;
  }

  if (visited[course] === -1) {
    return true;
  }

  visited[course] = 1;

  for (const prerequisite of adjacencyList[course]) {
    if (!dfs(adjacencyList, prerequisite, visited)) {
      return false;
    }
  }

  visited[course] = -1;

  return true;
}
// @lc code=end
