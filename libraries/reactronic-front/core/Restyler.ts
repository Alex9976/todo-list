// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2021 Yury Chetyrko <ychetyrko@gmail.com>
// MIT License: https://raw.githubusercontent.com/nezaboodka/reactronic-front/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { cached, Transaction } from 'reactronic'

export function restyler<T>(restyle: () => T): Restyler<T> {
  return Transaction.run(() => new Restyler<T>(restyle))
}

export class Restyler<T> {
  constructor(private readonly restyle: () => T) {
  }

  @cached
  protected cache(): T {
    return this.restyle()
  }

  get class(): T {
    return this.cache()
  }
}
