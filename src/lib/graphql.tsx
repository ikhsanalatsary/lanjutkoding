import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddToWishlistInput = {
  clientMutationId: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['Int']>;
};

export type AddToWishlistPayload = {
  __typename?: 'AddToWishlistPayload';
  added: Maybe<Scalars['Boolean']>;
  clientMutationId: Maybe<Scalars['String']>;
  error: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['Int']>;
  wishlistProductIds: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Avatar = {
  __typename?: 'Avatar';
  default: Maybe<Scalars['String']>;
  extraAttr: Maybe<Scalars['String']>;
  forceDefault: Maybe<Scalars['Boolean']>;
  foundAvatar: Maybe<Scalars['Boolean']>;
  height: Maybe<Scalars['Int']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  rating: Maybe<Scalars['String']>;
  scheme: Maybe<Scalars['String']>;
  size: Maybe<Scalars['Int']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};

export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

export type Category = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalTermNode & HierarchicalNode & MenuItemLinkable & {
  __typename?: 'Category';
  ancestors: Maybe<CategoryToAncestorsCategoryConnection>;
  /** @deprecated Deprecated in favor of databaseId */
  categoryId: Maybe<Scalars['Int']>;
  children: Maybe<CategoryToCategoryConnection>;
  contentNodes: Maybe<CategoryToContentNodeConnection>;
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<CategoryToParentCategoryConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  posts: Maybe<CategoryToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
  taxonomyName: Maybe<Scalars['String']>;
  termGroupId: Maybe<Scalars['Int']>;
  termTaxonomyId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type CategoryAncestorsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type CategoryChildrenArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToCategoryConnectionWhereArgs>;
};


export type CategoryContentNodesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};


export type CategoryEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type CategoryEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type CategoryPostsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CategoryToPostConnectionWhereArgs>;
};

export type CategoryConnection = {
  edges: Array<CategoryConnectionEdge>;
  nodes: Array<Category>;
};

export type CategoryConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Category;
};

export enum CategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
  nodes: Array<Category>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Category;
};

export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToCategoryConnection';
  edges: Array<CategoryToCategoryConnectionEdge>;
  nodes: Array<Category>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Category;
};

export type CategoryToCategoryConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type CategoryToContentNodeConnection = ContentNodeConnection & Connection & {
  __typename?: 'CategoryToContentNodeConnection';
  edges: Array<CategoryToContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type CategoryToContentNodeConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypesOfCategoryEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type CategoryToParentCategoryConnectionEdge = OneToOneConnection & Edge & CategoryConnectionEdge & {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Category;
};

export type CategoryToPostConnection = PostConnection & Connection & {
  __typename?: 'CategoryToPostConnection';
  edges: Array<CategoryToPostConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToPostConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'CategoryToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type CategoryToPostConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type CategoryToTaxonomyConnectionEdge = OneToOneConnection & Edge & TaxonomyConnectionEdge & {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export type Comment = Node & DatabaseIdentifier & {
  __typename?: 'Comment';
  agent: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of the `status` field */
  approved: Maybe<Scalars['Boolean']>;
  author: Maybe<CommentToCommenterConnectionEdge>;
  authorIp: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  commentId: Maybe<Scalars['Int']>;
  commentedOn: Maybe<CommentToContentNodeConnectionEdge>;
  content: Maybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  karma: Maybe<Scalars['Int']>;
  parent: Maybe<CommentToParentCommentConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  replies: Maybe<CommentToCommentConnection>;
  status: Maybe<CommentStatusEnum>;
  type: Maybe<Scalars['String']>;
};


export type CommentContentArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type CommentParentArgs = {
  where: Maybe<CommentToParentCommentConnectionWhereArgs>;
};


export type CommentRepliesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<CommentToCommentConnectionWhereArgs>;
};

export type CommentAuthor = Node & Commenter & DatabaseIdentifier & {
  __typename?: 'CommentAuthor';
  avatar: Maybe<Avatar>;
  databaseId: Scalars['Int'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type CommentAuthorAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault: Maybe<Scalars['Boolean']>;
  rating: Maybe<AvatarRatingEnum>;
};

export type CommentConnection = {
  edges: Array<CommentConnectionEdge>;
  nodes: Array<Comment>;
};

export type CommentConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export enum CommentNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export enum CommentStatusEnum {
  Approve = 'APPROVE',
  Hold = 'HOLD',
  Spam = 'SPAM',
  Trash = 'TRASH'
}

export type CommentToCommentConnection = CommentConnection & Connection & {
  __typename?: 'CommentToCommentConnection';
  edges: Array<CommentToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'CommentToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type CommentToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type CommentToCommenterConnectionEdge = OneToOneConnection & Edge & CommenterConnectionEdge & {
  __typename?: 'CommentToCommenterConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Commenter;
};

export type CommentToContentNodeConnectionEdge = OneToOneConnection & Edge & ContentNodeConnectionEdge & {
  __typename?: 'CommentToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type CommentToParentCommentConnectionEdge = OneToOneConnection & Edge & CommentConnectionEdge & {
  __typename?: 'CommentToParentCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type CommentToParentCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type Commenter = {
  avatar: Maybe<Avatar>;
  databaseId: Scalars['Int'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type CommenterConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Commenter;
};

export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

export type Connection = {
  edges: Array<Edge>;
  nodes: Array<Node>;
};

export type ContentNode = {
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  contentTypeName: Scalars['String'];
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  desiredSlug: Maybe<Scalars['String']>;
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  guid: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
  seo: Maybe<PostTypeSeo>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  template: Maybe<ContentTemplate>;
  uri: Scalars['String'];
};


export type ContentNodeEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type ContentNodeEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type ContentNodeConnection = {
  edges: Array<ContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
};

export type ContentNodeConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export enum ContentNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export type ContentNodeToContentTypeConnectionEdge = OneToOneConnection & Edge & ContentTypeConnectionEdge & {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentType;
};

export type ContentNodeToEditLastConnectionEdge = OneToOneConnection & Edge & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: User;
};

export type ContentNodeToEditLockConnectionEdge = OneToOneConnection & Edge & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  lockTimestamp: Maybe<Scalars['String']>;
  node: User;
};

export type ContentNodeToEnqueuedScriptConnection = EnqueuedScriptConnection & Connection & {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
  nodes: Array<EnqueuedScript>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedScriptConnectionEdge = EnqueuedScriptConnectionEdge & Edge & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedScript;
};

export type ContentNodeToEnqueuedStylesheetConnection = EnqueuedStylesheetConnection & Connection & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  nodes: Array<EnqueuedStylesheet>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedStylesheetConnectionEdge = EnqueuedStylesheetConnectionEdge & Edge & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedStylesheet;
};

export type ContentTemplate = {
  templateName: Maybe<Scalars['String']>;
};

export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  canExport: Maybe<Scalars['Boolean']>;
  connectedTaxonomies: Maybe<ContentTypeToTaxonomyConnection>;
  contentNodes: Maybe<ContentTypeToContentNodeConnection>;
  deleteWithUser: Maybe<Scalars['Boolean']>;
  description: Maybe<Scalars['String']>;
  excludeFromSearch: Maybe<Scalars['Boolean']>;
  graphqlPluralName: Maybe<Scalars['String']>;
  graphqlSingleName: Maybe<Scalars['String']>;
  hasArchive: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  label: Maybe<Scalars['String']>;
  labels: Maybe<PostTypeLabelDetails>;
  menuIcon: Maybe<Scalars['String']>;
  menuPosition: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  public: Maybe<Scalars['Boolean']>;
  publiclyQueryable: Maybe<Scalars['Boolean']>;
  restBase: Maybe<Scalars['String']>;
  restControllerClass: Maybe<Scalars['String']>;
  showInAdminBar: Maybe<Scalars['Boolean']>;
  showInGraphql: Maybe<Scalars['Boolean']>;
  showInMenu: Maybe<Scalars['Boolean']>;
  showInNavMenus: Maybe<Scalars['Boolean']>;
  showInRest: Maybe<Scalars['Boolean']>;
  showUi: Maybe<Scalars['Boolean']>;
  uri: Scalars['String'];
};


export type ContentTypeConnectedTaxonomiesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type ContentTypeContentNodesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

export type ContentTypeConnection = {
  edges: Array<ContentTypeConnectionEdge>;
  nodes: Array<ContentType>;
};

export type ContentTypeConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: ContentType;
};

export enum ContentTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST'
}

export enum ContentTypeIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export type ContentTypeToContentNodeConnection = ContentNodeConnection & Connection & {
  __typename?: 'ContentTypeToContentNodeConnection';
  edges: Array<ContentTypeToContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type ContentTypeToContentNodeConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type ContentTypeToTaxonomyConnection = TaxonomyConnection & Connection & {
  __typename?: 'ContentTypeToTaxonomyConnection';
  edges: Array<ContentTypeToTaxonomyConnectionEdge>;
  nodes: Array<Taxonomy>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentTypeToTaxonomyConnectionEdge = TaxonomyConnectionEdge & Edge & {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export enum ContentTypesOfCategoryEnum {
  Post = 'POST'
}

export enum ContentTypesOfPostFormatEnum {
  Post = 'POST'
}

export enum ContentTypesOfTagEnum {
  Post = 'POST'
}

export type CreateCategoryInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  category: Maybe<Category>;
  clientMutationId: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  approved: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  authorEmail: Maybe<Scalars['String']>;
  authorUrl: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentOn: Maybe<Scalars['Int']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  parent: Maybe<Scalars['ID']>;
  status: Maybe<CommentStatusEnum>;
  type: Maybe<Scalars['String']>;
};

export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  clientMutationId: Maybe<Scalars['String']>;
  comment: Maybe<Comment>;
  success: Maybe<Scalars['Boolean']>;
};

export type CreateMediaItemInput = {
  altText: Maybe<Scalars['String']>;
  authorId: Maybe<Scalars['ID']>;
  caption: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  filePath: Maybe<Scalars['String']>;
  fileType: Maybe<MimeTypeEnum>;
  parentId: Maybe<Scalars['ID']>;
  pingStatus: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<MediaItemStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  clientMutationId: Maybe<Scalars['String']>;
  mediaItem: Maybe<MediaItem>;
};

export type CreatePageInput = {
  authorId: Maybe<Scalars['ID']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  menuOrder: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  password: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  clientMutationId: Maybe<Scalars['String']>;
  page: Maybe<Page>;
};

export type CreatePostFormatInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Maybe<Scalars['String']>;
};

export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  clientMutationId: Maybe<Scalars['String']>;
  postFormat: Maybe<PostFormat>;
};

export type CreatePostInput = {
  authorId: Maybe<Scalars['ID']>;
  categories: Maybe<PostCategoriesInput>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  excerpt: Maybe<Scalars['String']>;
  menuOrder: Maybe<Scalars['Int']>;
  password: Maybe<Scalars['String']>;
  pingStatus: Maybe<Scalars['String']>;
  pinged: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats: Maybe<PostPostFormatsInput>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<PostStatusEnum>;
  tags: Maybe<PostTagsInput>;
  title: Maybe<Scalars['String']>;
  toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  clientMutationId: Maybe<Scalars['String']>;
  post: Maybe<Post>;
};

export type CreateTagInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Maybe<Scalars['String']>;
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  clientMutationId: Maybe<Scalars['String']>;
  tag: Maybe<Tag>;
};

export type CreateUserInput = {
  aim: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  displayName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  jabber: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  nicename: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  registered: Maybe<Scalars['String']>;
  richEditing: Maybe<Scalars['String']>;
  roles: Maybe<Array<Maybe<Scalars['String']>>>;
  username: Scalars['String'];
  websiteUrl: Maybe<Scalars['String']>;
  yim: Maybe<Scalars['String']>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId: Maybe<Scalars['String']>;
  user: Maybe<User>;
};

export type DatabaseIdentifier = {
  databaseId: Scalars['Int'];
};

