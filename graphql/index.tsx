import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  revisions: Maybe<RootQueryToContentRevisionUnionConnection>;
  seo: Maybe<SeoConfig>;
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
  uri: Maybe<Scalars['String']>;
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
  uri: Maybe<Scalars['String']>;
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
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType: Maybe<PostIdType>;
  asPreview: Maybe<Scalars['Boolean']>;
};


export type RootQueryPostByArgs = {
  id: Maybe<Scalars['ID']>;
  postId: Maybe<Scalars['Int']>;
  uri: Maybe<Scalars['String']>;
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
  where: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
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
  readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
  writingSettingsDefaultCategory: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat: Maybe<Scalars['String']>;
  writingSettingsUseSmilies: Maybe<Scalars['Boolean']>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
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

export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  edges: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Category>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Category>;
};

export type Category = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & HierarchicalTermNode & MenuItemLinkable & {
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
  isRestricted: Maybe<Scalars['Boolean']>;
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  parent: Maybe<CategoryToParentCategoryConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
  posts: Maybe<CategoryToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
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

export type Node = {
  id: Scalars['ID'];
};

export type TermNode = {
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
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

export type TermNodeToEnqueuedScriptConnection = {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  edges: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedScript>;
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

export type EnqueuedAsset = {
  args: Maybe<Scalars['Boolean']>;
  dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra: Maybe<Scalars['String']>;
  handle: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  seo: Maybe<SeoPostTypePageInfo>;
  startCursor: Maybe<Scalars['String']>;
};

export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo';
  schema: Maybe<SeoPageInfoSchema>;
};

export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema';
  raw: Maybe<Scalars['String']>;
};

export type TermNodeToEnqueuedStylesheetConnection = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  edges: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedStylesheet>;
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

export type DatabaseIdentifier = {
  databaseId: Scalars['Int'];
};

export type UniformResourceIdentifiable = {
  id: Scalars['ID'];
  uri: Maybe<Scalars['String']>;
};

export type HierarchicalTermNode = {
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type MenuItemLinkable = {
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  uri: Scalars['String'];
};

export type CategoryToAncestorsCategoryConnection = {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  edges: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Category>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToAncestorsCategoryConnectionEdge = {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Category>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection';
  edges: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Category>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Category>;
};

export type CategoryToContentNodeConnectionWhereArgs = {
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

export type DateInput = {
  day: Maybe<Scalars['Int']>;
  month: Maybe<Scalars['Int']>;
  year: Maybe<Scalars['Int']>;
};

export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

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

export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum;
  order: OrderEnum;
};

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

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

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

export type CategoryToContentNodeConnection = {
  __typename?: 'CategoryToContentNodeConnection';
  edges: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToContentNodeConnectionEdge = {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
};

export type ContentNode = {
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
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
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  link: Maybe<Scalars['String']>;
  modified: Maybe<Scalars['String']>;
  modifiedGmt: Maybe<Scalars['String']>;
  previewRevisionDatabaseId: Maybe<Scalars['Int']>;
  previewRevisionId: Maybe<Scalars['ID']>;
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

export type ContentNodeToContentTypeConnectionEdge = {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  node: Maybe<ContentType>;
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
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
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
  uri: Maybe<Scalars['String']>;
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

export type ContentTypeToTaxonomyConnection = {
  __typename?: 'ContentTypeToTaxonomyConnection';
  edges: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Taxonomy>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentTypeToTaxonomyConnectionEdge = {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Taxonomy>;
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

export type TaxonomyToContentTypeConnection = {
  __typename?: 'TaxonomyToContentTypeConnection';
  edges: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentType>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TaxonomyToContentTypeConnectionEdge = {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentType>;
};

export type ContentTypeToContentNodeConnectionWhereArgs = {
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

export type ContentTypeToContentNodeConnection = {
  __typename?: 'ContentTypeToContentNodeConnection';
  edges: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentTypeToContentNodeConnectionEdge = {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
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

export type ContentNodeToEditLockConnectionEdge = {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  lockTimestamp: Maybe<Scalars['String']>;
  node: Maybe<User>;
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
  isRestricted: Maybe<Scalars['Boolean']>;
  lastName: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  mediaItems: Maybe<UserToMediaItemConnection>;
  name: Maybe<Scalars['String']>;
  nicename: Maybe<Scalars['String']>;
  nickname: Maybe<Scalars['String']>;
  pages: Maybe<UserToPageConnection>;
  posts: Maybe<UserToPostConnection>;
  registeredDate: Maybe<Scalars['String']>;
  revisions: Maybe<UserToContentRevisionUnionConnection>;
  roles: Maybe<UserToUserRoleConnection>;
  seo: Maybe<SeoUser>;
  slug: Maybe<Scalars['String']>;
  uri: Maybe<Scalars['String']>;
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
  where: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};


export type UserRolesArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
};

export type Commenter = {
  databaseId: Scalars['Int'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

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

export enum ContentTypeEnum {
  Attachment = 'ATTACHMENT',
  Page = 'PAGE',
  Post = 'POST'
}

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

export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection';
  edges: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
};

export type Comment = Node & DatabaseIdentifier & {
  __typename?: 'Comment';
  agent: Maybe<Scalars['String']>;
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

export type CommentToCommenterConnectionEdge = {
  __typename?: 'CommentToCommenterConnectionEdge';
  node: Maybe<Commenter>;
};

export type CommentToContentNodeConnectionEdge = {
  __typename?: 'CommentToContentNodeConnectionEdge';
  node: Maybe<ContentNode>;
};

export enum PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED'
}

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

export type CommentToParentCommentConnectionEdge = {
  __typename?: 'CommentToParentCommentConnectionEdge';
  node: Maybe<Comment>;
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

export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection';
  edges: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
};

export type UserToEnqueuedScriptConnection = {
  __typename?: 'UserToEnqueuedScriptConnection';
  edges: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToEnqueuedScriptConnectionEdge = {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedScript>;
};

export type UserToEnqueuedStylesheetConnection = {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  edges: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedStylesheet>;
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

export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection';
  edges: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<MediaItem>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<MediaItem>;
};

export type MediaItem = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalContentNode & {
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
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
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

export type NodeWithTemplate = {
  template: Maybe<ContentTemplate>;
};

export type ContentTemplate = {
  templateName: Maybe<Scalars['String']>;
};

export type NodeWithTitle = {
  title: Maybe<Scalars['String']>;
};


export type NodeWithTitleTitleArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithAuthor = {
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId: Maybe<Scalars['Int']>;
  authorId: Maybe<Scalars['ID']>;
};

export type NodeWithAuthorToUserConnectionEdge = {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  node: Maybe<User>;
};

export type NodeWithComments = {
  commentCount: Maybe<Scalars['Int']>;
  commentStatus: Maybe<Scalars['String']>;
};

export type HierarchicalContentNode = {
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
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

export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
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

export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  edges: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
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

export type HierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  edges: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
};

export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  node: Maybe<ContentNode>;
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

export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection';
  edges: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
};

export type ContentNodeToEnqueuedScriptConnection = {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  edges: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedScript>;
};

export type ContentNodeToEnqueuedStylesheetConnection = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  edges: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedStylesheet>;
};

export enum MediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  PostThumbnail = 'POST_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  TwentytwentyFullscreen = 'TWENTYTWENTY_FULLSCREEN',
  '1536X1536' = '_1536X1536',
  '2048X2048' = '_2048X2048'
}

export type ContentNodeToEditLastConnectionEdge = {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  node: Maybe<User>;
};

export type MediaDetails = {
  __typename?: 'MediaDetails';
  file: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  meta: Maybe<MediaItemMeta>;
  sizes: Maybe<Array<Maybe<MediaSize>>>;
  width: Maybe<Scalars['Int']>;
};

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

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical: Maybe<Scalars['String']>;
  cornerstone: Maybe<Scalars['Boolean']>;
  focuskw: Maybe<Scalars['String']>;
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
  schema: Maybe<SeoPostTypeSchema>;
  schemaDetails: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  twitterDescription: Maybe<Scalars['String']>;
  twitterImage: Maybe<MediaItem>;
  twitterTitle: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  text: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  articleType: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType: Maybe<Array<Maybe<Scalars['String']>>>;
  raw: Maybe<Scalars['String']>;
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

export type UserToPageConnection = {
  __typename?: 'UserToPageConnection';
  edges: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Page>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Page>;
};

export type Page = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & MenuItemLinkable & {
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
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isPreview: Maybe<Scalars['Boolean']>;
  isPrivacyPage: Scalars['Boolean'];
  isRestricted: Maybe<Scalars['Boolean']>;
  isRevision: Maybe<Scalars['Boolean']>;
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

export type NodeWithContentEditor = {
  content: Maybe<Scalars['String']>;
};


export type NodeWithContentEditorContentArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithFeaturedImage = {
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId: Maybe<Scalars['Int']>;
  featuredImageId: Maybe<Scalars['ID']>;
};

export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  node: Maybe<MediaItem>;
};

export type NodeWithRevisions = {
  isRevision: Maybe<Scalars['Boolean']>;
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

export type NodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  node: Maybe<ContentNode>;
};

export type NodeWithPageAttributes = {
  menuOrder: Maybe<Scalars['Int']>;
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

export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection';
  edges: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
};

export type PageToPreviewConnectionEdge = {
  __typename?: 'PageToPreviewConnectionEdge';
  node: Maybe<Page>;
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

export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection';
  edges: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Page>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Page>;
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

export type UserToPostConnection = {
  __typename?: 'UserToPostConnection';
  edges: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
};

export type Post = Node & ContentNode & DatabaseIdentifier & NodeWithTemplate & UniformResourceIdentifiable & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable & {
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
  isPreview: Maybe<Scalars['Boolean']>;
  isRestricted: Maybe<Scalars['Boolean']>;
  isRevision: Maybe<Scalars['Boolean']>;
  isSticky: Scalars['Boolean'];
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

export type NodeWithExcerpt = {
  excerpt: Maybe<Scalars['String']>;
};


export type NodeWithExcerptExcerptArgs = {
  format: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithTrackbacks = {
  pingStatus: Maybe<Scalars['String']>;
  pinged: Maybe<Array<Maybe<Scalars['String']>>>;
  toPing: Maybe<Array<Maybe<Scalars['String']>>>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  edges: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Category>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  isPrimary: Maybe<Scalars['Boolean']>;
  node: Maybe<Category>;
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

export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection';
  edges: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection';
  edges: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<PostFormat>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<PostFormat>;
};

export type PostFormat = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  contentNodes: Maybe<PostFormatToContentNodeConnection>;
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  postFormatId: Maybe<Scalars['Int']>;
  posts: Maybe<PostFormatToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
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

export type PostFormatToContentNodeConnectionWhereArgs = {
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

export type PostFormatToContentNodeConnection = {
  __typename?: 'PostFormatToContentNodeConnection';
  edges: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostFormatToContentNodeConnectionEdge = {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
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

export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection';
  edges: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
};

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  breadcrumbs: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical: Maybe<Scalars['String']>;
  cornerstone: Maybe<Scalars['Boolean']>;
  focuskw: Maybe<Scalars['String']>;
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

export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema';
  raw: Maybe<Scalars['String']>;
};

export type PostFormatToTaxonomyConnectionEdge = {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  node: Maybe<Taxonomy>;
};

export type PostToPreviewConnectionEdge = {
  __typename?: 'PostToPreviewConnectionEdge';
  node: Maybe<Post>;
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

export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection';
  edges: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type PostToTagConnection = {
  __typename?: 'PostToTagConnection';
  edges: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Tag>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Tag>;
};

export type Tag = Node & TermNode & DatabaseIdentifier & UniformResourceIdentifiable & MenuItemLinkable & {
  __typename?: 'Tag';
  contentNodes: Maybe<TagToContentNodeConnection>;
  count: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description: Maybe<Scalars['String']>;
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  link: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  posts: Maybe<TagToPostConnection>;
  seo: Maybe<TaxonomySeo>;
  slug: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  tagId: Maybe<Scalars['Int']>;
  taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
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

export type TagToContentNodeConnectionWhereArgs = {
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

export type TagToContentNodeConnection = {
  __typename?: 'TagToContentNodeConnection';
  edges: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TagToContentNodeConnectionEdge = {
  __typename?: 'TagToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
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

export type TagToPostConnection = {
  __typename?: 'TagToPostConnection';
  edges: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
};

export type TagToTaxonomyConnectionEdge = {
  __typename?: 'TagToTaxonomyConnectionEdge';
  node: Maybe<Taxonomy>;
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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Tag = 'TAG'
}

export type PostToTermNodeConnection = {
  __typename?: 'PostToTermNodeConnection';
  edges: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<TermNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type PostToTermNodeConnectionEdge = {
  __typename?: 'PostToTermNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<TermNode>;
};

export type UserToContentRevisionUnionConnectionWhereArgs = {
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

export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection';
  edges: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentRevisionUnion>;
};

export type ContentRevisionUnion = Post | Page;

export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection';
  edges: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<UserRole>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<UserRole>;
};

export type UserRole = Node & {
  __typename?: 'UserRole';
  capabilities: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  metaDesc: Maybe<Scalars['String']>;
  metaRobotsNofollow: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['String']>;
  schema: Maybe<SeoUserSchema>;
  social: Maybe<SeoUserSocial>;
  title: Maybe<Scalars['String']>;
};

export type SeoUserSchema = {
  __typename?: 'SEOUserSchema';
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

export type CategoryToParentCategoryConnectionEdge = {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  node: Maybe<Category>;
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

export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  edges: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
};

export type CategoryToTaxonomyConnectionEdge = {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  node: Maybe<Taxonomy>;
};

export enum CategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

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

export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection';
  edges: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Comment>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Comment>;
};

export enum ContentNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

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

export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection';
  edges: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentNode>;
};

export enum ContentTypeIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection';
  edges: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentType>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentType>;
};

export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  defaultCommentStatus: Maybe<Scalars['String']>;
  defaultPingStatus: Maybe<Scalars['String']>;
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

export type HcmsSocialLinks = {
  __typename?: 'HCMSSocialLinks';
  iconName: Maybe<Scalars['String']>;
  iconUrl: Maybe<Scalars['String']>;
};

export type HcmsHeader = {
  __typename?: 'HCMSHeader';
  favicon: Maybe<Scalars['String']>;
  siteLogoUrl: Maybe<Scalars['String']>;
  siteTagLine: Maybe<Scalars['String']>;
  siteTitle: Maybe<Scalars['String']>;
};

export enum MediaItemIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI',
  Slug = 'SLUG',
  SourceUrl = 'SOURCE_URL'
}

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

export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection';
  edges: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<MediaItem>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<MediaItem>;
};

export enum MenuNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME'
}

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

export enum MenuLocationEnum {
  Expanded = 'EXPANDED',
  Footer = 'FOOTER',
  HcmsMenuFooter = 'HCMS_MENU_FOOTER',
  HcmsMenuHeader = 'HCMS_MENU_HEADER',
  Mobile = 'MOBILE',
  Primary = 'PRIMARY',
  Social = 'SOCIAL'
}

export type MenuToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  edges: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<MenuItem>;
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
  path: Scalars['String'];
  target: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


export type MenuItemChildItemsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  where: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

export type MenuItemToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection';
  edges: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<MenuItem>;
};

export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  node: Maybe<MenuItemLinkable>;
};

export type MenuItemObjectUnion = Post | Page | Category | Tag;

export type MenuItemToMenuConnectionEdge = {
  __typename?: 'MenuItemToMenuConnectionEdge';
  node: Maybe<Menu>;
};

export enum MenuItemNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type RootQueryToMenuItemConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  parentDatabaseId: Maybe<Scalars['Int']>;
  parentId: Maybe<Scalars['ID']>;
};

export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection';
  edges: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<MenuItem>;
};

export type RootQueryToMenuConnectionWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
  slug: Maybe<Scalars['String']>;
};

export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection';
  edges: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Menu>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Menu>;
};

export enum PageIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

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

export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection';
  edges: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Page>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Page>;
};

export type Plugin = Node & {
  __typename?: 'Plugin';
  author: Maybe<Scalars['String']>;
  authorUri: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
  pluginUri: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection';
  edges: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Plugin>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Plugin>;
};

export enum PostIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI',
  Slug = 'SLUG'
}

export enum PostFormatIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection';
  edges: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<PostFormat>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<PostFormat>;
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

export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  edges: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Post>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Post>;
};

export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  postsPerPage: Maybe<Scalars['Int']>;
};

export type RootQueryToEnqueuedScriptConnection = {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  edges: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedScriptConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedScript>;
};

export type RootQueryToEnqueuedStylesheetConnection = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  edges: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<EnqueuedStylesheet>;
};

export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
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

export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection';
  edges: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ContentRevisionUnion>;
};

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

export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  mediaItem: Maybe<SeoContentType>;
  page: Maybe<SeoContentType>;
  post: Maybe<SeoContentType>;
};

export type SeoContentType = {
  __typename?: 'SEOContentType';
  metaDesc: Maybe<Scalars['String']>;
  metaRobotsNoindex: Maybe<Scalars['Boolean']>;
  schema: Maybe<SeoPageInfoSchema>;
  schemaType: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
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

export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  url: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  url: Maybe<Scalars['String']>;
};

export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  baiduVerify: Maybe<Scalars['String']>;
  googleVerify: Maybe<Scalars['String']>;
  msVerify: Maybe<Scalars['String']>;
  yandexVerify: Maybe<Scalars['String']>;
};

export enum TagIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection';
  edges: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Tag>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Tag>;
};

