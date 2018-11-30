export class Util{
  intro:'util for common usage'
  constructor(){

  }
  /**
   * @bignumber   {math.js bignumber }
   * */
  public static transBigNumber(bignumber:any):any{
    return Number(bignumber.toString())
  }
}