export type DateInput = {
  day: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export type DateQueryInput = {
  after: Maybe<DateInput>;
  before: Maybe<DateInput>;
  column: Maybe<PostObjectsConnectionDateColumnEnum>;
  compare: Maybe<Scalars['String']>;
  day: Maybe<Scalars['Int']>;
  hour: Maybe<Scalars['Int']>;
  inclusive: Maybe<Scalars['Boolean']>;
  minute: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  relation: Maybe<RelationEnum>;
  second: Maybe<Scalars['Int']>;
  week: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  templateName: Maybe<Scalars['String']>;
};

export type DeleteCategoryInput = {
  clientMutationId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  category: Maybe<Category>;
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
};

export type DeleteCommentInput = {
  clientMutationId: Maybe<Scalars['String']>;
  forceDelete: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  clientMutationId: Maybe<Scalars['String']>;
  comment: Maybe<Comment>;
  deletedId: Maybe<Scalars['ID']>;
};

export type DeleteMediaItemInput = {
  clientMutationId: Maybe<Scalars['String']>;
  forceDelete: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  mediaItem: Maybe<MediaItem>;
};

export type DeletePageInput = {
  clientMutationId: Maybe<Scalars['String']>;
  forceDelete: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  page: Maybe<Page>;
};

export type DeletePostFormatInput = {
  clientMutationId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  postFormat: Maybe<PostFormat>;
};

export type DeletePostInput = {
  clientMutationId: Maybe<Scalars['String']>;
  forceDelete: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  post: Maybe<Post>;
};

export type DeleteTagInput = {
  clientMutationId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  tag: Maybe<Tag>;
};

export type DeleteUserInput = {
  clientMutationId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reassignId: Maybe<Scalars['ID']>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId: Maybe<Scalars['String']>;
  deletedId: Maybe<Scalars['ID']>;
  user: Maybe<User>;
};

export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  defaultCommentStatus: Maybe<Scalars['String']>;
  defaultPingStatus: Maybe<Scalars['String']>;
};

export type Edge = {
  cursor: Maybe<Scalars['String']>;
  node: Node;
};

export type EnqueuedAsset = {
  args: Maybe<Scalars['Boolean']>;
  dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type EnqueuedScript = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedScript';
  args: Maybe<Scalars['Boolean']>;
  dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type EnqueuedScriptConnection = {
  edges: Array<EnqueuedScriptConnectionEdge>;
  nodes: Array<EnqueuedScript>;
};

export type EnqueuedScriptConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedScript;
};

export type EnqueuedStylesheet = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedStylesheet';
  args: Maybe<Scalars['Boolean']>;
  dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type EnqueuedStylesheetConnection = {
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  nodes: Array<EnqueuedStylesheet>;
};

export type EnqueuedStylesheetConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedStylesheet;
};

export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  dateFormat: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  startOfWeek: Maybe<Scalars['Int']>;
  timeFormat: Maybe<Scalars['String']>;
  timezone: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type HcmsFooter = {
  __typename?: 'HCMSFooter';
  copyrightText: Maybe<Scalars['String']>;
  sidebarOne: Maybe<Scalars['String']>;
  sidebarTwo: Maybe<Scalars['String']>;
  socialLinks: Maybe<Array<Maybe<HcmsSocialLinks>>>;
};

export type HcmsHeader = {
  __typename?: 'HCMSHeader';
  favicon: Maybe<Scalars['String']>;
  siteLogoUrl: Maybe<Scalars['String']>;
  siteTagLine: Maybe<Scalars['String']>;
  siteTitle: Maybe<Scalars['String']>;
};

export type HcmsSocialLinks = {
  __typename?: 'HCMSSocialLinks';
  iconName: Maybe<Scalars['String']>;
  iconUrl: Maybe<Scalars['String']>;
};

export type HierarchicalContentNode = {
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  contentTypeName: Scalars['String'];
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  desiredSlug: Maybe<Scalars['String']>;
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  guid: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
  seo: Maybe<PostTypeSeo>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  template: Maybe<ContentTemplate>;
  uri: Scalars['String'];
};


export type HierarchicalContentNodeAncestorsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type HierarchicalContentNodeChildrenArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnection = ContentNodeConnection & Connection & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnection = ContentNodeConnection & Connection & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type HierarchicalContentNodeToParentContentNodeConnectionEdge = OneToOneConnection & Edge & ContentNodeConnectionEdge & {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type HierarchicalNode = {
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type HierarchicalTermNode = {
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
  taxonomyName: Maybe<Scalars['String']>;
  termGroupId: Maybe<Scalars['Int']>;
  termTaxonomyId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  file: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  meta: Maybe<MediaItemMeta>;
  sizes: Maybe<Array<Maybe<MediaSize>>>;
  width: Maybe<Scalars['Int']>;
};


export type MediaDetailsSizesArgs = {
  exclude: Maybe<Array<Maybe<MediaItemSizeEnum>>>;
  include: Maybe<Array<Maybe<MediaItemSizeEnum>>>;
};

export type MediaItem = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalContentNode & HierarchicalNode & {
  __typename?: 'MediaItem';
  altText: Maybe<Scalars['String']>;
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId: Maybe<Scalars['Int']>;
  authorId: Maybe<Scalars['ID']>;
  caption: Maybe<Scalars['String']>;
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  commentCount: Maybe<Scalars['Int']>;
  commentStatus: Maybe<Scalars['String']>;
  comments: Maybe<MediaItemToCommentConnection>;
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  contentTypeName: Scalars['String'];
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  desiredSlug: Maybe<Scalars['String']>;
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  fileSize: Maybe<Scalars['Int']>;
  guid: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  mediaDetails: Maybe<MediaDetails>;
  /** @deprecated Deprecated in favor of the databaseId field */
  mediaItemId: Scalars['Int'];
  mediaItemUrl: Maybe<Scalars['String']>;
  mediaType: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
  seo: Maybe<PostTypeSeo>;
  sizes: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  sourceUrl: Maybe<Scalars['String']>;
  srcSet: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  template: Maybe<ContentTemplate>;
  title: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};


export type MediaItemAncestorsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type MediaItemCaptionArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type MediaItemChildrenArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


export type MediaItemCommentsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MediaItemToCommentConnectionWhereArgs>;
};


export type MediaItemDescriptionArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type MediaItemEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type MediaItemEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type MediaItemFileSizeArgs = {
  size: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSizesArgs = {
  size: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSourceUrlArgs = {
  size: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSrcSetArgs = {
  size: Maybe<MediaItemSizeEnum>;
};


export type MediaItemTitleArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type MediaItemConnection = {
  edges: Array<MediaItemConnectionEdge>;
  nodes: Array<MediaItem>;
};

export type MediaItemConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: MediaItem;
};

export enum MediaItemIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  SourceUrl = 'SOURCE_URL',
  Uri = 'URI'
}

export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  aperture: Maybe<Scalars['Float']>;
  camera: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  createdTimestamp: Maybe<Scalars['Int']>;
  credit: Maybe<Scalars['String']>;
  focalLength: Maybe<Scalars['Float']>;
  iso: Maybe<Scalars['Int']>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation: Maybe<Scalars['String']>;
  shutterSpeed: Maybe<Scalars['Float']>;
  title: Maybe<Scalars['String']>;
};

export enum MediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  PostThumbnail = 'POST_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  '1536X1536' = '_1536X1536',
  '2048X2048' = '_2048X2048'
}

export enum MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH'
}

export type MediaItemToCommentConnection = CommentConnection & Connection & {
  __typename?: 'MediaItemToCommentConnection';
  edges: Array<MediaItemToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MediaItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'MediaItemToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type MediaItemToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type MediaSize = {
  __typename?: 'MediaSize';
  file: Maybe<Scalars['String']>;
  fileSize: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['String']>;
  mimeType: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  sourceUrl: Maybe<Scalars['String']>;
  width: Maybe<Scalars['String']>;
};

export type Menu = Node & DatabaseIdentifier & {
  __typename?: 'Menu';
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** @deprecated Deprecated in favor of the databaseId field */
  menuId: Maybe<Scalars['Int']>;
  menuItems: Maybe<MenuToMenuItemConnection>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};


export type MenuMenuItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

export type MenuConnection = {
  edges: Array<MenuConnectionEdge>;
  nodes: Array<Menu>;
};

export type MenuConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Menu;
};

export type MenuItem = Node & DatabaseIdentifier & {
  __typename?: 'MenuItem';
  childItems: Maybe<MenuItemToMenuItemConnection>;
  connectedNode: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /** @deprecated Deprecated in favor of the connectedNode field */
  connectedObject: Maybe<MenuItemObjectUnion>;
  cssClasses: Maybe<Array<Maybe<Scalars['String']>>>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  label: Maybe<Scalars['String']>;
  linkRelationship: Maybe<Scalars['String']>;
  locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
  menu: Maybe<MenuItemToMenuConnectionEdge>;
  /** @deprecated Deprecated in favor of the databaseId field */
  menuItemId: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  path: Maybe<Scalars['String']>;
  target: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  uri: Scalars['String'];
  url: Maybe<Scalars['String']>;
};


export type MenuItemChildItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

export type MenuItemConnection = {
  edges: Array<MenuItemConnectionEdge>;
  nodes: Array<MenuItem>;
};

export type MenuItemConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: MenuItem;
};

export type MenuItemLinkable = {
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isTermNode: Scalars['Boolean'];
  uri: Scalars['String'];
};

export type MenuItemLinkableConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: MenuItemLinkable;
};

export enum MenuItemNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type MenuItemObjectUnion = Post | Page | Category | Tag | PostFormat;

export type MenuItemToMenuConnectionEdge = OneToOneConnection & Edge & MenuConnectionEdge & {
  __typename?: 'MenuItemToMenuConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Menu;
};

export type MenuItemToMenuItemConnection = MenuItemConnection & Connection & {
  __typename?: 'MenuItemToMenuItemConnection';
  edges: Array<MenuItemToMenuItemConnectionEdge>;
  nodes: Array<MenuItem>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MenuItemToMenuItemConnectionEdge = MenuItemConnectionEdge & Edge & {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MenuItem;
};

export type MenuItemToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type MenuItemToMenuItemLinkableConnectionEdge = OneToOneConnection & Edge & MenuItemLinkableConnectionEdge & {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MenuItemLinkable;
};

export enum MenuLocationEnum {
  Footer = 'FOOTER',
  HcmsMenuFooter = 'HCMS_MENU_FOOTER',
  HcmsMenuHeader = 'HCMS_MENU_HEADER',
  Primary = 'PRIMARY'
}

export enum MenuNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Location = 'LOCATION',
  Name = 'NAME',
  Slug = 'SLUG'
}

