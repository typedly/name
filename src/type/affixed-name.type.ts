/**
 * @description Represents a name with adfixes.
 * @export
 * @template {string} PrefixValue The type of `prefix` constrained by `string`.
 * @template {string} NameValue The type of `name` constrained by `string`.
 * @template {string} SuffixValue The type of `suffix` constrained by `string`.
 * @template {string} [Delimiter=''] The type of `delimiter` constrained by `string`. Defaults to empty.
 */
export type AdfixedName<
  PrefixValue extends string,
  NameValue extends string,
  SuffixValue extends string,
  Delimiter extends string = ''
> =
  PrefixValue extends ''
    ? SuffixValue extends ''
      ? `${NameValue}`
      : `${NameValue}${Delimiter}${SuffixValue}`
    : SuffixValue extends ''
      ? `${PrefixValue}${Delimiter}${NameValue}`
      : `${PrefixValue}${Delimiter}${NameValue}${Delimiter}${SuffixValue}`;