export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection';
  edges: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Taxonomy>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Taxonomy>;
};

export enum TaxonomyIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export enum TermNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

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
  orderby: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts: Maybe<Scalars['Boolean']>;
  parent: Maybe<Scalars['Int']>;
  search: Maybe<Scalars['String']>;
  slug: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache: Maybe<Scalars['Boolean']>;
};

export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection';
  edges: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<TermNode>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<TermNode>;
};

export type Theme = Node & {
  __typename?: 'Theme';
  author: Maybe<Scalars['String']>;
  authorUri: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  screenshot: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  themeUri: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection';
  edges: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<Theme>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<Theme>;
};

export enum UserNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Email = 'EMAIL',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI',
  Username = 'USERNAME'
}

export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection';
  edges: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<UserRole>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<UserRole>;
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

export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order: Maybe<OrderEnum>;
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

export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export enum UsersConnectionSearchColumnEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection';
  edges: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  nodes: Maybe<Array<Maybe<User>>>;
  pageInfo: Maybe<WpPageInfo>;
};

export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<User>;
};

export type WritingSettings = {
  __typename?: 'WritingSettings';
  defaultCategory: Maybe<Scalars['Int']>;
  defaultPostFormat: Maybe<Scalars['String']>;
  useSmilies: Maybe<Scalars['Boolean']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  updateCategory: Maybe<UpdateCategoryPayload>;
  updatePostFormat: Maybe<UpdatePostFormatPayload>;
  updateTag: Maybe<UpdateTagPayload>;
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
  resetUserPassword: Maybe<ResetUserPasswordPayload>;
  restoreComment: Maybe<RestoreCommentPayload>;
  sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
  updateComment: Maybe<UpdateCommentPayload>;
  updateMediaItem: Maybe<UpdateMediaItemPayload>;
  updatePage: Maybe<UpdatePagePayload>;
  updatePost: Maybe<UpdatePostPayload>;
  updateSettings: Maybe<UpdateSettingsPayload>;
  updateUser: Maybe<UpdateUserPayload>;
};