export type MenuToMenuItemConnection = MenuItemConnection & Connection & {
  __typename?: 'MenuToMenuItemConnection';
  edges: Array<MenuToMenuItemConnectionEdge>;
  nodes: Array<MenuItem>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MenuToMenuItemConnectionEdge = MenuItemConnectionEdge & Edge & {
  __typename?: 'MenuToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MenuItem;
};

export type MenuToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageWebp = 'IMAGE_WEBP',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

export type Node = {
  id: Scalars['ID'];
};

export type NodeWithAuthor = {
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId: Maybe<Scalars['Int']>;
  authorId: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type NodeWithAuthorToUserConnectionEdge = OneToOneConnection & Edge & UserConnectionEdge & {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: User;
};

export type NodeWithComments = {
  commentCount: Maybe<Scalars['Int']>;
  commentStatus: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type NodeWithContentEditor = {
  content: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type NodeWithContentEditorContentArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithExcerpt = {
  excerpt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type NodeWithExcerptExcerptArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithFeaturedImage = {
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId: Maybe<Scalars['Int']>;
  featuredImageId: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};

export type NodeWithFeaturedImageToMediaItemConnectionEdge = OneToOneConnection & Edge & MediaItemConnectionEdge & {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MediaItem;
};

export type NodeWithPageAttributes = {
  id: Scalars['ID'];
  menuOrder: Maybe<Scalars['Int']>;
};

export type NodeWithRevisions = {
  id: Scalars['ID'];
  isRevision: Maybe<Scalars['Boolean']>;
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

export type NodeWithRevisionsToContentNodeConnectionEdge = OneToOneConnection & Edge & ContentNodeConnectionEdge & {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type NodeWithTemplate = {
  id: Scalars['ID'];
  template: Maybe<ContentTemplate>;
};

export type NodeWithTitle = {
  id: Scalars['ID'];
  seo: Maybe<PostTypeSeo>;
  title: Maybe<Scalars['String']>;
};


export type NodeWithTitleTitleArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithTrackbacks = {
  id: Scalars['ID'];
  pingStatus: Maybe<Scalars['String']>;
  pinged: Maybe<Array<Maybe<Scalars['String']>>>;
  toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OneToOneConnection = {
  cursor: Maybe<Scalars['String']>;
  node: Node;
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Page = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & Previewable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & {
  __typename?: 'Page';
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId: Maybe<Scalars['Int']>;
  authorId: Maybe<Scalars['ID']>;
  bodyClasses: Maybe<Scalars['String']>;
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  commentCount: Maybe<Scalars['Int']>;
  commentStatus: Maybe<Scalars['String']>;
  comments: Maybe<PageToCommentConnection>;
  content: Maybe<Scalars['String']>;
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  contentTypeName: Scalars['String'];
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  desiredSlug: Maybe<Scalars['String']>;
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId: Maybe<Scalars['Int']>;
  featuredImageId: Maybe<Scalars['ID']>;
  guid: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isPrivacyPage: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isRevision: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  menuOrder: Maybe<Scalars['Int']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of the databaseId field */
  pageId: Scalars['Int'];
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  preview: Maybe<PageToPreviewConnectionEdge>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  revisions: Maybe<PageToRevisionConnection>;
  seo: Maybe<PostTypeSeo>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  template: Maybe<ContentTemplate>;
  title: Maybe<Scalars['String']>;
  uri: Scalars['String'];
};


export type PageAncestorsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type PageChildrenArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


export type PageCommentsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PageToCommentConnectionWhereArgs>;
};


export type PageContentArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type PageEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PageEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PageRevisionsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PageToRevisionConnectionWhereArgs>;
};


export type PageTitleArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type PageConnection = {
  edges: Array<PageConnectionEdge>;
  nodes: Array<Page>;
};

export type PageConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Page;
};

export enum PageIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export type PageToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PageToCommentConnection';
  edges: Array<PageToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PageToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PageToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type PageToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type PageToPreviewConnectionEdge = OneToOneConnection & Edge & PageConnectionEdge & {
  __typename?: 'PageToPreviewConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Page;
};

export type PageToRevisionConnection = PageConnection & Connection & {
  __typename?: 'PageToRevisionConnection';
  edges: Array<PageToRevisionConnectionEdge>;
  nodes: Array<Page>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PageToRevisionConnectionEdge = PageConnectionEdge & Edge & {
  __typename?: 'PageToRevisionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Page;
};

export type PageToRevisionConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type Plugin = Node & {
  __typename?: 'Plugin';
  author: Maybe<Scalars['String']>;
  authoruri: Scalars['String'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  pluginuri: Scalars['String'];
  version: Maybe<Scalars['String']>;
};

export type PluginConnection = {
  edges: Array<PluginConnectionEdge>;
  nodes: Array<Plugin>;
};

export type PluginConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Plugin;
};

export enum PluginStatusEnum {
  Active = 'ACTIVE',
  DropIn = 'DROP_IN',
  Inactive = 'INACTIVE',
  MustUse = 'MUST_USE',
  Paused = 'PAUSED',
  RecentlyActive = 'RECENTLY_ACTIVE',
  Upgrade = 'UPGRADE'
}

export type Post = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & Previewable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable & {
  __typename?: 'Post';
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId: Maybe<Scalars['Int']>;
  authorId: Maybe<Scalars['ID']>;
  bodyClasses: Maybe<Scalars['String']>;
  categories: Maybe<PostToCategoryConnection>;
  coAuthors: Maybe<Scalars['String']>;
  commentCount: Maybe<Scalars['Int']>;
  commentStatus: Maybe<Scalars['String']>;
  comments: Maybe<PostToCommentConnection>;
  content: Maybe<Scalars['String']>;
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  contentTypeName: Scalars['String'];
  databaseId: Scalars['Int'];
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  desiredSlug: Maybe<Scalars['String']>;
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  excerpt: Maybe<Scalars['String']>;
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId: Maybe<Scalars['Int']>;
  featuredImageId: Maybe<Scalars['ID']>;
  guid: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  isRevision: Maybe<Scalars['Boolean']>;
  isSticky: Scalars['Boolean'];
  isTermNode: Scalars['Boolean'];
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  pingStatus: Maybe<Scalars['String']>;
  pinged: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats: Maybe<PostToPostFormatConnection>;
  /** @deprecated Deprecated in favor of the databaseId field */
  postId: Scalars['Int'];
  preview: Maybe<PostToPreviewConnectionEdge>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  revisions: Maybe<PostToRevisionConnection>;
  seo: Maybe<PostTypeSeo>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  tags: Maybe<PostToTagConnection>;
  template: Maybe<ContentTemplate>;
  terms: Maybe<PostToTermNodeConnection>;
  title: Maybe<Scalars['String']>;
  toPing: Maybe<Array<Maybe<Scalars['String']>>>;
  uri: Scalars['String'];
};


export type PostCategoriesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToCategoryConnectionWhereArgs>;
};


export type PostCommentsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToCommentConnectionWhereArgs>;
};


export type PostContentArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type PostEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PostEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PostExcerptArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};


export type PostPostFormatsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToPostFormatConnectionWhereArgs>;
};


export type PostRevisionsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToRevisionConnectionWhereArgs>;
};


export type PostTagsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToTagConnectionWhereArgs>;
};


export type PostTermsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostToTermNodeConnectionWhereArgs>;
};


export type PostTitleArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type PostCategoriesInput = {
  append: Maybe<Scalars['Boolean']>;
  nodes: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

export type PostCategoriesNodeInput = {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type PostConnection = {
  edges: Array<PostConnectionEdge>;
  nodes: Array<Post>;
};

export type PostConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type PostFormat = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable & {
  __typename?: 'PostFormat';
  contentNodes: Maybe<PostFormatToContentNodeConnection>;
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  postFormatId: Maybe<Scalars['Int']>;
  posts: Maybe<PostFormatToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
  taxonomyName: Maybe<Scalars['String']>;
  termGroupId: Maybe<Scalars['Int']>;
  termTaxonomyId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type PostFormatContentNodesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};


export type PostFormatEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PostFormatEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type PostFormatPostsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<PostFormatToPostConnectionWhereArgs>;
};

export type PostFormatConnection = {
  edges: Array<PostFormatConnectionEdge>;
  nodes: Array<PostFormat>;
};

export type PostFormatConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: PostFormat;
};

export enum PostFormatIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PostFormatToContentNodeConnection = ContentNodeConnection & Connection & {
  __typename?: 'PostFormatToContentNodeConnection';
  edges: Array<PostFormatToContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type PostFormatToContentNodeConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypesOfPostFormatEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type PostFormatToPostConnection = PostConnection & Connection & {
  __typename?: 'PostFormatToPostConnection';
  edges: Array<PostFormatToPostConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostFormatToPostConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'PostFormatToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type PostFormatToPostConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type PostFormatToTaxonomyConnectionEdge = OneToOneConnection & Edge & TaxonomyConnectionEdge & {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export enum PostIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export enum PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED'
}

export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

export enum PostObjectsConnectionOrderbyEnum {
  Author = 'AUTHOR',
  CommentCount = 'COMMENT_COUNT',
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Title = 'TITLE'
}

export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum;
  order: OrderEnum;
};

