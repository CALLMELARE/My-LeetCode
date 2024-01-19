/*
 * @lc app=leetcode.cn id=1396 lang=javascript
 *
 * [1396] 设计地铁系统
 */

// @lc code=start

var UndergroundSystem = function () {
  this.checkIns = new Map();
  this.travelTimes = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkIns.set(id, { stationName, t });
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const checkInData = this.checkIns.get(id);
  const travelTime = t - checkInData.t;
  const key = `${checkInData.stationName}-${stationName}`;

  if (!this.travelTimes.has(key)) {
    this.travelTimes.set(key, { totalTime: 0, count: 0 });
  }

  const totalTime = this.travelTimes.get(key).totalTime + travelTime;
  const count = this.travelTimes.get(key).count + 1;

  this.travelTimes.set(key, { totalTime, count });
  this.checkIns.delete(id);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const key = `${startStation}-${endStation}`;
  const { totalTime, count } = this.travelTimes.get(key);
  return totalTime / count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end
