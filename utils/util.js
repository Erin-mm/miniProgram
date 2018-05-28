const weekStr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const isLeapYear = year => {
  return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)
}

const getMonthDays = (year, month) => {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28)
}

const getWeekNumber = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  let days = date.getDate()

  //那一天是那一年中的第多少天
  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i)
  }

  //那一年第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay() || 7

  var week = null
  if (yearFirstDay == 1) {
    week = Math.ceil(days / 7) // Math.ceil(days / yearFirstDay)
  } else {
    days -= (7 - yearFirstDay + 1)
    week = Math.ceil(days / 7) + 1
  }

  return week
}

const pad = (val, len) => {
  val = val + ''
  len = len || 2
  while (val.length < len) {
    val = '0' + val
  }
  return val
}

const formatDate = (date, mask) => {
  mask = mask || 'yyyy-mm-dd'
  const token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|"[^"]*"|'[^']*'/g
  const d = date.getDate(),
    m = date.getMonth(),
    y = date.getFullYear(),
    H = date.getHours(),
    _M = date.getMinutes(),
    s = date.getSeconds(),
    L = date.getTime(),

    flags = {
      d: d,
      dd: pad(d),
      m: m + 1,
      mm: pad(m + 1),
      yy: String(y).slice(2),
      yyyy: y,
      H: H,
      M: _M,
      S: s,
      L: pad(L, 3)
    }

  return mask.replace(token, function ($0) {
    return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1)
  })

}
const createMonth = date => {
  const _y = date.getFullYear()
  const _m = date.getMonth()
  const min = new Date(_y, _m, 0).getDay()
  const month = []

  for (let i = 0; i < 42; i++) {
    let d_item = new Date(_y, _m, (i - min))

    let _dstr = formatDate(d_item)
    let obj = {
      o: d_item,
      k: _dstr,
      i: parseInt(_dstr.replace(/-/gi, ''), 10),
      y: d_item.getFullYear(),
      m: d_item.getMonth() + 1,
      d: d_item.getDate(),
      w: d_item.getDay(),
      th: getWeekNumber(d_item),
      ww: weekStr[d_item.getDay()]
    }

    month.push(obj)
  }

  return month
}

module.exports = {
  formatTime,
  formatNumber,
  isLeapYear,
  getMonthDays,
  getWeekNumber,
  pad,
  formatDate,
  createMonth,
}