export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
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


export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
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


export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
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

export enum MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH'
}

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

export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  clientMutationId: Maybe<Scalars['String']>;
  post: Maybe<Post>;
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

export type SendPasswordResetEmailInput = {
  clientMutationId: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  clientMutationId: Maybe<Scalars['String']>;
  user: Maybe<User>;
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
  readingSettingsPostsPerPage: Maybe<Scalars['Int']>;
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

export type CommentAuthor = Node & Commenter & {
  __typename?: 'CommentAuthor';
  databaseId: Scalars['Int'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted: Maybe<Scalars['Boolean']>;
  name: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};

export enum TimezoneEnum {
  AfricaAbidjan = 'AFRICA_ABIDJAN',
  AfricaAccra = 'AFRICA_ACCRA',
  AfricaAddisAbaba = 'AFRICA_ADDIS_ABABA',
  AfricaAlgiers = 'AFRICA_ALGIERS',
  AfricaAsmara = 'AFRICA_ASMARA',
  AfricaBamako = 'AFRICA_BAMAKO',
  AfricaBangui = 'AFRICA_BANGUI',
  AfricaBanjul = 'AFRICA_BANJUL',
  AfricaBissau = 'AFRICA_BISSAU',
  AfricaBlantyre = 'AFRICA_BLANTYRE',
  AfricaBrazzaville = 'AFRICA_BRAZZAVILLE',
  AfricaBujumbura = 'AFRICA_BUJUMBURA',
  AfricaCairo = 'AFRICA_CAIRO',
  AfricaCasablanca = 'AFRICA_CASABLANCA',
  AfricaCeuta = 'AFRICA_CEUTA',
  AfricaConakry = 'AFRICA_CONAKRY',
  AfricaDakar = 'AFRICA_DAKAR',
  AfricaDarEsSalaam = 'AFRICA_DAR_ES_SALAAM',
  AfricaDjibouti = 'AFRICA_DJIBOUTI',
  AfricaDouala = 'AFRICA_DOUALA',
  AfricaElAaiun = 'AFRICA_EL_AAIUN',
  AfricaFreetown = 'AFRICA_FREETOWN',
  AfricaGaborone = 'AFRICA_GABORONE',
  AfricaHarare = 'AFRICA_HARARE',
  AfricaJohannesburg = 'AFRICA_JOHANNESBURG',
  AfricaJuba = 'AFRICA_JUBA',
  AfricaKampala = 'AFRICA_KAMPALA',
  AfricaKhartoum = 'AFRICA_KHARTOUM',
  AfricaKigali = 'AFRICA_KIGALI',
  AfricaKinshasa = 'AFRICA_KINSHASA',
  AfricaLagos = 'AFRICA_LAGOS',
  AfricaLibreville = 'AFRICA_LIBREVILLE',
  AfricaLome = 'AFRICA_LOME',
  AfricaLuanda = 'AFRICA_LUANDA',
  AfricaLubumbashi = 'AFRICA_LUBUMBASHI',
  AfricaLusaka = 'AFRICA_LUSAKA',
  AfricaMalabo = 'AFRICA_MALABO',
  AfricaMaputo = 'AFRICA_MAPUTO',
  AfricaMaseru = 'AFRICA_MASERU',
  AfricaMbabane = 'AFRICA_MBABANE',
  AfricaMogadishu = 'AFRICA_MOGADISHU',
  AfricaMonrovia = 'AFRICA_MONROVIA',
  AfricaNairobi = 'AFRICA_NAIROBI',
  AfricaNdjamena = 'AFRICA_NDJAMENA',
  AfricaNiamey = 'AFRICA_NIAMEY',
  AfricaNouakchott = 'AFRICA_NOUAKCHOTT',
  AfricaOuagadougou = 'AFRICA_OUAGADOUGOU',
  AfricaPortoNovo = 'AFRICA_PORTO_NOVO',
  AfricaSaoTome = 'AFRICA_SAO_TOME',
  AfricaTripoli = 'AFRICA_TRIPOLI',
  AfricaTunis = 'AFRICA_TUNIS',
  AfricaWindhoek = 'AFRICA_WINDHOEK',
  AmericaAdak = 'AMERICA_ADAK',
  AmericaAnchorage = 'AMERICA_ANCHORAGE',
  AmericaAnguilla = 'AMERICA_ANGUILLA',
  AmericaAntigua = 'AMERICA_ANTIGUA',
  AmericaAraguaina = 'AMERICA_ARAGUAINA',
  AmericaArgentinaBuenosAires = 'AMERICA_ARGENTINA_BUENOS_AIRES',
  AmericaArgentinaCatamarca = 'AMERICA_ARGENTINA_CATAMARCA',
  AmericaArgentinaCordoba = 'AMERICA_ARGENTINA_CORDOBA',
  AmericaArgentinaJujuy = 'AMERICA_ARGENTINA_JUJUY',
  AmericaArgentinaLaRioja = 'AMERICA_ARGENTINA_LA_RIOJA',
  AmericaArgentinaMendoza = 'AMERICA_ARGENTINA_MENDOZA',
  AmericaArgentinaRioGallegos = 'AMERICA_ARGENTINA_RIO_GALLEGOS',
  AmericaArgentinaSalta = 'AMERICA_ARGENTINA_SALTA',
  AmericaArgentinaSanJuan = 'AMERICA_ARGENTINA_SAN_JUAN',
  AmericaArgentinaSanLuis = 'AMERICA_ARGENTINA_SAN_LUIS',
  AmericaArgentinaTucuman = 'AMERICA_ARGENTINA_TUCUMAN',
  AmericaArgentinaUshuaia = 'AMERICA_ARGENTINA_USHUAIA',
  AmericaAruba = 'AMERICA_ARUBA',
  AmericaAsuncion = 'AMERICA_ASUNCION',
  AmericaAtikokan = 'AMERICA_ATIKOKAN',
  AmericaBahia = 'AMERICA_BAHIA',
  AmericaBahiaBanderas = 'AMERICA_BAHIA_BANDERAS',
  AmericaBarbados = 'AMERICA_BARBADOS',
  AmericaBelem = 'AMERICA_BELEM',
  AmericaBelize = 'AMERICA_BELIZE',
  AmericaBlancSablon = 'AMERICA_BLANC_SABLON',
  AmericaBoaVista = 'AMERICA_BOA_VISTA',
  AmericaBogota = 'AMERICA_BOGOTA',
  AmericaBoise = 'AMERICA_BOISE',
  AmericaCambridgeBay = 'AMERICA_CAMBRIDGE_BAY',
  AmericaCampoGrande = 'AMERICA_CAMPO_GRANDE',
  AmericaCancun = 'AMERICA_CANCUN',
  AmericaCaracas = 'AMERICA_CARACAS',
  AmericaCayenne = 'AMERICA_CAYENNE',
  AmericaCayman = 'AMERICA_CAYMAN',
  AmericaChicago = 'AMERICA_CHICAGO',
  AmericaChihuahua = 'AMERICA_CHIHUAHUA',
  AmericaCostaRica = 'AMERICA_COSTA_RICA',
  AmericaCreston = 'AMERICA_CRESTON',
  AmericaCuiaba = 'AMERICA_CUIABA',
  AmericaCuracao = 'AMERICA_CURACAO',
  AmericaDanmarkshavn = 'AMERICA_DANMARKSHAVN',
  AmericaDawson = 'AMERICA_DAWSON',
  AmericaDawsonCreek = 'AMERICA_DAWSON_CREEK',
  AmericaDenver = 'AMERICA_DENVER',
  AmericaDetroit = 'AMERICA_DETROIT',
  AmericaDominica = 'AMERICA_DOMINICA',
  AmericaEdmonton = 'AMERICA_EDMONTON',
  AmericaEirunepe = 'AMERICA_EIRUNEPE',
  AmericaElSalvador = 'AMERICA_EL_SALVADOR',
  AmericaFortaleza = 'AMERICA_FORTALEZA',
  AmericaFortNelson = 'AMERICA_FORT_NELSON',
  AmericaGlaceBay = 'AMERICA_GLACE_BAY',
  AmericaGooseBay = 'AMERICA_GOOSE_BAY',
  AmericaGrandTurk = 'AMERICA_GRAND_TURK',
  AmericaGrenada = 'AMERICA_GRENADA',
  AmericaGuadeloupe = 'AMERICA_GUADELOUPE',
  AmericaGuatemala = 'AMERICA_GUATEMALA',
  AmericaGuayaquil = 'AMERICA_GUAYAQUIL',
  AmericaGuyana = 'AMERICA_GUYANA',
  AmericaHalifax = 'AMERICA_HALIFAX',
  AmericaHavana = 'AMERICA_HAVANA',
  AmericaHermosillo = 'AMERICA_HERMOSILLO',
  AmericaIndianaIndianapolis = 'AMERICA_INDIANA_INDIANAPOLIS',
  AmericaIndianaKnox = 'AMERICA_INDIANA_KNOX',
  AmericaIndianaMarengo = 'AMERICA_INDIANA_MARENGO',
  AmericaIndianaPetersburg = 'AMERICA_INDIANA_PETERSBURG',
  AmericaIndianaTellCity = 'AMERICA_INDIANA_TELL_CITY',
  AmericaIndianaVevay = 'AMERICA_INDIANA_VEVAY',
  AmericaIndianaVincennes = 'AMERICA_INDIANA_VINCENNES',
  AmericaIndianaWinamac = 'AMERICA_INDIANA_WINAMAC',
  AmericaInuvik = 'AMERICA_INUVIK',
  AmericaIqaluit = 'AMERICA_IQALUIT',
  AmericaJamaica = 'AMERICA_JAMAICA',
  AmericaJuneau = 'AMERICA_JUNEAU',
  AmericaKentuckyLouisville = 'AMERICA_KENTUCKY_LOUISVILLE',
  AmericaKentuckyMonticello = 'AMERICA_KENTUCKY_MONTICELLO',
  AmericaKralendijk = 'AMERICA_KRALENDIJK',
  AmericaLaPaz = 'AMERICA_LA_PAZ',
  AmericaLima = 'AMERICA_LIMA',
  AmericaLosAngeles = 'AMERICA_LOS_ANGELES',
  AmericaLowerPrinces = 'AMERICA_LOWER_PRINCES',
  AmericaMaceio = 'AMERICA_MACEIO',
  AmericaManagua = 'AMERICA_MANAGUA',
  AmericaManaus = 'AMERICA_MANAUS',
  AmericaMarigot = 'AMERICA_MARIGOT',
  AmericaMartinique = 'AMERICA_MARTINIQUE',
  AmericaMatamoros = 'AMERICA_MATAMOROS',
  AmericaMazatlan = 'AMERICA_MAZATLAN',
  AmericaMenominee = 'AMERICA_MENOMINEE',
  AmericaMerida = 'AMERICA_MERIDA',
  AmericaMetlakatla = 'AMERICA_METLAKATLA',
  AmericaMexicoCity = 'AMERICA_MEXICO_CITY',
  AmericaMiquelon = 'AMERICA_MIQUELON',
  AmericaMoncton = 'AMERICA_MONCTON',
  AmericaMonterrey = 'AMERICA_MONTERREY',
  AmericaMontevideo = 'AMERICA_MONTEVIDEO',
  AmericaMontserrat = 'AMERICA_MONTSERRAT',
  AmericaNassau = 'AMERICA_NASSAU',
  AmericaNewYork = 'AMERICA_NEW_YORK',
  AmericaNipigon = 'AMERICA_NIPIGON',
  AmericaNome = 'AMERICA_NOME',
  AmericaNoronha = 'AMERICA_NORONHA',
  AmericaNorthDakotaBeulah = 'AMERICA_NORTH_DAKOTA_BEULAH',
  AmericaNorthDakotaCenter = 'AMERICA_NORTH_DAKOTA_CENTER',
  AmericaNorthDakotaNewSalem = 'AMERICA_NORTH_DAKOTA_NEW_SALEM',
  AmericaNuuk = 'AMERICA_NUUK',
  AmericaOjinaga = 'AMERICA_OJINAGA',
  AmericaPanama = 'AMERICA_PANAMA',
  AmericaPangnirtung = 'AMERICA_PANGNIRTUNG',
  AmericaParamaribo = 'AMERICA_PARAMARIBO',
  AmericaPhoenix = 'AMERICA_PHOENIX',
  AmericaPortoVelho = 'AMERICA_PORTO_VELHO',
  AmericaPortAuPrince = 'AMERICA_PORT_AU_PRINCE',
  AmericaPortOfSpain = 'AMERICA_PORT_OF_SPAIN',
  AmericaPuertoRico = 'AMERICA_PUERTO_RICO',
  AmericaPuntaArenas = 'AMERICA_PUNTA_ARENAS',
  AmericaRainyRiver = 'AMERICA_RAINY_RIVER',
  AmericaRankinInlet = 'AMERICA_RANKIN_INLET',
  AmericaRecife = 'AMERICA_RECIFE',
  AmericaRegina = 'AMERICA_REGINA',
  AmericaResolute = 'AMERICA_RESOLUTE',
  AmericaRioBranco = 'AMERICA_RIO_BRANCO',
  AmericaSantarem = 'AMERICA_SANTAREM',
  AmericaSantiago = 'AMERICA_SANTIAGO',
  AmericaSantoDomingo = 'AMERICA_SANTO_DOMINGO',
  AmericaSaoPaulo = 'AMERICA_SAO_PAULO',
  AmericaScoresbysund = 'AMERICA_SCORESBYSUND',
  AmericaSitka = 'AMERICA_SITKA',
  AmericaStBarthelemy = 'AMERICA_ST_BARTHELEMY',
  AmericaStJohns = 'AMERICA_ST_JOHNS',
  AmericaStKitts = 'AMERICA_ST_KITTS',
  AmericaStLucia = 'AMERICA_ST_LUCIA',
  AmericaStThomas = 'AMERICA_ST_THOMAS',
  AmericaStVincent = 'AMERICA_ST_VINCENT',
  AmericaSwiftCurrent = 'AMERICA_SWIFT_CURRENT',
  AmericaTegucigalpa = 'AMERICA_TEGUCIGALPA',
  AmericaThule = 'AMERICA_THULE',
  AmericaThunderBay = 'AMERICA_THUNDER_BAY',
  AmericaTijuana = 'AMERICA_TIJUANA',
  AmericaToronto = 'AMERICA_TORONTO',
  AmericaTortola = 'AMERICA_TORTOLA',
  AmericaVancouver = 'AMERICA_VANCOUVER',
  AmericaWhitehorse = 'AMERICA_WHITEHORSE',
  AmericaWinnipeg = 'AMERICA_WINNIPEG',
  AmericaYakutat = 'AMERICA_YAKUTAT',
  AmericaYellowknife = 'AMERICA_YELLOWKNIFE',
  AntarcticaCasey = 'ANTARCTICA_CASEY',
  AntarcticaDavis = 'ANTARCTICA_DAVIS',
  AntarcticaDumontdurville = 'ANTARCTICA_DUMONTDURVILLE',
  AntarcticaMacquarie = 'ANTARCTICA_MACQUARIE',
  AntarcticaMawson = 'ANTARCTICA_MAWSON',
  AntarcticaMcmurdo = 'ANTARCTICA_MCMURDO',
  AntarcticaPalmer = 'ANTARCTICA_PALMER',
  AntarcticaRothera = 'ANTARCTICA_ROTHERA',
  AntarcticaSyowa = 'ANTARCTICA_SYOWA',
  AntarcticaTroll = 'ANTARCTICA_TROLL',
  AntarcticaVostok = 'ANTARCTICA_VOSTOK',
  ArcticLongyearbyen = 'ARCTIC_LONGYEARBYEN',
  AsiaAden = 'ASIA_ADEN',
  AsiaAlmaty = 'ASIA_ALMATY',
  AsiaAmman = 'ASIA_AMMAN',
  AsiaAnadyr = 'ASIA_ANADYR',
  AsiaAqtau = 'ASIA_AQTAU',
  AsiaAqtobe = 'ASIA_AQTOBE',
  AsiaAshgabat = 'ASIA_ASHGABAT',
  AsiaAtyrau = 'ASIA_ATYRAU',
  AsiaBaghdad = 'ASIA_BAGHDAD',
  AsiaBahrain = 'ASIA_BAHRAIN',
  AsiaBaku = 'ASIA_BAKU',
  AsiaBangkok = 'ASIA_BANGKOK',
  AsiaBarnaul = 'ASIA_BARNAUL',
  AsiaBeirut = 'ASIA_BEIRUT',
  AsiaBishkek = 'ASIA_BISHKEK',
  AsiaBrunei = 'ASIA_BRUNEI',
  AsiaChita = 'ASIA_CHITA',
  AsiaChoibalsan = 'ASIA_CHOIBALSAN',
  AsiaColombo = 'ASIA_COLOMBO',
  AsiaDamascus = 'ASIA_DAMASCUS',
  AsiaDhaka = 'ASIA_DHAKA',
  AsiaDili = 'ASIA_DILI',
  AsiaDubai = 'ASIA_DUBAI',
  AsiaDushanbe = 'ASIA_DUSHANBE',
  AsiaFamagusta = 'ASIA_FAMAGUSTA',
  AsiaGaza = 'ASIA_GAZA',
  AsiaHebron = 'ASIA_HEBRON',
  AsiaHongKong = 'ASIA_HONG_KONG',
  AsiaHovd = 'ASIA_HOVD',
  AsiaHoChiMinh = 'ASIA_HO_CHI_MINH',
  AsiaIrkutsk = 'ASIA_IRKUTSK',
  AsiaJakarta = 'ASIA_JAKARTA',
  AsiaJayapura = 'ASIA_JAYAPURA',
  AsiaJerusalem = 'ASIA_JERUSALEM',
  AsiaKabul = 'ASIA_KABUL',
  AsiaKamchatka = 'ASIA_KAMCHATKA',
  AsiaKarachi = 'ASIA_KARACHI',
  AsiaKathmandu = 'ASIA_KATHMANDU',
  AsiaKhandyga = 'ASIA_KHANDYGA',
  AsiaKolkata = 'ASIA_KOLKATA',
  AsiaKrasnoyarsk = 'ASIA_KRASNOYARSK',
  AsiaKualaLumpur = 'ASIA_KUALA_LUMPUR',
  AsiaKuching = 'ASIA_KUCHING',
  AsiaKuwait = 'ASIA_KUWAIT',
  AsiaMacau = 'ASIA_MACAU',
  AsiaMagadan = 'ASIA_MAGADAN',
  AsiaMakassar = 'ASIA_MAKASSAR',
  AsiaManila = 'ASIA_MANILA',
  AsiaMuscat = 'ASIA_MUSCAT',
  AsiaNicosia = 'ASIA_NICOSIA',
  AsiaNovokuznetsk = 'ASIA_NOVOKUZNETSK',
  AsiaNovosibirsk = 'ASIA_NOVOSIBIRSK',
  AsiaOmsk = 'ASIA_OMSK',
  AsiaOral = 'ASIA_ORAL',
  AsiaPhnomPenh = 'ASIA_PHNOM_PENH',
  AsiaPontianak = 'ASIA_PONTIANAK',
  AsiaPyongyang = 'ASIA_PYONGYANG',
  AsiaQatar = 'ASIA_QATAR',
  AsiaQostanay = 'ASIA_QOSTANAY',
  AsiaQyzylorda = 'ASIA_QYZYLORDA',
  AsiaRiyadh = 'ASIA_RIYADH',
  AsiaSakhalin = 'ASIA_SAKHALIN',
  AsiaSamarkand = 'ASIA_SAMARKAND',
  AsiaSeoul = 'ASIA_SEOUL',
  AsiaShanghai = 'ASIA_SHANGHAI',
  AsiaSingapore = 'ASIA_SINGAPORE',
  AsiaSrednekolymsk = 'ASIA_SREDNEKOLYMSK',
  AsiaTaipei = 'ASIA_TAIPEI',
  AsiaTashkent = 'ASIA_TASHKENT',
  AsiaTbilisi = 'ASIA_TBILISI',
  AsiaTehran = 'ASIA_TEHRAN',
  AsiaThimphu = 'ASIA_THIMPHU',
  AsiaTokyo = 'ASIA_TOKYO',
  AsiaTomsk = 'ASIA_TOMSK',
  AsiaUlaanbaatar = 'ASIA_ULAANBAATAR',
  AsiaUrumqi = 'ASIA_URUMQI',
  AsiaUstNera = 'ASIA_UST_NERA',
  AsiaVientiane = 'ASIA_VIENTIANE',
  AsiaVladivostok = 'ASIA_VLADIVOSTOK',
  AsiaYakutsk = 'ASIA_YAKUTSK',
  AsiaYangon = 'ASIA_YANGON',
  AsiaYekaterinburg = 'ASIA_YEKATERINBURG',
  AsiaYerevan = 'ASIA_YEREVAN',
  AtlanticAzores = 'ATLANTIC_AZORES',
  AtlanticBermuda = 'ATLANTIC_BERMUDA',
  AtlanticCanary = 'ATLANTIC_CANARY',
  AtlanticCapeVerde = 'ATLANTIC_CAPE_VERDE',
  AtlanticFaroe = 'ATLANTIC_FAROE',
  AtlanticMadeira = 'ATLANTIC_MADEIRA',
  AtlanticReykjavik = 'ATLANTIC_REYKJAVIK',
  AtlanticSouthGeorgia = 'ATLANTIC_SOUTH_GEORGIA',
  AtlanticStanley = 'ATLANTIC_STANLEY',
  AtlanticStHelena = 'ATLANTIC_ST_HELENA',
  AustraliaAdelaide = 'AUSTRALIA_ADELAIDE',
  AustraliaBrisbane = 'AUSTRALIA_BRISBANE',
  AustraliaBrokenHill = 'AUSTRALIA_BROKEN_HILL',
  AustraliaDarwin = 'AUSTRALIA_DARWIN',
  AustraliaEucla = 'AUSTRALIA_EUCLA',
  AustraliaHobart = 'AUSTRALIA_HOBART',
  AustraliaLindeman = 'AUSTRALIA_LINDEMAN',
  AustraliaLordHowe = 'AUSTRALIA_LORD_HOWE',
  AustraliaMelbourne = 'AUSTRALIA_MELBOURNE',
  AustraliaPerth = 'AUSTRALIA_PERTH',
  AustraliaSydney = 'AUSTRALIA_SYDNEY',
  EuropeAmsterdam = 'EUROPE_AMSTERDAM',
  EuropeAndorra = 'EUROPE_ANDORRA',
  EuropeAstrakhan = 'EUROPE_ASTRAKHAN',
  EuropeAthens = 'EUROPE_ATHENS',
  EuropeBelgrade = 'EUROPE_BELGRADE',
  EuropeBerlin = 'EUROPE_BERLIN',
  EuropeBratislava = 'EUROPE_BRATISLAVA',
  EuropeBrussels = 'EUROPE_BRUSSELS',
  EuropeBucharest = 'EUROPE_BUCHAREST',
  EuropeBudapest = 'EUROPE_BUDAPEST',
  EuropeBusingen = 'EUROPE_BUSINGEN',
  EuropeChisinau = 'EUROPE_CHISINAU',
  EuropeCopenhagen = 'EUROPE_COPENHAGEN',
  EuropeDublin = 'EUROPE_DUBLIN',
  EuropeGibraltar = 'EUROPE_GIBRALTAR',
  EuropeGuernsey = 'EUROPE_GUERNSEY',
  EuropeHelsinki = 'EUROPE_HELSINKI',
  EuropeIsleOfMan = 'EUROPE_ISLE_OF_MAN',
  EuropeIstanbul = 'EUROPE_ISTANBUL',
  EuropeJersey = 'EUROPE_JERSEY',
  EuropeKaliningrad = 'EUROPE_KALININGRAD',
  EuropeKiev = 'EUROPE_KIEV',
  EuropeKirov = 'EUROPE_KIROV',
  EuropeLisbon = 'EUROPE_LISBON',
  EuropeLjubljana = 'EUROPE_LJUBLJANA',
  EuropeLondon = 'EUROPE_LONDON',
  EuropeLuxembourg = 'EUROPE_LUXEMBOURG',
  EuropeMadrid = 'EUROPE_MADRID',
  EuropeMalta = 'EUROPE_MALTA',
  EuropeMariehamn = 'EUROPE_MARIEHAMN',
  EuropeMinsk = 'EUROPE_MINSK',
  EuropeMonaco = 'EUROPE_MONACO',
  EuropeMoscow = 'EUROPE_MOSCOW',
  EuropeOslo = 'EUROPE_OSLO',
  EuropeParis = 'EUROPE_PARIS',
  EuropePodgorica = 'EUROPE_PODGORICA',
  EuropePrague = 'EUROPE_PRAGUE',
  EuropeRiga = 'EUROPE_RIGA',
  EuropeRome = 'EUROPE_ROME',
  EuropeSamara = 'EUROPE_SAMARA',
  EuropeSanMarino = 'EUROPE_SAN_MARINO',
  EuropeSarajevo = 'EUROPE_SARAJEVO',
  EuropeSaratov = 'EUROPE_SARATOV',
  EuropeSimferopol = 'EUROPE_SIMFEROPOL',
  EuropeSkopje = 'EUROPE_SKOPJE',
  EuropeSofia = 'EUROPE_SOFIA',
  EuropeStockholm = 'EUROPE_STOCKHOLM',
  EuropeTallinn = 'EUROPE_TALLINN',
  EuropeTirane = 'EUROPE_TIRANE',
  EuropeUlyanovsk = 'EUROPE_ULYANOVSK',
  EuropeUzhgorod = 'EUROPE_UZHGOROD',
  EuropeVaduz = 'EUROPE_VADUZ',
  EuropeVatican = 'EUROPE_VATICAN',
  EuropeVienna = 'EUROPE_VIENNA',
  EuropeVilnius = 'EUROPE_VILNIUS',
  EuropeVolgograd = 'EUROPE_VOLGOGRAD',
  EuropeWarsaw = 'EUROPE_WARSAW',
  EuropeZagreb = 'EUROPE_ZAGREB',
  EuropeZaporozhye = 'EUROPE_ZAPOROZHYE',
  EuropeZurich = 'EUROPE_ZURICH',
  IndianAntananarivo = 'INDIAN_ANTANANARIVO',
  IndianChagos = 'INDIAN_CHAGOS',
  IndianChristmas = 'INDIAN_CHRISTMAS',
  IndianCocos = 'INDIAN_COCOS',
  IndianComoro = 'INDIAN_COMORO',
  IndianKerguelen = 'INDIAN_KERGUELEN',
  IndianMahe = 'INDIAN_MAHE',
  IndianMaldives = 'INDIAN_MALDIVES',
  IndianMauritius = 'INDIAN_MAURITIUS',
  IndianMayotte = 'INDIAN_MAYOTTE',
  IndianReunion = 'INDIAN_REUNION',
  PacificApia = 'PACIFIC_APIA',
  PacificAuckland = 'PACIFIC_AUCKLAND',
  PacificBougainville = 'PACIFIC_BOUGAINVILLE',
  PacificChatham = 'PACIFIC_CHATHAM',
  PacificChuuk = 'PACIFIC_CHUUK',
  PacificEaster = 'PACIFIC_EASTER',
  PacificEfate = 'PACIFIC_EFATE',
  PacificEnderbury = 'PACIFIC_ENDERBURY',
  PacificFakaofo = 'PACIFIC_FAKAOFO',
  PacificFiji = 'PACIFIC_FIJI',
  PacificFunafuti = 'PACIFIC_FUNAFUTI',
  PacificGalapagos = 'PACIFIC_GALAPAGOS',
  PacificGambier = 'PACIFIC_GAMBIER',
  PacificGuadalcanal = 'PACIFIC_GUADALCANAL',
  PacificGuam = 'PACIFIC_GUAM',
  PacificHonolulu = 'PACIFIC_HONOLULU',
  PacificKiritimati = 'PACIFIC_KIRITIMATI',
  PacificKosrae = 'PACIFIC_KOSRAE',
  PacificKwajalein = 'PACIFIC_KWAJALEIN',
  PacificMajuro = 'PACIFIC_MAJURO',
  PacificMarquesas = 'PACIFIC_MARQUESAS',
  PacificMidway = 'PACIFIC_MIDWAY',
  PacificNauru = 'PACIFIC_NAURU',
  PacificNiue = 'PACIFIC_NIUE',
  PacificNorfolk = 'PACIFIC_NORFOLK',
  PacificNoumea = 'PACIFIC_NOUMEA',
  PacificPagoPago = 'PACIFIC_PAGO_PAGO',
  PacificPalau = 'PACIFIC_PALAU',
  PacificPitcairn = 'PACIFIC_PITCAIRN',
  PacificPohnpei = 'PACIFIC_POHNPEI',
  PacificPortMoresby = 'PACIFIC_PORT_MORESBY',
  PacificRarotonga = 'PACIFIC_RAROTONGA',
  PacificSaipan = 'PACIFIC_SAIPAN',
  PacificTahiti = 'PACIFIC_TAHITI',
  PacificTarawa = 'PACIFIC_TARAWA',
  PacificTongatapu = 'PACIFIC_TONGATAPU',
  PacificWake = 'PACIFIC_WAKE',
  PacificWallis = 'PACIFIC_WALLIS',
  Utc_0 = 'UTC_0',
  Utc_0_30 = 'UTC_0_30',
  Utc_1 = 'UTC_1',
  Utc_10 = 'UTC_10',
  Utc_10_30 = 'UTC_10_30',
  Utc_11 = 'UTC_11',
  Utc_11_30 = 'UTC_11_30',
  Utc_12 = 'UTC_12',
  Utc_12_45 = 'UTC_12_45',
  Utc_13 = 'UTC_13',
  Utc_13_45 = 'UTC_13_45',
  Utc_14 = 'UTC_14',
  Utc_1_30 = 'UTC_1_30',
  Utc_2 = 'UTC_2',
  Utc_2_30 = 'UTC_2_30',
  Utc_3 = 'UTC_3',
  Utc_3_30 = 'UTC_3_30',
  Utc_4 = 'UTC_4',
  Utc_4_30 = 'UTC_4_30',
  Utc_5 = 'UTC_5',
  Utc_5_30 = 'UTC_5_30',
  Utc_5_45 = 'UTC_5_45',
  Utc_6 = 'UTC_6',
  Utc_6_30 = 'UTC_6_30',
  Utc_7 = 'UTC_7',
  Utc_7_30 = 'UTC_7_30',
  Utc_8 = 'UTC_8',
  Utc_8_30 = 'UTC_8_30',
  Utc_8_45 = 'UTC_8_45',
  Utc_9 = 'UTC_9',
  Utc_9_30 = 'UTC_9_30'
}

export type MenuItemsWhereArgs = {
  id: Maybe<Scalars['Int']>;
  location: Maybe<MenuLocationEnum>;
};

export type PostObjectUnion = Post | Page | MediaItem;

export type TermObjectUnion = Category | Tag | PostFormat;

export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  templateName: Maybe<Scalars['String']>;
};

export type CoverTemplate = ContentTemplate & {
  __typename?: 'CoverTemplate';
  templateName: Maybe<Scalars['String']>;
};

export type FullWidthTemplate = ContentTemplate & {
  __typename?: 'FullWidthTemplate';
  templateName: Maybe<Scalars['String']>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = (
  { __typename?: 'RootQuery' }
  & { posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'RootQueryToPostConnectionEdge' }
      & Pick<RootQueryToPostConnectionEdge, 'cursor'>
      & { node: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'slug' | 'title' | 'date'>
        & { featuredImage: Maybe<(
          { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' }
          & { node: Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'sourceUrl' | 'altText'>
          )> }
        )>, author: Maybe<(
          { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
          & { node: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'slug' | 'name'>
            & { avatar: Maybe<(
              { __typename?: 'Avatar' }
              & Pick<Avatar, 'url'>
            )> }
          )> }
        )>, tags: Maybe<(
          { __typename?: 'PostToTagConnection' }
          & { nodes: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'name'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);

export type PostDetailQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type PostDetailQuery = (
  { __typename?: 'RootQuery' }
  & { post: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'date'>
    & { author: Maybe<(
      { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
      & { node: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'slug' | 'name'>
        & { avatar: Maybe<(
          { __typename?: 'Avatar' }
          & Pick<Avatar, 'url'>
        )> }
      )> }
    )>, tags: Maybe<(
      { __typename?: 'PostToTagConnection' }
      & { nodes: Maybe<Array<Maybe<(
        { __typename?: 'Tag' }
        & Pick<Tag, 'id' | 'name'>
      )>>> }
    )> }
  )>, categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug' | 'name'>
    )>>> }
  )> }
);

export type PostSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostSlugsQuery = (
  { __typename?: 'RootQuery' }
  & { posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { nodes: Maybe<Array<Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'slug'>
    )>>> }
  )> }
);