export type PostPostFormatsInput = {
  append: Maybe<Scalars['Boolean']>;
  nodes: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

export type PostPostFormatsNodeInput = {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export enum PostStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Draft = 'DRAFT',
  Future = 'FUTURE',
  Inherit = 'INHERIT',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  RequestCompleted = 'REQUEST_COMPLETED',
  RequestConfirmed = 'REQUEST_CONFIRMED',
  RequestFailed = 'REQUEST_FAILED',
  RequestPending = 'REQUEST_PENDING',
  Trash = 'TRASH'
}

export type PostTagsInput = {
  append: Maybe<Scalars['Boolean']>;
  nodes: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

export type PostTagsNodeInput = {
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['ID']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type PostToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'PostToCategoryConnection';
  edges: Array<PostToCategoryConnectionEdge>;
  nodes: Array<Category>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'PostToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  isPrimary: Maybe<Scalars['Boolean']>;
  node: Category;
};

export type PostToCategoryConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PostToCommentConnection';
  edges: Array<PostToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PostToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type PostToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type PostToPostFormatConnection = PostFormatConnection & Connection & {
  __typename?: 'PostToPostFormatConnection';
  edges: Array<PostToPostFormatConnectionEdge>;
  nodes: Array<PostFormat>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToPostFormatConnectionEdge = PostFormatConnectionEdge & Edge & {
  __typename?: 'PostToPostFormatConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  isPrimary: Maybe<Scalars['Boolean']>;
  node: PostFormat;
};

export type PostToPostFormatConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToPreviewConnectionEdge = OneToOneConnection & Edge & PostConnectionEdge & {
  __typename?: 'PostToPreviewConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type PostToRevisionConnection = PostConnection & Connection & {
  __typename?: 'PostToRevisionConnection';
  edges: Array<PostToRevisionConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToRevisionConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'PostToRevisionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type PostToRevisionConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type PostToTagConnection = TagConnection & Connection & {
  __typename?: 'PostToTagConnection';
  edges: Array<PostToTagConnectionEdge>;
  nodes: Array<Tag>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToTagConnectionEdge = TagConnectionEdge & Edge & {
  __typename?: 'PostToTagConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  isPrimary: Maybe<Scalars['Boolean']>;
  node: Tag;
};

export type PostToTagConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToTermNodeConnection = TermNodeConnection & Connection & {
  __typename?: 'PostToTermNodeConnection';
  edges: Array<PostToTermNodeConnectionEdge>;
  nodes: Array<TermNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToTermNodeConnectionEdge = TermNodeConnectionEdge & Edge & {
  __typename?: 'PostToTermNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: TermNode;
};

export type PostToTermNodeConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  addNew: Maybe<Scalars['String']>;
  addNewItem: Maybe<Scalars['String']>;
  allItems: Maybe<Scalars['String']>;
  archives: Maybe<Scalars['String']>;
  attributes: Maybe<Scalars['String']>;
  editItem: Maybe<Scalars['String']>;
  featuredImage: Maybe<Scalars['String']>;
  filterItemsList: Maybe<Scalars['String']>;
  insertIntoItem: Maybe<Scalars['String']>;
  itemsList: Maybe<Scalars['String']>;
  itemsListNavigation: Maybe<Scalars['String']>;
  menuName: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  newItem: Maybe<Scalars['String']>;
  notFound: Maybe<Scalars['String']>;
  notFoundInTrash: Maybe<Scalars['String']>;
  parentItemColon: Maybe<Scalars['String']>;
  removeFeaturedImage: Maybe<Scalars['String']>;
  searchItems: Maybe<Scalars['String']>;
  setFeaturedImage: Maybe<Scalars['String']>;
  singularName: Maybe<Scalars['String']>;
  uploadedToThisItem: Maybe<Scalars['String']>;
  useFeaturedImage: Maybe<Scalars['String']>;
  viewItem: Maybe<Scalars['String']>;
  viewItems: Maybe<Scalars['String']>;
};

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical: Maybe<Scalars['String']>;
  cornerstone: Maybe<Scalars['Boolean']>;
  focuskw: Maybe<Scalars['String']>;
  fullHead: Maybe<Scalars['String']>;
  metaDesc: Maybe<Scalars['String']>;
  metaKeywords: Maybe<Scalars['String']>;
  metaRobotsNofollow: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['String']>;
  opengraphAuthor: Maybe<Scalars['String']>;
  opengraphDescription: Maybe<Scalars['String']>;
  opengraphImage: Maybe<MediaItem>;
  opengraphModifiedTime: Maybe<Scalars['String']>;
  opengraphPublishedTime: Maybe<Scalars['String']>;
  opengraphPublisher: Maybe<Scalars['String']>;
  opengraphSiteName: Maybe<Scalars['String']>;
  opengraphTitle: Maybe<Scalars['String']>;
  opengraphType: Maybe<Scalars['String']>;
  opengraphUrl: Maybe<Scalars['String']>;
  readingTime: Maybe<Scalars['Float']>;
  schema: Maybe<SeoPostTypeSchema>;
  schemaDetails: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  twitterDescription: Maybe<Scalars['String']>;
  twitterImage: Maybe<MediaItem>;
  twitterTitle: Maybe<Scalars['String']>;
};

export type Previewable = {
  isPreview: Maybe<Scalars['Boolean']>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
};

export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  pageForPosts: Maybe<Scalars['Int']>;
  pageOnFront: Maybe<Scalars['Int']>;
  postsPerPage: Maybe<Scalars['Int']>;
  showOnFront: Maybe<Scalars['String']>;
};

export type RegisterUserInput = {
  aim: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  displayName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  jabber: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  nicename: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  registered: Maybe<Scalars['String']>;
  richEditing: Maybe<Scalars['String']>;
  username: Scalars['String'];
  websiteUrl: Maybe<Scalars['String']>;
  yim: Maybe<Scalars['String']>;
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  clientMutationId: Maybe<Scalars['String']>;
  user: Maybe<User>;
};

export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

export type RemoveFromWishlistInput = {
  clientMutationId: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['Int']>;
};

export type RemoveFromWishlistPayload = {
  __typename?: 'RemoveFromWishlistPayload';
  clientMutationId: Maybe<Scalars['String']>;
  error: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['Int']>;
  removed: Maybe<Scalars['Boolean']>;
  wishlistProductIds: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ResetUserPasswordInput = {
  clientMutationId: Maybe<Scalars['String']>;
  key: Maybe<Scalars['String']>;
  login: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
};

export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  clientMutationId: Maybe<Scalars['String']>;
  user: Maybe<User>;
};

export type RestoreCommentInput = {
  clientMutationId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  clientMutationId: Maybe<Scalars['String']>;
  comment: Maybe<Comment>;
  restoredId: Maybe<Scalars['ID']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  addToWishlist: Maybe<AddToWishlistPayload>;
  createCategory: Maybe<CreateCategoryPayload>;
  createComment: Maybe<CreateCommentPayload>;
  createMediaItem: Maybe<CreateMediaItemPayload>;
  createPage: Maybe<CreatePagePayload>;
  createPost: Maybe<CreatePostPayload>;
  createPostFormat: Maybe<CreatePostFormatPayload>;
  createTag: Maybe<CreateTagPayload>;
  createUser: Maybe<CreateUserPayload>;
  deleteCategory: Maybe<DeleteCategoryPayload>;
  deleteComment: Maybe<DeleteCommentPayload>;
  deleteMediaItem: Maybe<DeleteMediaItemPayload>;
  deletePage: Maybe<DeletePagePayload>;
  deletePost: Maybe<DeletePostPayload>;
  deletePostFormat: Maybe<DeletePostFormatPayload>;
  deleteTag: Maybe<DeleteTagPayload>;
  deleteUser: Maybe<DeleteUserPayload>;
  increaseCount: Maybe<Scalars['Int']>;
  registerUser: Maybe<RegisterUserPayload>;
  removeFromWishlist: Maybe<RemoveFromWishlistPayload>;
  resetUserPassword: Maybe<ResetUserPasswordPayload>;
  restoreComment: Maybe<RestoreCommentPayload>;
  sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
  updateCategory: Maybe<UpdateCategoryPayload>;
  updateComment: Maybe<UpdateCommentPayload>;
  updateMediaItem: Maybe<UpdateMediaItemPayload>;
  updatePage: Maybe<UpdatePagePayload>;
  updatePost: Maybe<UpdatePostPayload>;
  updatePostFormat: Maybe<UpdatePostFormatPayload>;
  updateSettings: Maybe<UpdateSettingsPayload>;
  updateTag: Maybe<UpdateTagPayload>;
  updateUser: Maybe<UpdateUserPayload>;
};


export type RootMutationAddToWishlistArgs = {
  input: AddToWishlistInput;
};


export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type RootMutationIncreaseCountArgs = {
  count: Maybe<Scalars['Int']>;
};


export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type RootMutationRemoveFromWishlistArgs = {
  input: RemoveFromWishlistInput;
};


export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  allSettings: Maybe<Settings>;
  categories: Maybe<RootQueryToCategoryConnection>;
  category: Maybe<Category>;
  comment: Maybe<Comment>;
  comments: Maybe<RootQueryToCommentConnection>;
  contentNode: Maybe<ContentNode>;
  contentNodes: Maybe<RootQueryToContentNodeConnection>;
  contentType: Maybe<ContentType>;
  contentTypes: Maybe<RootQueryToContentTypeConnection>;
  discussionSettings: Maybe<DiscussionSettings>;
  generalSettings: Maybe<GeneralSettings>;
  getFooter: Maybe<HcmsFooter>;
  getHeader: Maybe<HcmsHeader>;
  mediaItem: Maybe<MediaItem>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  mediaItemBy: Maybe<MediaItem>;
  mediaItems: Maybe<RootQueryToMediaItemConnection>;
  menu: Maybe<Menu>;
  menuItem: Maybe<MenuItem>;
  menuItems: Maybe<RootQueryToMenuItemConnection>;
  menus: Maybe<RootQueryToMenuConnection>;
  node: Maybe<Node>;
  nodeByUri: Maybe<UniformResourceIdentifiable>;
  page: Maybe<Page>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  pageBy: Maybe<Page>;
  pages: Maybe<RootQueryToPageConnection>;
  plugin: Maybe<Plugin>;
  plugins: Maybe<RootQueryToPluginConnection>;
  post: Maybe<Post>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  postBy: Maybe<Post>;
  postFormat: Maybe<PostFormat>;
  postFormats: Maybe<RootQueryToPostFormatConnection>;
  posts: Maybe<RootQueryToPostConnection>;
  readingSettings: Maybe<ReadingSettings>;
  registeredScripts: Maybe<RootQueryToEnqueuedScriptConnection>;
  registeredStylesheets: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  revisions: Maybe<RootQueryToRevisionsConnection>;
  seo: Maybe<SeoConfig>;
  shippingInfo: Maybe<ShippingInfo>;
  tag: Maybe<Tag>;
  tags: Maybe<RootQueryToTagConnection>;
  taxonomies: Maybe<RootQueryToTaxonomyConnection>;
  taxonomy: Maybe<Taxonomy>;
  termNode: Maybe<TermNode>;
  terms: Maybe<RootQueryToTermNodeConnection>;
  theme: Maybe<Theme>;
  themes: Maybe<RootQueryToThemeConnection>;
  user: Maybe<User>;
  userRole: Maybe<UserRole>;
  userRoles: Maybe<RootQueryToUserRoleConnection>;
  users: Maybe<RootQueryToUserConnection>;
  viewer: Maybe<User>;
  wooCountries: Maybe<WooCountries>;
  wooStates: Maybe<WooStates>;
  writingSettings: Maybe<WritingSettings>;
};


export type RootQueryCategoriesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType: Maybe<CategoryIdType>;
};


export type RootQueryCommentArgs = {
  id: Scalars['ID'];
  idType: Maybe<CommentNodeIdTypeEnum>;
};


export type RootQueryCommentsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToCommentConnectionWhereArgs>;
};


export type RootQueryContentNodeArgs = {
  id: Scalars['ID'];
  idType: Maybe<ContentNodeIdTypeEnum>;
  contentType: Maybe<ContentTypeEnum>;
  asPreview: Maybe<Scalars['Boolean']>;
};


export type RootQueryContentNodesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};


export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType: Maybe<ContentTypeIdTypeEnum>;
};


export type RootQueryContentTypesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
  idType: Maybe<MediaItemIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
};


export type RootQueryMediaItemByArgs = {
  id: Maybe<Scalars['ID']>;
  mediaItemId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  slug: Maybe<Scalars['String']>;
};


export type RootQueryMediaItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};


export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType: Maybe<MenuNodeIdTypeEnum>;
};


export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType: Maybe<MenuItemNodeIdTypeEnum>;
};


export type RootQueryMenuItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};


export type RootQueryMenusArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToMenuConnectionWhereArgs>;
};


export type RootQueryNodeArgs = {
  id: Maybe<Scalars['ID']>;
};


export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


export type RootQueryPageArgs = {
  id: Scalars['ID'];
  idType: Maybe<PageIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
};


export type RootQueryPageByArgs = {
  id: Maybe<Scalars['ID']>;
  pageId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type RootQueryPagesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPageConnectionWhereArgs>;
};


export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


export type RootQueryPluginsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPluginConnectionWhereArgs>;
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType: Maybe<PostIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
};


export type RootQueryPostByArgs = {
  id: Maybe<Scalars['ID']>;
  postId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
  slug: Maybe<Scalars['String']>;
};


export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType: Maybe<PostFormatIdType>;
};


export type RootQueryPostFormatsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};


export type RootQueryPostsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToPostConnectionWhereArgs>;
};


export type RootQueryRegisteredScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryRegisteredStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryRevisionsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToRevisionsConnectionWhereArgs>;
};


export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType: Maybe<TagIdType>;
};


export type RootQueryTagsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToTagConnectionWhereArgs>;
};


export type RootQueryTaxonomiesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType: Maybe<TaxonomyIdTypeEnum>;
};


export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType: Maybe<TermNodeIdTypeEnum>;
  taxonomy: Maybe<TaxonomyEnum>;
};


export type RootQueryTermsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};


export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


export type RootQueryThemesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType: Maybe<UserNodeIdTypeEnum>;
};


export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


export type RootQueryUserRolesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type RootQueryUsersArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<RootQueryToUserConnectionWhereArgs>;
};


export type RootQueryWooStatesArgs = {
  countryCode: Maybe<Scalars['String']>;
};

export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'RootQueryToCategoryConnection';
  edges: Array<RootQueryToCategoryConnectionEdge>;
  nodes: Array<Category>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Category;
};

export type RootQueryToCategoryConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToCommentConnection = CommentConnection & Connection & {
  __typename?: 'RootQueryToCommentConnection';
  edges: Array<RootQueryToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'RootQueryToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type RootQueryToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type RootQueryToContentNodeConnection = ContentNodeConnection & Connection & {
  __typename?: 'RootQueryToContentNodeConnection';
  edges: Array<RootQueryToContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type RootQueryToContentNodeConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type RootQueryToContentTypeConnection = ContentTypeConnection & Connection & {
  __typename?: 'RootQueryToContentTypeConnection';
  edges: Array<RootQueryToContentTypeConnectionEdge>;
  nodes: Array<ContentType>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentType;
};

export type RootQueryToEnqueuedScriptConnection = EnqueuedScriptConnection & Connection & {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
  nodes: Array<EnqueuedScript>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedScriptConnectionEdge = EnqueuedScriptConnectionEdge & Edge & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedScript;
};

export type RootQueryToEnqueuedStylesheetConnection = EnqueuedStylesheetConnection & Connection & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
  nodes: Array<EnqueuedStylesheet>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedStylesheetConnectionEdge = EnqueuedStylesheetConnectionEdge & Edge & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedStylesheet;
};

