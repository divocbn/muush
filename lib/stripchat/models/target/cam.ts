
export type ModelTargetCamResponse = {
  cam: {
    webRTCAppKey: string
    isPrivateScheduleEnabled: boolean
    isCamAvailable: boolean
    isOwnShow: boolean
    modelToken: string
    userToken: string
    streamName: string
    pixelateStreamSettings: {
      isEnabledOnBeta: boolean
      settings: Array<any>
    }
    streamStatus: any
    userStreamName: string
    userStreamNameExpiration: number
    privateMode: string
    show: any
    testimonialsCount: number
    groupShowAnnouncement: any
    groupShowUsersCount: number
    counterpart: any
    king: {
      id: number
      isDeleted: boolean
      name: string
      birthDate: any
      country: string
      region: string
      city: string
      cityId: number
      languages: Array<any>
      interestedIn: string
      bodyType: string
      specifics: Array<any>
      ethnicity: string
      hairColor: string
      eyeColor: string
      subculture: string
      description: string
      showProfileTo: string
      amazonWishlist: string
      age: number
      username: string
      previousUsername: string
      login: string
      domain: string
      gender: string
      genderDoc: string
      showTokensTo: string
      offlineStatus: string
      offlineStatusUpdatedAt: any
      isOnline: boolean
      isBlocked: boolean
      avatarUrl: string
      avatarUrlThumb: string
      isRegular: boolean
      isExGreen: boolean
      isGold: boolean
      isUltimate: boolean
      isGreen: boolean
      hasVrDevice: boolean
      isModel: boolean
      isStudio: boolean
      isAdmin: boolean
      isSupport: boolean
      isOfflinePrivateAvailable: boolean
      isApprovedModel: boolean
      isDisplayedModel: boolean
      hasAdminBadge: boolean
      isPromo: boolean
      isUnThrottled: boolean
      userRanking: {
        league: string
        level: number
        isEx: boolean
      }
      avatarStatus: string
    }
    kingInfo: {
      kingId: number
      kingUsername: string
      kingAmount: number
      fanClubTier: any
      fanClubNumberMonthsOfSubscribed: number
      selfAmount: number
    }
    kingSettings: {
      becomeKingThreshold: number
    }
    broadcastSettings: {
      width: number
      height: number
      isMuted: boolean
      broadcastType: string
      forcedBroadcastType: any
      forcedBroadcastPlayer: any
      protocol: string
      presets: {
        default: Array<string>
        vr: Array<any>
      }
      isSourcePreset: boolean
      bitrate: number
      keyInterval: number
      isBadStream: boolean
      originOnly: boolean
      videoCodec: string
      fps: number
      hasBFramesAlert: boolean
      isMobile: boolean
      bFrames: number
      gop: number
      fpsHistory: Array<number>
      isMicInactive: boolean
      videoStreamQuality: string
      videoNetworkQuality: string
      audioStreamQuality: string
      audioNetworkQuality: string
      mediaTransport: string
    }
    broadcastConfig: {
      flashFps: number
      flashWidth: number
      flashHeight: number
    }
    modelWarnings: Array<any>
    isLovenseEnabled: boolean
    lovense: {
      levels: {
        level1: {
          min: number
          max: number
          time: number
          rLevel: number
          vLevel: number
        }
        level2: {
          min: number
          max: number
          time: number
          rLevel: number
          vLevel: number
        }
        level3: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level4: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level5: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level6: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level7: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level8: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level9: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level10: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level11: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level12: {
          min: number
          max: number
          time: string
          rLevel: number
          vLevel: number
        }
        level13: {
          min: number
          max: string
          time: string
          rLevel: number
          vLevel: number
        }
      }
      special: {
        earthquake: {
          enable: boolean
          time: string
          tokens: string
          type: string
          token: string
        }
        fireworks: {
          enable: boolean
          time: string
          tokens: string
          type: string
          token: string
        }
        wave: {
          enable: boolean
          time: string
          tokens: string
          type: string
          token: string
        }
        pulse: {
          enable: boolean
          time: string
          tokens: string
          type: string
          token: string
        }
        random: {
          enable: boolean
          time: number
          levelBegin: number
          levelEnd: number
          tokens: string
          type: string
          token: string
        }
        randomTime: {
          enable: boolean
          time: number
          tokens: string
          type: string
          minTime: string
          maxTime: string
          level: number
          token: string
        }
        clear: {
          enable: boolean
          time: number
          tokens: string
          type: string
          token: string
        }
        pause: {
          enable: boolean
          time: string
          tokens: string
          type: string
          token: string
        }
        giveControl: {
          enable: boolean
          time: string
          tokensBegin: string
          tokensEnd: string
          type: string
          controlType: string
          tokenPerMin: string
          token: string
          expiredAt: number
        }
      }
      type: string
    }
    isNonNude: boolean
    isKiirooEnabled: boolean
    kiiroo: Array<any>
    tipMenu: {
      id: number
      createdAt: string
      isDeleted: boolean
      modelId: number
      isEnabled: boolean
      settings: Array<{
        activity: string
        price: number
      }>
    }
    tipMenuLanguage: string
    isCamActive: boolean
    isRefillAvailable: boolean
    refillPackage: any
    hasGroupShowReservation: boolean
    isStorePrivateRecordings: boolean
    isStorePublicRecordings: boolean
    goal: {
      description: string
      goal: number
      spent: number
      left: number
      isEnabled: boolean
    }
    topic: string
    whatsapp: Array<any>
    userFanClub: {
      isActive: boolean
      availableTiers: Array<string>
      subscription: any
      spyAccess: boolean
      exclusiveContentAccess: boolean
      description: string
      benefits: Array<{
        id?: string
        type: string
        tiers: {
          tier1: {
            isActive: boolean
            isEditable?: boolean
            discount?: number
          }
          tier2: {
            isActive: boolean
            isEditable?: boolean
            discount?: number
          }
          tier3: {
            isActive: boolean
            isEditable?: boolean
            discount?: number
          }
        }
        target?: string
      }>
    }
    isReferral: boolean
    isNotInterested: boolean
    plasma: {
      id: number
      createdAt: string
      isDeleted: boolean
      isEnabled: boolean
      pricePerMessage: number
      pricePerMedia: number
      isConnected: boolean
    }
    publicRecording: any
    canReport: boolean
    tipLeaderboardSettings: Array<any>
    broadcastSchedule: {
      nearest: {
        day: string
        period: Array<number>
      }
    }
    discounts: Array<any>
    newModelPromoSettings: {
      finishPromoDate: string
      testPeriodMinutesLeft: number
      isTestBroadcastPeriod: boolean
      promoPeriodDays: number
    }
    trialSpySessionAvailable: boolean
    isEpicGoalEnabled: boolean
  }
  user: {
    user: {
      id: number
      isDeleted: boolean
      kingId: number
      becomeKingThreshold: number
      favoritedCount: number
      whoCanChat: string
      spyRate: number
      privateRate: number
      p2pRate: number
      privateMinDuration: number
      p2pMinDuration: number
      privateOfflineMinDuration: number
      p2pOfflineMinDuration: number
      p2pVoiceRate: number
      groupRate: number
      ticketRate: number
      publicRecordingsRate: number
      status: string
      broadcastServer: string
      ratingPrivate: number
      ratingPrivateUsers: number
      topBestPlace: number
      hallOfFame: any
      statusChangedAt: string
      wentIdleAt: string
      publicActivities: Array<string>
      privateActivities: Array<string>
      exclusivePrivateActivities: Array<string>
      broadcastGender: string
      isHd: boolean
      isHls240p: boolean
      isVr: boolean
      is2d: boolean
      isCam: boolean
      isBlurProfile: boolean
      isNonNude: boolean
      isMlNonNude: boolean
      isDisableMlNonNude: boolean
      isHideFromNonNude: boolean
      isHideFromNonNudeOnError: boolean
      isHiddenFromTopModels: boolean
      isDelayUnpublish: boolean
      hasChatRestrictions: boolean
      isExternalApp: boolean
      isStorePrivateRecordings: boolean
      isStorePublicRecordings: boolean
      isAgeHidden: boolean
      isMainPersonCVCheckDisabled: boolean
      isMobile: boolean
      spyMinimum: number
      privateMinimum: number
      privateOfflineMinimum: number
      p2pMinimum: number
      p2pOfflineMinimum: number
      p2pVoiceMinimum: number
      previewUrl: string
      previewUrlThumbBig: string
      previewUrlThumbSmall: string
      doPrivate: boolean
      doP2p: boolean
      doSpy: boolean
      snapshotServer: string
      ratingPosition: number
      isNew: boolean
      isLive: boolean
      hallOfFamePosition: number
      isPornStar: boolean
      isNonNudeBlocked: boolean
      isExtendedPersonsCount: boolean
      name: string
      birthDate: string
      country: string
      region: string
      city: string
      cityId: number
      languages: Array<string>
      interestedIn: string
      bodyType: string
      specifics: Array<string>
      ethnicity: string
      hairColor: string
      eyeColor: string
      subculture: string
      description: string
      showProfileTo: string
      amazonWishlist: string
      age: number
      interests: Array<string>
      username: string
      previousUsername: string
      login: string
      domain: string
      gender: string
      genderDoc: string
      showTokensTo: string
      offlineStatus: string
      offlineStatusUpdatedAt: any
      isOnline: boolean
      isBlocked: boolean
      avatarUrl: string
      avatarUrlThumb: string
      isRegular: boolean
      isExGreen: boolean
      isGold: boolean
      isUltimate: boolean
      isGreen: boolean
      hasVrDevice: boolean
      isModel: boolean
      isStudio: boolean
      isAdmin: boolean
      isSupport: boolean
      isOfflinePrivateAvailable: boolean
      isApprovedModel: boolean
      isDisplayedModel: boolean
      hasAdminBadge: boolean
      isPromo: boolean
      isUnThrottled: boolean
      userRanking: any
      avatarStatus: string
      avatarUrlOriginal: string
      snapshotTimestamp: number
      contestGender: string
      availableDisplayedCountries: Array<string>
    }
    socialLinks: {
      twitter: string
      instagram: string
      snapchat: string
      facebook: string
      faphouse: string
      xhamster: string
      fancentro: string
      xhamsterPornstar: string
      myClub: string
    }
    socialLinksData: Array<any>
    canAddFriends: boolean
    isInFavorites: boolean
    isPmSubscribed: boolean
    isSubscribed: boolean
    subscriptionModel: any
    isProfileAvailable: boolean
    friendship: any
    isBanned: boolean
    isMuted: boolean
    isStudioModerator: boolean
    isStudioAdmin: boolean
    isBannedByKnight: boolean
    banExpiresAt: any
    banType: any
    banReason: any
    isGeoBanned: boolean
    photosCount: number
    videosCount: number
    currPosition: number
    currPoints: number
    modelTopPosition: {
      points: number
      position: number
      gender: string
      continent: string
    }
    tagGroups: Array<{
      id: string
      tags: Array<string>
    }>
    tags: Array<string>
    lastTagsAliases: Array<string>
    shouldShowOtherModels: boolean
    previewReviewStatus: string
    studioBlockTime: string
    hasNonNudeProfileAccess: boolean
    teaser: any
    blockedAt: any
    feedAvailable: boolean
    feed: {
      available: boolean
      hasNewPosts: boolean
    }
  }
}

export async function getModelTargetCam(username: string) {
  const response = await fetch(
    `/stripchat-api/v2/models/username/${username}/cam`
  );

  return await response.json() as ModelTargetCamResponse;
}
