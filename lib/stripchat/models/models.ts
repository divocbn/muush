import { stripchat } from "../client"

export type GetModelsResponse = {
  blocks: Array<{
    url: string
    id: string
    sortBy: string
    models: Array<{
      gender: string
      groupShowType: string
      groupShowTopic: string
      country: string
      broadcastGender: string
      avatarUrl: string
      genderGroup: string
      previewUrlThumbSmall: string
      username: string
      hlsPlaylist: string
      snapshotServer: string
      status: string
      snapshotTimestamp: string
      broadcastSettings: {
        width: number
        height: number
      }
      viewersCount: number
      topBestPlace: number
      publicRecordingsRate: number
      privateRate: number
      popularSnapshotTimestamp: number
      spyRate: number
      p2pRate: number
      p2pVoiceRate: number
      id: number
      hasGroupShowAnnouncement: boolean
      isNonNude: boolean
      isHd: boolean
      isVr: boolean
      isMobile: boolean
      isNew: boolean
      isLive: boolean
      isOnline: boolean
      isRecommended: boolean
      isTagVerified: boolean
      isModel: boolean
      isRotated: boolean
      isLovense: boolean
      isKiiroo: boolean
      doSpy: boolean
      doPrivate: boolean
      isAvatarApproved: boolean
      streamName: string
      presets: Array<string>
      blockId: string
    }>
    tagId?: string
  }>
  totalCount: number
  hasRecommendedModels: boolean
}

export async function getModels(
  limit: string,
  topLimit: string,
  favoritesLimit: string,
  primaryTag: string
): Promise<GetModelsResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set("limit", limit);
  searchParams.set("topLimit", topLimit);
  searchParams.set("favoritesLimit", favoritesLimit);
  searchParams.set("primaryTag", primaryTag);

  const response = await stripchat.get<GetModelsResponse>(
    "v2/models",
    { searchParams }
  ).json();

  return response;
}