export type RootQueryToMediaItemConnection = MediaItemConnection & Connection & {
  __typename?: 'RootQueryToMediaItemConnection';
  edges: Array<RootQueryToMediaItemConnectionEdge>;
  nodes: Array<MediaItem>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMediaItemConnectionEdge = MediaItemConnectionEdge & Edge & {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MediaItem;
};

export type RootQueryToMediaItemConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type RootQueryToMenuConnection = MenuConnection & Connection & {
  __typename?: 'RootQueryToMenuConnection';
  edges: Array<RootQueryToMenuConnectionEdge>;
  nodes: Array<Menu>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMenuConnectionEdge = MenuConnectionEdge & Edge & {
  __typename?: 'RootQueryToMenuConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Menu;
};

export type RootQueryToMenuConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  slug: Maybe<Scalars['String']>;
};

export type RootQueryToMenuItemConnection = MenuItemConnection & Connection & {
  __typename?: 'RootQueryToMenuItemConnection';
  edges: Array<RootQueryToMenuItemConnectionEdge>;
  nodes: Array<MenuItem>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMenuItemConnectionEdge = MenuItemConnectionEdge & Edge & {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MenuItem;
};

export type RootQueryToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type RootQueryToPageConnection = PageConnection & Connection & {
  __typename?: 'RootQueryToPageConnection';
  edges: Array<RootQueryToPageConnectionEdge>;
  nodes: Array<Page>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPageConnectionEdge = PageConnectionEdge & Edge & {
  __typename?: 'RootQueryToPageConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Page;
};

export type RootQueryToPageConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type RootQueryToPluginConnection = PluginConnection & Connection & {
  __typename?: 'RootQueryToPluginConnection';
  edges: Array<RootQueryToPluginConnectionEdge>;
  nodes: Array<Plugin>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPluginConnectionEdge = PluginConnectionEdge & Edge & {
  __typename?: 'RootQueryToPluginConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Plugin;
};

export type RootQueryToPluginConnectionWhereArgs = {
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PluginStatusEnum>>>;
  status: Maybe<PluginStatusEnum>;
};

export type RootQueryToPostConnection = PostConnection & Connection & {
  __typename?: 'RootQueryToPostConnection';
  edges: Array<RootQueryToPostConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPostConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'RootQueryToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type RootQueryToPostConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  onlySticky: Maybe<Scalars['Boolean']>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type RootQueryToPostFormatConnection = PostFormatConnection & Connection & {
  __typename?: 'RootQueryToPostFormatConnection';
  edges: Array<RootQueryToPostFormatConnectionEdge>;
  nodes: Array<PostFormat>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPostFormatConnectionEdge = PostFormatConnectionEdge & Edge & {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: PostFormat;
};

export type RootQueryToPostFormatConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToRevisionsConnection = ContentNodeConnection & Connection & {
  __typename?: 'RootQueryToRevisionsConnection';
  edges: Array<RootQueryToRevisionsConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToRevisionsConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type RootQueryToRevisionsConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type RootQueryToTagConnection = TagConnection & Connection & {
  __typename?: 'RootQueryToTagConnection';
  edges: Array<RootQueryToTagConnectionEdge>;
  nodes: Array<Tag>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTagConnectionEdge = TagConnectionEdge & Edge & {
  __typename?: 'RootQueryToTagConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Tag;
};

export type RootQueryToTagConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToTaxonomyConnection = TaxonomyConnection & Connection & {
  __typename?: 'RootQueryToTaxonomyConnection';
  edges: Array<RootQueryToTaxonomyConnectionEdge>;
  nodes: Array<Taxonomy>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTaxonomyConnectionEdge = TaxonomyConnectionEdge & Edge & {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export type RootQueryToTermNodeConnection = TermNodeConnection & Connection & {
  __typename?: 'RootQueryToTermNodeConnection';
  edges: Array<RootQueryToTermNodeConnectionEdge>;
  nodes: Array<TermNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTermNodeConnectionEdge = TermNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: TermNode;
};

export type RootQueryToTermNodeConnectionWhereArgs = {
  cacheDomain: Maybe<Scalars['String']>;
  childOf: Maybe<Scalars['Int']>;
  childless: Maybe<Scalars['Boolean']>;
  descriptionLike: Maybe<Scalars['String']>;
  exclude: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty: Maybe<Scalars['Boolean']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  include: Maybe<Array<Maybe<Scalars['ID']>>>;
  name: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike: Maybe<Scalars['String']>;
  objectIds: Maybe<Array<Maybe<Scalars['ID']>>>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  termTaxonomyId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToThemeConnection = ThemeConnection & Connection & {
  __typename?: 'RootQueryToThemeConnection';
  edges: Array<RootQueryToThemeConnectionEdge>;
  nodes: Array<Theme>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToThemeConnectionEdge = ThemeConnectionEdge & Edge & {
  __typename?: 'RootQueryToThemeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Theme;
};

export type RootQueryToUserConnection = UserConnection & Connection & {
  __typename?: 'RootQueryToUserConnection';
  edges: Array<RootQueryToUserConnectionEdge>;
  nodes: Array<User>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToUserConnectionEdge = UserConnectionEdge & Edge & {
  __typename?: 'RootQueryToUserConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: User;
};

export type RootQueryToUserConnectionWhereArgs = {
  exclude: Maybe<Array<Maybe<Scalars['Int']>>>;
  hasPublishedPosts: Maybe<Array<Maybe<ContentTypeEnum>>>;
  include: Maybe<Array<Maybe<Scalars['Int']>>>;
  login: Maybe<Scalars['String']>;
  loginIn: Maybe<Array<Maybe<Scalars['String']>>>;
  loginNotIn: Maybe<Array<Maybe<Scalars['String']>>>;
  nicename: Maybe<Scalars['String']>;
  nicenameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  nicenameNotIn: Maybe<Array<Maybe<Scalars['String']>>>;
  orderby: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
  role: Maybe<UserRoleEnum>;
  roleIn: Maybe<Array<Maybe<UserRoleEnum>>>;
  roleNotIn: Maybe<Array<Maybe<UserRoleEnum>>>;
  search: Maybe<Scalars['String']>;
  searchColumns: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

export type RootQueryToUserRoleConnection = UserRoleConnection & Connection & {
  __typename?: 'RootQueryToUserRoleConnection';
  edges: Array<RootQueryToUserRoleConnectionEdge>;
  nodes: Array<UserRole>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToUserRoleConnectionEdge = UserRoleConnectionEdge & Edge & {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: UserRole;
};

export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  archivePrefix: Maybe<Scalars['String']>;
  boldLast: Maybe<Scalars['Boolean']>;
  enabled: Maybe<Scalars['Boolean']>;
  homeText: Maybe<Scalars['String']>;
  notFoundText: Maybe<Scalars['String']>;
  prefix: Maybe<Scalars['String']>;
  searchPrefix: Maybe<Scalars['String']>;
  separator: Maybe<Scalars['String']>;
  showBlogPage: Maybe<Scalars['Boolean']>;
};

export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SeoConfig = {
  __typename?: 'SEOConfig';
  breadcrumbs: Maybe<SeoBreadcrumbs>;
  contentTypes: Maybe<SeoContentTypes>;
  openGraph: Maybe<SeoOpenGraph>;
  redirects: Maybe<Array<Maybe<SeoRedirect>>>;
  schema: Maybe<SeoSchema>;
  social: Maybe<SeoSocial>;
  webmaster: Maybe<SeoWebmaster>;
};

export type SeoContentType = {
  __typename?: 'SEOContentType';
  archive: Maybe<SeoContentTypeArchive>;
  metaDesc: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['Boolean']>;
  schema: Maybe<SeoPageInfoSchema>;
  schemaType: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
};

export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive';
  archiveLink: Maybe<Scalars['String']>;
  breadcrumbTitle: Maybe<Scalars['String']>;
  fullHead: Maybe<Scalars['String']>;
  hasArchive: Maybe<Scalars['Boolean']>;
  metaDesc: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['Boolean']>;
  title: Maybe<Scalars['String']>;
};

export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  mediaItem: Maybe<SeoContentType>;
  page: Maybe<SeoContentType>;
  post: Maybe<SeoContentType>;
};

export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  defaultImage: Maybe<MediaItem>;
  frontPage: Maybe<SeoOpenGraphFrontPage>;
};

export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  description: Maybe<Scalars['String']>;
  image: Maybe<MediaItem>;
  title: Maybe<Scalars['String']>;
};

export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema';
  raw: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  text: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo';
  schema: Maybe<SeoPageInfoSchema>;
};

export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  articleType: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType: Maybe<Array<Maybe<Scalars['String']>>>;
  raw: Maybe<Scalars['String']>;
};

export type SeoRedirect = {
  __typename?: 'SEORedirect';
  format: Maybe<Scalars['String']>;
  origin: Maybe<Scalars['String']>;
  target: Maybe<Scalars['String']>;
  type: Maybe<Scalars['Int']>;
};

export type SeoSchema = {
  __typename?: 'SEOSchema';
  companyLogo: Maybe<MediaItem>;
  companyName: Maybe<Scalars['String']>;
  companyOrPerson: Maybe<Scalars['String']>;
  homeUrl: Maybe<Scalars['String']>;
  inLanguage: Maybe<Scalars['String']>;
  logo: Maybe<MediaItem>;
  personLogo: Maybe<MediaItem>;
  personName: Maybe<Scalars['String']>;
  siteName: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  wordpressSiteName: Maybe<Scalars['String']>;
};

export type SeoSocial = {
  __typename?: 'SEOSocial';
  facebook: Maybe<SeoSocialFacebook>;
  instagram: Maybe<SeoSocialInstagram>;
  linkedIn: Maybe<SeoSocialLinkedIn>;
  mySpace: Maybe<SeoSocialMySpace>;
  pinterest: Maybe<SeoSocialPinterest>;
  twitter: Maybe<SeoSocialTwitter>;
  wikipedia: Maybe<SeoSocialWikipedia>;
  youTube: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  defaultImage: Maybe<MediaItem>;
  url: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  url: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  url: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  url: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  metaTag: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  cardType: Maybe<SeoCardType>;
  username: Maybe<Scalars['String']>;
};

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  url: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  url: Maybe<Scalars['String']>;
};

export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema';
  raw: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  breadcrumbTitle: Maybe<Scalars['String']>;
  canonical: Maybe<Scalars['String']>;
  fullHead: Maybe<Scalars['String']>;
  language: Maybe<Scalars['String']>;
  metaDesc: Maybe<Scalars['String']>;
  metaRobotsNofollow: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['String']>;
  opengraphDescription: Maybe<Scalars['String']>;
  opengraphImage: Maybe<MediaItem>;
  opengraphTitle: Maybe<Scalars['String']>;
  region: Maybe<Scalars['String']>;
  schema: Maybe<SeoUserSchema>;
  social: Maybe<SeoUserSocial>;
  title: Maybe<Scalars['String']>;
  twitterDescription: Maybe<Scalars['String']>;
  twitterImage: Maybe<MediaItem>;
  twitterTitle: Maybe<Scalars['String']>;
};

export type SeoUserSchema = {
  __typename?: 'SEOUserSchema';
  articleType: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType: Maybe<Array<Maybe<Scalars['String']>>>;
  raw: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  facebook: Maybe<Scalars['String']>;
  instagram: Maybe<Scalars['String']>;
  linkedIn: Maybe<Scalars['String']>;
  mySpace: Maybe<Scalars['String']>;
  pinterest: Maybe<Scalars['String']>;
  soundCloud: Maybe<Scalars['String']>;
  twitter: Maybe<Scalars['String']>;
  wikipedia: Maybe<Scalars['String']>;
  youTube: Maybe<Scalars['String']>;
};

export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  baiduVerify: Maybe<Scalars['String']>;
  googleVerify: Maybe<Scalars['String']>;
  msVerify: Maybe<Scalars['String']>;
  yandexVerify: Maybe<Scalars['String']>;
};

export type SendPasswordResetEmailInput = {
  clientMutationId: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  clientMutationId: Maybe<Scalars['String']>;
  success: Maybe<Scalars['Boolean']>;
  /** @deprecated This field will be removed in a future version of WPGraphQL */
  user: Maybe<User>;
};

export type Settings = {
  __typename?: 'Settings';
  discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  generalSettingsDateFormat: Maybe<Scalars['String']>;
  generalSettingsDescription: Maybe<Scalars['String']>;
  generalSettingsEmail: Maybe<Scalars['String']>;
  generalSettingsLanguage: Maybe<Scalars['String']>;
  generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  generalSettingsTimeFormat: Maybe<Scalars['String']>;
  generalSettingsTimezone: Maybe<Scalars['String']>;
  generalSettingsTitle: Maybe<Scalars['String']>;
  generalSettingsUrl: Maybe<Scalars['String']>;
  readingSettingsPageForPosts: Maybe<Scalars['Int']>;
  readingSettingsPageOnFront: Maybe<Scalars['Int']>;
  readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  readingSettingsShowOnFront: Maybe<Scalars['String']>;
  writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

export type ShippingInfo = {
  __typename?: 'ShippingInfo';
  shippingZones: Maybe<Scalars['String']>;
  storePostCode: Maybe<Scalars['Int']>;
};

export type Tag = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable & {
  __typename?: 'Tag';
  contentNodes: Maybe<TagToContentNodeConnection>;
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  posts: Maybe<TagToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  tagId: Maybe<Scalars['Int']>;
  taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
  taxonomyName: Maybe<Scalars['String']>;
  termGroupId: Maybe<Scalars['Int']>;
  termTaxonomyId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type TagContentNodesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<TagToContentNodeConnectionWhereArgs>;
};


export type TagEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type TagEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<TagToPostConnectionWhereArgs>;
};

export type TagConnection = {
  edges: Array<TagConnectionEdge>;
  nodes: Array<Tag>;
};

export type TagConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Tag;
};

export enum TagIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TagToContentNodeConnection = ContentNodeConnection & Connection & {
  __typename?: 'TagToContentNodeConnection';
  edges: Array<TagToContentNodeConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'TagToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type TagToContentNodeConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypesOfTagEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type TagToPostConnection = PostConnection & Connection & {
  __typename?: 'TagToPostConnection';
  edges: Array<TagToPostConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TagToPostConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'TagToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type TagToPostConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type TagToTaxonomyConnectionEdge = OneToOneConnection & Edge & TaxonomyConnectionEdge & {
  __typename?: 'TagToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  connectedContentTypes: Maybe<TaxonomyToContentTypeConnection>;
  description: Maybe<Scalars['String']>;
  graphqlPluralName: Maybe<Scalars['String']>;
  graphqlSingleName: Maybe<Scalars['String']>;
  hierarchical: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  label: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  public: Maybe<Scalars['Boolean']>;
  restBase: Maybe<Scalars['String']>;
  restControllerClass: Maybe<Scalars['String']>;
  showCloud: Maybe<Scalars['Boolean']>;
  showInAdminColumn: Maybe<Scalars['Boolean']>;
  showInGraphql: Maybe<Scalars['Boolean']>;
  showInMenu: Maybe<Scalars['Boolean']>;
  showInNavMenus: Maybe<Scalars['Boolean']>;
  showInQuickEdit: Maybe<Scalars['Boolean']>;
  showInRest: Maybe<Scalars['Boolean']>;
  showUi: Maybe<Scalars['Boolean']>;
};


export type TaxonomyConnectedContentTypesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type TaxonomyConnection = {
  edges: Array<TaxonomyConnectionEdge>;
  nodes: Array<Taxonomy>;
};

export type TaxonomyConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Taxonomy;
};

export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Tag = 'TAG'
}

export enum TaxonomyIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical: Maybe<Scalars['String']>;
  cornerstone: Maybe<Scalars['Boolean']>;
  focuskw: Maybe<Scalars['String']>;
  fullHead: Maybe<Scalars['String']>;
  metaDesc: Maybe<Scalars['String']>;
  metaKeywords: Maybe<Scalars['String']>;
  metaRobotsNofollow: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['String']>;
  opengraphAuthor: Maybe<Scalars['String']>;
  opengraphDescription: Maybe<Scalars['String']>;
  opengraphImage: Maybe<MediaItem>;
  opengraphModifiedTime: Maybe<Scalars['String']>;
  opengraphPublishedTime: Maybe<Scalars['String']>;
  opengraphPublisher: Maybe<Scalars['String']>;
  opengraphSiteName: Maybe<Scalars['String']>;
  opengraphTitle: Maybe<Scalars['String']>;
  opengraphType: Maybe<Scalars['String']>;
  opengraphUrl: Maybe<Scalars['String']>;
  schema: Maybe<SeoTaxonomySchema>;
  title: Maybe<Scalars['String']>;
  twitterDescription: Maybe<Scalars['String']>;
  twitterImage: Maybe<MediaItem>;
  twitterTitle: Maybe<Scalars['String']>;
};

