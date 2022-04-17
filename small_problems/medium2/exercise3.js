function triangle(side1, side2, side3) {
  let order = [side1, side2, side3].sort();
  if ((order[0] + order[1] + order[2]) < 180 || order[0] <= 0) {
    return 'invalid';
  }

  if (order.filter(angle => angle > 90).length === 1) {
    return 'obtuse';
  } else if (order.filter(angle => angle < 90).length === 3) {
    return 'acute';
  } else {
    return 'right';
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"