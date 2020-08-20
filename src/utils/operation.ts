
interface Op {
    op: OperationType;
    id?: number;

}

export enum OperationType {
    MESSAGE_RESPONSE = 'MessageResponse',
    UPDATE_MESSAGE = 'UpdateMessage',
    CREATE_MESSAGE = 'CreateMessage',
    REGISTER_USER_WEB = 'RegisterUserWeb',
    RELATED_USER_GROUP = 'RelateUserGroup',
    UPDATE_GROUP = 'UpdateGroup',
    UPDATE_PUSH = 'UpdatePush',
    MY_GROUP_DATA = 'MyGroupData',
    DELETE_USER_COMMUNITY = 'DeleteUserCommunity',
    DELETE_MESSAGE = 'DeleteMessage',
    INVITE_USER = 'InviteUser',
    GET_MESSAGE_RESPONSES = 'GetMessageResponses',
    MY_DATA = 'MyData',
    OTHERS_DATA = 'OthersData',
}

export interface MessageResponseOp extends Op {
    user: number
    message: number
    status: number
    response: number
}

export interface MessageOp extends Op {
    group: number
    sender: number
    type: string
    payload: string
    expiry?: string
    guid: string
    message: number | undefined
    schedule?: string
    files?: any[]
}

export interface RegisterUserWebOp extends Op {

    TeleOrEmail: string
    token: string
}

export interface RelateUserGroupOp extends Op {

    member: boolean
    organizer?: boolean
    sender?: boolean
    subscriber?: boolean
    favourite?: boolean
    group: number
    user: number
}


export interface UpdateGroupOp extends Op {
    community: number
    group: number
    name: string
    description: string
    icon: string,
    color: string
    duplex: number
    subscriber: number
    member: number
    favourite: number
}
export interface UpdatePushOp extends Op {

    type: number
    user: string
    server: string
    device: string
    token: string
    details: string
    valid: boolean
    app_version: string

}

export interface MyGroupDataOp extends Op {
    groupid: number
}


export interface SyncDataOp extends Op {
    communities: any
    groups: any
    includeTokens: boolean
}

export interface DeleteUserCommunityOp extends Op {
    community: number
    user: number
}

export interface DeleteMessageOp extends Op {
    message: number
}

export interface InviteUserOp extends Op {

    user: number
    phoneOrEmail: string
    deviceType: string
}

export interface GetMessageResponsesOp extends Op {
    message: number
}

export type Operation = InviteUserOp | DeleteMessageOp |
    DeleteUserCommunityOp | UpdatePushOp | MyGroupDataOp |
    UpdateGroupOp | RelateUserGroupOp | RegisterUserWebOp |
    MessageOp | MessageResponseOp | GetMessageResponsesOp | SyncDataOp




