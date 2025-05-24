// Interface.
import { NameConfiguration } from "./name-configuration.interface";
/**
 * @description Represents a name configuration object with optional prefix, suffix, delimiter, and name properties.
 * The `NameOptions` interface extends the `Partial<NameConfiguration>` type, allowing for partial properties.
 * It is used to define the structure of an object that can be passed as an argument to functions or methods
 * that require a name configuration.
 * The `PrefixValue`, `NameValue`, `SuffixValue`, and `Delimiter` types are generic and default to `string`.
 * @export
 * @interface NameOptions
 * @template {string} [PrefixValue=string] The type of `prefix` constrained by `string`.
 * @template {string} [NameValue=string] The type of `name` constrained by `string`.
 * @template {string} [SuffixValue=string] The type of `suffix` constrained by `string`.
 * @template {string} [Delimiter=string] The type of `delimiter` constrained by `string`.
 * @extends {Partial<NameConfiguration<PrefixValue, NameValue, SuffixValue, Delimiter>>}
 */
export interface NameOptions<
  PrefixValue extends string = string,
  NameValue extends string = string,
  SuffixValue extends string = string,
  Delimiter extends string = string
> extends Partial<NameConfiguration<PrefixValue, NameValue, SuffixValue, Delimiter>> {}
