/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../server';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  submitResults?: Maybe<SubmitResultsResponse>,
};


export type MutationSubmitResultsArgs = {
  input?: Maybe<SubmitResultsInput>
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  searchResult?: Maybe<TextSearchResult>,
};

export type SubmitResultsInput = {
  candidate: Scalars['String'],
  text: Scalars['String'],
  results?: Maybe<Array<Maybe<SubtextResultInput>>>,
};

export type SubmitResultsResponse = {
   __typename?: 'SubmitResultsResponse',
  success: Scalars['Boolean'],
  result?: Maybe<Scalars['String']>,
};

export type Subtext = {
   __typename?: 'Subtext',
  subTexts?: Maybe<Array<Scalars['String']>>,
};

export type SubtextResult = {
   __typename?: 'SubtextResult',
  subtext: Scalars['String'],
  result: Scalars['String'],
};

export type SubtextResultInput = {
  subtext: Scalars['String'],
  result: Scalars['String'],
};

export type TextSearchResult = {
   __typename?: 'TextSearchResult',
  textToSearch?: Maybe<TextToSearch>,
  subtextToSearch?: Maybe<Subtext>,
  results?: Maybe<Array<Maybe<SubtextResult>>>,
};

export type TextToSearch = {
   __typename?: 'TextToSearch',
  text: Scalars['String'],
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  TextSearchResult: ResolverTypeWrapper<TextSearchResult>,
  TextToSearch: ResolverTypeWrapper<TextToSearch>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Subtext: ResolverTypeWrapper<Subtext>,
  SubtextResult: ResolverTypeWrapper<SubtextResult>,
  Mutation: ResolverTypeWrapper<{}>,
  SubmitResultsInput: SubmitResultsInput,
  SubtextResultInput: SubtextResultInput,
  SubmitResultsResponse: ResolverTypeWrapper<SubmitResultsResponse>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Boolean: Scalars['Boolean'],
  TextSearchResult: TextSearchResult,
  TextToSearch: TextToSearch,
  String: Scalars['String'],
  Subtext: Subtext,
  SubtextResult: SubtextResult,
  Mutation: {},
  SubmitResultsInput: SubmitResultsInput,
  SubtextResultInput: SubtextResultInput,
  SubmitResultsResponse: SubmitResultsResponse,
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  submitResults?: Resolver<Maybe<ResolversTypes['SubmitResultsResponse']>, ParentType, ContextType, MutationSubmitResultsArgs>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  searchResult?: Resolver<Maybe<ResolversTypes['TextSearchResult']>, ParentType, ContextType>,
};

export type SubmitResultsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SubmitResultsResponse'] = ResolversParentTypes['SubmitResultsResponse']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  result?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SubtextResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Subtext'] = ResolversParentTypes['Subtext']> = {
  subTexts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>,
};

export type SubtextResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SubtextResult'] = ResolversParentTypes['SubtextResult']> = {
  subtext?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type TextSearchResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TextSearchResult'] = ResolversParentTypes['TextSearchResult']> = {
  textToSearch?: Resolver<Maybe<ResolversTypes['TextToSearch']>, ParentType, ContextType>,
  subtextToSearch?: Resolver<Maybe<ResolversTypes['Subtext']>, ParentType, ContextType>,
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['SubtextResult']>>>, ParentType, ContextType>,
};

export type TextToSearchResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TextToSearch'] = ResolversParentTypes['TextToSearch']> = {
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SubmitResultsResponse?: SubmitResultsResponseResolvers<ContextType>,
  Subtext?: SubtextResolvers<ContextType>,
  SubtextResult?: SubtextResultResolvers<ContextType>,
  TextSearchResult?: TextSearchResultResolvers<ContextType>,
  TextToSearch?: TextToSearchResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
