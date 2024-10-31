import { stripchat } from "../client"
import { checkUsername } from "../users/check-username"

export type GetModelMembersResponse = {
  members: Array<{
    user: {
      userRanking: {
        league: string
        level: number
        isEx: boolean
      }
      id: number
      isDeleted: boolean
      username: string
      isOnline: boolean
      isBlocked: boolean
      isRegular: boolean
      isExGreen: boolean
      isUltimate: boolean
      isGreen: boolean
      hasVrDevice: boolean
      isModel: boolean
      isStudio: boolean
      isAdmin: boolean
      isSupport: boolean
      isApprovedModel: boolean
      hasAdminBadge: boolean
    }
    fanClubTier: any
    fanClubNumberMonthsOfSubscribed: number
  }>
  guests: number
  spies: number
  invisibles: number
  greens: number
  golds: number
  regulars: number
}

export async function GetModelMembers(
  username: string
): Promise<GetModelMembersResponse> {
  const response = await stripchat.get<GetModelMembersResponse>(
    `v2/models/username/${username}/members`,
  ).json()

  return response;
}
