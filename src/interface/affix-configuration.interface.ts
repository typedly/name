/**
 * @description
 * @export
 * @interface AffixConfiguration
 * @template {string} [Value=string] 
 */
export interface AffixConfiguration<Value extends string = string> {
  value: Value;
  pattern: RegExp;
};