export type TaxonomyToContentTypeConnection = ContentTypeConnection & Connection & {
  __typename?: 'TaxonomyToContentTypeConnection';
  edges: Array<TaxonomyToContentTypeConnectionEdge>;
  nodes: Array<ContentType>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentType;
};

export type TermNode = {
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  taxonomyName: Maybe<Scalars['String']>;
  termGroupId: Maybe<Scalars['Int']>;
  termTaxonomyId: Maybe<Scalars['Int']>;
  uri: Scalars['String'];
};


export type TermNodeEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type TermNodeEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type TermNodeConnection = {
  edges: Array<TermNodeConnectionEdge>;
  nodes: Array<TermNode>;
};

export type TermNodeConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: TermNode;
};

export enum TermNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TermNodeToEnqueuedScriptConnection = EnqueuedScriptConnection & Connection & {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
  nodes: Array<EnqueuedScript>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedScriptConnectionEdge = EnqueuedScriptConnectionEdge & Edge & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedScript;
};

export type TermNodeToEnqueuedStylesheetConnection = EnqueuedStylesheetConnection & Connection & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
  nodes: Array<EnqueuedStylesheet>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedStylesheetConnectionEdge = EnqueuedStylesheetConnectionEdge & Edge & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedStylesheet;
};

export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

export type Theme = Node & {
  __typename?: 'Theme';
  author: Maybe<Scalars['String']>;
  authoruri: Scalars['String'];
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  screenshot: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  themeuri: Scalars['String'];
  version: Maybe<Scalars['String']>;
};

export type ThemeConnection = {
  edges: Array<ThemeConnectionEdge>;
  nodes: Array<Theme>;
};

export type ThemeConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: Theme;
};

export type UniformResourceIdentifiable = {
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isTermNode: Scalars['Boolean'];
  uri: Scalars['String'];
};

export type UpdateCategoryInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  parentId: Maybe<Scalars['ID']>;
  slug: Maybe<Scalars['String']>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category: Maybe<Category>;
  clientMutationId: Maybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  approved: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  authorEmail: Maybe<Scalars['String']>;
  authorUrl: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentOn: Maybe<Scalars['Int']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<Scalars['ID']>;
  status: Maybe<CommentStatusEnum>;
  type: Maybe<Scalars['String']>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  clientMutationId: Maybe<Scalars['String']>;
  comment: Maybe<Comment>;
  success: Maybe<Scalars['Boolean']>;
};

export type UpdateMediaItemInput = {
  altText: Maybe<Scalars['String']>;
  authorId: Maybe<Scalars['ID']>;
  caption: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  dateGmt: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  filePath: Maybe<Scalars['String']>;
  fileType: Maybe<MimeTypeEnum>;
  id: Scalars['ID'];
  parentId: Maybe<Scalars['ID']>;
  pingStatus: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<MediaItemStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  clientMutationId: Maybe<Scalars['String']>;
  mediaItem: Maybe<MediaItem>;
};

export type UpdatePageInput = {
  authorId: Maybe<Scalars['ID']>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  password: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  clientMutationId: Maybe<Scalars['String']>;
  page: Maybe<Page>;
};

export type UpdatePostFormatInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  clientMutationId: Maybe<Scalars['String']>;
  postFormat: Maybe<PostFormat>;
};

export type UpdatePostInput = {
  authorId: Maybe<Scalars['ID']>;
  categories: Maybe<PostCategoriesInput>;
  clientMutationId: Maybe<Scalars['String']>;
  commentStatus: Maybe<Scalars['String']>;
  content: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  excerpt: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder: Maybe<Scalars['Int']>;
  password: Maybe<Scalars['String']>;
  pingStatus: Maybe<Scalars['String']>;
  pinged: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats: Maybe<PostPostFormatsInput>;
  slug: Maybe<Scalars['String']>;
  status: Maybe<PostStatusEnum>;
  tags: Maybe<PostTagsInput>;
  title: Maybe<Scalars['String']>;
  toPing: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  clientMutationId: Maybe<Scalars['String']>;
  post: Maybe<Post>;
};

export type UpdateSettingsInput = {
  clientMutationId: Maybe<Scalars['String']>;
  discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']>;
  discussionSettingsDefaultPingStatus: Maybe<Scalars['String']>;
  generalSettingsDateFormat: Maybe<Scalars['String']>;
  generalSettingsDescription: Maybe<Scalars['String']>;
  generalSettingsEmail: Maybe<Scalars['String']>;
  generalSettingsLanguage: Maybe<Scalars['String']>;
  generalSettingsStartOfWeek: Maybe<Scalars['Int']>;
  generalSettingsTimeFormat: Maybe<Scalars['String']>;
  generalSettingsTimezone: Maybe<Scalars['String']>;
  generalSettingsTitle: Maybe<Scalars['String']>;
  generalSettingsUrl: Maybe<Scalars['String']>;
  readingSettingsPageForPosts: Maybe<Scalars['Int']>;
  readingSettingsPageOnFront: Maybe<Scalars['Int']>;
  readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  readingSettingsShowOnFront: Maybe<Scalars['String']>;
  writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
};

export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  allSettings: Maybe<Settings>;
  clientMutationId: Maybe<Scalars['String']>;
  discussionSettings: Maybe<DiscussionSettings>;
  generalSettings: Maybe<GeneralSettings>;
  readingSettings: Maybe<ReadingSettings>;
  writingSettings: Maybe<WritingSettings>;
};

export type UpdateTagInput = {
  aliasOf: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  clientMutationId: Maybe<Scalars['String']>;
  tag: Maybe<Tag>;
};

export type UpdateUserInput = {
  aim: Maybe<Scalars['String']>;
  clientMutationId: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  displayName: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jabber: Maybe<Scalars['String']>;
  lastName: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  nicename: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  registered: Maybe<Scalars['String']>;
  richEditing: Maybe<Scalars['String']>;
  roles: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl: Maybe<Scalars['String']>;
  yim: Maybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId: Maybe<Scalars['String']>;
  user: Maybe<User>;
};

export type User = Node & UniformResourceIdentifiable & Commenter & DatabaseIdentifier & {
  __typename?: 'User';
  avatar: Maybe<Avatar>;
  capKey: Maybe<Scalars['String']>;
  capabilities: Maybe<Array<Maybe<Scalars['String']>>>;
  comments: Maybe<UserToCommentConnection>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<UserToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<UserToEnqueuedStylesheetConnection>;
  extraCapabilities: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastName: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  mediaItems: Maybe<UserToMediaItemConnection>;
  name: Maybe<Scalars['String']>;
  nicename: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  pages: Maybe<UserToPageConnection>;
  posts: Maybe<UserToPostConnection>;
  registeredDate: Maybe<Scalars['String']>;
  revisions: Maybe<UserToRevisionsConnection>;
  roles: Maybe<UserToUserRoleConnection>;
  seo: Maybe<SeoUser>;
  slug: Maybe<Scalars['String']>;
  uri: Scalars['String'];
  url: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of the databaseId field */
  userId: Maybe<Scalars['Int']>;
  username: Maybe<Scalars['String']>;
};


export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault: Maybe<Scalars['Boolean']>;
  rating: Maybe<AvatarRatingEnum>;
};


export type UserCommentsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToCommentConnectionWhereArgs>;
};


export type UserEnqueuedScriptsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type UserEnqueuedStylesheetsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};


export type UserMediaItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToMediaItemConnectionWhereArgs>;
};


export type UserPagesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToPageConnectionWhereArgs>;
};


export type UserPostsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToPostConnectionWhereArgs>;
};


export type UserRevisionsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<UserToRevisionsConnectionWhereArgs>;
};


