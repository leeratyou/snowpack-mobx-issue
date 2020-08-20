//import screen from 'utils/screen'

export enum SyncType {
  MyData = 'MyData',
  OthersData = 'OthersData',
  GroupData = 'MyGroupData',
  MessageResponse = 'MessageResponse'
}


export enum GroupType {
  REGULAR = 'regular',
  SUPPORT = 'support',
}
export enum ForchUpdateType {
  FORCE_UPDATE_NO = 'FORCE_UPDATE_NO',
  FORCE_UPDATE_OPTIONAL = 'FORCE_UPDATE_OPTIONAL',
  FORCE_UPDATE_MUST = 'FORCE_UPDATE_MUST'
}

export interface Group {
  description: string
  group: number
  parentGroupId?: number
  parentGroupType: GroupType
  oldIcon: string
  oldColor: string
  icon: string
  color: string
  fabColor?: string
  iconColor?: string
  category?: string
  subCategory?: string
  subCategoryKey?: string
  members: number
  name: string
  orgainzers: number,
  type: GroupType,
  subscriber: number,
  member: number,
  duplex: number,
  favourite: number,
  lastMessage?: Message,
  unread?: number
}

// export interface ExtendedUser extends User {
//   appSettings: {
//     isNew: boolean,
//     showPopups: boolean,
//     currentOrgId: number,
//     name: string,
//     authStep: screen,
//     isAuth: boolean,
//     loading: boolean,
//     isUserFromOldApp?: boolean,
//     appVersion: string | null | undefined,
//   }
// }

export interface NextVersion {
  versionNumber: string,
  forchUpdateType?: ForchUpdateType,
  askedOnceUser?: boolean
}

export interface Org {
  id: number,
  name: string
}
export interface UserGroup {
  group: Group
  user: number,
  userFullName: string,
  favourite: number,
  organizer: number,
  sender: number,
  member: number
  subscriber: number,
  hide: number,
  community: number,
  userData?: User,
  hasMessages?: boolean,
}

export interface Auth {
  phone?: string
  pinNumber?: string
}

export interface UserCommunity {
  community: Community
  director: number,
  operator: number,
  sms: number,
  hide: number,
  groups?: UserGroup[]
}

export interface MessageResponseRequest {
  user: number,
  message: number,
  status: StatusType,
  response: number
}

export enum StatusType { MUTED = 1, OUTGOING = 2, SENT = 3, FAILED = 4, RECIEVED = 5, READ = 6, RESPONSED = 7 }


export interface Message {
  create_guid: string
  created: Date | null
  expiry: Date | null
  schedule?: Date | null
  group: number
  message: number
  payload: string
  senderName?: string
  senderId: number
  updated: Date | null
  strategyType: string
}


export interface SurveyAnswer {
  id: string
  text: string
}

export interface PayloadRequest {
  files: any,
  payload: any,
  type: any,
  blob: any
}

export interface UserMessage {
  user: number
  message: Message
  status: StatusType
  response: number
}

export interface MessageDistribution {
  total: number
  push?: { total?: number, muted?: number, outgoing?: number, sent?: number, failed?: number, received?: number, read?: number, responded?: number, responses?: Response[] }
  application?: { total: number, sent?: number, read: number }
  email?: { total: number, outgoing?: number, sent?: number, failed?: number, received?: number }
  sms?: { total: number, outgoing?: number, sent?: number, failed?: number, received?: number }
}

export interface Response {
  index: number
  count: number
}

export interface MessageSummary {
  created: Date | null
  distribution: MessageDistribution
  message: number
  updated: Date | null
  valid: number
}
export interface MessageResponse {
  user: number
  userName: string
  response: number
  deliveryType: number
}

export interface Community {
  community: number
  name: string
}

export interface User {
  user: number,
  token?: any,
  version?: number,
  firstName: string,
  lastName: string,
  phones: string[],
  emails: string[],
  nickName: string,
  communities?: Community[]
  updated?: string
  displayName: string
  fullName: string
}

export interface SupportCallGroup {
  parentGroup: Group,
  groups: UserGroup[],
  community: number
}


export interface CommunityInfo {
  community: number,
  unreadGroup: number,
  unreadSupport: number
  groups: GroupInfo[],
  supports: GroupInfo[]
}
export interface GroupInfo {
  group: number,
  last_message: Message,
  unread: number
}

export interface CommunityUnreadCount {
  community: number,
  newMessageCount: number,
  newSupportCount: number
}


export interface GroupCategory {
  icon: string
  color: string
  iconColor: string
  category: string
  subCategory: string
  subCategoryKey: string
  fabColor: string
}

export interface PodUpdatePush {
  type: number,
  user: number,
  server: string,
  device: string,
  token: string,
  details: string,
  valid: boolean,
  app_version: string,
  op: string//always UpdatePush
}

export enum PushType {
  sms = 1,
  email = 2,
  notification = 3,
  silent = 4
}

