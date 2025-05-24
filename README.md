
<a href="https://www.typescriptlang.org/">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=400&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    width="20%"
    title="@typedly/name - A collection of TypeScript packages for precise, type-safe development."
  />
</a>

## typedly/name

<!-- npm badge -->
[![npm version][typedly-npm-badge-svg]][typedly-npm-badge]
[![GitHub issues][typedly-badge-issues]][typedly-issues]
[![GitHub license][typedly-badge-license]][typedly-license]

**Version:** v1.0.0

A **TypeScript** type definitions package for name.

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - [Interfaces](#interfaces)
    - [`NameAdfix`](#nameadfix)
    - [`NameConfiguration`](#nameconfiguration)
    - [`NameOptions`](#nameoptions)
  - [Types](#types)
    - [`AdfixedName`](#adfixedname)
    - [`SafeDelimiter`](#safedelimiter)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

### Install peer dependencies

```bash
npm install @typedly/affix --save-peer
```

### Install the package

```bash
npm install @typedly/name --save-peer
```

## Api

```typescript
import {
  // Interface.
  NameAdfix, NameConfiguration, NameOptions,
  // Type.
  AdfixedName, SafeDelimiter
} from '@typedly/name';
```

### Interfaces

#### `NameAdfix`

[`name-adfix.interface.ts`](https://github.com/typedly/name/blob/main/src/interface/name-adfix.interface.ts)

```typescript
import { NameAdfix } from '@typedly/name';

const affix: NameAdfix<'app', 'item'> = {
  prefix: 'app',
  suffix: { value: 'item', pattern: /[^a-z0-9]/g }
};
```

#### `NameConfiguration`

[`name-configuration.interface.ts`](https://github.com/typedly/name/blob/main/src/interface/name-configuration.interface.ts)

```typescript
import { NameConfiguration } from '@typedly/name';

const fullNameConfig: NameConfiguration<'app', 'button', 'large', '-'> = {
  prefix: 'app',
  name: 'button',
  suffix: 'large',
  delimiter: '-',
  pattern: /[^a-z0-9]/gi
};
```

#### `NameOptions`

[`name-options.interface.ts`](https://github.com/typedly/name/blob/main/src/interface/name-options.interface.ts)

```typescript
import { NameOptions } from '@typedly/name';

const nameOpts: NameOptions<'app', 'card', 'primary', '-'> = {
  prefix: { value: 'app' },
  name: 'card',
  suffix: 'primary'
  // delimiter and pattern are optional
};

```

### Types

#### `AdfixedName`

[`affixed-name.type.ts`](https://github.com/typedly/name/blob/main/src/type/affixed-name.type.ts)

```typescript
import { AdfixedName } from '@typedly/name';

type ClassName = AdfixedName<'app', 'button', 'primary', '-'>;
// Result: "app-button-primary"

type IdName = AdfixedName<'', 'form', 'container', '_'>;
// Result: "form_container"
```

#### `SafeDelimiter`

[`safe-delimiter.type.ts`](https://github.com/typedly/name/blob/main/src/type/safe-delimiter.type.ts)

```typescript
import { NameAffix } from '@typedly/name';

const delimiter: SafeDelimiter = '--'; // allowed
// const badDelimiter: SafeDelimiter = '.'; // error: not assignable

```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © typedly ([license][typedly-license])

<!-- This package: typedly  -->
  <!-- GitHub: badges -->
  [typedly-badge-issues]: https://img.shields.io/github/issues/typedly/name
  [typedly-badge-forks]: https://img.shields.io/github/forks/typedly/name
  [typedly-badge-stars]: https://img.shields.io/github/stars/typedly/name
  [typedly-badge-license]: https://img.shields.io/github/license/typedly/name
  <!-- GitHub: badges links -->
  [typedly-issues]: https://github.com/typedly/name/issues
  [typedly-forks]: https://github.com/typedly/name/network
  [typedly-license]: https://github.com/typedly/name/blob/master/LICENSE
  [typedly-stars]: https://github.com/typedly/name/stargazers
<!-- This package -->

<!-- Package: typedly -->
  <!-- npm -->
  [typedly-npm-badge-svg]: https://badge.fury.io/js/@typedly%2Fname.svg
  [typedly-npm-badge]: https://badge.fury.io/js/@typedly%2Fname

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
