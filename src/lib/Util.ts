export class Util {
  intro: 'util for common usage'

  constructor() {

  }

  /**
   * @bignumber   {math.js bignumber }
   * */
  public static transBigNumber(bignumber: any): any {
    return Number(bignumber.toString())
  }

  public static url2json(): any {
    let url =   arguments[0]||window.location.href
    let index = -1
    let str = ''
    let arr = []
    let length = 0
    let res: any = {};
    if (url.indexOf('?') != -1) {
      index = url.indexOf('?');
      str = url.substring(index + 1);
      arr = str.split('&');
      for (let i = 0; i < arr.length; i++) {
        let index = decodeURIComponent(arr[i].split('=')[0])
        res[index] = decodeURIComponent(arr[i].split('=')[1]);
      }
    } else {
      res = {};
    }
    return res;
  }

  public static json2url(obj: any) {
    if (obj) {
      return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
      }).join("&");
    } else {
      return "";
    }
  }
}