export type UserRolesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type UserConnection = {
  edges: Array<UserConnectionEdge>;
  nodes: Array<User>;
};

export type UserConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: User;
};

export enum UserNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Email = 'EMAIL',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI',
  Username = 'USERNAME'
}

export type UserRole = Node & {
  __typename?: 'UserRole';
  capabilities: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
};

export type UserRoleConnection = {
  edges: Array<UserRoleConnectionEdge>;
  nodes: Array<UserRole>;
};

export type UserRoleConnectionEdge = {
  cursor: Maybe<Scalars['String']>;
  node: UserRole;
};

export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export type UserToCommentConnection = CommentConnection & Connection & {
  __typename?: 'UserToCommentConnection';
  edges: Array<UserToCommentConnectionEdge>;
  nodes: Array<Comment>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'UserToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Comment;
};

export type UserToCommentConnectionWhereArgs = {
  authorEmail: Maybe<Scalars['String']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl: Maybe<Scalars['String']>;
  commentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType: Maybe<Scalars['String']>;
  commentTypeIn: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn: Maybe<Scalars['String']>;
  contentAuthor: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId: Maybe<Scalars['ID']>;
  contentIdIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName: Maybe<Scalars['String']>;
  contentParent: Maybe<Scalars['Int']>;
  contentStatus: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma: Maybe<Scalars['Int']>;
  order: Maybe<OrderEnum>;
  orderby: Maybe<CommentsConnectionOrderbyEnum>;
  parent: Maybe<Scalars['Int']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  search: Maybe<Scalars['String']>;
  status: Maybe<Scalars['String']>;
  userId: Maybe<Scalars['ID']>;
};

export type UserToEnqueuedScriptConnection = EnqueuedScriptConnection & Connection & {
  __typename?: 'UserToEnqueuedScriptConnection';
  edges: Array<UserToEnqueuedScriptConnectionEdge>;
  nodes: Array<EnqueuedScript>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToEnqueuedScriptConnectionEdge = EnqueuedScriptConnectionEdge & Edge & {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedScript;
};

export type UserToEnqueuedStylesheetConnection = EnqueuedStylesheetConnection & Connection & {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
  nodes: Array<EnqueuedStylesheet>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToEnqueuedStylesheetConnectionEdge = EnqueuedStylesheetConnectionEdge & Edge & {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: EnqueuedStylesheet;
};

export type UserToMediaItemConnection = MediaItemConnection & Connection & {
  __typename?: 'UserToMediaItemConnection';
  edges: Array<UserToMediaItemConnectionEdge>;
  nodes: Array<MediaItem>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToMediaItemConnectionEdge = MediaItemConnectionEdge & Edge & {
  __typename?: 'UserToMediaItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: MediaItem;
};

export type UserToMediaItemConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type UserToPageConnection = PageConnection & Connection & {
  __typename?: 'UserToPageConnection';
  edges: Array<UserToPageConnectionEdge>;
  nodes: Array<Page>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToPageConnectionEdge = PageConnectionEdge & Edge & {
  __typename?: 'UserToPageConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Page;
};

export type UserToPageConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type UserToPostConnection = PostConnection & Connection & {
  __typename?: 'UserToPostConnection';
  edges: Array<UserToPostConnectionEdge>;
  nodes: Array<Post>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToPostConnectionEdge = PostConnectionEdge & Edge & {
  __typename?: 'UserToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Post;
};

export type UserToPostConnectionWhereArgs = {
  author: Maybe<Scalars['Int']>;
  authorIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName: Maybe<Scalars['String']>;
  authorNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId: Maybe<Scalars['Int']>;
  categoryIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName: Maybe<Scalars['String']>;
  categoryNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  tag: Maybe<Scalars['String']>;
  tagId: Maybe<Scalars['String']>;
  tagIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Maybe<Scalars['String']>;
};

export type UserToRevisionsConnection = ContentNodeConnection & Connection & {
  __typename?: 'UserToRevisionsConnection';
  edges: Array<UserToRevisionsConnectionEdge>;
  nodes: Array<ContentNode>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'UserToRevisionsConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: ContentNode;
};

export type UserToRevisionsConnectionWhereArgs = {
  contentTypes: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery: Maybe<DateQueryInput>;
  hasPassword: Maybe<Scalars['Boolean']>;
  id: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType: Maybe<MimeTypeEnum>;
  name: Maybe<Scalars['String']>;
  nameIn: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent: Maybe<Scalars['ID']>;
  parentIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn: Maybe<Array<Maybe<Scalars['ID']>>>;
  password: Maybe<Scalars['String']>;
  search: Maybe<Scalars['String']>;
  stati: Maybe<Array<Maybe<PostStatusEnum>>>;
  status: Maybe<PostStatusEnum>;
  title: Maybe<Scalars['String']>;
};

export type UserToUserRoleConnection = UserRoleConnection & Connection & {
  __typename?: 'UserToUserRoleConnection';
  edges: Array<UserToUserRoleConnectionEdge>;
  nodes: Array<UserRole>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToUserRoleConnectionEdge = UserRoleConnectionEdge & Edge & {
  __typename?: 'UserToUserRoleConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: UserRole;
};

export enum UsersConnectionOrderbyEnum {
  DisplayName = 'DISPLAY_NAME',
  Email = 'EMAIL',
  Login = 'LOGIN',
  LoginIn = 'LOGIN_IN',
  NiceName = 'NICE_NAME',
  NiceNameIn = 'NICE_NAME_IN',
  Registered = 'REGISTERED',
  Url = 'URL'
}

export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order: Maybe<OrderEnum>;
};

export enum UsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL'
}

export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  seo: Maybe<SeoPostTypePageInfo>;
  startCursor: Maybe<Scalars['String']>;
};

export type WooCountries = {
  __typename?: 'WooCountries';
  billingCountries: Maybe<Array<Maybe<WooCountry>>>;
  shippingCountries: Maybe<Array<Maybe<WooCountry>>>;
};

export type WooCountry = {
  __typename?: 'WooCountry';
  countryCode: Maybe<Scalars['String']>;
  countryName: Maybe<Scalars['String']>;
};

export type WooState = {
  __typename?: 'WooState';
  stateCode: Maybe<Scalars['String']>;
  stateName: Maybe<Scalars['String']>;
};

export type WooStates = {
  __typename?: 'WooStates';
  states: Maybe<Array<Maybe<WooState>>>;
};

export type WritingSettings = {
  __typename?: 'WritingSettings';
  defaultCategory: Maybe<Scalars['Int']>;
  defaultPostFormat: Maybe<Scalars['String']>;
  useSmilies: Maybe<Scalars['Boolean']>;
};

export type RootSeoFragmentFragment = (
  { __typename?: 'RootQuery' }
  & { seo: Maybe<(
    { __typename?: 'SEOConfig' }
    & { openGraph: Maybe<(
      { __typename?: 'SEOOpenGraph' }
      & { defaultImage: Maybe<(
        { __typename?: 'MediaItem' }
        & Pick<MediaItem, 'altText' | 'title' | 'uri'>
        & { mediaDetails: Maybe<(
          { __typename?: 'MediaDetails' }
          & Pick<MediaDetails, 'file'>
        )> }
      )>, frontPage: Maybe<(
        { __typename?: 'SEOOpenGraphFrontPage' }
        & Pick<SeoOpenGraphFrontPage, 'description' | 'title'>
        & { image: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'uri' | 'altText'>
          & { mediaDetails: Maybe<(
            { __typename?: 'MediaDetails' }
            & Pick<MediaDetails, 'file'>
          )> }
        )> }
      )> }
    )>, webmaster: Maybe<(
      { __typename?: 'SEOWebmaster' }
      & Pick<SeoWebmaster, 'baiduVerify' | 'googleVerify' | 'msVerify' | 'yandexVerify'>
    )>, social: Maybe<(
      { __typename?: 'SEOSocial' }
      & { facebook: Maybe<(
        { __typename?: 'SEOSocialFacebook' }
        & Pick<SeoSocialFacebook, 'url'>
      )>, instagram: Maybe<(
        { __typename?: 'SEOSocialInstagram' }
        & Pick<SeoSocialInstagram, 'url'>
      )>, twitter: Maybe<(
        { __typename?: 'SEOSocialTwitter' }
        & Pick<SeoSocialTwitter, 'username' | 'cardType'>
      )> }
    )>, schema: Maybe<(
      { __typename?: 'SEOSchema' }
      & Pick<SeoSchema, 'siteName' | 'siteUrl' | 'wordpressSiteName' | 'personName' | 'companyOrPerson' | 'companyName' | 'inLanguage'>
    )> }
  )> }
);

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'RootQuery' }
  & { posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { edges: Array<(
      { __typename?: 'RootQueryToPostConnectionEdge' }
      & Pick<RootQueryToPostConnectionEdge, 'cursor'>
      & { node: (
        { __typename?: 'Post' }
        & Pick<Post, 'slug' | 'title' | 'date' | 'uri'>
        & { featuredImage: Maybe<(
          { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' }
          & { node: (
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'sourceUrl' | 'altText'>
            & { mediaDetails: Maybe<(
              { __typename?: 'MediaDetails' }
              & Pick<MediaDetails, 'file'>
            )> }
          ) }
        )>, author: Maybe<(
          { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
          & { node: (
            { __typename?: 'User' }
            & Pick<User, 'slug' | 'name'>
            & { avatar: Maybe<(
              { __typename?: 'Avatar' }
              & Pick<Avatar, 'url'>
            )> }
          ) }
        )>, tags: Maybe<(
          { __typename?: 'PostToTagConnection' }
          & { nodes: Array<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'name'>
          )> }
        )> }
      ) }
    )> }
  )>, categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name' | 'uri'>
    )> }
  )>, getHeader: Maybe<(
    { __typename?: 'HCMSHeader' }
    & Pick<HcmsHeader, 'siteTitle' | 'siteLogoUrl' | 'siteTagLine'>
  )>, getFooter: Maybe<(
    { __typename?: 'HCMSFooter' }
    & Pick<HcmsFooter, 'copyrightText'>
    & { socialLinks: Maybe<Array<Maybe<(
      { __typename?: 'HCMSSocialLinks' }
      & Pick<HcmsSocialLinks, 'iconName' | 'iconUrl'>
    )>>> }
  )>, menuItems: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes: Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id' | 'label' | 'path'>
    )> }
  )> }
  & RootSeoFragmentFragment
);

export type PostDetailQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type PostDetailQuery = (
  { __typename?: 'RootQuery' }
  & { post: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'date' | 'link'>
    & { author: Maybe<(
      { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'slug' | 'name'>
        & { avatar: Maybe<(
          { __typename?: 'Avatar' }
          & Pick<Avatar, 'url'>
        )> }
      ) }
    )>, tags: Maybe<(
      { __typename?: 'PostToTagConnection' }
      & { nodes: Array<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      )> }
    )>, seo: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & Pick<PostTypeSeo, 'canonical' | 'metaKeywords' | 'metaDesc' | 'metaRobotsNoindex' | 'metaRobotsNofollow' | 'opengraphAuthor' | 'opengraphDescription' | 'opengraphModifiedTime' | 'opengraphPublishedTime' | 'opengraphPublisher' | 'opengraphSiteName' | 'opengraphTitle' | 'opengraphType' | 'opengraphUrl' | 'readingTime' | 'title' | 'twitterDescription' | 'twitterTitle' | 'focuskw' | 'cornerstone'>
      & { breadcrumbs: Maybe<Array<Maybe<(
        { __typename?: 'SEOPostTypeBreadcrumbs' }
        & Pick<SeoPostTypeBreadcrumbs, 'text' | 'url'>
      )>>>, opengraphImage: Maybe<(
        { __typename?: 'MediaItem' }
        & Pick<MediaItem, 'sourceUrl' | 'title' | 'uri' | 'altText'>
        & { mediaDetails: Maybe<(
          { __typename?: 'MediaDetails' }
          & Pick<MediaDetails, 'file'>
        )> }
      )> }
    )> }
  )>, categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name' | 'uri'>
    )> }
  )>, getHeader: Maybe<(
    { __typename?: 'HCMSHeader' }
    & Pick<HcmsHeader, 'siteTitle' | 'siteLogoUrl' | 'siteTagLine'>
  )>, getFooter: Maybe<(
    { __typename?: 'HCMSFooter' }
    & Pick<HcmsFooter, 'copyrightText'>
    & { socialLinks: Maybe<Array<Maybe<(
      { __typename?: 'HCMSSocialLinks' }
      & Pick<HcmsSocialLinks, 'iconName' | 'iconUrl'>
    )>>> }
  )>, menuItems: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes: Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id' | 'label' | 'path'>
    )> }
  )> }
  & RootSeoFragmentFragment
);

