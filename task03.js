function shortestTime(n, m, a, b, c, d) {
  if (n === 0) {
    return 0;
  } else if (n !== m) {
    let floorDiff = Math.abs(n - m);
    let walk = floorDiff * d;
    let stairs = n * d;
    let elevator = floorDiff * a + n * a + b + c + b;
    if (n > m) {
      let elevatorWithWalk = walk + m * a + b + c + b;
      if (elevator <= stairs && elevator <= elevatorWithWalk) {
        return elevator;
      } else if (stairs <= elevator && stairs <= elevatorWithWalk) {
        return stairs;
      } else {
        return elevatorWithWalk;
      }
    } else if (n < m) {
      let elevatorWithWalk = walk + n * a + b + c + b;
      if (elevator <= stairs && elevator <= elevatorWithWalk) {
        return elevator;
      } else if (stairs <= elevator && stairs <= elevatorWithWalk) {
        return stairs;
      } else {
        return elevatorWithWalk;
      }
    }
  } else if (n === m) {
    let elevator = n * a + b + b + c;
    let stairs = n * d;
    return elevator > stairs ? stairs : elevator;
  }
}
// For n = 4, m = 5 and speeds = [1,2,3,10], the output should be 12.
// John go downstairs by using the elevator:
// 1 + 2 + 3 + 4 + 2 = 12
console.log(shortestTime(4, 5, 1, 2, 3, 10));

// For n = 0, m = 5 and speeds = [1,2,3,10], the output should be 0.
// John is already at 0 floor, so the output is 0.
console.log(shortestTime(0, 5, 1, 2, 3, 10));

// For n = 4, m = 3 and speeds = [2,3,4,5], the output should be 20.
// John go downstairs by walking:
// 5 x 4 = 20
console.log(shortestTime(4, 3, 2, 3, 4, 5));

// For n = 7, m = 6 and speeds = [3,1,1,4] the output should be 25.
// John walks down 1 floor and takes the elevator from there.
// 1×4 + 1 + 1 + 6×3 + 1 = 25
// Pure walk would have taken 7×4 = 28; pure elevator would have taken 1×3 +
// 1 + 1 + 7×3 + 1 = 27.
console.log(shortestTime(7, 6, 3, 1, 1, 4));

//EXTRA CASES
//For m and n = 4 and speeds = [1,2,3,10], the output should be 11. Elevator would give output 11 and stairs would give output 40.
// John takes the elevator.
console.log(shortestTime(4, 4, 1, 2, 3, 10));

//For n = 4, m = 5 and speeds = [3,2,3,7], the output should be 22. Elevator would give output 22, stairs would give output 28 and
// elevator with stairs would give output 26.
// John takes the elevator.
console.log(shortestTime(4, 5, 3, 2, 3, 7));
