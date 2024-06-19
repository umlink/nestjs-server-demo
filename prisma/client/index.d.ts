
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model InviteCode
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type InviteCode = $Result.DefaultSelection<Prisma.$InviteCodePayload>
/**
 * Model InviteUser
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type InviteUser = $Result.DefaultSelection<Prisma.$InviteUserPayload>
/**
 * Model order
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model permission
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type permission = $Result.DefaultSelection<Prisma.$permissionPayload>
/**
 * Model resume
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type resume = $Result.DefaultSelection<Prisma.$resumePayload>
/**
 * Model ResumeTemplate
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ResumeTemplate = $Result.DefaultSelection<Prisma.$ResumeTemplatePayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vip
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type Vip = $Result.DefaultSelection<Prisma.$VipPayload>
/**
 * Model VipExchangeCode
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type VipExchangeCode = $Result.DefaultSelection<Prisma.$VipExchangeCodePayload>
/**
 * Model VipType
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type VipType = $Result.DefaultSelection<Prisma.$VipTypePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more InviteCodes
 * const inviteCodes = await prisma.inviteCode.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more InviteCodes
   * const inviteCodes = await prisma.inviteCode.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.inviteCode`: Exposes CRUD operations for the **InviteCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteCodes
    * const inviteCodes = await prisma.inviteCode.findMany()
    * ```
    */
  get inviteCode(): Prisma.InviteCodeDelegate<ExtArgs>;

  /**
   * `prisma.inviteUser`: Exposes CRUD operations for the **InviteUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InviteUsers
    * const inviteUsers = await prisma.inviteUser.findMany()
    * ```
    */
  get inviteUser(): Prisma.InviteUserDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.permissionDelegate<ExtArgs>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.resumeDelegate<ExtArgs>;

  /**
   * `prisma.resumeTemplate`: Exposes CRUD operations for the **ResumeTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResumeTemplates
    * const resumeTemplates = await prisma.resumeTemplate.findMany()
    * ```
    */
  get resumeTemplate(): Prisma.ResumeTemplateDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.vip`: Exposes CRUD operations for the **Vip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vips
    * const vips = await prisma.vip.findMany()
    * ```
    */
  get vip(): Prisma.VipDelegate<ExtArgs>;

  /**
   * `prisma.vipExchangeCode`: Exposes CRUD operations for the **VipExchangeCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VipExchangeCodes
    * const vipExchangeCodes = await prisma.vipExchangeCode.findMany()
    * ```
    */
  get vipExchangeCode(): Prisma.VipExchangeCodeDelegate<ExtArgs>;

  /**
   * `prisma.vipType`: Exposes CRUD operations for the **VipType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VipTypes
    * const vipTypes = await prisma.vipType.findMany()
    * ```
    */
  get vipType(): Prisma.VipTypeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    InviteCode: 'InviteCode',
    InviteUser: 'InviteUser',
    order: 'order',
    permission: 'permission',
    resume: 'resume',
    ResumeTemplate: 'ResumeTemplate',
    role: 'role',
    User: 'User',
    Vip: 'Vip',
    VipExchangeCode: 'VipExchangeCode',
    VipType: 'VipType'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'inviteCode' | 'inviteUser' | 'order' | 'permission' | 'resume' | 'resumeTemplate' | 'role' | 'user' | 'vip' | 'vipExchangeCode' | 'vipType'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      InviteCode: {
        payload: Prisma.$InviteCodePayload<ExtArgs>
        fields: Prisma.InviteCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findFirst: {
            args: Prisma.InviteCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          findMany: {
            args: Prisma.InviteCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>[]
          }
          create: {
            args: Prisma.InviteCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          createMany: {
            args: Prisma.InviteCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InviteCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          update: {
            args: Prisma.InviteCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          deleteMany: {
            args: Prisma.InviteCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InviteCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InviteCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteCodePayload>
          }
          aggregate: {
            args: Prisma.InviteCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInviteCode>
          }
          groupBy: {
            args: Prisma.InviteCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InviteCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<InviteCodeCountAggregateOutputType> | number
          }
        }
      }
      InviteUser: {
        payload: Prisma.$InviteUserPayload<ExtArgs>
        fields: Prisma.InviteUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          findFirst: {
            args: Prisma.InviteUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          findMany: {
            args: Prisma.InviteUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>[]
          }
          create: {
            args: Prisma.InviteUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          createMany: {
            args: Prisma.InviteUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InviteUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          update: {
            args: Prisma.InviteUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          deleteMany: {
            args: Prisma.InviteUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InviteUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InviteUserPayload>
          }
          aggregate: {
            args: Prisma.InviteUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInviteUser>
          }
          groupBy: {
            args: Prisma.InviteUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InviteUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteUserCountArgs<ExtArgs>,
            result: $Utils.Optional<InviteUserCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      permission: {
        payload: Prisma.$permissionPayload<ExtArgs>
        fields: Prisma.permissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.permissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.permissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findFirst: {
            args: Prisma.permissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.permissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          findMany: {
            args: Prisma.permissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>[]
          }
          create: {
            args: Prisma.permissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          createMany: {
            args: Prisma.permissionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.permissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          update: {
            args: Prisma.permissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          deleteMany: {
            args: Prisma.permissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.permissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.permissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$permissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.permissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.permissionCountArgs<ExtArgs>,
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      resume: {
        payload: Prisma.$resumePayload<ExtArgs>
        fields: Prisma.resumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resumeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resumeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          findFirst: {
            args: Prisma.resumeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resumeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          findMany: {
            args: Prisma.resumeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>[]
          }
          create: {
            args: Prisma.resumeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          createMany: {
            args: Prisma.resumeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.resumeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          update: {
            args: Prisma.resumeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          deleteMany: {
            args: Prisma.resumeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.resumeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.resumeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$resumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.resumeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.resumeCountArgs<ExtArgs>,
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      ResumeTemplate: {
        payload: Prisma.$ResumeTemplatePayload<ExtArgs>
        fields: Prisma.ResumeTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeTemplateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeTemplateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          findFirst: {
            args: Prisma.ResumeTemplateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeTemplateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          findMany: {
            args: Prisma.ResumeTemplateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>[]
          }
          create: {
            args: Prisma.ResumeTemplateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          createMany: {
            args: Prisma.ResumeTemplateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ResumeTemplateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          update: {
            args: Prisma.ResumeTemplateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ResumeTemplateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeTemplateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ResumeTemplateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ResumeTemplatePayload>
          }
          aggregate: {
            args: Prisma.ResumeTemplateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateResumeTemplate>
          }
          groupBy: {
            args: Prisma.ResumeTemplateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ResumeTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeTemplateCountArgs<ExtArgs>,
            result: $Utils.Optional<ResumeTemplateCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vip: {
        payload: Prisma.$VipPayload<ExtArgs>
        fields: Prisma.VipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          findFirst: {
            args: Prisma.VipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          findMany: {
            args: Prisma.VipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>[]
          }
          create: {
            args: Prisma.VipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          createMany: {
            args: Prisma.VipCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          update: {
            args: Prisma.VipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          deleteMany: {
            args: Prisma.VipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipPayload>
          }
          aggregate: {
            args: Prisma.VipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVip>
          }
          groupBy: {
            args: Prisma.VipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VipGroupByOutputType>[]
          }
          count: {
            args: Prisma.VipCountArgs<ExtArgs>,
            result: $Utils.Optional<VipCountAggregateOutputType> | number
          }
        }
      }
      VipExchangeCode: {
        payload: Prisma.$VipExchangeCodePayload<ExtArgs>
        fields: Prisma.VipExchangeCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VipExchangeCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VipExchangeCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          findFirst: {
            args: Prisma.VipExchangeCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VipExchangeCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          findMany: {
            args: Prisma.VipExchangeCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>[]
          }
          create: {
            args: Prisma.VipExchangeCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          createMany: {
            args: Prisma.VipExchangeCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VipExchangeCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          update: {
            args: Prisma.VipExchangeCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          deleteMany: {
            args: Prisma.VipExchangeCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VipExchangeCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VipExchangeCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipExchangeCodePayload>
          }
          aggregate: {
            args: Prisma.VipExchangeCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVipExchangeCode>
          }
          groupBy: {
            args: Prisma.VipExchangeCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VipExchangeCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VipExchangeCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<VipExchangeCodeCountAggregateOutputType> | number
          }
        }
      }
      VipType: {
        payload: Prisma.$VipTypePayload<ExtArgs>
        fields: Prisma.VipTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VipTypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VipTypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          findFirst: {
            args: Prisma.VipTypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VipTypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          findMany: {
            args: Prisma.VipTypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>[]
          }
          create: {
            args: Prisma.VipTypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          createMany: {
            args: Prisma.VipTypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VipTypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          update: {
            args: Prisma.VipTypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          deleteMany: {
            args: Prisma.VipTypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VipTypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VipTypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VipTypePayload>
          }
          aggregate: {
            args: Prisma.VipTypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVipType>
          }
          groupBy: {
            args: Prisma.VipTypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VipTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VipTypeCountArgs<ExtArgs>,
            result: $Utils.Optional<VipTypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model InviteCode
   */

  export type AggregateInviteCode = {
    _count: InviteCodeCountAggregateOutputType | null
    _avg: InviteCodeAvgAggregateOutputType | null
    _sum: InviteCodeSumAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  export type InviteCodeAvgAggregateOutputType = {
    userId: number | null
  }

  export type InviteCodeSumAggregateOutputType = {
    userId: number | null
  }

  export type InviteCodeMinAggregateOutputType = {
    code: string | null
    userId: number | null
    expireTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InviteCodeMaxAggregateOutputType = {
    code: string | null
    userId: number | null
    expireTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InviteCodeCountAggregateOutputType = {
    code: number
    userId: number
    expireTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InviteCodeAvgAggregateInputType = {
    userId?: true
  }

  export type InviteCodeSumAggregateInputType = {
    userId?: true
  }

  export type InviteCodeMinAggregateInputType = {
    code?: true
    userId?: true
    expireTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InviteCodeMaxAggregateInputType = {
    code?: true
    userId?: true
    expireTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InviteCodeCountAggregateInputType = {
    code?: true
    userId?: true
    expireTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InviteCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCode to aggregate.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteCodes
    **/
    _count?: true | InviteCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteCodeMaxAggregateInputType
  }

  export type GetInviteCodeAggregateType<T extends InviteCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteCode[P]>
      : GetScalarType<T[P], AggregateInviteCode[P]>
  }




  export type InviteCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteCodeWhereInput
    orderBy?: InviteCodeOrderByWithAggregationInput | InviteCodeOrderByWithAggregationInput[]
    by: InviteCodeScalarFieldEnum[] | InviteCodeScalarFieldEnum
    having?: InviteCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCodeCountAggregateInputType | true
    _avg?: InviteCodeAvgAggregateInputType
    _sum?: InviteCodeSumAggregateInputType
    _min?: InviteCodeMinAggregateInputType
    _max?: InviteCodeMaxAggregateInputType
  }

  export type InviteCodeGroupByOutputType = {
    code: string
    userId: number
    expireTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: InviteCodeCountAggregateOutputType | null
    _avg: InviteCodeAvgAggregateOutputType | null
    _sum: InviteCodeSumAggregateOutputType | null
    _min: InviteCodeMinAggregateOutputType | null
    _max: InviteCodeMaxAggregateOutputType | null
  }

  type GetInviteCodeGroupByPayload<T extends InviteCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
            : GetScalarType<T[P], InviteCodeGroupByOutputType[P]>
        }
      >
    >


  export type InviteCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    userId?: boolean
    expireTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inviteCode"]>


  export type InviteCodeSelectScalar = {
    code?: boolean
    userId?: boolean
    expireTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InviteCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      code: string
      userId: number
      expireTime: Date | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["inviteCode"]>
    composites: {}
  }

  type InviteCodeGetPayload<S extends boolean | null | undefined | InviteCodeDefaultArgs> = $Result.GetResult<Prisma.$InviteCodePayload, S>

  type InviteCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InviteCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InviteCodeCountAggregateInputType | true
    }

  export interface InviteCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteCode'], meta: { name: 'InviteCode' } }
    /**
     * Find zero or one InviteCode that matches the filter.
     * @param {InviteCodeFindUniqueArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InviteCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InviteCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InviteCodeFindUniqueOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InviteCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InviteCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InviteCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeFindFirstArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InviteCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindFirstOrThrowArgs} args - Arguments to find a InviteCode
     * @example
     * // Get one InviteCode
     * const inviteCode = await prisma.inviteCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InviteCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InviteCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany()
     * 
     * // Get first 10 InviteCodes
     * const inviteCodes = await prisma.inviteCode.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const inviteCodeWithCodeOnly = await prisma.inviteCode.findMany({ select: { code: true } })
     * 
    **/
    findMany<T extends InviteCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InviteCode.
     * @param {InviteCodeCreateArgs} args - Arguments to create a InviteCode.
     * @example
     * // Create one InviteCode
     * const InviteCode = await prisma.inviteCode.create({
     *   data: {
     *     // ... data to create a InviteCode
     *   }
     * })
     * 
    **/
    create<T extends InviteCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeCreateArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InviteCodes.
     * @param {InviteCodeCreateManyArgs} args - Arguments to create many InviteCodes.
     * @example
     * // Create many InviteCodes
     * const inviteCode = await prisma.inviteCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends InviteCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InviteCode.
     * @param {InviteCodeDeleteArgs} args - Arguments to delete one InviteCode.
     * @example
     * // Delete one InviteCode
     * const InviteCode = await prisma.inviteCode.delete({
     *   where: {
     *     // ... filter to delete one InviteCode
     *   }
     * })
     * 
    **/
    delete<T extends InviteCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeDeleteArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InviteCode.
     * @param {InviteCodeUpdateArgs} args - Arguments to update one InviteCode.
     * @example
     * // Update one InviteCode
     * const inviteCode = await prisma.inviteCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InviteCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeUpdateArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InviteCodes.
     * @param {InviteCodeDeleteManyArgs} args - Arguments to filter InviteCodes to delete.
     * @example
     * // Delete a few InviteCodes
     * const { count } = await prisma.inviteCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InviteCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteCodes
     * const inviteCode = await prisma.inviteCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InviteCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InviteCode.
     * @param {InviteCodeUpsertArgs} args - Arguments to update or create a InviteCode.
     * @example
     * // Update or create a InviteCode
     * const inviteCode = await prisma.inviteCode.upsert({
     *   create: {
     *     // ... data to create a InviteCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteCode we want to update
     *   }
     * })
    **/
    upsert<T extends InviteCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InviteCodeUpsertArgs<ExtArgs>>
    ): Prisma__InviteCodeClient<$Result.GetResult<Prisma.$InviteCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InviteCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeCountArgs} args - Arguments to filter InviteCodes to count.
     * @example
     * // Count the number of InviteCodes
     * const count = await prisma.inviteCode.count({
     *   where: {
     *     // ... the filter for the InviteCodes we want to count
     *   }
     * })
    **/
    count<T extends InviteCodeCountArgs>(
      args?: Subset<T, InviteCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteCodeAggregateArgs>(args: Subset<T, InviteCodeAggregateArgs>): Prisma.PrismaPromise<GetInviteCodeAggregateType<T>>

    /**
     * Group by InviteCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteCodeGroupByArgs['orderBy'] }
        : { orderBy?: InviteCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteCode model
   */
  readonly fields: InviteCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InviteCode model
   */ 
  interface InviteCodeFieldRefs {
    readonly code: FieldRef<"InviteCode", 'String'>
    readonly userId: FieldRef<"InviteCode", 'Int'>
    readonly expireTime: FieldRef<"InviteCode", 'DateTime'>
    readonly createdAt: FieldRef<"InviteCode", 'DateTime'>
    readonly updatedAt: FieldRef<"InviteCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteCode findUnique
   */
  export type InviteCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findUniqueOrThrow
   */
  export type InviteCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode findFirst
   */
  export type InviteCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findFirstOrThrow
   */
  export type InviteCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCode to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteCodes.
     */
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode findMany
   */
  export type InviteCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter, which InviteCodes to fetch.
     */
    where?: InviteCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteCodes to fetch.
     */
    orderBy?: InviteCodeOrderByWithRelationInput | InviteCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteCodes.
     */
    cursor?: InviteCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteCodes.
     */
    skip?: number
    distinct?: InviteCodeScalarFieldEnum | InviteCodeScalarFieldEnum[]
  }

  /**
   * InviteCode create
   */
  export type InviteCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a InviteCode.
     */
    data: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
  }

  /**
   * InviteCode createMany
   */
  export type InviteCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteCodes.
     */
    data: InviteCodeCreateManyInput | InviteCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteCode update
   */
  export type InviteCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a InviteCode.
     */
    data: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
    /**
     * Choose, which InviteCode to update.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode updateMany
   */
  export type InviteCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteCodes.
     */
    data: XOR<InviteCodeUpdateManyMutationInput, InviteCodeUncheckedUpdateManyInput>
    /**
     * Filter which InviteCodes to update
     */
    where?: InviteCodeWhereInput
  }

  /**
   * InviteCode upsert
   */
  export type InviteCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the InviteCode to update in case it exists.
     */
    where: InviteCodeWhereUniqueInput
    /**
     * In case the InviteCode found by the `where` argument doesn't exist, create a new InviteCode with this data.
     */
    create: XOR<InviteCodeCreateInput, InviteCodeUncheckedCreateInput>
    /**
     * In case the InviteCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteCodeUpdateInput, InviteCodeUncheckedUpdateInput>
  }

  /**
   * InviteCode delete
   */
  export type InviteCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
    /**
     * Filter which InviteCode to delete.
     */
    where: InviteCodeWhereUniqueInput
  }

  /**
   * InviteCode deleteMany
   */
  export type InviteCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteCodes to delete
     */
    where?: InviteCodeWhereInput
  }

  /**
   * InviteCode without action
   */
  export type InviteCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteCode
     */
    select?: InviteCodeSelect<ExtArgs> | null
  }


  /**
   * Model InviteUser
   */

  export type AggregateInviteUser = {
    _count: InviteUserCountAggregateOutputType | null
    _avg: InviteUserAvgAggregateOutputType | null
    _sum: InviteUserSumAggregateOutputType | null
    _min: InviteUserMinAggregateOutputType | null
    _max: InviteUserMaxAggregateOutputType | null
  }

  export type InviteUserAvgAggregateOutputType = {
    id: number | null
    initiatorId: number | null
    receiverId: number | null
  }

  export type InviteUserSumAggregateOutputType = {
    id: number | null
    initiatorId: number | null
    receiverId: number | null
  }

  export type InviteUserMinAggregateOutputType = {
    id: number | null
    inviteCode: string | null
    initiatorId: number | null
    receiverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InviteUserMaxAggregateOutputType = {
    id: number | null
    inviteCode: string | null
    initiatorId: number | null
    receiverId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InviteUserCountAggregateOutputType = {
    id: number
    inviteCode: number
    initiatorId: number
    receiverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InviteUserAvgAggregateInputType = {
    id?: true
    initiatorId?: true
    receiverId?: true
  }

  export type InviteUserSumAggregateInputType = {
    id?: true
    initiatorId?: true
    receiverId?: true
  }

  export type InviteUserMinAggregateInputType = {
    id?: true
    inviteCode?: true
    initiatorId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InviteUserMaxAggregateInputType = {
    id?: true
    inviteCode?: true
    initiatorId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InviteUserCountAggregateInputType = {
    id?: true
    inviteCode?: true
    initiatorId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InviteUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteUser to aggregate.
     */
    where?: InviteUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteUsers to fetch.
     */
    orderBy?: InviteUserOrderByWithRelationInput | InviteUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InviteUsers
    **/
    _count?: true | InviteUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InviteUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InviteUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteUserMaxAggregateInputType
  }

  export type GetInviteUserAggregateType<T extends InviteUserAggregateArgs> = {
        [P in keyof T & keyof AggregateInviteUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInviteUser[P]>
      : GetScalarType<T[P], AggregateInviteUser[P]>
  }




  export type InviteUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteUserWhereInput
    orderBy?: InviteUserOrderByWithAggregationInput | InviteUserOrderByWithAggregationInput[]
    by: InviteUserScalarFieldEnum[] | InviteUserScalarFieldEnum
    having?: InviteUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteUserCountAggregateInputType | true
    _avg?: InviteUserAvgAggregateInputType
    _sum?: InviteUserSumAggregateInputType
    _min?: InviteUserMinAggregateInputType
    _max?: InviteUserMaxAggregateInputType
  }

  export type InviteUserGroupByOutputType = {
    id: number
    inviteCode: string
    initiatorId: number
    receiverId: number
    createdAt: Date
    updatedAt: Date
    _count: InviteUserCountAggregateOutputType | null
    _avg: InviteUserAvgAggregateOutputType | null
    _sum: InviteUserSumAggregateOutputType | null
    _min: InviteUserMinAggregateOutputType | null
    _max: InviteUserMaxAggregateOutputType | null
  }

  type GetInviteUserGroupByPayload<T extends InviteUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteUserGroupByOutputType[P]>
            : GetScalarType<T[P], InviteUserGroupByOutputType[P]>
        }
      >
    >


  export type InviteUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviteCode?: boolean
    initiatorId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inviteUser"]>


  export type InviteUserSelectScalar = {
    id?: boolean
    inviteCode?: boolean
    initiatorId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $InviteUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InviteUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inviteCode: string
      initiatorId: number
      receiverId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inviteUser"]>
    composites: {}
  }

  type InviteUserGetPayload<S extends boolean | null | undefined | InviteUserDefaultArgs> = $Result.GetResult<Prisma.$InviteUserPayload, S>

  type InviteUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InviteUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InviteUserCountAggregateInputType | true
    }

  export interface InviteUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InviteUser'], meta: { name: 'InviteUser' } }
    /**
     * Find zero or one InviteUser that matches the filter.
     * @param {InviteUserFindUniqueArgs} args - Arguments to find a InviteUser
     * @example
     * // Get one InviteUser
     * const inviteUser = await prisma.inviteUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InviteUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserFindUniqueArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InviteUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InviteUserFindUniqueOrThrowArgs} args - Arguments to find a InviteUser
     * @example
     * // Get one InviteUser
     * const inviteUser = await prisma.inviteUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InviteUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InviteUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserFindFirstArgs} args - Arguments to find a InviteUser
     * @example
     * // Get one InviteUser
     * const inviteUser = await prisma.inviteUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InviteUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserFindFirstArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InviteUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserFindFirstOrThrowArgs} args - Arguments to find a InviteUser
     * @example
     * // Get one InviteUser
     * const inviteUser = await prisma.inviteUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InviteUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InviteUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InviteUsers
     * const inviteUsers = await prisma.inviteUser.findMany()
     * 
     * // Get first 10 InviteUsers
     * const inviteUsers = await prisma.inviteUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteUserWithIdOnly = await prisma.inviteUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InviteUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InviteUser.
     * @param {InviteUserCreateArgs} args - Arguments to create a InviteUser.
     * @example
     * // Create one InviteUser
     * const InviteUser = await prisma.inviteUser.create({
     *   data: {
     *     // ... data to create a InviteUser
     *   }
     * })
     * 
    **/
    create<T extends InviteUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserCreateArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InviteUsers.
     * @param {InviteUserCreateManyArgs} args - Arguments to create many InviteUsers.
     * @example
     * // Create many InviteUsers
     * const inviteUser = await prisma.inviteUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends InviteUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InviteUser.
     * @param {InviteUserDeleteArgs} args - Arguments to delete one InviteUser.
     * @example
     * // Delete one InviteUser
     * const InviteUser = await prisma.inviteUser.delete({
     *   where: {
     *     // ... filter to delete one InviteUser
     *   }
     * })
     * 
    **/
    delete<T extends InviteUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserDeleteArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InviteUser.
     * @param {InviteUserUpdateArgs} args - Arguments to update one InviteUser.
     * @example
     * // Update one InviteUser
     * const inviteUser = await prisma.inviteUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InviteUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserUpdateArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InviteUsers.
     * @param {InviteUserDeleteManyArgs} args - Arguments to filter InviteUsers to delete.
     * @example
     * // Delete a few InviteUsers
     * const { count } = await prisma.inviteUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InviteUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InviteUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InviteUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InviteUsers
     * const inviteUser = await prisma.inviteUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InviteUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InviteUser.
     * @param {InviteUserUpsertArgs} args - Arguments to update or create a InviteUser.
     * @example
     * // Update or create a InviteUser
     * const inviteUser = await prisma.inviteUser.upsert({
     *   create: {
     *     // ... data to create a InviteUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InviteUser we want to update
     *   }
     * })
    **/
    upsert<T extends InviteUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InviteUserUpsertArgs<ExtArgs>>
    ): Prisma__InviteUserClient<$Result.GetResult<Prisma.$InviteUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InviteUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserCountArgs} args - Arguments to filter InviteUsers to count.
     * @example
     * // Count the number of InviteUsers
     * const count = await prisma.inviteUser.count({
     *   where: {
     *     // ... the filter for the InviteUsers we want to count
     *   }
     * })
    **/
    count<T extends InviteUserCountArgs>(
      args?: Subset<T, InviteUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InviteUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteUserAggregateArgs>(args: Subset<T, InviteUserAggregateArgs>): Prisma.PrismaPromise<GetInviteUserAggregateType<T>>

    /**
     * Group by InviteUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteUserGroupByArgs['orderBy'] }
        : { orderBy?: InviteUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InviteUser model
   */
  readonly fields: InviteUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InviteUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InviteUser model
   */ 
  interface InviteUserFieldRefs {
    readonly id: FieldRef<"InviteUser", 'Int'>
    readonly inviteCode: FieldRef<"InviteUser", 'String'>
    readonly initiatorId: FieldRef<"InviteUser", 'Int'>
    readonly receiverId: FieldRef<"InviteUser", 'Int'>
    readonly createdAt: FieldRef<"InviteUser", 'DateTime'>
    readonly updatedAt: FieldRef<"InviteUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InviteUser findUnique
   */
  export type InviteUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter, which InviteUser to fetch.
     */
    where: InviteUserWhereUniqueInput
  }

  /**
   * InviteUser findUniqueOrThrow
   */
  export type InviteUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter, which InviteUser to fetch.
     */
    where: InviteUserWhereUniqueInput
  }

  /**
   * InviteUser findFirst
   */
  export type InviteUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter, which InviteUser to fetch.
     */
    where?: InviteUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteUsers to fetch.
     */
    orderBy?: InviteUserOrderByWithRelationInput | InviteUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteUsers.
     */
    cursor?: InviteUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteUsers.
     */
    distinct?: InviteUserScalarFieldEnum | InviteUserScalarFieldEnum[]
  }

  /**
   * InviteUser findFirstOrThrow
   */
  export type InviteUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter, which InviteUser to fetch.
     */
    where?: InviteUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteUsers to fetch.
     */
    orderBy?: InviteUserOrderByWithRelationInput | InviteUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InviteUsers.
     */
    cursor?: InviteUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InviteUsers.
     */
    distinct?: InviteUserScalarFieldEnum | InviteUserScalarFieldEnum[]
  }

  /**
   * InviteUser findMany
   */
  export type InviteUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter, which InviteUsers to fetch.
     */
    where?: InviteUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InviteUsers to fetch.
     */
    orderBy?: InviteUserOrderByWithRelationInput | InviteUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InviteUsers.
     */
    cursor?: InviteUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InviteUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InviteUsers.
     */
    skip?: number
    distinct?: InviteUserScalarFieldEnum | InviteUserScalarFieldEnum[]
  }

  /**
   * InviteUser create
   */
  export type InviteUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * The data needed to create a InviteUser.
     */
    data: XOR<InviteUserCreateInput, InviteUserUncheckedCreateInput>
  }

  /**
   * InviteUser createMany
   */
  export type InviteUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InviteUsers.
     */
    data: InviteUserCreateManyInput | InviteUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InviteUser update
   */
  export type InviteUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * The data needed to update a InviteUser.
     */
    data: XOR<InviteUserUpdateInput, InviteUserUncheckedUpdateInput>
    /**
     * Choose, which InviteUser to update.
     */
    where: InviteUserWhereUniqueInput
  }

  /**
   * InviteUser updateMany
   */
  export type InviteUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InviteUsers.
     */
    data: XOR<InviteUserUpdateManyMutationInput, InviteUserUncheckedUpdateManyInput>
    /**
     * Filter which InviteUsers to update
     */
    where?: InviteUserWhereInput
  }

  /**
   * InviteUser upsert
   */
  export type InviteUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * The filter to search for the InviteUser to update in case it exists.
     */
    where: InviteUserWhereUniqueInput
    /**
     * In case the InviteUser found by the `where` argument doesn't exist, create a new InviteUser with this data.
     */
    create: XOR<InviteUserCreateInput, InviteUserUncheckedCreateInput>
    /**
     * In case the InviteUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUserUpdateInput, InviteUserUncheckedUpdateInput>
  }

  /**
   * InviteUser delete
   */
  export type InviteUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
    /**
     * Filter which InviteUser to delete.
     */
    where: InviteUserWhereUniqueInput
  }

  /**
   * InviteUser deleteMany
   */
  export type InviteUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InviteUsers to delete
     */
    where?: InviteUserWhereInput
  }

  /**
   * InviteUser without action
   */
  export type InviteUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InviteUser
     */
    select?: InviteUserSelect<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    userId: number | null
    price: Decimal | null
    payType: number | null
    orderStatus: number | null
  }

  export type OrderSumAggregateOutputType = {
    userId: number | null
    price: Decimal | null
    payType: number | null
    orderStatus: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: number | null
    price: Decimal | null
    payType: number | null
    orderStatus: number | null
    orderDesc: string | null
    overtime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    price: Decimal | null
    payType: number | null
    orderStatus: number | null
    orderDesc: string | null
    overtime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    price: number
    payType: number
    orderStatus: number
    orderDesc: number
    overtime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    userId?: true
    price?: true
    payType?: true
    orderStatus?: true
  }

  export type OrderSumAggregateInputType = {
    userId?: true
    price?: true
    payType?: true
    orderStatus?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    payType?: true
    orderStatus?: true
    orderDesc?: true
    overtime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    payType?: true
    orderStatus?: true
    orderDesc?: true
    overtime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    price?: true
    payType?: true
    orderStatus?: true
    orderDesc?: true
    overtime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: number
    price: Decimal
    payType: number | null
    orderStatus: number
    orderDesc: string | null
    overtime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    price?: boolean
    payType?: boolean
    orderStatus?: boolean
    orderDesc?: boolean
    overtime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["order"]>


  export type orderSelectScalar = {
    id?: boolean
    userId?: boolean
    price?: boolean
    payType?: boolean
    orderStatus?: boolean
    orderDesc?: boolean
    overtime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      price: Prisma.Decimal
      payType: number | null
      orderStatus: number
      orderDesc: string | null
      overtime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends orderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends orderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends orderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
    **/
    create<T extends orderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, orderCreateArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends orderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
    **/
    delete<T extends orderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, orderDeleteArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends orderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends orderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends orderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
    **/
    upsert<T extends orderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, orderUpsertArgs<ExtArgs>>
    ): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the order model
   */ 
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'String'>
    readonly userId: FieldRef<"order", 'Int'>
    readonly price: FieldRef<"order", 'Decimal'>
    readonly payType: FieldRef<"order", 'Int'>
    readonly orderStatus: FieldRef<"order", 'Int'>
    readonly orderDesc: FieldRef<"order", 'String'>
    readonly overtime: FieldRef<"order", 'DateTime'>
    readonly createdAt: FieldRef<"order", 'DateTime'>
    readonly updatedAt: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
  }


  /**
   * Model permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
    creatorId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
    role_id: number | null
    creatorId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    role_id: number | null
    name: string | null
    enum: string | null
    desc: string | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    role_id: number | null
    name: string | null
    enum: string | null
    desc: string | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    role_id: number
    name: number
    enum: number
    desc: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
    role_id?: true
    creatorId?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
    role_id?: true
    creatorId?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    role_id?: true
    name?: true
    enum?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    role_id?: true
    name?: true
    enum?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    role_id?: true
    name?: true
    enum?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permission to aggregate.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type permissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: permissionWhereInput
    orderBy?: permissionOrderByWithAggregationInput | permissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: permissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    role_id: number
    name: string
    enum: string
    desc: string
    creatorId: number
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type permissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role_id?: boolean
    name?: boolean
    enum?: boolean
    desc?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>


  export type permissionSelectScalar = {
    id?: boolean
    role_id?: boolean
    name?: boolean
    enum?: boolean
    desc?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $permissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "permission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role_id: number
      name: string
      enum: string
      desc: string
      creatorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = $Result.GetResult<Prisma.$permissionPayload, S>

  type permissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface permissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['permission'], meta: { name: 'permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {permissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends permissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {permissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends permissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionFindFirstArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends permissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Permission.
     * @param {permissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends permissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, permissionCreateArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {permissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends permissionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {permissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends permissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, permissionDeleteArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {permissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends permissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, permissionUpdateArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {permissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends permissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends permissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {permissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends permissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, permissionUpsertArgs<ExtArgs>>
    ): Prisma__permissionClient<$Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends permissionCountArgs>(
      args?: Subset<T, permissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {permissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends permissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: permissionGroupByArgs['orderBy'] }
        : { orderBy?: permissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the permission model
   */
  readonly fields: permissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__permissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the permission model
   */ 
  interface permissionFieldRefs {
    readonly id: FieldRef<"permission", 'Int'>
    readonly role_id: FieldRef<"permission", 'Int'>
    readonly name: FieldRef<"permission", 'String'>
    readonly enum: FieldRef<"permission", 'String'>
    readonly desc: FieldRef<"permission", 'String'>
    readonly creatorId: FieldRef<"permission", 'Int'>
    readonly createdAt: FieldRef<"permission", 'DateTime'>
    readonly updatedAt: FieldRef<"permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * permission findUnique
   */
  export type permissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findUniqueOrThrow
   */
  export type permissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission findFirst
   */
  export type permissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findFirstOrThrow
   */
  export type permissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter, which permission to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission findMany
   */
  export type permissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter, which permissions to fetch.
     */
    where?: permissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of permissions to fetch.
     */
    orderBy?: permissionOrderByWithRelationInput | permissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing permissions.
     */
    cursor?: permissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * permission create
   */
  export type permissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * The data needed to create a permission.
     */
    data: XOR<permissionCreateInput, permissionUncheckedCreateInput>
  }

  /**
   * permission createMany
   */
  export type permissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many permissions.
     */
    data: permissionCreateManyInput | permissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * permission update
   */
  export type permissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * The data needed to update a permission.
     */
    data: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
    /**
     * Choose, which permission to update.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission updateMany
   */
  export type permissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update permissions.
     */
    data: XOR<permissionUpdateManyMutationInput, permissionUncheckedUpdateManyInput>
    /**
     * Filter which permissions to update
     */
    where?: permissionWhereInput
  }

  /**
   * permission upsert
   */
  export type permissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * The filter to search for the permission to update in case it exists.
     */
    where: permissionWhereUniqueInput
    /**
     * In case the permission found by the `where` argument doesn't exist, create a new permission with this data.
     */
    create: XOR<permissionCreateInput, permissionUncheckedCreateInput>
    /**
     * In case the permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<permissionUpdateInput, permissionUncheckedUpdateInput>
  }

  /**
   * permission delete
   */
  export type permissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
    /**
     * Filter which permission to delete.
     */
    where: permissionWhereUniqueInput
  }

  /**
   * permission deleteMany
   */
  export type permissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which permissions to delete
     */
    where?: permissionWhereInput
  }

  /**
   * permission without action
   */
  export type permissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the permission
     */
    select?: permissionSelect<ExtArgs> | null
  }


  /**
   * Model resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    templateId: number | null
    isPublic: number | null
    exportCount: number | null
  }

  export type ResumeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    templateId: number | null
    isPublic: number | null
    exportCount: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: number | null
    title: string | null
    userId: number | null
    templateId: number | null
    themeColor: string | null
    isPublic: number | null
    exportCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    userId: number | null
    templateId: number | null
    themeColor: string | null
    isPublic: number | null
    exportCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    userId: number
    templateId: number
    themeColor: number
    isPublic: number
    exportCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    isPublic?: true
    exportCount?: true
  }

  export type ResumeSumAggregateInputType = {
    id?: true
    userId?: true
    templateId?: true
    isPublic?: true
    exportCount?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    templateId?: true
    themeColor?: true
    isPublic?: true
    exportCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    templateId?: true
    themeColor?: true
    isPublic?: true
    exportCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    userId?: true
    templateId?: true
    themeColor?: true
    isPublic?: true
    exportCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resume to aggregate.
     */
    where?: resumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumeOrderByWithRelationInput | resumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type resumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resumeWhereInput
    orderBy?: resumeOrderByWithAggregationInput | resumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: resumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: number
    title: string
    content: JsonValue
    userId: number
    templateId: number | null
    themeColor: string
    isPublic: number
    exportCount: number
    createdAt: Date
    updatedAt: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends resumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type resumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    templateId?: boolean
    themeColor?: boolean
    isPublic?: boolean
    exportCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resume"]>


  export type resumeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    userId?: boolean
    templateId?: boolean
    themeColor?: boolean
    isPublic?: boolean
    exportCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $resumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resume"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: Prisma.JsonValue
      userId: number
      templateId: number | null
      themeColor: string
      isPublic: number
      exportCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type resumeGetPayload<S extends boolean | null | undefined | resumeDefaultArgs> = $Result.GetResult<Prisma.$resumePayload, S>

  type resumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<resumeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface resumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resume'], meta: { name: 'resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {resumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends resumeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, resumeFindUniqueArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {resumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends resumeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends resumeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeFindFirstArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends resumeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends resumeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Resume.
     * @param {resumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
    **/
    create<T extends resumeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, resumeCreateArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Resumes.
     * @param {resumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends resumeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resume.
     * @param {resumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
    **/
    delete<T extends resumeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, resumeDeleteArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Resume.
     * @param {resumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends resumeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, resumeUpdateArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Resumes.
     * @param {resumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends resumeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, resumeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends resumeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, resumeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resume.
     * @param {resumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
    **/
    upsert<T extends resumeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, resumeUpsertArgs<ExtArgs>>
    ): Prisma__resumeClient<$Result.GetResult<Prisma.$resumePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends resumeCountArgs>(
      args?: Subset<T, resumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends resumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resumeGroupByArgs['orderBy'] }
        : { orderBy?: resumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, resumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resume model
   */
  readonly fields: resumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the resume model
   */ 
  interface resumeFieldRefs {
    readonly id: FieldRef<"resume", 'Int'>
    readonly title: FieldRef<"resume", 'String'>
    readonly content: FieldRef<"resume", 'Json'>
    readonly userId: FieldRef<"resume", 'Int'>
    readonly templateId: FieldRef<"resume", 'Int'>
    readonly themeColor: FieldRef<"resume", 'String'>
    readonly isPublic: FieldRef<"resume", 'Int'>
    readonly exportCount: FieldRef<"resume", 'Int'>
    readonly createdAt: FieldRef<"resume", 'DateTime'>
    readonly updatedAt: FieldRef<"resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * resume findUnique
   */
  export type resumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter, which resume to fetch.
     */
    where: resumeWhereUniqueInput
  }

  /**
   * resume findUniqueOrThrow
   */
  export type resumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter, which resume to fetch.
     */
    where: resumeWhereUniqueInput
  }

  /**
   * resume findFirst
   */
  export type resumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter, which resume to fetch.
     */
    where?: resumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumeOrderByWithRelationInput | resumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resumes.
     */
    cursor?: resumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * resume findFirstOrThrow
   */
  export type resumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter, which resume to fetch.
     */
    where?: resumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumeOrderByWithRelationInput | resumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resumes.
     */
    cursor?: resumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * resume findMany
   */
  export type resumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter, which resumes to fetch.
     */
    where?: resumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resumes to fetch.
     */
    orderBy?: resumeOrderByWithRelationInput | resumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resumes.
     */
    cursor?: resumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * resume create
   */
  export type resumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * The data needed to create a resume.
     */
    data: XOR<resumeCreateInput, resumeUncheckedCreateInput>
  }

  /**
   * resume createMany
   */
  export type resumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resumes.
     */
    data: resumeCreateManyInput | resumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resume update
   */
  export type resumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * The data needed to update a resume.
     */
    data: XOR<resumeUpdateInput, resumeUncheckedUpdateInput>
    /**
     * Choose, which resume to update.
     */
    where: resumeWhereUniqueInput
  }

  /**
   * resume updateMany
   */
  export type resumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resumes.
     */
    data: XOR<resumeUpdateManyMutationInput, resumeUncheckedUpdateManyInput>
    /**
     * Filter which resumes to update
     */
    where?: resumeWhereInput
  }

  /**
   * resume upsert
   */
  export type resumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * The filter to search for the resume to update in case it exists.
     */
    where: resumeWhereUniqueInput
    /**
     * In case the resume found by the `where` argument doesn't exist, create a new resume with this data.
     */
    create: XOR<resumeCreateInput, resumeUncheckedCreateInput>
    /**
     * In case the resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resumeUpdateInput, resumeUncheckedUpdateInput>
  }

  /**
   * resume delete
   */
  export type resumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
    /**
     * Filter which resume to delete.
     */
    where: resumeWhereUniqueInput
  }

  /**
   * resume deleteMany
   */
  export type resumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resumes to delete
     */
    where?: resumeWhereInput
  }

  /**
   * resume without action
   */
  export type resumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resume
     */
    select?: resumeSelect<ExtArgs> | null
  }


  /**
   * Model ResumeTemplate
   */

  export type AggregateResumeTemplate = {
    _count: ResumeTemplateCountAggregateOutputType | null
    _avg: ResumeTemplateAvgAggregateOutputType | null
    _sum: ResumeTemplateSumAggregateOutputType | null
    _min: ResumeTemplateMinAggregateOutputType | null
    _max: ResumeTemplateMaxAggregateOutputType | null
  }

  export type ResumeTemplateAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
    useCount: number | null
    isVip: number | null
  }

  export type ResumeTemplateSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
    useCount: number | null
    isVip: number | null
  }

  export type ResumeTemplateMinAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    headerImg: string | null
    creatorId: number | null
    useCount: number | null
    isVip: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeTemplateMaxAggregateOutputType = {
    id: number | null
    code: string | null
    title: string | null
    headerImg: string | null
    creatorId: number | null
    useCount: number | null
    isVip: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResumeTemplateCountAggregateOutputType = {
    id: number
    code: number
    title: number
    content: number
    headerImg: number
    creatorId: number
    useCount: number
    isVip: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResumeTemplateAvgAggregateInputType = {
    id?: true
    creatorId?: true
    useCount?: true
    isVip?: true
  }

  export type ResumeTemplateSumAggregateInputType = {
    id?: true
    creatorId?: true
    useCount?: true
    isVip?: true
  }

  export type ResumeTemplateMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    headerImg?: true
    creatorId?: true
    useCount?: true
    isVip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeTemplateMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    headerImg?: true
    creatorId?: true
    useCount?: true
    isVip?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResumeTemplateCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    content?: true
    headerImg?: true
    creatorId?: true
    useCount?: true
    isVip?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResumeTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeTemplate to aggregate.
     */
    where?: ResumeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeTemplates to fetch.
     */
    orderBy?: ResumeTemplateOrderByWithRelationInput | ResumeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResumeTemplates
    **/
    _count?: true | ResumeTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeTemplateMaxAggregateInputType
  }

  export type GetResumeTemplateAggregateType<T extends ResumeTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateResumeTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumeTemplate[P]>
      : GetScalarType<T[P], AggregateResumeTemplate[P]>
  }




  export type ResumeTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeTemplateWhereInput
    orderBy?: ResumeTemplateOrderByWithAggregationInput | ResumeTemplateOrderByWithAggregationInput[]
    by: ResumeTemplateScalarFieldEnum[] | ResumeTemplateScalarFieldEnum
    having?: ResumeTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeTemplateCountAggregateInputType | true
    _avg?: ResumeTemplateAvgAggregateInputType
    _sum?: ResumeTemplateSumAggregateInputType
    _min?: ResumeTemplateMinAggregateInputType
    _max?: ResumeTemplateMaxAggregateInputType
  }

  export type ResumeTemplateGroupByOutputType = {
    id: number
    code: string
    title: string
    content: JsonValue
    headerImg: string | null
    creatorId: number
    useCount: number
    isVip: number
    createdAt: Date
    updatedAt: Date
    _count: ResumeTemplateCountAggregateOutputType | null
    _avg: ResumeTemplateAvgAggregateOutputType | null
    _sum: ResumeTemplateSumAggregateOutputType | null
    _min: ResumeTemplateMinAggregateOutputType | null
    _max: ResumeTemplateMaxAggregateOutputType | null
  }

  type GetResumeTemplateGroupByPayload<T extends ResumeTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ResumeTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    content?: boolean
    headerImg?: boolean
    creatorId?: boolean
    useCount?: boolean
    isVip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["resumeTemplate"]>


  export type ResumeTemplateSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    content?: boolean
    headerImg?: boolean
    creatorId?: boolean
    useCount?: boolean
    isVip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ResumeTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResumeTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      title: string
      content: Prisma.JsonValue
      headerImg: string | null
      creatorId: number
      useCount: number
      isVip: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["resumeTemplate"]>
    composites: {}
  }

  type ResumeTemplateGetPayload<S extends boolean | null | undefined | ResumeTemplateDefaultArgs> = $Result.GetResult<Prisma.$ResumeTemplatePayload, S>

  type ResumeTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumeTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumeTemplateCountAggregateInputType | true
    }

  export interface ResumeTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResumeTemplate'], meta: { name: 'ResumeTemplate' } }
    /**
     * Find zero or one ResumeTemplate that matches the filter.
     * @param {ResumeTemplateFindUniqueArgs} args - Arguments to find a ResumeTemplate
     * @example
     * // Get one ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResumeTemplateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateFindUniqueArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ResumeTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumeTemplateFindUniqueOrThrowArgs} args - Arguments to find a ResumeTemplate
     * @example
     * // Get one ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResumeTemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ResumeTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateFindFirstArgs} args - Arguments to find a ResumeTemplate
     * @example
     * // Get one ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResumeTemplateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateFindFirstArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ResumeTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateFindFirstOrThrowArgs} args - Arguments to find a ResumeTemplate
     * @example
     * // Get one ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResumeTemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ResumeTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResumeTemplates
     * const resumeTemplates = await prisma.resumeTemplate.findMany()
     * 
     * // Get first 10 ResumeTemplates
     * const resumeTemplates = await prisma.resumeTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeTemplateWithIdOnly = await prisma.resumeTemplate.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ResumeTemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ResumeTemplate.
     * @param {ResumeTemplateCreateArgs} args - Arguments to create a ResumeTemplate.
     * @example
     * // Create one ResumeTemplate
     * const ResumeTemplate = await prisma.resumeTemplate.create({
     *   data: {
     *     // ... data to create a ResumeTemplate
     *   }
     * })
     * 
    **/
    create<T extends ResumeTemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateCreateArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ResumeTemplates.
     * @param {ResumeTemplateCreateManyArgs} args - Arguments to create many ResumeTemplates.
     * @example
     * // Create many ResumeTemplates
     * const resumeTemplate = await prisma.resumeTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ResumeTemplateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ResumeTemplate.
     * @param {ResumeTemplateDeleteArgs} args - Arguments to delete one ResumeTemplate.
     * @example
     * // Delete one ResumeTemplate
     * const ResumeTemplate = await prisma.resumeTemplate.delete({
     *   where: {
     *     // ... filter to delete one ResumeTemplate
     *   }
     * })
     * 
    **/
    delete<T extends ResumeTemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateDeleteArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ResumeTemplate.
     * @param {ResumeTemplateUpdateArgs} args - Arguments to update one ResumeTemplate.
     * @example
     * // Update one ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResumeTemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateUpdateArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ResumeTemplates.
     * @param {ResumeTemplateDeleteManyArgs} args - Arguments to filter ResumeTemplates to delete.
     * @example
     * // Delete a few ResumeTemplates
     * const { count } = await prisma.resumeTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResumeTemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ResumeTemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResumeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResumeTemplates
     * const resumeTemplate = await prisma.resumeTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResumeTemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ResumeTemplate.
     * @param {ResumeTemplateUpsertArgs} args - Arguments to update or create a ResumeTemplate.
     * @example
     * // Update or create a ResumeTemplate
     * const resumeTemplate = await prisma.resumeTemplate.upsert({
     *   create: {
     *     // ... data to create a ResumeTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResumeTemplate we want to update
     *   }
     * })
    **/
    upsert<T extends ResumeTemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ResumeTemplateUpsertArgs<ExtArgs>>
    ): Prisma__ResumeTemplateClient<$Result.GetResult<Prisma.$ResumeTemplatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ResumeTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateCountArgs} args - Arguments to filter ResumeTemplates to count.
     * @example
     * // Count the number of ResumeTemplates
     * const count = await prisma.resumeTemplate.count({
     *   where: {
     *     // ... the filter for the ResumeTemplates we want to count
     *   }
     * })
    **/
    count<T extends ResumeTemplateCountArgs>(
      args?: Subset<T, ResumeTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResumeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeTemplateAggregateArgs>(args: Subset<T, ResumeTemplateAggregateArgs>): Prisma.PrismaPromise<GetResumeTemplateAggregateType<T>>

    /**
     * Group by ResumeTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ResumeTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResumeTemplate model
   */
  readonly fields: ResumeTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResumeTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ResumeTemplate model
   */ 
  interface ResumeTemplateFieldRefs {
    readonly id: FieldRef<"ResumeTemplate", 'Int'>
    readonly code: FieldRef<"ResumeTemplate", 'String'>
    readonly title: FieldRef<"ResumeTemplate", 'String'>
    readonly content: FieldRef<"ResumeTemplate", 'Json'>
    readonly headerImg: FieldRef<"ResumeTemplate", 'String'>
    readonly creatorId: FieldRef<"ResumeTemplate", 'Int'>
    readonly useCount: FieldRef<"ResumeTemplate", 'Int'>
    readonly isVip: FieldRef<"ResumeTemplate", 'Int'>
    readonly createdAt: FieldRef<"ResumeTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ResumeTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ResumeTemplate findUnique
   */
  export type ResumeTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which ResumeTemplate to fetch.
     */
    where: ResumeTemplateWhereUniqueInput
  }

  /**
   * ResumeTemplate findUniqueOrThrow
   */
  export type ResumeTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which ResumeTemplate to fetch.
     */
    where: ResumeTemplateWhereUniqueInput
  }

  /**
   * ResumeTemplate findFirst
   */
  export type ResumeTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which ResumeTemplate to fetch.
     */
    where?: ResumeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeTemplates to fetch.
     */
    orderBy?: ResumeTemplateOrderByWithRelationInput | ResumeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeTemplates.
     */
    cursor?: ResumeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeTemplates.
     */
    distinct?: ResumeTemplateScalarFieldEnum | ResumeTemplateScalarFieldEnum[]
  }

  /**
   * ResumeTemplate findFirstOrThrow
   */
  export type ResumeTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which ResumeTemplate to fetch.
     */
    where?: ResumeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeTemplates to fetch.
     */
    orderBy?: ResumeTemplateOrderByWithRelationInput | ResumeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResumeTemplates.
     */
    cursor?: ResumeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResumeTemplates.
     */
    distinct?: ResumeTemplateScalarFieldEnum | ResumeTemplateScalarFieldEnum[]
  }

  /**
   * ResumeTemplate findMany
   */
  export type ResumeTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter, which ResumeTemplates to fetch.
     */
    where?: ResumeTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResumeTemplates to fetch.
     */
    orderBy?: ResumeTemplateOrderByWithRelationInput | ResumeTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResumeTemplates.
     */
    cursor?: ResumeTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResumeTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResumeTemplates.
     */
    skip?: number
    distinct?: ResumeTemplateScalarFieldEnum | ResumeTemplateScalarFieldEnum[]
  }

  /**
   * ResumeTemplate create
   */
  export type ResumeTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * The data needed to create a ResumeTemplate.
     */
    data: XOR<ResumeTemplateCreateInput, ResumeTemplateUncheckedCreateInput>
  }

  /**
   * ResumeTemplate createMany
   */
  export type ResumeTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResumeTemplates.
     */
    data: ResumeTemplateCreateManyInput | ResumeTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResumeTemplate update
   */
  export type ResumeTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * The data needed to update a ResumeTemplate.
     */
    data: XOR<ResumeTemplateUpdateInput, ResumeTemplateUncheckedUpdateInput>
    /**
     * Choose, which ResumeTemplate to update.
     */
    where: ResumeTemplateWhereUniqueInput
  }

  /**
   * ResumeTemplate updateMany
   */
  export type ResumeTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResumeTemplates.
     */
    data: XOR<ResumeTemplateUpdateManyMutationInput, ResumeTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ResumeTemplates to update
     */
    where?: ResumeTemplateWhereInput
  }

  /**
   * ResumeTemplate upsert
   */
  export type ResumeTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * The filter to search for the ResumeTemplate to update in case it exists.
     */
    where: ResumeTemplateWhereUniqueInput
    /**
     * In case the ResumeTemplate found by the `where` argument doesn't exist, create a new ResumeTemplate with this data.
     */
    create: XOR<ResumeTemplateCreateInput, ResumeTemplateUncheckedCreateInput>
    /**
     * In case the ResumeTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeTemplateUpdateInput, ResumeTemplateUncheckedUpdateInput>
  }

  /**
   * ResumeTemplate delete
   */
  export type ResumeTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
    /**
     * Filter which ResumeTemplate to delete.
     */
    where: ResumeTemplateWhereUniqueInput
  }

  /**
   * ResumeTemplate deleteMany
   */
  export type ResumeTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResumeTemplates to delete
     */
    where?: ResumeTemplateWhereInput
  }

  /**
   * ResumeTemplate without action
   */
  export type ResumeTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeTemplate
     */
    select?: ResumeTemplateSelect<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    enum: string | null
    name: string | null
    desc: string | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    enum: string | null
    name: string | null
    desc: string | null
    creatorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    enum: number
    name: number
    desc: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    enum?: true
    name?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    enum?: true
    name?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    enum?: true
    name?: true
    desc?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    enum: string
    name: string
    desc: string
    creatorId: number
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enum?: boolean
    name?: boolean
    desc?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>


  export type roleSelectScalar = {
    id?: boolean
    enum?: boolean
    name?: boolean
    desc?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enum: string
      name: string
      desc: string
      creatorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the role model
   */ 
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly enum: FieldRef<"role", 'String'>
    readonly name: FieldRef<"role", 'String'>
    readonly desc: FieldRef<"role", 'String'>
    readonly creatorId: FieldRef<"role", 'Int'>
    readonly createdAt: FieldRef<"role", 'DateTime'>
    readonly updatedAt: FieldRef<"role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    disabled: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    disabled: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    avatar: string | null
    username: string | null
    password: string | null
    disabled: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    avatar: string | null
    username: string | null
    password: string | null
    disabled: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    avatar: number
    username: number
    password: number
    disabled: number
    roles: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    disabled?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    disabled?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    avatar?: true
    username?: true
    password?: true
    disabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    avatar?: true
    username?: true
    password?: true
    disabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    avatar?: true
    username?: true
    password?: true
    disabled?: true
    roles?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    avatar: string
    username: string
    password: string
    disabled: number
    roles: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    avatar?: boolean
    username?: boolean
    password?: boolean
    disabled?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    avatar?: boolean
    username?: boolean
    password?: boolean
    disabled?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
      avatar: string
      username: string
      password: string
      disabled: number
      roles: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly disabled: FieldRef<"User", 'Int'>
    readonly roles: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }


  /**
   * Model Vip
   */

  export type AggregateVip = {
    _count: VipCountAggregateOutputType | null
    _avg: VipAvgAggregateOutputType | null
    _sum: VipSumAggregateOutputType | null
    _min: VipMinAggregateOutputType | null
    _max: VipMaxAggregateOutputType | null
  }

  export type VipAvgAggregateOutputType = {
    userId: number | null
    vipTypeId: number | null
  }

  export type VipSumAggregateOutputType = {
    userId: number | null
    vipTypeId: number | null
  }

  export type VipMinAggregateOutputType = {
    userId: number | null
    vipTypeId: number | null
    start_time: Date | null
    expire_time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipMaxAggregateOutputType = {
    userId: number | null
    vipTypeId: number | null
    start_time: Date | null
    expire_time: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipCountAggregateOutputType = {
    userId: number
    vipTypeId: number
    start_time: number
    expire_time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VipAvgAggregateInputType = {
    userId?: true
    vipTypeId?: true
  }

  export type VipSumAggregateInputType = {
    userId?: true
    vipTypeId?: true
  }

  export type VipMinAggregateInputType = {
    userId?: true
    vipTypeId?: true
    start_time?: true
    expire_time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipMaxAggregateInputType = {
    userId?: true
    vipTypeId?: true
    start_time?: true
    expire_time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipCountAggregateInputType = {
    userId?: true
    vipTypeId?: true
    start_time?: true
    expire_time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vip to aggregate.
     */
    where?: VipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vips to fetch.
     */
    orderBy?: VipOrderByWithRelationInput | VipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vips
    **/
    _count?: true | VipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VipMaxAggregateInputType
  }

  export type GetVipAggregateType<T extends VipAggregateArgs> = {
        [P in keyof T & keyof AggregateVip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVip[P]>
      : GetScalarType<T[P], AggregateVip[P]>
  }




  export type VipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VipWhereInput
    orderBy?: VipOrderByWithAggregationInput | VipOrderByWithAggregationInput[]
    by: VipScalarFieldEnum[] | VipScalarFieldEnum
    having?: VipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VipCountAggregateInputType | true
    _avg?: VipAvgAggregateInputType
    _sum?: VipSumAggregateInputType
    _min?: VipMinAggregateInputType
    _max?: VipMaxAggregateInputType
  }

  export type VipGroupByOutputType = {
    userId: number
    vipTypeId: number
    start_time: Date
    expire_time: Date
    createdAt: Date
    updatedAt: Date
    _count: VipCountAggregateOutputType | null
    _avg: VipAvgAggregateOutputType | null
    _sum: VipSumAggregateOutputType | null
    _min: VipMinAggregateOutputType | null
    _max: VipMaxAggregateOutputType | null
  }

  type GetVipGroupByPayload<T extends VipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VipGroupByOutputType[P]>
            : GetScalarType<T[P], VipGroupByOutputType[P]>
        }
      >
    >


  export type VipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    vipTypeId?: boolean
    start_time?: boolean
    expire_time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vip"]>


  export type VipSelectScalar = {
    userId?: boolean
    vipTypeId?: boolean
    start_time?: boolean
    expire_time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vip"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      vipTypeId: number
      start_time: Date
      expire_time: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vip"]>
    composites: {}
  }

  type VipGetPayload<S extends boolean | null | undefined | VipDefaultArgs> = $Result.GetResult<Prisma.$VipPayload, S>

  type VipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VipCountAggregateInputType | true
    }

  export interface VipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vip'], meta: { name: 'Vip' } }
    /**
     * Find zero or one Vip that matches the filter.
     * @param {VipFindUniqueArgs} args - Arguments to find a Vip
     * @example
     * // Get one Vip
     * const vip = await prisma.vip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VipFindUniqueArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vip that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VipFindUniqueOrThrowArgs} args - Arguments to find a Vip
     * @example
     * // Get one Vip
     * const vip = await prisma.vip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipFindFirstArgs} args - Arguments to find a Vip
     * @example
     * // Get one Vip
     * const vip = await prisma.vip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VipFindFirstArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipFindFirstOrThrowArgs} args - Arguments to find a Vip
     * @example
     * // Get one Vip
     * const vip = await prisma.vip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vips
     * const vips = await prisma.vip.findMany()
     * 
     * // Get first 10 Vips
     * const vips = await prisma.vip.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const vipWithUserIdOnly = await prisma.vip.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends VipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vip.
     * @param {VipCreateArgs} args - Arguments to create a Vip.
     * @example
     * // Create one Vip
     * const Vip = await prisma.vip.create({
     *   data: {
     *     // ... data to create a Vip
     *   }
     * })
     * 
    **/
    create<T extends VipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VipCreateArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vips.
     * @param {VipCreateManyArgs} args - Arguments to create many Vips.
     * @example
     * // Create many Vips
     * const vip = await prisma.vip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VipCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vip.
     * @param {VipDeleteArgs} args - Arguments to delete one Vip.
     * @example
     * // Delete one Vip
     * const Vip = await prisma.vip.delete({
     *   where: {
     *     // ... filter to delete one Vip
     *   }
     * })
     * 
    **/
    delete<T extends VipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VipDeleteArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vip.
     * @param {VipUpdateArgs} args - Arguments to update one Vip.
     * @example
     * // Update one Vip
     * const vip = await prisma.vip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VipUpdateArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vips.
     * @param {VipDeleteManyArgs} args - Arguments to filter Vips to delete.
     * @example
     * // Delete a few Vips
     * const { count } = await prisma.vip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vips
     * const vip = await prisma.vip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vip.
     * @param {VipUpsertArgs} args - Arguments to update or create a Vip.
     * @example
     * // Update or create a Vip
     * const vip = await prisma.vip.upsert({
     *   create: {
     *     // ... data to create a Vip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vip we want to update
     *   }
     * })
    **/
    upsert<T extends VipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VipUpsertArgs<ExtArgs>>
    ): Prisma__VipClient<$Result.GetResult<Prisma.$VipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipCountArgs} args - Arguments to filter Vips to count.
     * @example
     * // Count the number of Vips
     * const count = await prisma.vip.count({
     *   where: {
     *     // ... the filter for the Vips we want to count
     *   }
     * })
    **/
    count<T extends VipCountArgs>(
      args?: Subset<T, VipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VipAggregateArgs>(args: Subset<T, VipAggregateArgs>): Prisma.PrismaPromise<GetVipAggregateType<T>>

    /**
     * Group by Vip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VipGroupByArgs['orderBy'] }
        : { orderBy?: VipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vip model
   */
  readonly fields: VipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vip model
   */ 
  interface VipFieldRefs {
    readonly userId: FieldRef<"Vip", 'Int'>
    readonly vipTypeId: FieldRef<"Vip", 'Int'>
    readonly start_time: FieldRef<"Vip", 'DateTime'>
    readonly expire_time: FieldRef<"Vip", 'DateTime'>
    readonly createdAt: FieldRef<"Vip", 'DateTime'>
    readonly updatedAt: FieldRef<"Vip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vip findUnique
   */
  export type VipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter, which Vip to fetch.
     */
    where: VipWhereUniqueInput
  }

  /**
   * Vip findUniqueOrThrow
   */
  export type VipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter, which Vip to fetch.
     */
    where: VipWhereUniqueInput
  }

  /**
   * Vip findFirst
   */
  export type VipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter, which Vip to fetch.
     */
    where?: VipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vips to fetch.
     */
    orderBy?: VipOrderByWithRelationInput | VipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vips.
     */
    cursor?: VipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vips.
     */
    distinct?: VipScalarFieldEnum | VipScalarFieldEnum[]
  }

  /**
   * Vip findFirstOrThrow
   */
  export type VipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter, which Vip to fetch.
     */
    where?: VipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vips to fetch.
     */
    orderBy?: VipOrderByWithRelationInput | VipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vips.
     */
    cursor?: VipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vips.
     */
    distinct?: VipScalarFieldEnum | VipScalarFieldEnum[]
  }

  /**
   * Vip findMany
   */
  export type VipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter, which Vips to fetch.
     */
    where?: VipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vips to fetch.
     */
    orderBy?: VipOrderByWithRelationInput | VipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vips.
     */
    cursor?: VipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vips.
     */
    skip?: number
    distinct?: VipScalarFieldEnum | VipScalarFieldEnum[]
  }

  /**
   * Vip create
   */
  export type VipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * The data needed to create a Vip.
     */
    data: XOR<VipCreateInput, VipUncheckedCreateInput>
  }

  /**
   * Vip createMany
   */
  export type VipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vips.
     */
    data: VipCreateManyInput | VipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vip update
   */
  export type VipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * The data needed to update a Vip.
     */
    data: XOR<VipUpdateInput, VipUncheckedUpdateInput>
    /**
     * Choose, which Vip to update.
     */
    where: VipWhereUniqueInput
  }

  /**
   * Vip updateMany
   */
  export type VipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vips.
     */
    data: XOR<VipUpdateManyMutationInput, VipUncheckedUpdateManyInput>
    /**
     * Filter which Vips to update
     */
    where?: VipWhereInput
  }

  /**
   * Vip upsert
   */
  export type VipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * The filter to search for the Vip to update in case it exists.
     */
    where: VipWhereUniqueInput
    /**
     * In case the Vip found by the `where` argument doesn't exist, create a new Vip with this data.
     */
    create: XOR<VipCreateInput, VipUncheckedCreateInput>
    /**
     * In case the Vip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VipUpdateInput, VipUncheckedUpdateInput>
  }

  /**
   * Vip delete
   */
  export type VipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
    /**
     * Filter which Vip to delete.
     */
    where: VipWhereUniqueInput
  }

  /**
   * Vip deleteMany
   */
  export type VipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vips to delete
     */
    where?: VipWhereInput
  }

  /**
   * Vip without action
   */
  export type VipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vip
     */
    select?: VipSelect<ExtArgs> | null
  }


  /**
   * Model VipExchangeCode
   */

  export type AggregateVipExchangeCode = {
    _count: VipExchangeCodeCountAggregateOutputType | null
    _avg: VipExchangeCodeAvgAggregateOutputType | null
    _sum: VipExchangeCodeSumAggregateOutputType | null
    _min: VipExchangeCodeMinAggregateOutputType | null
    _max: VipExchangeCodeMaxAggregateOutputType | null
  }

  export type VipExchangeCodeAvgAggregateOutputType = {
    id: number | null
    vipTypeTd: number | null
    creatorId: number | null
    exchanged: number | null
  }

  export type VipExchangeCodeSumAggregateOutputType = {
    id: number | null
    vipTypeTd: number | null
    creatorId: number | null
    exchanged: number | null
  }

  export type VipExchangeCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    vipTypeTd: number | null
    startTime: Date | null
    expireTime: Date | null
    creatorId: number | null
    exchanged: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipExchangeCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    vipTypeTd: number | null
    startTime: Date | null
    expireTime: Date | null
    creatorId: number | null
    exchanged: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipExchangeCodeCountAggregateOutputType = {
    id: number
    code: number
    vipTypeTd: number
    startTime: number
    expireTime: number
    creatorId: number
    exchanged: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VipExchangeCodeAvgAggregateInputType = {
    id?: true
    vipTypeTd?: true
    creatorId?: true
    exchanged?: true
  }

  export type VipExchangeCodeSumAggregateInputType = {
    id?: true
    vipTypeTd?: true
    creatorId?: true
    exchanged?: true
  }

  export type VipExchangeCodeMinAggregateInputType = {
    id?: true
    code?: true
    vipTypeTd?: true
    startTime?: true
    expireTime?: true
    creatorId?: true
    exchanged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipExchangeCodeMaxAggregateInputType = {
    id?: true
    code?: true
    vipTypeTd?: true
    startTime?: true
    expireTime?: true
    creatorId?: true
    exchanged?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipExchangeCodeCountAggregateInputType = {
    id?: true
    code?: true
    vipTypeTd?: true
    startTime?: true
    expireTime?: true
    creatorId?: true
    exchanged?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VipExchangeCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VipExchangeCode to aggregate.
     */
    where?: VipExchangeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipExchangeCodes to fetch.
     */
    orderBy?: VipExchangeCodeOrderByWithRelationInput | VipExchangeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VipExchangeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipExchangeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipExchangeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VipExchangeCodes
    **/
    _count?: true | VipExchangeCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VipExchangeCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VipExchangeCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VipExchangeCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VipExchangeCodeMaxAggregateInputType
  }

  export type GetVipExchangeCodeAggregateType<T extends VipExchangeCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVipExchangeCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVipExchangeCode[P]>
      : GetScalarType<T[P], AggregateVipExchangeCode[P]>
  }




  export type VipExchangeCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VipExchangeCodeWhereInput
    orderBy?: VipExchangeCodeOrderByWithAggregationInput | VipExchangeCodeOrderByWithAggregationInput[]
    by: VipExchangeCodeScalarFieldEnum[] | VipExchangeCodeScalarFieldEnum
    having?: VipExchangeCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VipExchangeCodeCountAggregateInputType | true
    _avg?: VipExchangeCodeAvgAggregateInputType
    _sum?: VipExchangeCodeSumAggregateInputType
    _min?: VipExchangeCodeMinAggregateInputType
    _max?: VipExchangeCodeMaxAggregateInputType
  }

  export type VipExchangeCodeGroupByOutputType = {
    id: number
    code: string
    vipTypeTd: number
    startTime: Date
    expireTime: Date
    creatorId: number
    exchanged: number
    createdAt: Date
    updatedAt: Date
    _count: VipExchangeCodeCountAggregateOutputType | null
    _avg: VipExchangeCodeAvgAggregateOutputType | null
    _sum: VipExchangeCodeSumAggregateOutputType | null
    _min: VipExchangeCodeMinAggregateOutputType | null
    _max: VipExchangeCodeMaxAggregateOutputType | null
  }

  type GetVipExchangeCodeGroupByPayload<T extends VipExchangeCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VipExchangeCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VipExchangeCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VipExchangeCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VipExchangeCodeGroupByOutputType[P]>
        }
      >
    >


  export type VipExchangeCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    vipTypeTd?: boolean
    startTime?: boolean
    expireTime?: boolean
    creatorId?: boolean
    exchanged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vipExchangeCode"]>


  export type VipExchangeCodeSelectScalar = {
    id?: boolean
    code?: boolean
    vipTypeTd?: boolean
    startTime?: boolean
    expireTime?: boolean
    creatorId?: boolean
    exchanged?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VipExchangeCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VipExchangeCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      vipTypeTd: number
      startTime: Date
      expireTime: Date
      creatorId: number
      exchanged: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vipExchangeCode"]>
    composites: {}
  }

  type VipExchangeCodeGetPayload<S extends boolean | null | undefined | VipExchangeCodeDefaultArgs> = $Result.GetResult<Prisma.$VipExchangeCodePayload, S>

  type VipExchangeCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VipExchangeCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VipExchangeCodeCountAggregateInputType | true
    }

  export interface VipExchangeCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VipExchangeCode'], meta: { name: 'VipExchangeCode' } }
    /**
     * Find zero or one VipExchangeCode that matches the filter.
     * @param {VipExchangeCodeFindUniqueArgs} args - Arguments to find a VipExchangeCode
     * @example
     * // Get one VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VipExchangeCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VipExchangeCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VipExchangeCodeFindUniqueOrThrowArgs} args - Arguments to find a VipExchangeCode
     * @example
     * // Get one VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VipExchangeCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VipExchangeCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeFindFirstArgs} args - Arguments to find a VipExchangeCode
     * @example
     * // Get one VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VipExchangeCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeFindFirstArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VipExchangeCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeFindFirstOrThrowArgs} args - Arguments to find a VipExchangeCode
     * @example
     * // Get one VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VipExchangeCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VipExchangeCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VipExchangeCodes
     * const vipExchangeCodes = await prisma.vipExchangeCode.findMany()
     * 
     * // Get first 10 VipExchangeCodes
     * const vipExchangeCodes = await prisma.vipExchangeCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vipExchangeCodeWithIdOnly = await prisma.vipExchangeCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VipExchangeCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VipExchangeCode.
     * @param {VipExchangeCodeCreateArgs} args - Arguments to create a VipExchangeCode.
     * @example
     * // Create one VipExchangeCode
     * const VipExchangeCode = await prisma.vipExchangeCode.create({
     *   data: {
     *     // ... data to create a VipExchangeCode
     *   }
     * })
     * 
    **/
    create<T extends VipExchangeCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeCreateArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VipExchangeCodes.
     * @param {VipExchangeCodeCreateManyArgs} args - Arguments to create many VipExchangeCodes.
     * @example
     * // Create many VipExchangeCodes
     * const vipExchangeCode = await prisma.vipExchangeCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VipExchangeCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VipExchangeCode.
     * @param {VipExchangeCodeDeleteArgs} args - Arguments to delete one VipExchangeCode.
     * @example
     * // Delete one VipExchangeCode
     * const VipExchangeCode = await prisma.vipExchangeCode.delete({
     *   where: {
     *     // ... filter to delete one VipExchangeCode
     *   }
     * })
     * 
    **/
    delete<T extends VipExchangeCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeDeleteArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VipExchangeCode.
     * @param {VipExchangeCodeUpdateArgs} args - Arguments to update one VipExchangeCode.
     * @example
     * // Update one VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VipExchangeCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeUpdateArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VipExchangeCodes.
     * @param {VipExchangeCodeDeleteManyArgs} args - Arguments to filter VipExchangeCodes to delete.
     * @example
     * // Delete a few VipExchangeCodes
     * const { count } = await prisma.vipExchangeCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VipExchangeCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipExchangeCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VipExchangeCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VipExchangeCodes
     * const vipExchangeCode = await prisma.vipExchangeCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VipExchangeCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VipExchangeCode.
     * @param {VipExchangeCodeUpsertArgs} args - Arguments to update or create a VipExchangeCode.
     * @example
     * // Update or create a VipExchangeCode
     * const vipExchangeCode = await prisma.vipExchangeCode.upsert({
     *   create: {
     *     // ... data to create a VipExchangeCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VipExchangeCode we want to update
     *   }
     * })
    **/
    upsert<T extends VipExchangeCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VipExchangeCodeUpsertArgs<ExtArgs>>
    ): Prisma__VipExchangeCodeClient<$Result.GetResult<Prisma.$VipExchangeCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VipExchangeCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeCountArgs} args - Arguments to filter VipExchangeCodes to count.
     * @example
     * // Count the number of VipExchangeCodes
     * const count = await prisma.vipExchangeCode.count({
     *   where: {
     *     // ... the filter for the VipExchangeCodes we want to count
     *   }
     * })
    **/
    count<T extends VipExchangeCodeCountArgs>(
      args?: Subset<T, VipExchangeCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VipExchangeCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VipExchangeCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VipExchangeCodeAggregateArgs>(args: Subset<T, VipExchangeCodeAggregateArgs>): Prisma.PrismaPromise<GetVipExchangeCodeAggregateType<T>>

    /**
     * Group by VipExchangeCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipExchangeCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VipExchangeCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VipExchangeCodeGroupByArgs['orderBy'] }
        : { orderBy?: VipExchangeCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VipExchangeCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVipExchangeCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VipExchangeCode model
   */
  readonly fields: VipExchangeCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VipExchangeCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VipExchangeCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VipExchangeCode model
   */ 
  interface VipExchangeCodeFieldRefs {
    readonly id: FieldRef<"VipExchangeCode", 'Int'>
    readonly code: FieldRef<"VipExchangeCode", 'String'>
    readonly vipTypeTd: FieldRef<"VipExchangeCode", 'Int'>
    readonly startTime: FieldRef<"VipExchangeCode", 'DateTime'>
    readonly expireTime: FieldRef<"VipExchangeCode", 'DateTime'>
    readonly creatorId: FieldRef<"VipExchangeCode", 'Int'>
    readonly exchanged: FieldRef<"VipExchangeCode", 'Int'>
    readonly createdAt: FieldRef<"VipExchangeCode", 'DateTime'>
    readonly updatedAt: FieldRef<"VipExchangeCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VipExchangeCode findUnique
   */
  export type VipExchangeCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter, which VipExchangeCode to fetch.
     */
    where: VipExchangeCodeWhereUniqueInput
  }

  /**
   * VipExchangeCode findUniqueOrThrow
   */
  export type VipExchangeCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter, which VipExchangeCode to fetch.
     */
    where: VipExchangeCodeWhereUniqueInput
  }

  /**
   * VipExchangeCode findFirst
   */
  export type VipExchangeCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter, which VipExchangeCode to fetch.
     */
    where?: VipExchangeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipExchangeCodes to fetch.
     */
    orderBy?: VipExchangeCodeOrderByWithRelationInput | VipExchangeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VipExchangeCodes.
     */
    cursor?: VipExchangeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipExchangeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipExchangeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VipExchangeCodes.
     */
    distinct?: VipExchangeCodeScalarFieldEnum | VipExchangeCodeScalarFieldEnum[]
  }

  /**
   * VipExchangeCode findFirstOrThrow
   */
  export type VipExchangeCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter, which VipExchangeCode to fetch.
     */
    where?: VipExchangeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipExchangeCodes to fetch.
     */
    orderBy?: VipExchangeCodeOrderByWithRelationInput | VipExchangeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VipExchangeCodes.
     */
    cursor?: VipExchangeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipExchangeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipExchangeCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VipExchangeCodes.
     */
    distinct?: VipExchangeCodeScalarFieldEnum | VipExchangeCodeScalarFieldEnum[]
  }

  /**
   * VipExchangeCode findMany
   */
  export type VipExchangeCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter, which VipExchangeCodes to fetch.
     */
    where?: VipExchangeCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipExchangeCodes to fetch.
     */
    orderBy?: VipExchangeCodeOrderByWithRelationInput | VipExchangeCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VipExchangeCodes.
     */
    cursor?: VipExchangeCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipExchangeCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipExchangeCodes.
     */
    skip?: number
    distinct?: VipExchangeCodeScalarFieldEnum | VipExchangeCodeScalarFieldEnum[]
  }

  /**
   * VipExchangeCode create
   */
  export type VipExchangeCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a VipExchangeCode.
     */
    data: XOR<VipExchangeCodeCreateInput, VipExchangeCodeUncheckedCreateInput>
  }

  /**
   * VipExchangeCode createMany
   */
  export type VipExchangeCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VipExchangeCodes.
     */
    data: VipExchangeCodeCreateManyInput | VipExchangeCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VipExchangeCode update
   */
  export type VipExchangeCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a VipExchangeCode.
     */
    data: XOR<VipExchangeCodeUpdateInput, VipExchangeCodeUncheckedUpdateInput>
    /**
     * Choose, which VipExchangeCode to update.
     */
    where: VipExchangeCodeWhereUniqueInput
  }

  /**
   * VipExchangeCode updateMany
   */
  export type VipExchangeCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VipExchangeCodes.
     */
    data: XOR<VipExchangeCodeUpdateManyMutationInput, VipExchangeCodeUncheckedUpdateManyInput>
    /**
     * Filter which VipExchangeCodes to update
     */
    where?: VipExchangeCodeWhereInput
  }

  /**
   * VipExchangeCode upsert
   */
  export type VipExchangeCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the VipExchangeCode to update in case it exists.
     */
    where: VipExchangeCodeWhereUniqueInput
    /**
     * In case the VipExchangeCode found by the `where` argument doesn't exist, create a new VipExchangeCode with this data.
     */
    create: XOR<VipExchangeCodeCreateInput, VipExchangeCodeUncheckedCreateInput>
    /**
     * In case the VipExchangeCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VipExchangeCodeUpdateInput, VipExchangeCodeUncheckedUpdateInput>
  }

  /**
   * VipExchangeCode delete
   */
  export type VipExchangeCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
    /**
     * Filter which VipExchangeCode to delete.
     */
    where: VipExchangeCodeWhereUniqueInput
  }

  /**
   * VipExchangeCode deleteMany
   */
  export type VipExchangeCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VipExchangeCodes to delete
     */
    where?: VipExchangeCodeWhereInput
  }

  /**
   * VipExchangeCode without action
   */
  export type VipExchangeCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipExchangeCode
     */
    select?: VipExchangeCodeSelect<ExtArgs> | null
  }


  /**
   * Model VipType
   */

  export type AggregateVipType = {
    _count: VipTypeCountAggregateOutputType | null
    _avg: VipTypeAvgAggregateOutputType | null
    _sum: VipTypeSumAggregateOutputType | null
    _min: VipTypeMinAggregateOutputType | null
    _max: VipTypeMaxAggregateOutputType | null
  }

  export type VipTypeAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    duration: number | null
    sellType: number | null
    disabled: number | null
  }

  export type VipTypeSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    originalPrice: Decimal | null
    duration: number | null
    sellType: number | null
    disabled: number | null
  }

  export type VipTypeMinAggregateOutputType = {
    id: number | null
    tilte: string | null
    description: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    duration: number | null
    sellType: number | null
    disabled: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipTypeMaxAggregateOutputType = {
    id: number | null
    tilte: string | null
    description: string | null
    price: Decimal | null
    originalPrice: Decimal | null
    duration: number | null
    sellType: number | null
    disabled: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VipTypeCountAggregateOutputType = {
    id: number
    tilte: number
    description: number
    equity: number
    price: number
    originalPrice: number
    duration: number
    sellType: number
    disabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VipTypeAvgAggregateInputType = {
    id?: true
    price?: true
    originalPrice?: true
    duration?: true
    sellType?: true
    disabled?: true
  }

  export type VipTypeSumAggregateInputType = {
    id?: true
    price?: true
    originalPrice?: true
    duration?: true
    sellType?: true
    disabled?: true
  }

  export type VipTypeMinAggregateInputType = {
    id?: true
    tilte?: true
    description?: true
    price?: true
    originalPrice?: true
    duration?: true
    sellType?: true
    disabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipTypeMaxAggregateInputType = {
    id?: true
    tilte?: true
    description?: true
    price?: true
    originalPrice?: true
    duration?: true
    sellType?: true
    disabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VipTypeCountAggregateInputType = {
    id?: true
    tilte?: true
    description?: true
    equity?: true
    price?: true
    originalPrice?: true
    duration?: true
    sellType?: true
    disabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VipTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VipType to aggregate.
     */
    where?: VipTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipTypes to fetch.
     */
    orderBy?: VipTypeOrderByWithRelationInput | VipTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VipTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VipTypes
    **/
    _count?: true | VipTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VipTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VipTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VipTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VipTypeMaxAggregateInputType
  }

  export type GetVipTypeAggregateType<T extends VipTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVipType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVipType[P]>
      : GetScalarType<T[P], AggregateVipType[P]>
  }




  export type VipTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VipTypeWhereInput
    orderBy?: VipTypeOrderByWithAggregationInput | VipTypeOrderByWithAggregationInput[]
    by: VipTypeScalarFieldEnum[] | VipTypeScalarFieldEnum
    having?: VipTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VipTypeCountAggregateInputType | true
    _avg?: VipTypeAvgAggregateInputType
    _sum?: VipTypeSumAggregateInputType
    _min?: VipTypeMinAggregateInputType
    _max?: VipTypeMaxAggregateInputType
  }

  export type VipTypeGroupByOutputType = {
    id: number
    tilte: string
    description: string
    equity: JsonValue | null
    price: Decimal
    originalPrice: Decimal | null
    duration: number
    sellType: number
    disabled: number
    createdAt: Date
    updatedAt: Date
    _count: VipTypeCountAggregateOutputType | null
    _avg: VipTypeAvgAggregateOutputType | null
    _sum: VipTypeSumAggregateOutputType | null
    _min: VipTypeMinAggregateOutputType | null
    _max: VipTypeMaxAggregateOutputType | null
  }

  type GetVipTypeGroupByPayload<T extends VipTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VipTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VipTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VipTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VipTypeGroupByOutputType[P]>
        }
      >
    >


  export type VipTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tilte?: boolean
    description?: boolean
    equity?: boolean
    price?: boolean
    originalPrice?: boolean
    duration?: boolean
    sellType?: boolean
    disabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vipType"]>


  export type VipTypeSelectScalar = {
    id?: boolean
    tilte?: boolean
    description?: boolean
    equity?: boolean
    price?: boolean
    originalPrice?: boolean
    duration?: boolean
    sellType?: boolean
    disabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $VipTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VipType"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tilte: string
      description: string
      equity: Prisma.JsonValue | null
      price: Prisma.Decimal
      originalPrice: Prisma.Decimal | null
      duration: number
      sellType: number
      disabled: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vipType"]>
    composites: {}
  }

  type VipTypeGetPayload<S extends boolean | null | undefined | VipTypeDefaultArgs> = $Result.GetResult<Prisma.$VipTypePayload, S>

  type VipTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VipTypeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VipTypeCountAggregateInputType | true
    }

  export interface VipTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VipType'], meta: { name: 'VipType' } }
    /**
     * Find zero or one VipType that matches the filter.
     * @param {VipTypeFindUniqueArgs} args - Arguments to find a VipType
     * @example
     * // Get one VipType
     * const vipType = await prisma.vipType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VipTypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeFindUniqueArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VipType that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VipTypeFindUniqueOrThrowArgs} args - Arguments to find a VipType
     * @example
     * // Get one VipType
     * const vipType = await prisma.vipType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VipTypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VipType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeFindFirstArgs} args - Arguments to find a VipType
     * @example
     * // Get one VipType
     * const vipType = await prisma.vipType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VipTypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeFindFirstArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VipType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeFindFirstOrThrowArgs} args - Arguments to find a VipType
     * @example
     * // Get one VipType
     * const vipType = await prisma.vipType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VipTypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VipTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VipTypes
     * const vipTypes = await prisma.vipType.findMany()
     * 
     * // Get first 10 VipTypes
     * const vipTypes = await prisma.vipType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vipTypeWithIdOnly = await prisma.vipType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VipTypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VipType.
     * @param {VipTypeCreateArgs} args - Arguments to create a VipType.
     * @example
     * // Create one VipType
     * const VipType = await prisma.vipType.create({
     *   data: {
     *     // ... data to create a VipType
     *   }
     * })
     * 
    **/
    create<T extends VipTypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeCreateArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VipTypes.
     * @param {VipTypeCreateManyArgs} args - Arguments to create many VipTypes.
     * @example
     * // Create many VipTypes
     * const vipType = await prisma.vipType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VipTypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VipType.
     * @param {VipTypeDeleteArgs} args - Arguments to delete one VipType.
     * @example
     * // Delete one VipType
     * const VipType = await prisma.vipType.delete({
     *   where: {
     *     // ... filter to delete one VipType
     *   }
     * })
     * 
    **/
    delete<T extends VipTypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeDeleteArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VipType.
     * @param {VipTypeUpdateArgs} args - Arguments to update one VipType.
     * @example
     * // Update one VipType
     * const vipType = await prisma.vipType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VipTypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeUpdateArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VipTypes.
     * @param {VipTypeDeleteManyArgs} args - Arguments to filter VipTypes to delete.
     * @example
     * // Delete a few VipTypes
     * const { count } = await prisma.vipType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VipTypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VipTypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VipTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VipTypes
     * const vipType = await prisma.vipType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VipTypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VipType.
     * @param {VipTypeUpsertArgs} args - Arguments to update or create a VipType.
     * @example
     * // Update or create a VipType
     * const vipType = await prisma.vipType.upsert({
     *   create: {
     *     // ... data to create a VipType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VipType we want to update
     *   }
     * })
    **/
    upsert<T extends VipTypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VipTypeUpsertArgs<ExtArgs>>
    ): Prisma__VipTypeClient<$Result.GetResult<Prisma.$VipTypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VipTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeCountArgs} args - Arguments to filter VipTypes to count.
     * @example
     * // Count the number of VipTypes
     * const count = await prisma.vipType.count({
     *   where: {
     *     // ... the filter for the VipTypes we want to count
     *   }
     * })
    **/
    count<T extends VipTypeCountArgs>(
      args?: Subset<T, VipTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VipTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VipType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VipTypeAggregateArgs>(args: Subset<T, VipTypeAggregateArgs>): Prisma.PrismaPromise<GetVipTypeAggregateType<T>>

    /**
     * Group by VipType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VipTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VipTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VipTypeGroupByArgs['orderBy'] }
        : { orderBy?: VipTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VipTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVipTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VipType model
   */
  readonly fields: VipTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VipType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VipTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VipType model
   */ 
  interface VipTypeFieldRefs {
    readonly id: FieldRef<"VipType", 'Int'>
    readonly tilte: FieldRef<"VipType", 'String'>
    readonly description: FieldRef<"VipType", 'String'>
    readonly equity: FieldRef<"VipType", 'Json'>
    readonly price: FieldRef<"VipType", 'Decimal'>
    readonly originalPrice: FieldRef<"VipType", 'Decimal'>
    readonly duration: FieldRef<"VipType", 'Int'>
    readonly sellType: FieldRef<"VipType", 'Int'>
    readonly disabled: FieldRef<"VipType", 'Int'>
    readonly createdAt: FieldRef<"VipType", 'DateTime'>
    readonly updatedAt: FieldRef<"VipType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VipType findUnique
   */
  export type VipTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter, which VipType to fetch.
     */
    where: VipTypeWhereUniqueInput
  }

  /**
   * VipType findUniqueOrThrow
   */
  export type VipTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter, which VipType to fetch.
     */
    where: VipTypeWhereUniqueInput
  }

  /**
   * VipType findFirst
   */
  export type VipTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter, which VipType to fetch.
     */
    where?: VipTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipTypes to fetch.
     */
    orderBy?: VipTypeOrderByWithRelationInput | VipTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VipTypes.
     */
    cursor?: VipTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VipTypes.
     */
    distinct?: VipTypeScalarFieldEnum | VipTypeScalarFieldEnum[]
  }

  /**
   * VipType findFirstOrThrow
   */
  export type VipTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter, which VipType to fetch.
     */
    where?: VipTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipTypes to fetch.
     */
    orderBy?: VipTypeOrderByWithRelationInput | VipTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VipTypes.
     */
    cursor?: VipTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VipTypes.
     */
    distinct?: VipTypeScalarFieldEnum | VipTypeScalarFieldEnum[]
  }

  /**
   * VipType findMany
   */
  export type VipTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter, which VipTypes to fetch.
     */
    where?: VipTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VipTypes to fetch.
     */
    orderBy?: VipTypeOrderByWithRelationInput | VipTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VipTypes.
     */
    cursor?: VipTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VipTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VipTypes.
     */
    skip?: number
    distinct?: VipTypeScalarFieldEnum | VipTypeScalarFieldEnum[]
  }

  /**
   * VipType create
   */
  export type VipTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * The data needed to create a VipType.
     */
    data: XOR<VipTypeCreateInput, VipTypeUncheckedCreateInput>
  }

  /**
   * VipType createMany
   */
  export type VipTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VipTypes.
     */
    data: VipTypeCreateManyInput | VipTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VipType update
   */
  export type VipTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * The data needed to update a VipType.
     */
    data: XOR<VipTypeUpdateInput, VipTypeUncheckedUpdateInput>
    /**
     * Choose, which VipType to update.
     */
    where: VipTypeWhereUniqueInput
  }

  /**
   * VipType updateMany
   */
  export type VipTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VipTypes.
     */
    data: XOR<VipTypeUpdateManyMutationInput, VipTypeUncheckedUpdateManyInput>
    /**
     * Filter which VipTypes to update
     */
    where?: VipTypeWhereInput
  }

  /**
   * VipType upsert
   */
  export type VipTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * The filter to search for the VipType to update in case it exists.
     */
    where: VipTypeWhereUniqueInput
    /**
     * In case the VipType found by the `where` argument doesn't exist, create a new VipType with this data.
     */
    create: XOR<VipTypeCreateInput, VipTypeUncheckedCreateInput>
    /**
     * In case the VipType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VipTypeUpdateInput, VipTypeUncheckedUpdateInput>
  }

  /**
   * VipType delete
   */
  export type VipTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
    /**
     * Filter which VipType to delete.
     */
    where: VipTypeWhereUniqueInput
  }

  /**
   * VipType deleteMany
   */
  export type VipTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VipTypes to delete
     */
    where?: VipTypeWhereInput
  }

  /**
   * VipType without action
   */
  export type VipTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VipType
     */
    select?: VipTypeSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const InviteCodeScalarFieldEnum: {
    code: 'code',
    userId: 'userId',
    expireTime: 'expireTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InviteCodeScalarFieldEnum = (typeof InviteCodeScalarFieldEnum)[keyof typeof InviteCodeScalarFieldEnum]


  export const InviteUserScalarFieldEnum: {
    id: 'id',
    inviteCode: 'inviteCode',
    initiatorId: 'initiatorId',
    receiverId: 'receiverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InviteUserScalarFieldEnum = (typeof InviteUserScalarFieldEnum)[keyof typeof InviteUserScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    price: 'price',
    payType: 'payType',
    orderStatus: 'orderStatus',
    orderDesc: 'orderDesc',
    overtime: 'overtime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    role_id: 'role_id',
    name: 'name',
    enum: 'enum',
    desc: 'desc',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    userId: 'userId',
    templateId: 'templateId',
    themeColor: 'themeColor',
    isPublic: 'isPublic',
    exportCount: 'exportCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const ResumeTemplateScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    content: 'content',
    headerImg: 'headerImg',
    creatorId: 'creatorId',
    useCount: 'useCount',
    isVip: 'isVip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResumeTemplateScalarFieldEnum = (typeof ResumeTemplateScalarFieldEnum)[keyof typeof ResumeTemplateScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    enum: 'enum',
    name: 'name',
    desc: 'desc',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    avatar: 'avatar',
    username: 'username',
    password: 'password',
    disabled: 'disabled',
    roles: 'roles',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VipScalarFieldEnum: {
    userId: 'userId',
    vipTypeId: 'vipTypeId',
    start_time: 'start_time',
    expire_time: 'expire_time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VipScalarFieldEnum = (typeof VipScalarFieldEnum)[keyof typeof VipScalarFieldEnum]


  export const VipExchangeCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    vipTypeTd: 'vipTypeTd',
    startTime: 'startTime',
    expireTime: 'expireTime',
    creatorId: 'creatorId',
    exchanged: 'exchanged',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VipExchangeCodeScalarFieldEnum = (typeof VipExchangeCodeScalarFieldEnum)[keyof typeof VipExchangeCodeScalarFieldEnum]


  export const VipTypeScalarFieldEnum: {
    id: 'id',
    tilte: 'tilte',
    description: 'description',
    equity: 'equity',
    price: 'price',
    originalPrice: 'originalPrice',
    duration: 'duration',
    sellType: 'sellType',
    disabled: 'disabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VipTypeScalarFieldEnum = (typeof VipTypeScalarFieldEnum)[keyof typeof VipTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type InviteCodeWhereInput = {
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    code?: StringFilter<"InviteCode"> | string
    userId?: IntFilter<"InviteCode"> | number
    expireTime?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
  }

  export type InviteCodeOrderByWithRelationInput = {
    code?: SortOrder
    userId?: SortOrder
    expireTime?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type InviteCodeWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: InviteCodeWhereInput | InviteCodeWhereInput[]
    OR?: InviteCodeWhereInput[]
    NOT?: InviteCodeWhereInput | InviteCodeWhereInput[]
    userId?: IntFilter<"InviteCode"> | number
    expireTime?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    createdAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"InviteCode"> | Date | string | null
  }, "code" | "code">

  export type InviteCodeOrderByWithAggregationInput = {
    code?: SortOrder
    userId?: SortOrder
    expireTime?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: InviteCodeCountOrderByAggregateInput
    _avg?: InviteCodeAvgOrderByAggregateInput
    _max?: InviteCodeMaxOrderByAggregateInput
    _min?: InviteCodeMinOrderByAggregateInput
    _sum?: InviteCodeSumOrderByAggregateInput
  }

  export type InviteCodeScalarWhereWithAggregatesInput = {
    AND?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    OR?: InviteCodeScalarWhereWithAggregatesInput[]
    NOT?: InviteCodeScalarWhereWithAggregatesInput | InviteCodeScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"InviteCode"> | string
    userId?: IntWithAggregatesFilter<"InviteCode"> | number
    expireTime?: DateTimeNullableWithAggregatesFilter<"InviteCode"> | Date | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"InviteCode"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"InviteCode"> | Date | string | null
  }

  export type InviteUserWhereInput = {
    AND?: InviteUserWhereInput | InviteUserWhereInput[]
    OR?: InviteUserWhereInput[]
    NOT?: InviteUserWhereInput | InviteUserWhereInput[]
    id?: IntFilter<"InviteUser"> | number
    inviteCode?: StringFilter<"InviteUser"> | string
    initiatorId?: IntFilter<"InviteUser"> | number
    receiverId?: IntFilter<"InviteUser"> | number
    createdAt?: DateTimeFilter<"InviteUser"> | Date | string
    updatedAt?: DateTimeFilter<"InviteUser"> | Date | string
  }

  export type InviteUserOrderByWithRelationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InviteUserWhereInput | InviteUserWhereInput[]
    OR?: InviteUserWhereInput[]
    NOT?: InviteUserWhereInput | InviteUserWhereInput[]
    inviteCode?: StringFilter<"InviteUser"> | string
    initiatorId?: IntFilter<"InviteUser"> | number
    receiverId?: IntFilter<"InviteUser"> | number
    createdAt?: DateTimeFilter<"InviteUser"> | Date | string
    updatedAt?: DateTimeFilter<"InviteUser"> | Date | string
  }, "id">

  export type InviteUserOrderByWithAggregationInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InviteUserCountOrderByAggregateInput
    _avg?: InviteUserAvgOrderByAggregateInput
    _max?: InviteUserMaxOrderByAggregateInput
    _min?: InviteUserMinOrderByAggregateInput
    _sum?: InviteUserSumOrderByAggregateInput
  }

  export type InviteUserScalarWhereWithAggregatesInput = {
    AND?: InviteUserScalarWhereWithAggregatesInput | InviteUserScalarWhereWithAggregatesInput[]
    OR?: InviteUserScalarWhereWithAggregatesInput[]
    NOT?: InviteUserScalarWhereWithAggregatesInput | InviteUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InviteUser"> | number
    inviteCode?: StringWithAggregatesFilter<"InviteUser"> | string
    initiatorId?: IntWithAggregatesFilter<"InviteUser"> | number
    receiverId?: IntWithAggregatesFilter<"InviteUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"InviteUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InviteUser"> | Date | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: StringFilter<"order"> | string
    userId?: IntFilter<"order"> | number
    price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    payType?: IntNullableFilter<"order"> | number | null
    orderStatus?: IntFilter<"order"> | number
    orderDesc?: StringNullableFilter<"order"> | string | null
    overtime?: DateTimeNullableFilter<"order"> | Date | string | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrderInput | SortOrder
    orderStatus?: SortOrder
    orderDesc?: SortOrderInput | SortOrder
    overtime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    userId?: IntFilter<"order"> | number
    price?: DecimalFilter<"order"> | Decimal | DecimalJsLike | number | string
    payType?: IntNullableFilter<"order"> | number | null
    orderStatus?: IntFilter<"order"> | number
    orderDesc?: StringNullableFilter<"order"> | string | null
    overtime?: DateTimeNullableFilter<"order"> | Date | string | null
    createdAt?: DateTimeFilter<"order"> | Date | string
    updatedAt?: DateTimeFilter<"order"> | Date | string
  }, "id" | "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrderInput | SortOrder
    orderStatus?: SortOrder
    orderDesc?: SortOrderInput | SortOrder
    overtime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"order"> | string
    userId?: IntWithAggregatesFilter<"order"> | number
    price?: DecimalWithAggregatesFilter<"order"> | Decimal | DecimalJsLike | number | string
    payType?: IntNullableWithAggregatesFilter<"order"> | number | null
    orderStatus?: IntWithAggregatesFilter<"order"> | number
    orderDesc?: StringNullableWithAggregatesFilter<"order"> | string | null
    overtime?: DateTimeNullableWithAggregatesFilter<"order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type permissionWhereInput = {
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    id?: IntFilter<"permission"> | number
    role_id?: IntFilter<"permission"> | number
    name?: StringFilter<"permission"> | string
    enum?: StringFilter<"permission"> | string
    desc?: StringFilter<"permission"> | string
    creatorId?: IntFilter<"permission"> | number
    createdAt?: DateTimeFilter<"permission"> | Date | string
    updatedAt?: DateTimeFilter<"permission"> | Date | string
  }

  export type permissionOrderByWithRelationInput = {
    id?: SortOrder
    role_id?: SortOrder
    name?: SortOrder
    enum?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: permissionWhereInput | permissionWhereInput[]
    OR?: permissionWhereInput[]
    NOT?: permissionWhereInput | permissionWhereInput[]
    role_id?: IntFilter<"permission"> | number
    name?: StringFilter<"permission"> | string
    enum?: StringFilter<"permission"> | string
    desc?: StringFilter<"permission"> | string
    creatorId?: IntFilter<"permission"> | number
    createdAt?: DateTimeFilter<"permission"> | Date | string
    updatedAt?: DateTimeFilter<"permission"> | Date | string
  }, "id">

  export type permissionOrderByWithAggregationInput = {
    id?: SortOrder
    role_id?: SortOrder
    name?: SortOrder
    enum?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: permissionCountOrderByAggregateInput
    _avg?: permissionAvgOrderByAggregateInput
    _max?: permissionMaxOrderByAggregateInput
    _min?: permissionMinOrderByAggregateInput
    _sum?: permissionSumOrderByAggregateInput
  }

  export type permissionScalarWhereWithAggregatesInput = {
    AND?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    OR?: permissionScalarWhereWithAggregatesInput[]
    NOT?: permissionScalarWhereWithAggregatesInput | permissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"permission"> | number
    role_id?: IntWithAggregatesFilter<"permission"> | number
    name?: StringWithAggregatesFilter<"permission"> | string
    enum?: StringWithAggregatesFilter<"permission"> | string
    desc?: StringWithAggregatesFilter<"permission"> | string
    creatorId?: IntWithAggregatesFilter<"permission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"permission"> | Date | string
  }

  export type resumeWhereInput = {
    AND?: resumeWhereInput | resumeWhereInput[]
    OR?: resumeWhereInput[]
    NOT?: resumeWhereInput | resumeWhereInput[]
    id?: IntFilter<"resume"> | number
    title?: StringFilter<"resume"> | string
    content?: JsonFilter<"resume">
    userId?: IntFilter<"resume"> | number
    templateId?: IntNullableFilter<"resume"> | number | null
    themeColor?: StringFilter<"resume"> | string
    isPublic?: IntFilter<"resume"> | number
    exportCount?: IntFilter<"resume"> | number
    createdAt?: DateTimeFilter<"resume"> | Date | string
    updatedAt?: DateTimeFilter<"resume"> | Date | string
  }

  export type resumeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    themeColor?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type resumeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: resumeWhereInput | resumeWhereInput[]
    OR?: resumeWhereInput[]
    NOT?: resumeWhereInput | resumeWhereInput[]
    title?: StringFilter<"resume"> | string
    content?: JsonFilter<"resume">
    userId?: IntFilter<"resume"> | number
    templateId?: IntNullableFilter<"resume"> | number | null
    themeColor?: StringFilter<"resume"> | string
    isPublic?: IntFilter<"resume"> | number
    exportCount?: IntFilter<"resume"> | number
    createdAt?: DateTimeFilter<"resume"> | Date | string
    updatedAt?: DateTimeFilter<"resume"> | Date | string
  }, "id" | "id">

  export type resumeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    templateId?: SortOrderInput | SortOrder
    themeColor?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: resumeCountOrderByAggregateInput
    _avg?: resumeAvgOrderByAggregateInput
    _max?: resumeMaxOrderByAggregateInput
    _min?: resumeMinOrderByAggregateInput
    _sum?: resumeSumOrderByAggregateInput
  }

  export type resumeScalarWhereWithAggregatesInput = {
    AND?: resumeScalarWhereWithAggregatesInput | resumeScalarWhereWithAggregatesInput[]
    OR?: resumeScalarWhereWithAggregatesInput[]
    NOT?: resumeScalarWhereWithAggregatesInput | resumeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"resume"> | number
    title?: StringWithAggregatesFilter<"resume"> | string
    content?: JsonWithAggregatesFilter<"resume">
    userId?: IntWithAggregatesFilter<"resume"> | number
    templateId?: IntNullableWithAggregatesFilter<"resume"> | number | null
    themeColor?: StringWithAggregatesFilter<"resume"> | string
    isPublic?: IntWithAggregatesFilter<"resume"> | number
    exportCount?: IntWithAggregatesFilter<"resume"> | number
    createdAt?: DateTimeWithAggregatesFilter<"resume"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"resume"> | Date | string
  }

  export type ResumeTemplateWhereInput = {
    AND?: ResumeTemplateWhereInput | ResumeTemplateWhereInput[]
    OR?: ResumeTemplateWhereInput[]
    NOT?: ResumeTemplateWhereInput | ResumeTemplateWhereInput[]
    id?: IntFilter<"ResumeTemplate"> | number
    code?: StringFilter<"ResumeTemplate"> | string
    title?: StringFilter<"ResumeTemplate"> | string
    content?: JsonFilter<"ResumeTemplate">
    headerImg?: StringNullableFilter<"ResumeTemplate"> | string | null
    creatorId?: IntFilter<"ResumeTemplate"> | number
    useCount?: IntFilter<"ResumeTemplate"> | number
    isVip?: IntFilter<"ResumeTemplate"> | number
    createdAt?: DateTimeFilter<"ResumeTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeTemplate"> | Date | string
  }

  export type ResumeTemplateOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    headerImg?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: ResumeTemplateWhereInput | ResumeTemplateWhereInput[]
    OR?: ResumeTemplateWhereInput[]
    NOT?: ResumeTemplateWhereInput | ResumeTemplateWhereInput[]
    title?: StringFilter<"ResumeTemplate"> | string
    content?: JsonFilter<"ResumeTemplate">
    headerImg?: StringNullableFilter<"ResumeTemplate"> | string | null
    creatorId?: IntFilter<"ResumeTemplate"> | number
    useCount?: IntFilter<"ResumeTemplate"> | number
    isVip?: IntFilter<"ResumeTemplate"> | number
    createdAt?: DateTimeFilter<"ResumeTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ResumeTemplate"> | Date | string
  }, "id" | "id" | "code">

  export type ResumeTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    headerImg?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ResumeTemplateCountOrderByAggregateInput
    _avg?: ResumeTemplateAvgOrderByAggregateInput
    _max?: ResumeTemplateMaxOrderByAggregateInput
    _min?: ResumeTemplateMinOrderByAggregateInput
    _sum?: ResumeTemplateSumOrderByAggregateInput
  }

  export type ResumeTemplateScalarWhereWithAggregatesInput = {
    AND?: ResumeTemplateScalarWhereWithAggregatesInput | ResumeTemplateScalarWhereWithAggregatesInput[]
    OR?: ResumeTemplateScalarWhereWithAggregatesInput[]
    NOT?: ResumeTemplateScalarWhereWithAggregatesInput | ResumeTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResumeTemplate"> | number
    code?: StringWithAggregatesFilter<"ResumeTemplate"> | string
    title?: StringWithAggregatesFilter<"ResumeTemplate"> | string
    content?: JsonWithAggregatesFilter<"ResumeTemplate">
    headerImg?: StringNullableWithAggregatesFilter<"ResumeTemplate"> | string | null
    creatorId?: IntWithAggregatesFilter<"ResumeTemplate"> | number
    useCount?: IntWithAggregatesFilter<"ResumeTemplate"> | number
    isVip?: IntWithAggregatesFilter<"ResumeTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ResumeTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ResumeTemplate"> | Date | string
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    enum?: StringFilter<"role"> | string
    name?: StringFilter<"role"> | string
    desc?: StringFilter<"role"> | string
    creatorId?: IntFilter<"role"> | number
    createdAt?: DateTimeFilter<"role"> | Date | string
    updatedAt?: DateTimeFilter<"role"> | Date | string
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    enum?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    enum?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    name?: StringFilter<"role"> | string
    desc?: StringFilter<"role"> | string
    creatorId?: IntFilter<"role"> | number
    createdAt?: DateTimeFilter<"role"> | Date | string
    updatedAt?: DateTimeFilter<"role"> | Date | string
  }, "id" | "enum">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    enum?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    enum?: StringWithAggregatesFilter<"role"> | string
    name?: StringWithAggregatesFilter<"role"> | string
    desc?: StringWithAggregatesFilter<"role"> | string
    creatorId?: IntWithAggregatesFilter<"role"> | number
    createdAt?: DateTimeWithAggregatesFilter<"role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"role"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    disabled?: IntFilter<"User"> | number
    roles?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    password?: SortOrder
    disabled?: SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    disabled?: IntFilter<"User"> | number
    roles?: JsonFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    password?: SortOrder
    disabled?: SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    disabled?: IntWithAggregatesFilter<"User"> | number
    roles?: JsonWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VipWhereInput = {
    AND?: VipWhereInput | VipWhereInput[]
    OR?: VipWhereInput[]
    NOT?: VipWhereInput | VipWhereInput[]
    userId?: IntFilter<"Vip"> | number
    vipTypeId?: IntFilter<"Vip"> | number
    start_time?: DateTimeFilter<"Vip"> | Date | string
    expire_time?: DateTimeFilter<"Vip"> | Date | string
    createdAt?: DateTimeFilter<"Vip"> | Date | string
    updatedAt?: DateTimeFilter<"Vip"> | Date | string
  }

  export type VipOrderByWithRelationInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
    start_time?: SortOrder
    expire_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: VipWhereInput | VipWhereInput[]
    OR?: VipWhereInput[]
    NOT?: VipWhereInput | VipWhereInput[]
    vipTypeId?: IntFilter<"Vip"> | number
    start_time?: DateTimeFilter<"Vip"> | Date | string
    expire_time?: DateTimeFilter<"Vip"> | Date | string
    createdAt?: DateTimeFilter<"Vip"> | Date | string
    updatedAt?: DateTimeFilter<"Vip"> | Date | string
  }, "userId" | "userId">

  export type VipOrderByWithAggregationInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
    start_time?: SortOrder
    expire_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VipCountOrderByAggregateInput
    _avg?: VipAvgOrderByAggregateInput
    _max?: VipMaxOrderByAggregateInput
    _min?: VipMinOrderByAggregateInput
    _sum?: VipSumOrderByAggregateInput
  }

  export type VipScalarWhereWithAggregatesInput = {
    AND?: VipScalarWhereWithAggregatesInput | VipScalarWhereWithAggregatesInput[]
    OR?: VipScalarWhereWithAggregatesInput[]
    NOT?: VipScalarWhereWithAggregatesInput | VipScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Vip"> | number
    vipTypeId?: IntWithAggregatesFilter<"Vip"> | number
    start_time?: DateTimeWithAggregatesFilter<"Vip"> | Date | string
    expire_time?: DateTimeWithAggregatesFilter<"Vip"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Vip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vip"> | Date | string
  }

  export type VipExchangeCodeWhereInput = {
    AND?: VipExchangeCodeWhereInput | VipExchangeCodeWhereInput[]
    OR?: VipExchangeCodeWhereInput[]
    NOT?: VipExchangeCodeWhereInput | VipExchangeCodeWhereInput[]
    id?: IntFilter<"VipExchangeCode"> | number
    code?: StringFilter<"VipExchangeCode"> | string
    vipTypeTd?: IntFilter<"VipExchangeCode"> | number
    startTime?: DateTimeFilter<"VipExchangeCode"> | Date | string
    expireTime?: DateTimeFilter<"VipExchangeCode"> | Date | string
    creatorId?: IntFilter<"VipExchangeCode"> | number
    exchanged?: IntFilter<"VipExchangeCode"> | number
    createdAt?: DateTimeFilter<"VipExchangeCode"> | Date | string
    updatedAt?: DateTimeFilter<"VipExchangeCode"> | Date | string
  }

  export type VipExchangeCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    vipTypeTd?: SortOrder
    startTime?: SortOrder
    expireTime?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipExchangeCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VipExchangeCodeWhereInput | VipExchangeCodeWhereInput[]
    OR?: VipExchangeCodeWhereInput[]
    NOT?: VipExchangeCodeWhereInput | VipExchangeCodeWhereInput[]
    code?: StringFilter<"VipExchangeCode"> | string
    vipTypeTd?: IntFilter<"VipExchangeCode"> | number
    startTime?: DateTimeFilter<"VipExchangeCode"> | Date | string
    expireTime?: DateTimeFilter<"VipExchangeCode"> | Date | string
    creatorId?: IntFilter<"VipExchangeCode"> | number
    exchanged?: IntFilter<"VipExchangeCode"> | number
    createdAt?: DateTimeFilter<"VipExchangeCode"> | Date | string
    updatedAt?: DateTimeFilter<"VipExchangeCode"> | Date | string
  }, "id" | "id">

  export type VipExchangeCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    vipTypeTd?: SortOrder
    startTime?: SortOrder
    expireTime?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VipExchangeCodeCountOrderByAggregateInput
    _avg?: VipExchangeCodeAvgOrderByAggregateInput
    _max?: VipExchangeCodeMaxOrderByAggregateInput
    _min?: VipExchangeCodeMinOrderByAggregateInput
    _sum?: VipExchangeCodeSumOrderByAggregateInput
  }

  export type VipExchangeCodeScalarWhereWithAggregatesInput = {
    AND?: VipExchangeCodeScalarWhereWithAggregatesInput | VipExchangeCodeScalarWhereWithAggregatesInput[]
    OR?: VipExchangeCodeScalarWhereWithAggregatesInput[]
    NOT?: VipExchangeCodeScalarWhereWithAggregatesInput | VipExchangeCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VipExchangeCode"> | number
    code?: StringWithAggregatesFilter<"VipExchangeCode"> | string
    vipTypeTd?: IntWithAggregatesFilter<"VipExchangeCode"> | number
    startTime?: DateTimeWithAggregatesFilter<"VipExchangeCode"> | Date | string
    expireTime?: DateTimeWithAggregatesFilter<"VipExchangeCode"> | Date | string
    creatorId?: IntWithAggregatesFilter<"VipExchangeCode"> | number
    exchanged?: IntWithAggregatesFilter<"VipExchangeCode"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VipExchangeCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VipExchangeCode"> | Date | string
  }

  export type VipTypeWhereInput = {
    AND?: VipTypeWhereInput | VipTypeWhereInput[]
    OR?: VipTypeWhereInput[]
    NOT?: VipTypeWhereInput | VipTypeWhereInput[]
    id?: IntFilter<"VipType"> | number
    tilte?: StringFilter<"VipType"> | string
    description?: StringFilter<"VipType"> | string
    equity?: JsonNullableFilter<"VipType">
    price?: DecimalFilter<"VipType"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"VipType"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntFilter<"VipType"> | number
    sellType?: IntFilter<"VipType"> | number
    disabled?: IntFilter<"VipType"> | number
    createdAt?: DateTimeFilter<"VipType"> | Date | string
    updatedAt?: DateTimeFilter<"VipType"> | Date | string
  }

  export type VipTypeOrderByWithRelationInput = {
    id?: SortOrder
    tilte?: SortOrder
    description?: SortOrder
    equity?: SortOrderInput | SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VipTypeWhereInput | VipTypeWhereInput[]
    OR?: VipTypeWhereInput[]
    NOT?: VipTypeWhereInput | VipTypeWhereInput[]
    tilte?: StringFilter<"VipType"> | string
    description?: StringFilter<"VipType"> | string
    equity?: JsonNullableFilter<"VipType">
    price?: DecimalFilter<"VipType"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableFilter<"VipType"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntFilter<"VipType"> | number
    sellType?: IntFilter<"VipType"> | number
    disabled?: IntFilter<"VipType"> | number
    createdAt?: DateTimeFilter<"VipType"> | Date | string
    updatedAt?: DateTimeFilter<"VipType"> | Date | string
  }, "id" | "id">

  export type VipTypeOrderByWithAggregationInput = {
    id?: SortOrder
    tilte?: SortOrder
    description?: SortOrder
    equity?: SortOrderInput | SortOrder
    price?: SortOrder
    originalPrice?: SortOrderInput | SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VipTypeCountOrderByAggregateInput
    _avg?: VipTypeAvgOrderByAggregateInput
    _max?: VipTypeMaxOrderByAggregateInput
    _min?: VipTypeMinOrderByAggregateInput
    _sum?: VipTypeSumOrderByAggregateInput
  }

  export type VipTypeScalarWhereWithAggregatesInput = {
    AND?: VipTypeScalarWhereWithAggregatesInput | VipTypeScalarWhereWithAggregatesInput[]
    OR?: VipTypeScalarWhereWithAggregatesInput[]
    NOT?: VipTypeScalarWhereWithAggregatesInput | VipTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VipType"> | number
    tilte?: StringWithAggregatesFilter<"VipType"> | string
    description?: StringWithAggregatesFilter<"VipType"> | string
    equity?: JsonNullableWithAggregatesFilter<"VipType">
    price?: DecimalWithAggregatesFilter<"VipType"> | Decimal | DecimalJsLike | number | string
    originalPrice?: DecimalNullableWithAggregatesFilter<"VipType"> | Decimal | DecimalJsLike | number | string | null
    duration?: IntWithAggregatesFilter<"VipType"> | number
    sellType?: IntWithAggregatesFilter<"VipType"> | number
    disabled?: IntWithAggregatesFilter<"VipType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VipType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VipType"> | Date | string
  }

  export type InviteCodeCreateInput = {
    code: string
    userId: number
    expireTime?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type InviteCodeUncheckedCreateInput = {
    code: string
    userId: number
    expireTime?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type InviteCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expireTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expireTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeCreateManyInput = {
    code: string
    userId: number
    expireTime?: Date | string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type InviteCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expireTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteCodeUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expireTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InviteUserCreateInput = {
    inviteCode: string
    initiatorId: number
    receiverId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InviteUserUncheckedCreateInput = {
    id?: number
    inviteCode: string
    initiatorId: number
    receiverId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InviteUserUpdateInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    initiatorId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    initiatorId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUserCreateManyInput = {
    id?: number
    inviteCode: string
    initiatorId: number
    receiverId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InviteUserUpdateManyMutationInput = {
    inviteCode?: StringFieldUpdateOperationsInput | string
    initiatorId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inviteCode?: StringFieldUpdateOperationsInput | string
    initiatorId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateInput = {
    id: string
    userId: number
    price: Decimal | DecimalJsLike | number | string
    payType?: number | null
    orderStatus?: number
    orderDesc?: string | null
    overtime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderUncheckedCreateInput = {
    id: string
    userId: number
    price: Decimal | DecimalJsLike | number | string
    payType?: number | null
    orderStatus?: number
    orderDesc?: string | null
    overtime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payType?: NullableIntFieldUpdateOperationsInput | number | null
    orderStatus?: IntFieldUpdateOperationsInput | number
    orderDesc?: NullableStringFieldUpdateOperationsInput | string | null
    overtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payType?: NullableIntFieldUpdateOperationsInput | number | null
    orderStatus?: IntFieldUpdateOperationsInput | number
    orderDesc?: NullableStringFieldUpdateOperationsInput | string | null
    overtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateManyInput = {
    id: string
    userId: number
    price: Decimal | DecimalJsLike | number | string
    payType?: number | null
    orderStatus?: number
    orderDesc?: string | null
    overtime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payType?: NullableIntFieldUpdateOperationsInput | number | null
    orderStatus?: IntFieldUpdateOperationsInput | number
    orderDesc?: NullableStringFieldUpdateOperationsInput | string | null
    overtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payType?: NullableIntFieldUpdateOperationsInput | number | null
    orderStatus?: IntFieldUpdateOperationsInput | number
    orderDesc?: NullableStringFieldUpdateOperationsInput | string | null
    overtime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionCreateInput = {
    role_id: number
    name: string
    enum: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type permissionUncheckedCreateInput = {
    id?: number
    role_id: number
    name: string
    enum: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type permissionUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enum?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enum?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionCreateManyInput = {
    id?: number
    role_id: number
    name: string
    enum: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type permissionUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enum?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type permissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    enum?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resumeCreateInput = {
    id: number
    title: string
    content: JsonNullValueInput | InputJsonValue
    userId: number
    templateId?: number | null
    themeColor: string
    isPublic?: number
    exportCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type resumeUncheckedCreateInput = {
    id: number
    title: string
    content: JsonNullValueInput | InputJsonValue
    userId: number
    templateId?: number | null
    themeColor: string
    isPublic?: number
    exportCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type resumeUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    themeColor?: StringFieldUpdateOperationsInput | string
    isPublic?: IntFieldUpdateOperationsInput | number
    exportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resumeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    themeColor?: StringFieldUpdateOperationsInput | string
    isPublic?: IntFieldUpdateOperationsInput | number
    exportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resumeCreateManyInput = {
    id: number
    title: string
    content: JsonNullValueInput | InputJsonValue
    userId: number
    templateId?: number | null
    themeColor: string
    isPublic?: number
    exportCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type resumeUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    themeColor?: StringFieldUpdateOperationsInput | string
    isPublic?: IntFieldUpdateOperationsInput | number
    exportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type resumeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    themeColor?: StringFieldUpdateOperationsInput | string
    isPublic?: IntFieldUpdateOperationsInput | number
    exportCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeTemplateCreateInput = {
    code: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    headerImg?: string | null
    creatorId: number
    useCount?: number
    isVip?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeTemplateUncheckedCreateInput = {
    id?: number
    code: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    headerImg?: string | null
    creatorId: number
    useCount?: number
    isVip?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeTemplateUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    headerImg?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    useCount?: IntFieldUpdateOperationsInput | number
    isVip?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    headerImg?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    useCount?: IntFieldUpdateOperationsInput | number
    isVip?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeTemplateCreateManyInput = {
    id?: number
    code: string
    title: string
    content: JsonNullValueInput | InputJsonValue
    headerImg?: string | null
    creatorId: number
    useCount?: number
    isVip?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ResumeTemplateUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    headerImg?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    useCount?: IntFieldUpdateOperationsInput | number
    isVip?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    headerImg?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    useCount?: IntFieldUpdateOperationsInput | number
    isVip?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateInput = {
    enum: string
    name: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roleUncheckedCreateInput = {
    id?: number
    enum: string
    name: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roleUpdateInput = {
    enum?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enum?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleCreateManyInput = {
    id?: number
    enum: string
    name: string
    desc: string
    creatorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type roleUpdateManyMutationInput = {
    enum?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enum?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    avatar: string
    username: string
    password: string
    disabled?: number
    roles: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    avatar: string
    username: string
    password: string
    disabled?: number
    roles: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disabled?: IntFieldUpdateOperationsInput | number
    roles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disabled?: IntFieldUpdateOperationsInput | number
    roles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    avatar: string
    username: string
    password: string
    disabled?: number
    roles: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disabled?: IntFieldUpdateOperationsInput | number
    roles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disabled?: IntFieldUpdateOperationsInput | number
    roles?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipCreateInput = {
    userId: number
    vipTypeId: number
    start_time: Date | string
    expire_time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipUncheckedCreateInput = {
    userId: number
    vipTypeId: number
    start_time: Date | string
    expire_time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    vipTypeId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    vipTypeId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipCreateManyInput = {
    userId: number
    vipTypeId: number
    start_time: Date | string
    expire_time: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    vipTypeId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    vipTypeId?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    expire_time?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipExchangeCodeCreateInput = {
    code: string
    vipTypeTd: number
    startTime: Date | string
    expireTime: Date | string
    creatorId: number
    exchanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipExchangeCodeUncheckedCreateInput = {
    id?: number
    code: string
    vipTypeTd: number
    startTime: Date | string
    expireTime: Date | string
    creatorId: number
    exchanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipExchangeCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    vipTypeTd?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expireTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    exchanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipExchangeCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    vipTypeTd?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expireTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    exchanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipExchangeCodeCreateManyInput = {
    id?: number
    code: string
    vipTypeTd: number
    startTime: Date | string
    expireTime: Date | string
    creatorId: number
    exchanged?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipExchangeCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    vipTypeTd?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expireTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    exchanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipExchangeCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    vipTypeTd?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    expireTime?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: IntFieldUpdateOperationsInput | number
    exchanged?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipTypeCreateInput = {
    tilte: string
    description: string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    duration: number
    sellType?: number
    disabled?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipTypeUncheckedCreateInput = {
    id?: number
    tilte: string
    description: string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    duration: number
    sellType?: number
    disabled?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipTypeUpdateInput = {
    tilte?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sellType?: IntFieldUpdateOperationsInput | number
    disabled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tilte?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sellType?: IntFieldUpdateOperationsInput | number
    disabled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipTypeCreateManyInput = {
    id?: number
    tilte: string
    description: string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price: Decimal | DecimalJsLike | number | string
    originalPrice?: Decimal | DecimalJsLike | number | string | null
    duration: number
    sellType?: number
    disabled?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VipTypeUpdateManyMutationInput = {
    tilte?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sellType?: IntFieldUpdateOperationsInput | number
    disabled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VipTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tilte?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    equity?: NullableJsonNullValueInput | InputJsonValue
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    originalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    duration?: IntFieldUpdateOperationsInput | number
    sellType?: IntFieldUpdateOperationsInput | number
    disabled?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InviteCodeCountOrderByAggregateInput = {
    code?: SortOrder
    userId?: SortOrder
    expireTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteCodeAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type InviteCodeMaxOrderByAggregateInput = {
    code?: SortOrder
    userId?: SortOrder
    expireTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteCodeMinOrderByAggregateInput = {
    code?: SortOrder
    userId?: SortOrder
    expireTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteCodeSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InviteUserCountOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteUserAvgOrderByAggregateInput = {
    id?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
  }

  export type InviteUserMaxOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteUserMinOrderByAggregateInput = {
    id?: SortOrder
    inviteCode?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InviteUserSumOrderByAggregateInput = {
    id?: SortOrder
    initiatorId?: SortOrder
    receiverId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrder
    orderStatus?: SortOrder
    orderDesc?: SortOrder
    overtime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrder
    orderStatus?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrder
    orderStatus?: SortOrder
    orderDesc?: SortOrder
    overtime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrder
    orderStatus?: SortOrder
    orderDesc?: SortOrder
    overtime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    userId?: SortOrder
    price?: SortOrder
    payType?: SortOrder
    orderStatus?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type permissionCountOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    name?: SortOrder
    enum?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type permissionAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    creatorId?: SortOrder
  }

  export type permissionMaxOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    name?: SortOrder
    enum?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type permissionMinOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    name?: SortOrder
    enum?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type permissionSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
    creatorId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type resumeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    themeColor?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type resumeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
  }

  export type resumeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    themeColor?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type resumeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    themeColor?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type resumeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    isPublic?: SortOrder
    exportCount?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ResumeTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    content?: SortOrder
    headerImg?: SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
  }

  export type ResumeTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    headerImg?: SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    headerImg?: SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResumeTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    useCount?: SortOrder
    isVip?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    enum?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    enum?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    enum?: SortOrder
    name?: SortOrder
    desc?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    password?: SortOrder
    disabled?: SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    disabled?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    password?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    username?: SortOrder
    password?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    disabled?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type VipCountOrderByAggregateInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
    start_time?: SortOrder
    expire_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipAvgOrderByAggregateInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
  }

  export type VipMaxOrderByAggregateInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
    start_time?: SortOrder
    expire_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipMinOrderByAggregateInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
    start_time?: SortOrder
    expire_time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipSumOrderByAggregateInput = {
    userId?: SortOrder
    vipTypeId?: SortOrder
  }

  export type VipExchangeCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    vipTypeTd?: SortOrder
    startTime?: SortOrder
    expireTime?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipExchangeCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    vipTypeTd?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
  }

  export type VipExchangeCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    vipTypeTd?: SortOrder
    startTime?: SortOrder
    expireTime?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipExchangeCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    vipTypeTd?: SortOrder
    startTime?: SortOrder
    expireTime?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipExchangeCodeSumOrderByAggregateInput = {
    id?: SortOrder
    vipTypeTd?: SortOrder
    creatorId?: SortOrder
    exchanged?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type VipTypeCountOrderByAggregateInput = {
    id?: SortOrder
    tilte?: SortOrder
    description?: SortOrder
    equity?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
  }

  export type VipTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    tilte?: SortOrder
    description?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipTypeMinOrderByAggregateInput = {
    id?: SortOrder
    tilte?: SortOrder
    description?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VipTypeSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    originalPrice?: SortOrder
    duration?: SortOrder
    sellType?: SortOrder
    disabled?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use InviteCodeDefaultArgs instead
     */
    export type InviteCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InviteCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InviteUserDefaultArgs instead
     */
    export type InviteUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InviteUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use orderDefaultArgs instead
     */
    export type orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = orderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use permissionDefaultArgs instead
     */
    export type permissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = permissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use resumeDefaultArgs instead
     */
    export type resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = resumeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumeTemplateDefaultArgs instead
     */
    export type ResumeTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumeTemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use roleDefaultArgs instead
     */
    export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VipDefaultArgs instead
     */
    export type VipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VipExchangeCodeDefaultArgs instead
     */
    export type VipExchangeCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VipExchangeCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VipTypeDefaultArgs instead
     */
    export type VipTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VipTypeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}