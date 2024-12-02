function solution(n) {
  let count = 0;


  // hour
  for (let hour = 0; hour <= n; hour++) {

    for (let minute = 0; minute < 60; minute++) {

      for (let second = 0; second < 60; second++) {
        const time = `${hour.toString().padStart(2, '0')}${minute.toString().padStart(2, '0')}${second.toString().padStart(2, '0')}`;

        if (time.includes(3)) {
          count++
        }
      }
    }
  }
}

solution(5)