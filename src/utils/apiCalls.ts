// import { fetcher, newServerfetcher } from './fetcher'
// //import RNConfig from 'react-native-config'
// import {
//     UserGroup, Group, SyncType,
//     Message, PayloadRequest,
//     StatusType, UserCommunity,
//     MessageResponseRequest, PushType, User
// } from './models'
// import { intToBool } from './converts'
// //import { userStore, orgsStore } from 'stores'
// import {
//     Operation, RelateUserGroupOp, UpdateGroupOp, UpdatePushOp,
//     MessageResponseOp, DeleteMessageOp, MyGroupDataOp, SyncDataOp,
//     MessageOp, GetMessageResponsesOp, DeleteUserCommunityOp, OperationType, InviteUserOp, RegisterUserWebOp
// } from './operation'
// //import analytics from '@react-native-firebase/analytics'
//
//
// // const {
// //     API_MEKOMI_BASE_URL,
// //     X_ZUMO_APPLICATION,
// //     API_NEW_MEKOMI_BASE_URL
// // } = RNConfig || {}
//
// //TODO get from env
// const API_MEKOMI_BASE_URL = `https://mekomitesting.azure-mobile.net`
//
// const protocol = 'V-9.0'
//
// enum API_CALL_TYPE {
//     sync,
//     message
// }
//
// interface ApiCallResponse {
//     success: boolean,
//     error?: any,
//     data?: any
//
// }
//
//
// class ApiCalls {
//
//     deleteUserCommunities = async (userId: number, communities: UserCommunity[]) => {
//
//         const requestOps: DeleteUserCommunityOp[] =
//             communities.map((community, index) => {
//                 const requestOp: DeleteUserCommunityOp = {
//                     op: OperationType.DELETE_USER_COMMUNITY,
//                     id: index,
//                     community: community.community.community,
//                     user: userId,
//                 }
//                 return requestOp
//             })
//         const res = await this.generalApiCall(requestOps)
//         return res
//     }
//
//
//
//     // updatePushToken = async (tokenType: string, token: string) => {
//
//     //     const user = JSON.parse(await storage.get(USER_AUTH))
//     //     const pushUpdate: UpdatePushOp = {
//     //         type: PushType.notification,
//     //         user: user.user,
//     //         server: tokenType,//fcm or ifcm?
//     //         device: getUniqueId(),
//     //         token: token,
//     //         details: getModel(),
//     //         valid: true,
//     //         app_version: getVersion(),
//     //         op: OperationType.UPDATE_PUSH
//     //     }
//     //     const res = await this.generalApiCall([pushUpdate])
//     //     const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//     //     if (!res.success || failed?.length > 0) {
//     //         this.sendFirebaseAnalytics('firebase_push_token_error', user)
//     //     }
//     // }
//
//
//     // private sendFirebaseAnalytics = (eventName: string, user: number, syncType?: SyncType) => {
//     //     analytics().logEvent(eventName, { user_id: user, syncType: syncType })
//     // }
//
//
//
//
//
//     private generalApiCall = async (requestOps: Operation[], version?: number,
//         type: API_CALL_TYPE = API_CALL_TYPE.sync,
//         blobFileuri: string | null = null): Promise<ApiCallResponse> => {
//         try {
//             //TODO get user from user store
//             const user: User = { /// //  = userStore.getUser
//                 user: 600,
//                 token: "any",
//                 version: 0,
//                 firstName: "string",
//                 lastName: "string",
//                 phones: [],
//                 emails: [],
//                 nickName: "string",
//                 communities: [],
//                 displayName: "",
//                 fullName: "string"
//
//             }
//             const body = {
//                 'protocol': protocol,
//                 'version': version || user?.version,
//                 'requestOps': requestOps,
//                 'myID': user?.user,
//                 'myToken': user?.token
//             }
//             if (type == API_CALL_TYPE.message) {
//
//                 const formData = new FormData()
//                 formData.append('json', JSON.stringify({
//                     protocol: protocol,
//                     type: "application/json",
//                     myId: user?.user,
//                     myToken: user?.token,
//                     version: user?.version,
//                     requestOps: requestOps
//                 }))
//                 if (blobFileuri) {
//                     if (blobFileuri.endsWith('.pdf')) {
//                         blobFileuri = 'file://' + blobFileuri //TODO check it on IOS
//                         formData.append("file", { uri: blobFileuri, type: 'application/pdf', name: "image.png" })
//                     } else {
//                         formData.append("file", { uri: blobFileuri, type: 'image/jpeg', name: "image.png" })
//                     }
//                 }
//                 const response = await fetch(API_MEKOMI_BASE_URL + "/api/Message", {
//                     method: 'POST',
//                     headers: {
//                     },
//                     body: formData
//                 })
//                 const res = await response.json()
//
//                 if (!response.ok) {
//                     return { success: false, error: response.statusText }
//                 }
//                 const data = JSON.parse(res)
//                 return { success: true, data: data }
//
//             } else {
//                 const res = await fetcher().post(body).from().sync.plz()
//                 if (!res.success) {
//                     return { success: false, error: res.data }
//                 }
//                 const data = JSON.parse(res.data)
//                 return { success: res.success, data: data }
//             }
//         } catch (e) {
//             console.log('genralApiCall new failed get exception=', e)
//             return { success: false, error: e }
//         }
//
//     }
//
//
//     updateGroup = async (userGroup: UserGroup) => {
//
//         const requestOps: UpdateGroupOp = {
//
//             op: OperationType.UPDATE_GROUP,
//             id: 1,
//             community: userGroup.community,
//             group: userGroup.group.group,
//             name: userGroup.group.name,
//             description: userGroup.group.description,
//             icon: userGroup.group.oldIcon,
//             color: userGroup.group.oldColor,
//             duplex: userGroup.group.duplex,
//             subscriber: userGroup.group.subscriber,
//             member: userGroup.group.member % 2,
//             favourite: userGroup.group.favourite
//         }
//         const res = await this.generalApiCall([requestOps])
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             //TODO api call
//         }
//
//     }
//
//     updateUserGroups = async (userGroups: UserGroup[], userCommunity: UserCommunity) => {
//
//         const isAdmin = (userGroup: UserGroup) => { return Boolean((userGroup.organizer % 2) || Boolean((userCommunity.director || 0) % 2)) }
//         const adminGroups = userGroups.filter(userGroup => isAdmin(userGroup))
//         const memberGroups = userGroups.filter(userGroup => !isAdmin(userGroup))
//         const adminRequestOps = adminGroups.map((userGroup) => {
//             const requestOp: RelateUserGroupOp = {
//                 op: OperationType.RELATED_USER_GROUP,
//                 id: 1,
//                 member: intToBool(userGroup.member),
//                 organizer: intToBool(userGroup.organizer),
//                 sender: intToBool(userGroup.sender),
//                 subscriber: intToBool(userGroup.subscriber),
//                 favourite: intToBool(userGroup.favourite),
//                 group: userGroup.group.group,
//                 user: userGroup.user
//             }
//             return requestOp
//         })
//         const membersRequestOps = memberGroups.map((userGroup) => {
//             const requestOp: RelateUserGroupOp = {
//                 op: OperationType.RELATED_USER_GROUP,
//                 id: 1,
//                 member: intToBool(userGroup.member),
//                 subscriber: intToBool(userGroup.subscriber),
//                 favourite: intToBool(userGroup.favourite),
//                 group: userGroup.group.group,
//                 user: userGroup.user
//             }
//             if (intToBool(userGroup.sender)) {
//                 requestOp.sender = intToBool(userGroup.sender)
//             }
//             return requestOp
//         })
//         const res = await this.generalApiCall([...membersRequestOps, ...adminRequestOps])
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             //TODO api call
//         }
//     }
//
//
//     syncGroupData = async (groupId: number, version: number) => {
//
//
//         const requestOp: MyGroupDataOp =
//         {
//             op: OperationType.MY_GROUP_DATA,
//             id: 1,
//             groupid: groupId,
//         }
//         const res = await this.generalApiCall([requestOp], version, API_CALL_TYPE.sync)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             // this.sendFirebaseAnalytics('sync_data_error', user, SyncType.GroupData)
//             console.log("syncGroupData error")
//         }
//         return res
//     }
//
//     syncData = async (data: any, version: number, syncType: SyncType) => {
//
//
//         const requestOp: SyncDataOp =
//         {
//             op: syncType == SyncType.MyData ? OperationType.MY_DATA : OperationType.OTHERS_DATA,
//             id: 1,
//             communities: data[1],
//             groups: data[0],
//             includeTokens: syncType === SyncType.OthersData ? true : false
//         }
//         const res = await this.generalApiCall([requestOp], version, API_CALL_TYPE.sync)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             //this.sendFirebaseAnalytics('sync_data_error', user, syncType)
//             console.log("syncData error ")
//         }
//         return res
//     }
//
//
//
//     getMessageResponses = async (messages: number[], version: number) => {
//
//         const requestOps = messages.map((message, index) => {
//             const requestOp: GetMessageResponsesOp = {
//                 op: OperationType.GET_MESSAGE_RESPONSES,
//                 id: index + 1,
//                 message: message,
//             }
//             return requestOp
//         })
//         const res = await this.generalApiCall(requestOps, version, API_CALL_TYPE.sync)
//
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId > 0 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             // this.sendFirebaseAnalytics('sync_data_error', user, SyncType.MessageResponse)
//             console.log("getMessageResponses error")
//
//         }
//
//         return res
//
//     }
//
//
//     deleteMessage = async (messageId: number) => {
//         const requestOp: DeleteMessageOp =
//         {
//             op: OperationType.DELETE_MESSAGE,
//             id: 1,
//             message: messageId,
//         }
//         const res = await this.generalApiCall([requestOp], API_CALL_TYPE.sync)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             //TODO api call
//         }
//
//     }
//
//     messageRequest = async (message: Message, group: Group, payloadRequest: PayloadRequest, blobFileuri: string | null = null) => {
//         let requestOp: MessageOp = {
//             op: message.message && message.message > 0 ? OperationType.UPDATE_MESSAGE : OperationType.CREATE_MESSAGE,
//             group: (group.group || 0) < 0 ? group.parentGroupId || 0 : group.group || 0,
//             sender: message.senderId,
//             type: message.strategyType,
//             payload: message.payload,
//             expiry: message.expiry ? message.expiry.toISOString() : undefined,
//             guid: message.create_guid,
//             message: message.message > 0 ? message.message : undefined,
//             schedule: message.schedule ? message.schedule.toISOString() : undefined,
//             id: 1
//         }
//
//
//         if (payloadRequest.files) {
//             requestOp.files = payloadRequest.files
//         }
//         if (payloadRequest.type) {
//             requestOp.type = payloadRequest.type
//         }
//
//         const res = await this.generalApiCall([requestOp], 0, API_CALL_TYPE.message, blobFileuri)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             //TODO api call
//         }
//         return res
//
//     }
//
//
//     messageResponses = async (messageResponses: MessageResponseRequest[]) => {
//         const requestOps: MessageResponseOp[] = messageResponses.map((messageResponse: MessageResponseRequest, index) => {
//             const messageResponseOp: MessageResponseOp = {
//                 op: OperationType.MESSAGE_RESPONSE,
//                 user: messageResponse.user,
//                 message: messageResponse.message,
//                 status: messageResponse.status,
//                 response: messageResponse.response,
//                 id: index
//             }
//             return messageResponseOp
//         })
//
//         const res = await this.generalApiCall(requestOps, API_CALL_TYPE.sync)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId > 1 && r.status != "ok")
//
//         if (!res.success || failed?.length > 0) {
//             //TODO api call
//         }
//
//     }
//
//     inviteUser = async (phone: string) => {
//
//         const requestOp: InviteUserOp =
//         {
//             op: OperationType.INVITE_USER,
//             id: 1,
//             user: -1,
//             phoneOrEmail: phone,
//             deviceType: 'web'//TOD Change it later!!
//         }
//         const res = await this.generalApiCall([requestOp], 0)
//         const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//         if (!res.success || failed?.length > 0) {
//             // api call
//             return { status: false, data: failed?.length > 0 ? failed[0] : res.error }
//         }
//         return { status: true }
//
//     }
//
//
//
//
//     authCode = async (code: string, phone: string) => {
//         try {
//             const requestOp: RegisterUserWebOp =
//             {
//                 op: OperationType.REGISTER_USER_WEB,
//                 id: 1,
//                 TeleOrEmail: phone,
//                 token: code
//             }
//             const res = await this.generalApiCall([requestOp], 0)
//             const version = res.data?.version
//             const failed: any[] = res.data?.results?.filter((r: any) => r.requestId == 1 && r.status != "ok")
//             if (!res.success || failed?.length > 0) {
//                 //TODO api call
//                 return { status: false, results: failed?.length > 0 ? failed[0] : res.error, version: version }
//             }
//             return { status: true, results: res.data.results?.find((r: any) => r.requestId == 1 && r.status == "ok"), version: version }
//
//         }
//         catch (e) {
//             console.log('authCode failed get exception=', e)
//             return { status: false, data: e }
//         }
//     }
//
//
//     getOrgs = async (userId: string) => {
//         try {
//             const res = await newServerfetcher().get().from().getOrgs.with(userId).plz()
//             if (res.success) {
//                 return res.data
//             } else {
//                 console.log('getOrgs failed')
//                 return []
//             }
//         }
//         catch (e) {
//             console.log('getOrgs failed get exception=', e)
//             throw e
//         }
//     }
// }
//
//
// const apiCalls = new ApiCalls()
// export default apiCalls
