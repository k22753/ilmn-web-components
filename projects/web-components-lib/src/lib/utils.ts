export class Utils {

  public static toBoolean(value: any): boolean {
    return value != null && `${value}`.toLowerCase() !== 'false';
  }
}
