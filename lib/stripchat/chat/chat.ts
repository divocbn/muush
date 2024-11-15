import { stripchat } from "../client";

export type GetChatResponse = {
  messages: Array<{
    id: number
    createdAt: string
    isDeleted: boolean
    cacheId: string
    modelId: number
    type: string
    details: {
      kingId?: number
      fanClubTier: any
      fanClubNumberMonthsOfSubscribed: number
      lovenseDetails?: {
        type: string
        status: string
        text: string
        detail: {
          name: string
          amount: number
          time: number
          power: string
        }
        additionalData: {
          isKing: boolean
          isKnight: boolean
          isStudioModerator: boolean
          isStudioAdmin: boolean
        }
        clientUserInfo: {
          id: number
          username: string
          isRegular: boolean
          isExGreen: boolean
          isUltimate: boolean
          isGreen: boolean
          isModel: boolean
          isStudio: boolean
          isAdmin: boolean
          isSupport: boolean
          isDeleted: boolean
          isBlocked: boolean
          isOnline: boolean
          userRanking: {
            league: string
            level: number
            isEx: boolean
          }
          hasAdminBadge: boolean
          hasVrDevice: boolean
        }
      }
      body?: string
      amount?: number
      isAnonymous?: boolean
      source?: string
      tipData: any
      goal?: number
      isEnabled?: boolean
    }
    userData: {
      id: number
      username: string
      isRegular: boolean
      isExGreen: boolean
      isUltimate: boolean
      isGreen: boolean
      isModel: boolean
      isStudio: boolean
      isAdmin: boolean
      isSupport: boolean
      isDeleted: boolean
      isBlocked: boolean
      isOnline: boolean
      userRanking?: {
        league: string
        level: number
        isEx: boolean
      }
      hasAdminBadge: boolean
      hasVrDevice: boolean
    }
    additionalData: {
      isKing: boolean
      isKnight: boolean
      isStudioModerator: boolean
      isStudioAdmin: boolean
    }
  }>
}

export async function getChat(username: string): Promise<GetChatResponse> {
  const response = await stripchat.get<GetChatResponse>(
    `v2/models/username/${username}/chat`
  ).json();

  return response;
}
