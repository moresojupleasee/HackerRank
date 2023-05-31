const timeConversion = (s) => {
  let time = s.substring(0, s.length - 2) // extracted time
  let part = s.substring(s.length - 2) // extracted AM/PM
  time = time.split(':').map(Number) // parseInt
  if (part === 'PM' && time[0] === 12) time[0] = 12
  if (part === 'PM' && time[0] !== 12) time[0] = (time[0] + 12) % 24
  if (part === 'AM' && time[0] === 12) time[0] = 0
  return time
    .map(String)
    .map((str) => str.padStart(2, '0')) // formatting strings,padding of 0 for target length = 2.
    .join(':')
}
console.log(timeConversion('07:05:45PM'))