export type PostSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostSlugsQuery = (
  { __typename?: 'RootQuery' }
  & { posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes: Array<(
      { __typename?: 'Post' }
      & Pick<Post, 'slug'>
    )> }
  )> }
);

export type CategorySlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategorySlugsQuery = (
  { __typename?: 'RootQuery' }
  & { categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug'>
    )> }
  )> }
);

export type CategoryDetailQueryVariables = Exact<{
  categorySlug: Scalars['String'];
  categoryId: Scalars['ID'];
}>;


export type CategoryDetailQuery = (
  { __typename?: 'RootQuery' }
  & { category: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'name'>
    & { seo: Maybe<(
      { __typename?: 'TaxonomySEO' }
      & Pick<TaxonomySeo, 'canonical' | 'cornerstone' | 'focuskw' | 'metaDesc' | 'metaRobotsNofollow' | 'metaKeywords' | 'metaRobotsNoindex' | 'opengraphAuthor' | 'opengraphDescription' | 'opengraphModifiedTime' | 'opengraphPublishedTime' | 'opengraphPublisher' | 'opengraphSiteName' | 'opengraphTitle' | 'opengraphType' | 'opengraphUrl' | 'title' | 'twitterDescription' | 'twitterTitle'>
      & { breadcrumbs: Maybe<Array<Maybe<(
        { __typename?: 'SEOPostTypeBreadcrumbs' }
        & Pick<SeoPostTypeBreadcrumbs, 'text' | 'url'>
      )>>>, opengraphImage: Maybe<(
        { __typename?: 'MediaItem' }
        & Pick<MediaItem, 'sourceUrl' | 'title' | 'uri' | 'altText'>
        & { mediaDetails: Maybe<(
          { __typename?: 'MediaDetails' }
          & Pick<MediaDetails, 'file'>
        )> }
      )> }
    )> }
  )>, posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { edges: Array<(
      { __typename?: 'RootQueryToPostConnectionEdge' }
      & Pick<RootQueryToPostConnectionEdge, 'cursor'>
      & { node: (
        { __typename?: 'Post' }
        & Pick<Post, 'slug' | 'title' | 'date' | 'uri'>
        & { featuredImage: Maybe<(
          { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' }
          & { node: (
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'sourceUrl' | 'altText'>
            & { mediaDetails: Maybe<(
              { __typename?: 'MediaDetails' }
              & Pick<MediaDetails, 'file'>
            )> }
          ) }
        )>, author: Maybe<(
          { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
          & { node: (
            { __typename?: 'User' }
            & Pick<User, 'slug' | 'name'>
            & { avatar: Maybe<(
              { __typename?: 'Avatar' }
              & Pick<Avatar, 'url'>
            )> }
          ) }
        )>, tags: Maybe<(
          { __typename?: 'PostToTagConnection' }
          & { nodes: Array<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'name'>
          )> }
        )> }
      ) }
    )> }
  )>, categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name' | 'uri'>
    )> }
  )>, getHeader: Maybe<(
    { __typename?: 'HCMSHeader' }
    & Pick<HcmsHeader, 'siteTitle' | 'siteLogoUrl' | 'siteTagLine'>
  )>, getFooter: Maybe<(
    { __typename?: 'HCMSFooter' }
    & Pick<HcmsFooter, 'copyrightText'>
    & { socialLinks: Maybe<Array<Maybe<(
      { __typename?: 'HCMSSocialLinks' }
      & Pick<HcmsSocialLinks, 'iconName' | 'iconUrl'>
    )>>> }
  )>, menuItems: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes: Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id' | 'label' | 'path'>
    )> }
  )> }
  & RootSeoFragmentFragment
);

export type AboutQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutQuery = (
  { __typename?: 'RootQuery' }
  & { pages: Maybe<(
    { __typename?: 'RootQueryToPageConnection' }
    & { nodes: Array<(
      { __typename?: 'Page' }
      & Pick<Page, 'title' | 'content' | 'link'>
      & { seo: Maybe<(
        { __typename?: 'PostTypeSEO' }
        & Pick<PostTypeSeo, 'canonical' | 'metaKeywords' | 'metaDesc' | 'metaRobotsNoindex' | 'metaRobotsNofollow' | 'opengraphAuthor' | 'opengraphDescription' | 'opengraphModifiedTime' | 'opengraphPublishedTime' | 'opengraphPublisher' | 'opengraphSiteName' | 'opengraphTitle' | 'opengraphType' | 'opengraphUrl' | 'readingTime' | 'title' | 'twitterDescription' | 'twitterTitle' | 'focuskw' | 'cornerstone'>
        & { breadcrumbs: Maybe<Array<Maybe<(
          { __typename?: 'SEOPostTypeBreadcrumbs' }
          & Pick<SeoPostTypeBreadcrumbs, 'text' | 'url'>
        )>>>, opengraphImage: Maybe<(
          { __typename?: 'MediaItem' }
          & Pick<MediaItem, 'sourceUrl' | 'title' | 'uri' | 'altText'>
          & { mediaDetails: Maybe<(
            { __typename?: 'MediaDetails' }
            & Pick<MediaDetails, 'file'>
          )> }
        )> }
      )> }
    )> }
  )>, getHeader: Maybe<(
    { __typename?: 'HCMSHeader' }
    & Pick<HcmsHeader, 'siteTitle' | 'siteLogoUrl' | 'siteTagLine'>
  )>, getFooter: Maybe<(
    { __typename?: 'HCMSFooter' }
    & Pick<HcmsFooter, 'copyrightText'>
    & { socialLinks: Maybe<Array<Maybe<(
      { __typename?: 'HCMSSocialLinks' }
      & Pick<HcmsSocialLinks, 'iconName' | 'iconUrl'>
    )>>> }
  )>, menuItems: Maybe<(
    { __typename?: 'RootQueryToMenuItemConnection' }
    & { nodes: Array<(
      { __typename?: 'MenuItem' }
      & Pick<MenuItem, 'id' | 'label' | 'path'>
    )> }
  )> }
  & RootSeoFragmentFragment
);

export const RootSeoFragmentFragmentDoc = gql`
    fragment RootSEOFragment on RootQuery {
  seo {
    openGraph {
      defaultImage {
        altText
        title
        uri
        mediaDetails {
          file
        }
      }
      frontPage {
        description
        title
        image {
          uri
          altText
          mediaDetails {
            file
          }
        }
      }
    }
    webmaster {
      baiduVerify
      googleVerify
      msVerify
      yandexVerify
    }
    social {
      facebook {
        url
      }
      instagram {
        url
      }
      twitter {
        username
        cardType
      }
    }
    schema {
      siteName
      siteUrl
      wordpressSiteName
      personName
      companyOrPerson
      companyName
      inLanguage
    }
  }
}
    `;
export const HomeDocument = gql`
    query Home {
  posts {
    edges {
      cursor
      node {
        slug
        title
        date
        uri
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              file
            }
          }
        }
        author {
          node {
            slug
            name
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
  }
  categories {
    nodes {
      id
      slug
      name
      uri
    }
  }
  getHeader {
    siteTitle
    siteLogoUrl
    siteTagLine
  }
  getFooter {
    copyrightText
    socialLinks {
      iconName
      iconUrl
    }
  }
  menuItems {
    nodes {
      id
      label
      path
    }
  }
  ...RootSEOFragment
}
    ${RootSeoFragmentFragmentDoc}`;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const PostDetailDocument = gql`
    query PostDetail($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
    date
    link
    author {
      node {
        slug
        name
        avatar {
          url
        }
      }
    }
    tags {
      nodes {
        id
        name
      }
    }
    seo {
      breadcrumbs {
        text
        url
      }
      canonical
      metaKeywords
      metaDesc
      metaRobotsNoindex
      metaRobotsNofollow
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      readingTime
      title
      twitterDescription
      twitterTitle
      focuskw
      cornerstone
      opengraphImage {
        sourceUrl
        title
        uri
        altText
        mediaDetails {
          file
        }
      }
    }
  }
  categories {
    nodes {
      id
      slug
      name
      uri
    }
  }
  getHeader {
    siteTitle
    siteLogoUrl
    siteTagLine
  }
  getFooter {
    copyrightText
    socialLinks {
      iconName
      iconUrl
    }
  }
  menuItems {
    nodes {
      id
      label
      path
    }
  }
  ...RootSEOFragment
}
    ${RootSeoFragmentFragmentDoc}`;
export type PostDetailQueryResult = Apollo.QueryResult<PostDetailQuery, PostDetailQueryVariables>;
export const PostSlugsDocument = gql`
    query PostSlugs {
  posts {
    nodes {
      slug
    }
  }
}
    `;
export type PostSlugsQueryResult = Apollo.QueryResult<PostSlugsQuery, PostSlugsQueryVariables>;
export const CategorySlugsDocument = gql`
    query CategorySlugs {
  categories {
    nodes {
      id
      slug
    }
  }
}
    `;
export type CategorySlugsQueryResult = Apollo.QueryResult<CategorySlugsQuery, CategorySlugsQueryVariables>;
export const CategoryDetailDocument = gql`
    query CategoryDetail($categorySlug: String!, $categoryId: ID!) {
  category(id: $categoryId, idType: SLUG) {
    name
    seo {
      breadcrumbs {
        text
        url
      }
      canonical
      cornerstone
      focuskw
      metaDesc
      metaRobotsNofollow
      metaKeywords
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphModifiedTime
      opengraphPublishedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      opengraphImage {
        sourceUrl
        title
        uri
        altText
        mediaDetails {
          file
        }
      }
      title
      twitterDescription
      twitterTitle
    }
  }
  posts(where: {categoryName: $categorySlug}) {
    edges {
      cursor
      node {
        slug
        title
        date
        uri
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              file
            }
          }
        }
        author {
          node {
            slug
            name
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
  }
  categories {
    nodes {
      id
      slug
      name
      uri
    }
  }
  getHeader {
    siteTitle
    siteLogoUrl
    siteTagLine
  }
  getFooter {
    copyrightText
    socialLinks {
      iconName
      iconUrl
    }
  }
  menuItems {
    nodes {
      id
      label
      path
    }
  }
  ...RootSEOFragment
}
    ${RootSeoFragmentFragmentDoc}`;
export type CategoryDetailQueryResult = Apollo.QueryResult<CategoryDetailQuery, CategoryDetailQueryVariables>;
export const AboutDocument = gql`
    query About {
  pages(where: {title: "tentang"}) {
    nodes {
      title
      content
      link
      seo {
        breadcrumbs {
          text
          url
        }
        canonical
        metaKeywords
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        opengraphAuthor
        opengraphDescription
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphPublisher
        opengraphSiteName
        opengraphTitle
        opengraphType
        opengraphUrl
        readingTime
        title
        twitterDescription
        twitterTitle
        focuskw
        cornerstone
        opengraphImage {
          sourceUrl
          title
          uri
          altText
          mediaDetails {
            file
          }
        }
      }
    }
  }
  getHeader {
    siteTitle
    siteLogoUrl
    siteTagLine
  }
  getFooter {
    copyrightText
    socialLinks {
      iconName
      iconUrl
    }
  }
  menuItems {
    nodes {
      id
      label
      path
    }
  }
  ...RootSEOFragment
}
    ${RootSeoFragmentFragmentDoc}`;
export type AboutQueryResult = Apollo.QueryResult<AboutQuery, AboutQueryVariables>;