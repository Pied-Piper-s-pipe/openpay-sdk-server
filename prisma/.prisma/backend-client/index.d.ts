
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
 * Model Chain
 * 
 */
export type Chain = $Result.DefaultSelection<Prisma.$ChainPayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model TokenSubscribe
 * 
 */
export type TokenSubscribe = $Result.DefaultSelection<Prisma.$TokenSubscribePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chains
 * const chains = await prisma.chain.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Chains
   * const chains = await prisma.chain.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.chain`: Exposes CRUD operations for the **Chain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chains
    * const chains = await prisma.chain.findMany()
    * ```
    */
  get chain(): Prisma.ChainDelegate<ExtArgs>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs>;

  /**
   * `prisma.tokenSubscribe`: Exposes CRUD operations for the **TokenSubscribe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenSubscribes
    * const tokenSubscribes = await prisma.tokenSubscribe.findMany()
    * ```
    */
  get tokenSubscribe(): Prisma.TokenSubscribeDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Chain: 'Chain',
    Node: 'Node',
    Token: 'Token',
    TokenSubscribe: 'TokenSubscribe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "chain" | "node" | "token" | "tokenSubscribe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chain: {
        payload: Prisma.$ChainPayload<ExtArgs>
        fields: Prisma.ChainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findFirst: {
            args: Prisma.ChainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          findMany: {
            args: Prisma.ChainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>[]
          }
          create: {
            args: Prisma.ChainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          createMany: {
            args: Prisma.ChainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>[]
          }
          delete: {
            args: Prisma.ChainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          update: {
            args: Prisma.ChainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          deleteMany: {
            args: Prisma.ChainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChainPayload>
          }
          aggregate: {
            args: Prisma.ChainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChain>
          }
          groupBy: {
            args: Prisma.ChainGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChainGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChainCountArgs<ExtArgs>
            result: $Utils.Optional<ChainCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      TokenSubscribe: {
        payload: Prisma.$TokenSubscribePayload<ExtArgs>
        fields: Prisma.TokenSubscribeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenSubscribeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenSubscribeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          findFirst: {
            args: Prisma.TokenSubscribeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenSubscribeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          findMany: {
            args: Prisma.TokenSubscribeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>[]
          }
          create: {
            args: Prisma.TokenSubscribeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          createMany: {
            args: Prisma.TokenSubscribeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenSubscribeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>[]
          }
          delete: {
            args: Prisma.TokenSubscribeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          update: {
            args: Prisma.TokenSubscribeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          deleteMany: {
            args: Prisma.TokenSubscribeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenSubscribeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenSubscribeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenSubscribePayload>
          }
          aggregate: {
            args: Prisma.TokenSubscribeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenSubscribe>
          }
          groupBy: {
            args: Prisma.TokenSubscribeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenSubscribeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenSubscribeCountArgs<ExtArgs>
            result: $Utils.Optional<TokenSubscribeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type ChainCountOutputType
   */

  export type ChainCountOutputType = {
    nodes: number
    tokens: number
  }

  export type ChainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | ChainCountOutputTypeCountNodesArgs
    tokens?: boolean | ChainCountOutputTypeCountTokensArgs
  }

  // Custom InputTypes
  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChainCountOutputType
     */
    select?: ChainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }

  /**
   * ChainCountOutputType without action
   */
  export type ChainCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chain
   */

  export type AggregateChain = {
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  export type ChainAvgAggregateOutputType = {
    wallet_type: number | null
    status_type: number | null
    sort: number | null
  }

  export type ChainSumAggregateOutputType = {
    wallet_type: number | null
    status_type: number | null
    sort: number | null
  }

  export type ChainMinAggregateOutputType = {
    id: string | null
    chain_id: string | null
    wallet_type: number | null
    chain_name: string | null
    chain_icon: string | null
    status_type: number | null
    sort: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChainMaxAggregateOutputType = {
    id: string | null
    chain_id: string | null
    wallet_type: number | null
    chain_name: string | null
    chain_icon: string | null
    status_type: number | null
    sort: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChainCountAggregateOutputType = {
    id: number
    chain_id: number
    wallet_type: number
    chain_name: number
    chain_icon: number
    status_type: number
    sort: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChainAvgAggregateInputType = {
    wallet_type?: true
    status_type?: true
    sort?: true
  }

  export type ChainSumAggregateInputType = {
    wallet_type?: true
    status_type?: true
    sort?: true
  }

  export type ChainMinAggregateInputType = {
    id?: true
    chain_id?: true
    wallet_type?: true
    chain_name?: true
    chain_icon?: true
    status_type?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type ChainMaxAggregateInputType = {
    id?: true
    chain_id?: true
    wallet_type?: true
    chain_name?: true
    chain_icon?: true
    status_type?: true
    sort?: true
    created_at?: true
    updated_at?: true
  }

  export type ChainCountAggregateInputType = {
    id?: true
    chain_id?: true
    wallet_type?: true
    chain_name?: true
    chain_icon?: true
    status_type?: true
    sort?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chain to aggregate.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chains
    **/
    _count?: true | ChainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChainMaxAggregateInputType
  }

  export type GetChainAggregateType<T extends ChainAggregateArgs> = {
        [P in keyof T & keyof AggregateChain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChain[P]>
      : GetScalarType<T[P], AggregateChain[P]>
  }




  export type ChainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChainWhereInput
    orderBy?: ChainOrderByWithAggregationInput | ChainOrderByWithAggregationInput[]
    by: ChainScalarFieldEnum[] | ChainScalarFieldEnum
    having?: ChainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChainCountAggregateInputType | true
    _avg?: ChainAvgAggregateInputType
    _sum?: ChainSumAggregateInputType
    _min?: ChainMinAggregateInputType
    _max?: ChainMaxAggregateInputType
  }

  export type ChainGroupByOutputType = {
    id: string
    chain_id: string
    wallet_type: number
    chain_name: string
    chain_icon: string
    status_type: number
    sort: number
    created_at: Date
    updated_at: Date
    _count: ChainCountAggregateOutputType | null
    _avg: ChainAvgAggregateOutputType | null
    _sum: ChainSumAggregateOutputType | null
    _min: ChainMinAggregateOutputType | null
    _max: ChainMaxAggregateOutputType | null
  }

  type GetChainGroupByPayload<T extends ChainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChainGroupByOutputType[P]>
            : GetScalarType<T[P], ChainGroupByOutputType[P]>
        }
      >
    >


  export type ChainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    wallet_type?: boolean
    chain_name?: boolean
    chain_icon?: boolean
    status_type?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
    nodes?: boolean | Chain$nodesArgs<ExtArgs>
    tokens?: boolean | Chain$tokensArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chain"]>

  export type ChainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    wallet_type?: boolean
    chain_name?: boolean
    chain_icon?: boolean
    status_type?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["chain"]>

  export type ChainSelectScalar = {
    id?: boolean
    chain_id?: boolean
    wallet_type?: boolean
    chain_name?: boolean
    chain_icon?: boolean
    status_type?: boolean
    sort?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ChainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | Chain$nodesArgs<ExtArgs>
    tokens?: boolean | Chain$tokensArgs<ExtArgs>
    _count?: boolean | ChainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chain"
    objects: {
      nodes: Prisma.$NodePayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chain_id: string
      wallet_type: number
      chain_name: string
      chain_icon: string
      status_type: number
      sort: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chain"]>
    composites: {}
  }

  type ChainGetPayload<S extends boolean | null | undefined | ChainDefaultArgs> = $Result.GetResult<Prisma.$ChainPayload, S>

  type ChainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChainFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChainCountAggregateInputType | true
    }

  export interface ChainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chain'], meta: { name: 'Chain' } }
    /**
     * Find zero or one Chain that matches the filter.
     * @param {ChainFindUniqueArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChainFindUniqueArgs>(args: SelectSubset<T, ChainFindUniqueArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chain that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChainFindUniqueOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChainFindUniqueOrThrowArgs>(args: SelectSubset<T, ChainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChainFindFirstArgs>(args?: SelectSubset<T, ChainFindFirstArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindFirstOrThrowArgs} args - Arguments to find a Chain
     * @example
     * // Get one Chain
     * const chain = await prisma.chain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChainFindFirstOrThrowArgs>(args?: SelectSubset<T, ChainFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chains
     * const chains = await prisma.chain.findMany()
     * 
     * // Get first 10 Chains
     * const chains = await prisma.chain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chainWithIdOnly = await prisma.chain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChainFindManyArgs>(args?: SelectSubset<T, ChainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chain.
     * @param {ChainCreateArgs} args - Arguments to create a Chain.
     * @example
     * // Create one Chain
     * const Chain = await prisma.chain.create({
     *   data: {
     *     // ... data to create a Chain
     *   }
     * })
     * 
     */
    create<T extends ChainCreateArgs>(args: SelectSubset<T, ChainCreateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chains.
     * @param {ChainCreateManyArgs} args - Arguments to create many Chains.
     * @example
     * // Create many Chains
     * const chain = await prisma.chain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChainCreateManyArgs>(args?: SelectSubset<T, ChainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chains and returns the data saved in the database.
     * @param {ChainCreateManyAndReturnArgs} args - Arguments to create many Chains.
     * @example
     * // Create many Chains
     * const chain = await prisma.chain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chains and only return the `id`
     * const chainWithIdOnly = await prisma.chain.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChainCreateManyAndReturnArgs>(args?: SelectSubset<T, ChainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chain.
     * @param {ChainDeleteArgs} args - Arguments to delete one Chain.
     * @example
     * // Delete one Chain
     * const Chain = await prisma.chain.delete({
     *   where: {
     *     // ... filter to delete one Chain
     *   }
     * })
     * 
     */
    delete<T extends ChainDeleteArgs>(args: SelectSubset<T, ChainDeleteArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chain.
     * @param {ChainUpdateArgs} args - Arguments to update one Chain.
     * @example
     * // Update one Chain
     * const chain = await prisma.chain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChainUpdateArgs>(args: SelectSubset<T, ChainUpdateArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chains.
     * @param {ChainDeleteManyArgs} args - Arguments to filter Chains to delete.
     * @example
     * // Delete a few Chains
     * const { count } = await prisma.chain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChainDeleteManyArgs>(args?: SelectSubset<T, ChainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chains
     * const chain = await prisma.chain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChainUpdateManyArgs>(args: SelectSubset<T, ChainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chain.
     * @param {ChainUpsertArgs} args - Arguments to update or create a Chain.
     * @example
     * // Update or create a Chain
     * const chain = await prisma.chain.upsert({
     *   create: {
     *     // ... data to create a Chain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chain we want to update
     *   }
     * })
     */
    upsert<T extends ChainUpsertArgs>(args: SelectSubset<T, ChainUpsertArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainCountArgs} args - Arguments to filter Chains to count.
     * @example
     * // Count the number of Chains
     * const count = await prisma.chain.count({
     *   where: {
     *     // ... the filter for the Chains we want to count
     *   }
     * })
    **/
    count<T extends ChainCountArgs>(
      args?: Subset<T, ChainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChainAggregateArgs>(args: Subset<T, ChainAggregateArgs>): Prisma.PrismaPromise<GetChainAggregateType<T>>

    /**
     * Group by Chain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChainGroupByArgs} args - Group by arguments.
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
      T extends ChainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChainGroupByArgs['orderBy'] }
        : { orderBy?: ChainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chain model
   */
  readonly fields: ChainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nodes<T extends Chain$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Chain$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany"> | Null>
    tokens<T extends Chain$tokensArgs<ExtArgs> = {}>(args?: Subset<T, Chain$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chain model
   */ 
  interface ChainFieldRefs {
    readonly id: FieldRef<"Chain", 'String'>
    readonly chain_id: FieldRef<"Chain", 'String'>
    readonly wallet_type: FieldRef<"Chain", 'Int'>
    readonly chain_name: FieldRef<"Chain", 'String'>
    readonly chain_icon: FieldRef<"Chain", 'String'>
    readonly status_type: FieldRef<"Chain", 'Int'>
    readonly sort: FieldRef<"Chain", 'Int'>
    readonly created_at: FieldRef<"Chain", 'DateTime'>
    readonly updated_at: FieldRef<"Chain", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chain findUnique
   */
  export type ChainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findUniqueOrThrow
   */
  export type ChainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain findFirst
   */
  export type ChainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findFirstOrThrow
   */
  export type ChainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chain to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chains.
     */
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain findMany
   */
  export type ChainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter, which Chains to fetch.
     */
    where?: ChainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chains to fetch.
     */
    orderBy?: ChainOrderByWithRelationInput | ChainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chains.
     */
    cursor?: ChainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chains.
     */
    skip?: number
    distinct?: ChainScalarFieldEnum | ChainScalarFieldEnum[]
  }

  /**
   * Chain create
   */
  export type ChainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to create a Chain.
     */
    data: XOR<ChainCreateInput, ChainUncheckedCreateInput>
  }

  /**
   * Chain createMany
   */
  export type ChainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chains.
     */
    data: ChainCreateManyInput | ChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chain createManyAndReturn
   */
  export type ChainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chains.
     */
    data: ChainCreateManyInput | ChainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chain update
   */
  export type ChainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The data needed to update a Chain.
     */
    data: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
    /**
     * Choose, which Chain to update.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain updateMany
   */
  export type ChainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chains.
     */
    data: XOR<ChainUpdateManyMutationInput, ChainUncheckedUpdateManyInput>
    /**
     * Filter which Chains to update
     */
    where?: ChainWhereInput
  }

  /**
   * Chain upsert
   */
  export type ChainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * The filter to search for the Chain to update in case it exists.
     */
    where: ChainWhereUniqueInput
    /**
     * In case the Chain found by the `where` argument doesn't exist, create a new Chain with this data.
     */
    create: XOR<ChainCreateInput, ChainUncheckedCreateInput>
    /**
     * In case the Chain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChainUpdateInput, ChainUncheckedUpdateInput>
  }

  /**
   * Chain delete
   */
  export type ChainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    /**
     * Filter which Chain to delete.
     */
    where: ChainWhereUniqueInput
  }

  /**
   * Chain deleteMany
   */
  export type ChainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chains to delete
     */
    where?: ChainWhereInput
  }

  /**
   * Chain.nodes
   */
  export type Chain$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Chain.tokens
   */
  export type Chain$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Chain without action
   */
  export type ChainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    chain_id: string | null
    node_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    chain_id: string | null
    node_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    chain_id: number
    node_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type NodeMinAggregateInputType = {
    id?: true
    chain_id?: true
    node_url?: true
    created_at?: true
    updated_at?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    chain_id?: true
    node_url?: true
    created_at?: true
    updated_at?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    chain_id?: true
    node_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    chain_id: string
    node_url: string
    created_at: Date
    updated_at: Date
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    node_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    chain?: boolean | Node$chainArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    node_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    chain?: boolean | Node$chainArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    chain_id?: boolean
    node_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | Node$chainArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | Node$chainArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chain_id: string
      node_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends Node$chainArgs<ExtArgs> = {}>(args?: Subset<T, Node$chainArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Node model
   */ 
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly chain_id: FieldRef<"Node", 'String'>
    readonly node_url: FieldRef<"Node", 'String'>
    readonly created_at: FieldRef<"Node", 'DateTime'>
    readonly updated_at: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
  }

  /**
   * Node.chain
   */
  export type Node$chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    where?: ChainWhereInput
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    token_decimals: number | null
    coin_market_cap_id: number | null
    default_subscribe: number | null
  }

  export type TokenSumAggregateOutputType = {
    token_decimals: number | null
    coin_market_cap_id: number | null
    default_subscribe: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    chain_id: string | null
    token_symbol: string | null
    token_name: string | null
    token_icon: string | null
    contract_address: string | null
    token_decimals: number | null
    is_native: boolean | null
    is_multiple_chain: boolean | null
    coin_market_cap_id: number | null
    default_subscribe: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    chain_id: string | null
    token_symbol: string | null
    token_name: string | null
    token_icon: string | null
    contract_address: string | null
    token_decimals: number | null
    is_native: boolean | null
    is_multiple_chain: boolean | null
    coin_market_cap_id: number | null
    default_subscribe: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    chain_id: number
    token_symbol: number
    token_name: number
    token_icon: number
    contract_address: number
    token_decimals: number
    is_native: number
    is_multiple_chain: number
    coin_market_cap_id: number
    default_subscribe: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    token_decimals?: true
    coin_market_cap_id?: true
    default_subscribe?: true
  }

  export type TokenSumAggregateInputType = {
    token_decimals?: true
    coin_market_cap_id?: true
    default_subscribe?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    chain_id?: true
    token_symbol?: true
    token_name?: true
    token_icon?: true
    contract_address?: true
    token_decimals?: true
    is_native?: true
    is_multiple_chain?: true
    coin_market_cap_id?: true
    default_subscribe?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    chain_id?: true
    token_symbol?: true
    token_name?: true
    token_icon?: true
    contract_address?: true
    token_decimals?: true
    is_native?: true
    is_multiple_chain?: true
    coin_market_cap_id?: true
    default_subscribe?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    chain_id?: true
    token_symbol?: true
    token_name?: true
    token_icon?: true
    contract_address?: true
    token_decimals?: true
    is_native?: true
    is_multiple_chain?: true
    coin_market_cap_id?: true
    default_subscribe?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    chain_id: string
    token_symbol: string
    token_name: string
    token_icon: string
    contract_address: string
    token_decimals: number
    is_native: boolean
    is_multiple_chain: boolean
    coin_market_cap_id: number
    default_subscribe: number
    created_at: Date
    updated_at: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    token_symbol?: boolean
    token_name?: boolean
    token_icon?: boolean
    contract_address?: boolean
    token_decimals?: boolean
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id?: boolean
    default_subscribe?: boolean
    created_at?: boolean
    updated_at?: boolean
    chain?: boolean | Token$chainArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chain_id?: boolean
    token_symbol?: boolean
    token_name?: boolean
    token_icon?: boolean
    contract_address?: boolean
    token_decimals?: boolean
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id?: boolean
    default_subscribe?: boolean
    created_at?: boolean
    updated_at?: boolean
    chain?: boolean | Token$chainArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    chain_id?: boolean
    token_symbol?: boolean
    token_name?: boolean
    token_icon?: boolean
    contract_address?: boolean
    token_decimals?: boolean
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id?: boolean
    default_subscribe?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | Token$chainArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chain?: boolean | Token$chainArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      chain: Prisma.$ChainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chain_id: string
      token_symbol: string
      token_name: string
      token_icon: string
      contract_address: string
      token_decimals: number
      is_native: boolean
      is_multiple_chain: boolean
      coin_market_cap_id: number
      default_subscribe: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chain<T extends Token$chainArgs<ExtArgs> = {}>(args?: Subset<T, Token$chainArgs<ExtArgs>>): Prisma__ChainClient<$Result.GetResult<Prisma.$ChainPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly chain_id: FieldRef<"Token", 'String'>
    readonly token_symbol: FieldRef<"Token", 'String'>
    readonly token_name: FieldRef<"Token", 'String'>
    readonly token_icon: FieldRef<"Token", 'String'>
    readonly contract_address: FieldRef<"Token", 'String'>
    readonly token_decimals: FieldRef<"Token", 'Int'>
    readonly is_native: FieldRef<"Token", 'Boolean'>
    readonly is_multiple_chain: FieldRef<"Token", 'Boolean'>
    readonly coin_market_cap_id: FieldRef<"Token", 'Int'>
    readonly default_subscribe: FieldRef<"Token", 'Int'>
    readonly created_at: FieldRef<"Token", 'DateTime'>
    readonly updated_at: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
  }

  /**
   * Token.chain
   */
  export type Token$chainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chain
     */
    select?: ChainSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChainInclude<ExtArgs> | null
    where?: ChainWhereInput
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model TokenSubscribe
   */

  export type AggregateTokenSubscribe = {
    _count: TokenSubscribeCountAggregateOutputType | null
    _avg: TokenSubscribeAvgAggregateOutputType | null
    _sum: TokenSubscribeSumAggregateOutputType | null
    _min: TokenSubscribeMinAggregateOutputType | null
    _max: TokenSubscribeMaxAggregateOutputType | null
  }

  export type TokenSubscribeAvgAggregateOutputType = {
    id: number | null
  }

  export type TokenSubscribeSumAggregateOutputType = {
    id: number | null
  }

  export type TokenSubscribeMinAggregateOutputType = {
    id: number | null
    token_ids: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenSubscribeMaxAggregateOutputType = {
    id: number | null
    token_ids: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TokenSubscribeCountAggregateOutputType = {
    id: number
    token_ids: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TokenSubscribeAvgAggregateInputType = {
    id?: true
  }

  export type TokenSubscribeSumAggregateInputType = {
    id?: true
  }

  export type TokenSubscribeMinAggregateInputType = {
    id?: true
    token_ids?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenSubscribeMaxAggregateInputType = {
    id?: true
    token_ids?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type TokenSubscribeCountAggregateInputType = {
    id?: true
    token_ids?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TokenSubscribeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenSubscribe to aggregate.
     */
    where?: TokenSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenSubscribes to fetch.
     */
    orderBy?: TokenSubscribeOrderByWithRelationInput | TokenSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenSubscribes
    **/
    _count?: true | TokenSubscribeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenSubscribeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSubscribeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenSubscribeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenSubscribeMaxAggregateInputType
  }

  export type GetTokenSubscribeAggregateType<T extends TokenSubscribeAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenSubscribe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenSubscribe[P]>
      : GetScalarType<T[P], AggregateTokenSubscribe[P]>
  }




  export type TokenSubscribeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenSubscribeWhereInput
    orderBy?: TokenSubscribeOrderByWithAggregationInput | TokenSubscribeOrderByWithAggregationInput[]
    by: TokenSubscribeScalarFieldEnum[] | TokenSubscribeScalarFieldEnum
    having?: TokenSubscribeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenSubscribeCountAggregateInputType | true
    _avg?: TokenSubscribeAvgAggregateInputType
    _sum?: TokenSubscribeSumAggregateInputType
    _min?: TokenSubscribeMinAggregateInputType
    _max?: TokenSubscribeMaxAggregateInputType
  }

  export type TokenSubscribeGroupByOutputType = {
    id: number
    token_ids: string
    address: string
    created_at: Date | null
    updated_at: Date
    _count: TokenSubscribeCountAggregateOutputType | null
    _avg: TokenSubscribeAvgAggregateOutputType | null
    _sum: TokenSubscribeSumAggregateOutputType | null
    _min: TokenSubscribeMinAggregateOutputType | null
    _max: TokenSubscribeMaxAggregateOutputType | null
  }

  type GetTokenSubscribeGroupByPayload<T extends TokenSubscribeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenSubscribeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenSubscribeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenSubscribeGroupByOutputType[P]>
            : GetScalarType<T[P], TokenSubscribeGroupByOutputType[P]>
        }
      >
    >


  export type TokenSubscribeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token_ids?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tokenSubscribe"]>

  export type TokenSubscribeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token_ids?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["tokenSubscribe"]>

  export type TokenSubscribeSelectScalar = {
    id?: boolean
    token_ids?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $TokenSubscribePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenSubscribe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token_ids: string
      address: string
      created_at: Date | null
      updated_at: Date
    }, ExtArgs["result"]["tokenSubscribe"]>
    composites: {}
  }

  type TokenSubscribeGetPayload<S extends boolean | null | undefined | TokenSubscribeDefaultArgs> = $Result.GetResult<Prisma.$TokenSubscribePayload, S>

  type TokenSubscribeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TokenSubscribeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TokenSubscribeCountAggregateInputType | true
    }

  export interface TokenSubscribeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenSubscribe'], meta: { name: 'TokenSubscribe' } }
    /**
     * Find zero or one TokenSubscribe that matches the filter.
     * @param {TokenSubscribeFindUniqueArgs} args - Arguments to find a TokenSubscribe
     * @example
     * // Get one TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenSubscribeFindUniqueArgs>(args: SelectSubset<T, TokenSubscribeFindUniqueArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TokenSubscribe that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TokenSubscribeFindUniqueOrThrowArgs} args - Arguments to find a TokenSubscribe
     * @example
     * // Get one TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenSubscribeFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenSubscribeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TokenSubscribe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeFindFirstArgs} args - Arguments to find a TokenSubscribe
     * @example
     * // Get one TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenSubscribeFindFirstArgs>(args?: SelectSubset<T, TokenSubscribeFindFirstArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TokenSubscribe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeFindFirstOrThrowArgs} args - Arguments to find a TokenSubscribe
     * @example
     * // Get one TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenSubscribeFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenSubscribeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TokenSubscribes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenSubscribes
     * const tokenSubscribes = await prisma.tokenSubscribe.findMany()
     * 
     * // Get first 10 TokenSubscribes
     * const tokenSubscribes = await prisma.tokenSubscribe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenSubscribeWithIdOnly = await prisma.tokenSubscribe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenSubscribeFindManyArgs>(args?: SelectSubset<T, TokenSubscribeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TokenSubscribe.
     * @param {TokenSubscribeCreateArgs} args - Arguments to create a TokenSubscribe.
     * @example
     * // Create one TokenSubscribe
     * const TokenSubscribe = await prisma.tokenSubscribe.create({
     *   data: {
     *     // ... data to create a TokenSubscribe
     *   }
     * })
     * 
     */
    create<T extends TokenSubscribeCreateArgs>(args: SelectSubset<T, TokenSubscribeCreateArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TokenSubscribes.
     * @param {TokenSubscribeCreateManyArgs} args - Arguments to create many TokenSubscribes.
     * @example
     * // Create many TokenSubscribes
     * const tokenSubscribe = await prisma.tokenSubscribe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenSubscribeCreateManyArgs>(args?: SelectSubset<T, TokenSubscribeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TokenSubscribes and returns the data saved in the database.
     * @param {TokenSubscribeCreateManyAndReturnArgs} args - Arguments to create many TokenSubscribes.
     * @example
     * // Create many TokenSubscribes
     * const tokenSubscribe = await prisma.tokenSubscribe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TokenSubscribes and only return the `id`
     * const tokenSubscribeWithIdOnly = await prisma.tokenSubscribe.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenSubscribeCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenSubscribeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TokenSubscribe.
     * @param {TokenSubscribeDeleteArgs} args - Arguments to delete one TokenSubscribe.
     * @example
     * // Delete one TokenSubscribe
     * const TokenSubscribe = await prisma.tokenSubscribe.delete({
     *   where: {
     *     // ... filter to delete one TokenSubscribe
     *   }
     * })
     * 
     */
    delete<T extends TokenSubscribeDeleteArgs>(args: SelectSubset<T, TokenSubscribeDeleteArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TokenSubscribe.
     * @param {TokenSubscribeUpdateArgs} args - Arguments to update one TokenSubscribe.
     * @example
     * // Update one TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenSubscribeUpdateArgs>(args: SelectSubset<T, TokenSubscribeUpdateArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TokenSubscribes.
     * @param {TokenSubscribeDeleteManyArgs} args - Arguments to filter TokenSubscribes to delete.
     * @example
     * // Delete a few TokenSubscribes
     * const { count } = await prisma.tokenSubscribe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenSubscribeDeleteManyArgs>(args?: SelectSubset<T, TokenSubscribeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenSubscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenSubscribes
     * const tokenSubscribe = await prisma.tokenSubscribe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenSubscribeUpdateManyArgs>(args: SelectSubset<T, TokenSubscribeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenSubscribe.
     * @param {TokenSubscribeUpsertArgs} args - Arguments to update or create a TokenSubscribe.
     * @example
     * // Update or create a TokenSubscribe
     * const tokenSubscribe = await prisma.tokenSubscribe.upsert({
     *   create: {
     *     // ... data to create a TokenSubscribe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenSubscribe we want to update
     *   }
     * })
     */
    upsert<T extends TokenSubscribeUpsertArgs>(args: SelectSubset<T, TokenSubscribeUpsertArgs<ExtArgs>>): Prisma__TokenSubscribeClient<$Result.GetResult<Prisma.$TokenSubscribePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TokenSubscribes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeCountArgs} args - Arguments to filter TokenSubscribes to count.
     * @example
     * // Count the number of TokenSubscribes
     * const count = await prisma.tokenSubscribe.count({
     *   where: {
     *     // ... the filter for the TokenSubscribes we want to count
     *   }
     * })
    **/
    count<T extends TokenSubscribeCountArgs>(
      args?: Subset<T, TokenSubscribeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenSubscribeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenSubscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenSubscribeAggregateArgs>(args: Subset<T, TokenSubscribeAggregateArgs>): Prisma.PrismaPromise<GetTokenSubscribeAggregateType<T>>

    /**
     * Group by TokenSubscribe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenSubscribeGroupByArgs} args - Group by arguments.
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
      T extends TokenSubscribeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenSubscribeGroupByArgs['orderBy'] }
        : { orderBy?: TokenSubscribeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenSubscribeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenSubscribeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenSubscribe model
   */
  readonly fields: TokenSubscribeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenSubscribe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenSubscribeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TokenSubscribe model
   */ 
  interface TokenSubscribeFieldRefs {
    readonly id: FieldRef<"TokenSubscribe", 'Int'>
    readonly token_ids: FieldRef<"TokenSubscribe", 'String'>
    readonly address: FieldRef<"TokenSubscribe", 'String'>
    readonly created_at: FieldRef<"TokenSubscribe", 'DateTime'>
    readonly updated_at: FieldRef<"TokenSubscribe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenSubscribe findUnique
   */
  export type TokenSubscribeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter, which TokenSubscribe to fetch.
     */
    where: TokenSubscribeWhereUniqueInput
  }

  /**
   * TokenSubscribe findUniqueOrThrow
   */
  export type TokenSubscribeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter, which TokenSubscribe to fetch.
     */
    where: TokenSubscribeWhereUniqueInput
  }

  /**
   * TokenSubscribe findFirst
   */
  export type TokenSubscribeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter, which TokenSubscribe to fetch.
     */
    where?: TokenSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenSubscribes to fetch.
     */
    orderBy?: TokenSubscribeOrderByWithRelationInput | TokenSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenSubscribes.
     */
    cursor?: TokenSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenSubscribes.
     */
    distinct?: TokenSubscribeScalarFieldEnum | TokenSubscribeScalarFieldEnum[]
  }

  /**
   * TokenSubscribe findFirstOrThrow
   */
  export type TokenSubscribeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter, which TokenSubscribe to fetch.
     */
    where?: TokenSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenSubscribes to fetch.
     */
    orderBy?: TokenSubscribeOrderByWithRelationInput | TokenSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenSubscribes.
     */
    cursor?: TokenSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenSubscribes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenSubscribes.
     */
    distinct?: TokenSubscribeScalarFieldEnum | TokenSubscribeScalarFieldEnum[]
  }

  /**
   * TokenSubscribe findMany
   */
  export type TokenSubscribeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter, which TokenSubscribes to fetch.
     */
    where?: TokenSubscribeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenSubscribes to fetch.
     */
    orderBy?: TokenSubscribeOrderByWithRelationInput | TokenSubscribeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenSubscribes.
     */
    cursor?: TokenSubscribeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenSubscribes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenSubscribes.
     */
    skip?: number
    distinct?: TokenSubscribeScalarFieldEnum | TokenSubscribeScalarFieldEnum[]
  }

  /**
   * TokenSubscribe create
   */
  export type TokenSubscribeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * The data needed to create a TokenSubscribe.
     */
    data: XOR<TokenSubscribeCreateInput, TokenSubscribeUncheckedCreateInput>
  }

  /**
   * TokenSubscribe createMany
   */
  export type TokenSubscribeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenSubscribes.
     */
    data: TokenSubscribeCreateManyInput | TokenSubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenSubscribe createManyAndReturn
   */
  export type TokenSubscribeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TokenSubscribes.
     */
    data: TokenSubscribeCreateManyInput | TokenSubscribeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenSubscribe update
   */
  export type TokenSubscribeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * The data needed to update a TokenSubscribe.
     */
    data: XOR<TokenSubscribeUpdateInput, TokenSubscribeUncheckedUpdateInput>
    /**
     * Choose, which TokenSubscribe to update.
     */
    where: TokenSubscribeWhereUniqueInput
  }

  /**
   * TokenSubscribe updateMany
   */
  export type TokenSubscribeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenSubscribes.
     */
    data: XOR<TokenSubscribeUpdateManyMutationInput, TokenSubscribeUncheckedUpdateManyInput>
    /**
     * Filter which TokenSubscribes to update
     */
    where?: TokenSubscribeWhereInput
  }

  /**
   * TokenSubscribe upsert
   */
  export type TokenSubscribeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * The filter to search for the TokenSubscribe to update in case it exists.
     */
    where: TokenSubscribeWhereUniqueInput
    /**
     * In case the TokenSubscribe found by the `where` argument doesn't exist, create a new TokenSubscribe with this data.
     */
    create: XOR<TokenSubscribeCreateInput, TokenSubscribeUncheckedCreateInput>
    /**
     * In case the TokenSubscribe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenSubscribeUpdateInput, TokenSubscribeUncheckedUpdateInput>
  }

  /**
   * TokenSubscribe delete
   */
  export type TokenSubscribeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
    /**
     * Filter which TokenSubscribe to delete.
     */
    where: TokenSubscribeWhereUniqueInput
  }

  /**
   * TokenSubscribe deleteMany
   */
  export type TokenSubscribeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenSubscribes to delete
     */
    where?: TokenSubscribeWhereInput
  }

  /**
   * TokenSubscribe without action
   */
  export type TokenSubscribeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenSubscribe
     */
    select?: TokenSubscribeSelect<ExtArgs> | null
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


  export const ChainScalarFieldEnum: {
    id: 'id',
    chain_id: 'chain_id',
    wallet_type: 'wallet_type',
    chain_name: 'chain_name',
    chain_icon: 'chain_icon',
    status_type: 'status_type',
    sort: 'sort',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChainScalarFieldEnum = (typeof ChainScalarFieldEnum)[keyof typeof ChainScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    chain_id: 'chain_id',
    node_url: 'node_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    chain_id: 'chain_id',
    token_symbol: 'token_symbol',
    token_name: 'token_name',
    token_icon: 'token_icon',
    contract_address: 'contract_address',
    token_decimals: 'token_decimals',
    is_native: 'is_native',
    is_multiple_chain: 'is_multiple_chain',
    coin_market_cap_id: 'coin_market_cap_id',
    default_subscribe: 'default_subscribe',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const TokenSubscribeScalarFieldEnum: {
    id: 'id',
    token_ids: 'token_ids',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TokenSubscribeScalarFieldEnum = (typeof TokenSubscribeScalarFieldEnum)[keyof typeof TokenSubscribeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChainWhereInput = {
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    id?: StringFilter<"Chain"> | string
    chain_id?: StringFilter<"Chain"> | string
    wallet_type?: IntFilter<"Chain"> | number
    chain_name?: StringFilter<"Chain"> | string
    chain_icon?: StringFilter<"Chain"> | string
    status_type?: IntFilter<"Chain"> | number
    sort?: IntFilter<"Chain"> | number
    created_at?: DateTimeFilter<"Chain"> | Date | string
    updated_at?: DateTimeFilter<"Chain"> | Date | string
    nodes?: NodeListRelationFilter
    tokens?: TokenListRelationFilter
  }

  export type ChainOrderByWithRelationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    wallet_type?: SortOrder
    chain_name?: SortOrder
    chain_icon?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    nodes?: NodeOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
  }

  export type ChainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chain_id?: string
    wallet_type?: number
    AND?: ChainWhereInput | ChainWhereInput[]
    OR?: ChainWhereInput[]
    NOT?: ChainWhereInput | ChainWhereInput[]
    chain_name?: StringFilter<"Chain"> | string
    chain_icon?: StringFilter<"Chain"> | string
    status_type?: IntFilter<"Chain"> | number
    sort?: IntFilter<"Chain"> | number
    created_at?: DateTimeFilter<"Chain"> | Date | string
    updated_at?: DateTimeFilter<"Chain"> | Date | string
    nodes?: NodeListRelationFilter
    tokens?: TokenListRelationFilter
  }, "id" | "chain_id" | "wallet_type">

  export type ChainOrderByWithAggregationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    wallet_type?: SortOrder
    chain_name?: SortOrder
    chain_icon?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ChainCountOrderByAggregateInput
    _avg?: ChainAvgOrderByAggregateInput
    _max?: ChainMaxOrderByAggregateInput
    _min?: ChainMinOrderByAggregateInput
    _sum?: ChainSumOrderByAggregateInput
  }

  export type ChainScalarWhereWithAggregatesInput = {
    AND?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    OR?: ChainScalarWhereWithAggregatesInput[]
    NOT?: ChainScalarWhereWithAggregatesInput | ChainScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chain"> | string
    chain_id?: StringWithAggregatesFilter<"Chain"> | string
    wallet_type?: IntWithAggregatesFilter<"Chain"> | number
    chain_name?: StringWithAggregatesFilter<"Chain"> | string
    chain_icon?: StringWithAggregatesFilter<"Chain"> | string
    status_type?: IntWithAggregatesFilter<"Chain"> | number
    sort?: IntWithAggregatesFilter<"Chain"> | number
    created_at?: DateTimeWithAggregatesFilter<"Chain"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Chain"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    chain_id?: StringFilter<"Node"> | string
    node_url?: StringFilter<"Node"> | string
    created_at?: DateTimeFilter<"Node"> | Date | string
    updated_at?: DateTimeFilter<"Node"> | Date | string
    chain?: XOR<ChainNullableRelationFilter, ChainWhereInput> | null
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    node_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    chain_id?: StringFilter<"Node"> | string
    node_url?: StringFilter<"Node"> | string
    created_at?: DateTimeFilter<"Node"> | Date | string
    updated_at?: DateTimeFilter<"Node"> | Date | string
    chain?: XOR<ChainNullableRelationFilter, ChainWhereInput> | null
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    node_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    chain_id?: StringWithAggregatesFilter<"Node"> | string
    node_url?: StringWithAggregatesFilter<"Node"> | string
    created_at?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    chain_id?: StringFilter<"Token"> | string
    token_symbol?: StringFilter<"Token"> | string
    token_name?: StringFilter<"Token"> | string
    token_icon?: StringFilter<"Token"> | string
    contract_address?: StringFilter<"Token"> | string
    token_decimals?: IntFilter<"Token"> | number
    is_native?: BoolFilter<"Token"> | boolean
    is_multiple_chain?: BoolFilter<"Token"> | boolean
    coin_market_cap_id?: IntFilter<"Token"> | number
    default_subscribe?: IntFilter<"Token"> | number
    created_at?: DateTimeFilter<"Token"> | Date | string
    updated_at?: DateTimeFilter<"Token"> | Date | string
    chain?: XOR<ChainNullableRelationFilter, ChainWhereInput> | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    token_symbol?: SortOrder
    token_name?: SortOrder
    token_icon?: SortOrder
    contract_address?: SortOrder
    token_decimals?: SortOrder
    is_native?: SortOrder
    is_multiple_chain?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    chain?: ChainOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    chain_id?: StringFilter<"Token"> | string
    token_symbol?: StringFilter<"Token"> | string
    token_name?: StringFilter<"Token"> | string
    token_icon?: StringFilter<"Token"> | string
    contract_address?: StringFilter<"Token"> | string
    token_decimals?: IntFilter<"Token"> | number
    is_native?: BoolFilter<"Token"> | boolean
    is_multiple_chain?: BoolFilter<"Token"> | boolean
    coin_market_cap_id?: IntFilter<"Token"> | number
    default_subscribe?: IntFilter<"Token"> | number
    created_at?: DateTimeFilter<"Token"> | Date | string
    updated_at?: DateTimeFilter<"Token"> | Date | string
    chain?: XOR<ChainNullableRelationFilter, ChainWhereInput> | null
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    chain_id?: SortOrder
    token_symbol?: SortOrder
    token_name?: SortOrder
    token_icon?: SortOrder
    contract_address?: SortOrder
    token_decimals?: SortOrder
    is_native?: SortOrder
    is_multiple_chain?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    chain_id?: StringWithAggregatesFilter<"Token"> | string
    token_symbol?: StringWithAggregatesFilter<"Token"> | string
    token_name?: StringWithAggregatesFilter<"Token"> | string
    token_icon?: StringWithAggregatesFilter<"Token"> | string
    contract_address?: StringWithAggregatesFilter<"Token"> | string
    token_decimals?: IntWithAggregatesFilter<"Token"> | number
    is_native?: BoolWithAggregatesFilter<"Token"> | boolean
    is_multiple_chain?: BoolWithAggregatesFilter<"Token"> | boolean
    coin_market_cap_id?: IntWithAggregatesFilter<"Token"> | number
    default_subscribe?: IntWithAggregatesFilter<"Token"> | number
    created_at?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type TokenSubscribeWhereInput = {
    AND?: TokenSubscribeWhereInput | TokenSubscribeWhereInput[]
    OR?: TokenSubscribeWhereInput[]
    NOT?: TokenSubscribeWhereInput | TokenSubscribeWhereInput[]
    id?: IntFilter<"TokenSubscribe"> | number
    token_ids?: StringFilter<"TokenSubscribe"> | string
    address?: StringFilter<"TokenSubscribe"> | string
    created_at?: DateTimeNullableFilter<"TokenSubscribe"> | Date | string | null
    updated_at?: DateTimeFilter<"TokenSubscribe"> | Date | string
  }

  export type TokenSubscribeOrderByWithRelationInput = {
    id?: SortOrder
    token_ids?: SortOrder
    address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
  }

  export type TokenSubscribeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: TokenSubscribeWhereInput | TokenSubscribeWhereInput[]
    OR?: TokenSubscribeWhereInput[]
    NOT?: TokenSubscribeWhereInput | TokenSubscribeWhereInput[]
    token_ids?: StringFilter<"TokenSubscribe"> | string
    created_at?: DateTimeNullableFilter<"TokenSubscribe"> | Date | string | null
    updated_at?: DateTimeFilter<"TokenSubscribe"> | Date | string
  }, "id" | "address">

  export type TokenSubscribeOrderByWithAggregationInput = {
    id?: SortOrder
    token_ids?: SortOrder
    address?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: TokenSubscribeCountOrderByAggregateInput
    _avg?: TokenSubscribeAvgOrderByAggregateInput
    _max?: TokenSubscribeMaxOrderByAggregateInput
    _min?: TokenSubscribeMinOrderByAggregateInput
    _sum?: TokenSubscribeSumOrderByAggregateInput
  }

  export type TokenSubscribeScalarWhereWithAggregatesInput = {
    AND?: TokenSubscribeScalarWhereWithAggregatesInput | TokenSubscribeScalarWhereWithAggregatesInput[]
    OR?: TokenSubscribeScalarWhereWithAggregatesInput[]
    NOT?: TokenSubscribeScalarWhereWithAggregatesInput | TokenSubscribeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TokenSubscribe"> | number
    token_ids?: StringWithAggregatesFilter<"TokenSubscribe"> | string
    address?: StringWithAggregatesFilter<"TokenSubscribe"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"TokenSubscribe"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"TokenSubscribe"> | Date | string
  }

  export type ChainCreateInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: NodeCreateNestedManyWithoutChainInput
    tokens?: TokenCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutChainInput
    tokens?: TokenUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUpdateManyWithoutChainNestedInput
    tokens?: TokenUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutChainNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateManyInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
    chain?: ChainCreateNestedOneWithoutNodesInput
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    chain_id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain?: ChainUpdateOneWithoutNodesNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyInput = {
    id?: string
    chain_id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
    chain?: ChainCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    chain_id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chain?: ChainUpdateOneWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    chain_id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenSubscribeCreateInput = {
    token_ids: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string
  }

  export type TokenSubscribeUncheckedCreateInput = {
    id?: number
    token_ids: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string
  }

  export type TokenSubscribeUpdateInput = {
    token_ids?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenSubscribeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token_ids?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenSubscribeCreateManyInput = {
    id?: number
    token_ids: string
    address: string
    created_at?: Date | string | null
    updated_at?: Date | string
  }

  export type TokenSubscribeUpdateManyMutationInput = {
    token_ids?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenSubscribeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token_ids?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChainCountOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    wallet_type?: SortOrder
    chain_name?: SortOrder
    chain_icon?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChainAvgOrderByAggregateInput = {
    wallet_type?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
  }

  export type ChainMaxOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    wallet_type?: SortOrder
    chain_name?: SortOrder
    chain_icon?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChainMinOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    wallet_type?: SortOrder
    chain_name?: SortOrder
    chain_icon?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChainSumOrderByAggregateInput = {
    wallet_type?: SortOrder
    status_type?: SortOrder
    sort?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChainNullableRelationFilter = {
    is?: ChainWhereInput | null
    isNot?: ChainWhereInput | null
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    node_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    node_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    node_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    token_symbol?: SortOrder
    token_name?: SortOrder
    token_icon?: SortOrder
    contract_address?: SortOrder
    token_decimals?: SortOrder
    is_native?: SortOrder
    is_multiple_chain?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    token_decimals?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    token_symbol?: SortOrder
    token_name?: SortOrder
    token_icon?: SortOrder
    contract_address?: SortOrder
    token_decimals?: SortOrder
    is_native?: SortOrder
    is_multiple_chain?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    chain_id?: SortOrder
    token_symbol?: SortOrder
    token_name?: SortOrder
    token_icon?: SortOrder
    contract_address?: SortOrder
    token_decimals?: SortOrder
    is_native?: SortOrder
    is_multiple_chain?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    token_decimals?: SortOrder
    coin_market_cap_id?: SortOrder
    default_subscribe?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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

  export type TokenSubscribeCountOrderByAggregateInput = {
    id?: SortOrder
    token_ids?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenSubscribeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TokenSubscribeMaxOrderByAggregateInput = {
    id?: SortOrder
    token_ids?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenSubscribeMinOrderByAggregateInput = {
    id?: SortOrder
    token_ids?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TokenSubscribeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NodeCreateNestedManyWithoutChainInput = {
    create?: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput> | NodeCreateWithoutChainInput[] | NodeUncheckedCreateWithoutChainInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutChainInput | NodeCreateOrConnectWithoutChainInput[]
    createMany?: NodeCreateManyChainInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutChainInput = {
    create?: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput> | TokenCreateWithoutChainInput[] | TokenUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutChainInput | TokenCreateOrConnectWithoutChainInput[]
    createMany?: TokenCreateManyChainInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput> | NodeCreateWithoutChainInput[] | NodeUncheckedCreateWithoutChainInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutChainInput | NodeCreateOrConnectWithoutChainInput[]
    createMany?: NodeCreateManyChainInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutChainInput = {
    create?: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput> | TokenCreateWithoutChainInput[] | TokenUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutChainInput | TokenCreateOrConnectWithoutChainInput[]
    createMany?: TokenCreateManyChainInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NodeUpdateManyWithoutChainNestedInput = {
    create?: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput> | NodeCreateWithoutChainInput[] | NodeUncheckedCreateWithoutChainInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutChainInput | NodeCreateOrConnectWithoutChainInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutChainInput | NodeUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: NodeCreateManyChainInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutChainInput | NodeUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutChainInput | NodeUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutChainNestedInput = {
    create?: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput> | TokenCreateWithoutChainInput[] | TokenUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutChainInput | TokenCreateOrConnectWithoutChainInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutChainInput | TokenUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TokenCreateManyChainInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutChainInput | TokenUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutChainInput | TokenUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput> | NodeCreateWithoutChainInput[] | NodeUncheckedCreateWithoutChainInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutChainInput | NodeCreateOrConnectWithoutChainInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutChainInput | NodeUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: NodeCreateManyChainInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutChainInput | NodeUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutChainInput | NodeUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutChainNestedInput = {
    create?: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput> | TokenCreateWithoutChainInput[] | TokenUncheckedCreateWithoutChainInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutChainInput | TokenCreateOrConnectWithoutChainInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutChainInput | TokenUpsertWithWhereUniqueWithoutChainInput[]
    createMany?: TokenCreateManyChainInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutChainInput | TokenUpdateWithWhereUniqueWithoutChainInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutChainInput | TokenUpdateManyWithWhereWithoutChainInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type ChainCreateNestedOneWithoutNodesInput = {
    create?: XOR<ChainCreateWithoutNodesInput, ChainUncheckedCreateWithoutNodesInput>
    connectOrCreate?: ChainCreateOrConnectWithoutNodesInput
    connect?: ChainWhereUniqueInput
  }

  export type ChainUpdateOneWithoutNodesNestedInput = {
    create?: XOR<ChainCreateWithoutNodesInput, ChainUncheckedCreateWithoutNodesInput>
    connectOrCreate?: ChainCreateOrConnectWithoutNodesInput
    upsert?: ChainUpsertWithoutNodesInput
    disconnect?: ChainWhereInput | boolean
    delete?: ChainWhereInput | boolean
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutNodesInput, ChainUpdateWithoutNodesInput>, ChainUncheckedUpdateWithoutNodesInput>
  }

  export type ChainCreateNestedOneWithoutTokensInput = {
    create?: XOR<ChainCreateWithoutTokensInput, ChainUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ChainCreateOrConnectWithoutTokensInput
    connect?: ChainWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChainUpdateOneWithoutTokensNestedInput = {
    create?: XOR<ChainCreateWithoutTokensInput, ChainUncheckedCreateWithoutTokensInput>
    connectOrCreate?: ChainCreateOrConnectWithoutTokensInput
    upsert?: ChainUpsertWithoutTokensInput
    disconnect?: ChainWhereInput | boolean
    delete?: ChainWhereInput | boolean
    connect?: ChainWhereUniqueInput
    update?: XOR<XOR<ChainUpdateToOneWithWhereWithoutTokensInput, ChainUpdateWithoutTokensInput>, ChainUncheckedUpdateWithoutTokensInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NodeCreateWithoutChainInput = {
    id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NodeUncheckedCreateWithoutChainInput = {
    id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NodeCreateOrConnectWithoutChainInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput>
  }

  export type NodeCreateManyChainInputEnvelope = {
    data: NodeCreateManyChainInput | NodeCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutChainInput = {
    id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokenUncheckedCreateWithoutChainInput = {
    id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokenCreateOrConnectWithoutChainInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput>
  }

  export type TokenCreateManyChainInputEnvelope = {
    data: TokenCreateManyChainInput | TokenCreateManyChainInput[]
    skipDuplicates?: boolean
  }

  export type NodeUpsertWithWhereUniqueWithoutChainInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutChainInput, NodeUncheckedUpdateWithoutChainInput>
    create: XOR<NodeCreateWithoutChainInput, NodeUncheckedCreateWithoutChainInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutChainInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutChainInput, NodeUncheckedUpdateWithoutChainInput>
  }

  export type NodeUpdateManyWithWhereWithoutChainInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutChainInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    chain_id?: StringFilter<"Node"> | string
    node_url?: StringFilter<"Node"> | string
    created_at?: DateTimeFilter<"Node"> | Date | string
    updated_at?: DateTimeFilter<"Node"> | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutChainInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutChainInput, TokenUncheckedUpdateWithoutChainInput>
    create: XOR<TokenCreateWithoutChainInput, TokenUncheckedCreateWithoutChainInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutChainInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutChainInput, TokenUncheckedUpdateWithoutChainInput>
  }

  export type TokenUpdateManyWithWhereWithoutChainInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutChainInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    chain_id?: StringFilter<"Token"> | string
    token_symbol?: StringFilter<"Token"> | string
    token_name?: StringFilter<"Token"> | string
    token_icon?: StringFilter<"Token"> | string
    contract_address?: StringFilter<"Token"> | string
    token_decimals?: IntFilter<"Token"> | number
    is_native?: BoolFilter<"Token"> | boolean
    is_multiple_chain?: BoolFilter<"Token"> | boolean
    coin_market_cap_id?: IntFilter<"Token"> | number
    default_subscribe?: IntFilter<"Token"> | number
    created_at?: DateTimeFilter<"Token"> | Date | string
    updated_at?: DateTimeFilter<"Token"> | Date | string
  }

  export type ChainCreateWithoutNodesInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    tokens?: TokenCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutNodesInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutNodesInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutNodesInput, ChainUncheckedCreateWithoutNodesInput>
  }

  export type ChainUpsertWithoutNodesInput = {
    update: XOR<ChainUpdateWithoutNodesInput, ChainUncheckedUpdateWithoutNodesInput>
    create: XOR<ChainCreateWithoutNodesInput, ChainUncheckedCreateWithoutNodesInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutNodesInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutNodesInput, ChainUncheckedUpdateWithoutNodesInput>
  }

  export type ChainUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutChainNestedInput
  }

  export type ChainCreateWithoutTokensInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: NodeCreateNestedManyWithoutChainInput
  }

  export type ChainUncheckedCreateWithoutTokensInput = {
    id?: string
    chain_id?: string
    wallet_type: number
    chain_name?: string
    chain_icon?: string
    status_type?: number
    sort?: number
    created_at?: Date | string
    updated_at?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutChainInput
  }

  export type ChainCreateOrConnectWithoutTokensInput = {
    where: ChainWhereUniqueInput
    create: XOR<ChainCreateWithoutTokensInput, ChainUncheckedCreateWithoutTokensInput>
  }

  export type ChainUpsertWithoutTokensInput = {
    update: XOR<ChainUpdateWithoutTokensInput, ChainUncheckedUpdateWithoutTokensInput>
    create: XOR<ChainCreateWithoutTokensInput, ChainUncheckedCreateWithoutTokensInput>
    where?: ChainWhereInput
  }

  export type ChainUpdateToOneWithWhereWithoutTokensInput = {
    where?: ChainWhereInput
    data: XOR<ChainUpdateWithoutTokensInput, ChainUncheckedUpdateWithoutTokensInput>
  }

  export type ChainUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUpdateManyWithoutChainNestedInput
  }

  export type ChainUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    chain_id?: StringFieldUpdateOperationsInput | string
    wallet_type?: IntFieldUpdateOperationsInput | number
    chain_name?: StringFieldUpdateOperationsInput | string
    chain_icon?: StringFieldUpdateOperationsInput | string
    status_type?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutChainNestedInput
  }

  export type NodeCreateManyChainInput = {
    id?: string
    node_url?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TokenCreateManyChainInput = {
    id?: string
    token_symbol?: string
    token_name?: string
    token_icon?: string
    contract_address?: string
    token_decimals: number
    is_native?: boolean
    is_multiple_chain?: boolean
    coin_market_cap_id: number
    default_subscribe?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NodeUpdateWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    node_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutChainInput = {
    id?: StringFieldUpdateOperationsInput | string
    token_symbol?: StringFieldUpdateOperationsInput | string
    token_name?: StringFieldUpdateOperationsInput | string
    token_icon?: StringFieldUpdateOperationsInput | string
    contract_address?: StringFieldUpdateOperationsInput | string
    token_decimals?: IntFieldUpdateOperationsInput | number
    is_native?: BoolFieldUpdateOperationsInput | boolean
    is_multiple_chain?: BoolFieldUpdateOperationsInput | boolean
    coin_market_cap_id?: IntFieldUpdateOperationsInput | number
    default_subscribe?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ChainCountOutputTypeDefaultArgs instead
     */
    export type ChainCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChainDefaultArgs instead
     */
    export type ChainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChainDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NodeDefaultArgs instead
     */
    export type NodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenDefaultArgs instead
     */
    export type TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TokenSubscribeDefaultArgs instead
     */
    export type TokenSubscribeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TokenSubscribeDefaultArgs<ExtArgs>

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