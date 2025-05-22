import { NameConfiguration } from "./name-configuration.interface";
/**
 * @description
 * @export
 * @interface NameOptions
 * @template {string} [PrefixValue=string] 
 * @template {string} [NameValue=string] 
 * @template {string} [SuffixValue=string] 
 * @template {string} [Delimiter=string] 
 * @extends {Partial<NameConfiguration<PrefixValue, NameValue, SuffixValue, Delimiter>>}
 */
export interface NameOptions<
  PrefixValue extends string = string,
  NameValue extends string = string,
  SuffixValue extends string = string,
  Delimiter extends string = string
> extends Partial<NameConfiguration<PrefixValue, NameValue, SuffixValue, Delimiter>> {}
