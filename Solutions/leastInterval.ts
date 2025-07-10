/**
 *
 * @param tasks
 * @param n
 */

function leastInterval(tasks: string[], n: number): number {
  const frequency = new Array(26).fill(0);
  for (const task of tasks) {
    frequency[task.charCodeAt(0) - "A".charCodeAt(0)]++;
  }

  const maxFreq = Math.max(...frequency);
  let countMaxFreq = 0;
  frequency.forEach((value) => {
    value === maxFreq && countMaxFreq++;
  });

  const time = (maxFreq - 1) * (n + 1) + countMaxFreq;

  return Math.max(time, tasks.length);
}
