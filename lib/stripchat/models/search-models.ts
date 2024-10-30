import { stripchat } from "@/lib/stripchat/client";

export type SearchModelsResponse = {
  availableGroups: {
    activity: boolean
    interest: boolean
    tipMenu: boolean
    topic: boolean
  }
  models: Array<{
    id: number
    username: string
    topBestPlace: number
    hallOfFame: any
    isMobile: boolean
    isVr: boolean
    previewUrl: string
    previewUrlThumbBig: string
    previewUrlThumbSmall: string
    avatarUrl: string
    status: string
    country: string
    hasPlasma: boolean
    broadcastGender: string
    gender: string
    p2pRate: number
    privateRate: number
    doPrivate: boolean
    doSpy: boolean
    isExternalApp: boolean
    isHd: boolean
    isLive: boolean
    isOnline: boolean
    isLovense: boolean
    isKiiroo: boolean
    snapshotTimestamp: string
    popularSnapshotTimestamp: number
    snapshotServer: string
    viewersCount: number
    privateActivity: string
    interest: string
    tipMenu: {
      activity: string
      price: number
    }
    topic: string
    isNew: boolean
    upForPrivate: boolean
    previousUsername: string
    isModel: boolean
    privateActivityRate: number
  }>
  totalCount: number
}


export async function searchModels(
  query: string,
  limit: string,
  primaryTag: string
): Promise<SearchModelsResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set("query", query);
  searchParams.set("limit", limit);
  searchParams.set("primarytag", primaryTag);

  const response = await stripchat.get<SearchModelsResponse>(
    `v4/models/search/suggestion`,
    { searchParams }
  ).json();

  return response;
}
