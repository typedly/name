// Interface.
import { NameAdfix } from '../interface';
/**
 * @description Represents a name configuration object with prefix, suffix, delimiter, and name properties.
 * @export
 * @interface NameConfiguration
 * @template {string} [PrefixValue=string] The type of `prefix` constrained by `string`. Defaults to `string`.
 * @template {string} [NameValue=string] The type of `name` constrained by `string`. Defaults to `string`.
 * @template {string} [SuffixValue=string] The type of `suffix` constrained by `string`. Defaults to `string`.
 * @template {string} [Delimiter=string] The type of `delimiter` constrained by `string`. Defaults to `string`.
 */
export interface NameConfiguration<
  PrefixValue extends string = string,
  NameValue extends string = string,
  SuffixValue extends string = string,
  Delimiter extends string = string
> extends 
  /**
   * @description The prefix placed at the beginning  of the `name`. Defaults to `string`.
   * @type {Pick<NameAdfix<PrefixValue, SuffixValue>, 'prefix'>}
   */
  Pick<NameAdfix<PrefixValue, SuffixValue>, 'prefix'>,

  /**
   * @description The suffix placed at the end of the `name`. Defaults to `string`.
   * @type {Pick<NameAdfix<PrefixValue, SuffixValue>, 'suffix'>}
   */
  Pick<NameAdfix<PrefixValue, SuffixValue>, 'suffix'> {

    /**
   * @description The delimiter placed between the `prefix` and `suffix`. Defaults to `string`.
   * @type {Delimiter}
   */
  delimiter: Delimiter,
  /**
   * @description The name placed between the `prefix` and `suffix`.
   * @type {NameValue}
   */
  name: NameValue,
  /**
   * @description The optional pattern to match the name. Defaults to `undefined`.
   * @type {RegExp | undefined}
   */
  pattern: RegExp | undefined
}