export type CategorySlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type CategorySlugsQuery = (
  { __typename?: 'RootQuery' }
  & { categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'slug'>
    )>>> }
  )> }
);

export type CategoryDetailQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CategoryDetailQuery = (
  { __typename?: 'RootQuery' }
  & { categories: Maybe<(
    { __typename?: 'RootQueryToCategoryConnection' }
    & { nodes: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'name'>
    )>>> }
  )>, posts: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & { edges: Maybe<Array<Maybe<(
      { __typename?: 'RootQueryToPostConnectionEdge' }
      & Pick<RootQueryToPostConnectionEdge, 'cursor'>
      & { node: Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'slug' | 'title' | 'date'>
        & { featuredImage: Maybe<(
          { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' }
          & { node: Maybe<(
            { __typename?: 'MediaItem' }
            & Pick<MediaItem, 'sourceUrl' | 'altText'>
          )> }
        )>, author: Maybe<(
          { __typename?: 'NodeWithAuthorToUserConnectionEdge' }
          & { node: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'slug' | 'name'>
            & { avatar: Maybe<(
              { __typename?: 'Avatar' }
              & Pick<Avatar, 'url'>
            )> }
          )> }
        )>, tags: Maybe<(
          { __typename?: 'PostToTagConnection' }
          & { nodes: Maybe<Array<Maybe<(
            { __typename?: 'Tag' }
            & Pick<Tag, 'id' | 'name'>
          )>>> }
        )> }
      )> }
    )>>> }
  )> }
);


export const HomeDocument = gql`
    query Home {
  posts {
    edges {
      cursor
      node {
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
            altText
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
}
    `;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const PostDetailDocument = gql`
    query PostDetail($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
    date
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
  categories {
    nodes {
      id
      slug
      name
    }
  }
}
    `;
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
    query CategoryDetail($slug: String!) {
  categories(where: {slug: [$slug]}) {
    nodes {
      name
    }
  }
  posts(where: {categoryName: $slug}) {
    edges {
      cursor
      node {
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
            altText
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
}
    `;
export type CategoryDetailQueryResult = Apollo.QueryResult<CategoryDetailQuery, CategoryDetailQueryVariables>;