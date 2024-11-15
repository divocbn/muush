import { stripchat } from "@/lib/stripchat/client";

export type GetTagsResponse = {
  tagCategories: Array<{
    category: string
    order: string
    tags: Array<string>
    subCategoryIndex: number
  }>
  tagGroups: Array<{
    alias: string
    tags: Array<string>
  }>
  tagRelations: {
    couples: Array<[string, string, number, string, number]>
    girls: Array<[string, string, number, string, number]>
    men: Array<[string, string, number, string, number]>
    trans: Array<[string, string, number, string, number]>
  }
  tagStreamSpecifics: {
    asmr: string
    christmas: string
    fuckMachine: string
    halloween: string
    july4th: string
    oktoberfest: string
    specificInterracial: string
    specificPregnant: string
    specificsPiercing: string
    specificsTattoos: string
    subcultureBdsm: string
    valentines: string
    videoGames: string
  }
}


export async function getTags(): Promise<GetTagsResponse> {
  const response = await stripchat.get<GetTagsResponse>(
    "tags/config/static",
  ).json()

  return response;
}
