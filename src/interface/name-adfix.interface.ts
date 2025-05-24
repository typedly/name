// Type.
import { AffixOptions } from "@typedly/affix";
/**
 * @description Represents adfix configuration object of optional prefix and suffix properties.
 * @export
 * @template {string} PrefixValue The type of `prefix` constrained by `string`.
 * @template {string} SuffixValue The type of `suffix` constrained by `string`.
 */
export interface NameAdfix<
  PrefixValue extends string,
  SuffixValue extends string
> {
  prefix?: PrefixValue | AffixOptions<PrefixValue>;
  suffix?: SuffixValue | AffixOptions<SuffixValue>;
};
