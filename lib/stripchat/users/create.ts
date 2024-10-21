import { stripchat } from "@/lib/stripchat/client";
import { getConfigInitial } from "@/lib/stripchat/config/initial";

export async function createUser(): Promise<boolean> {
  console.log("asdasd");

  const initial = await getConfigInitial();
  const response = await stripchat.post(
    `v6/users`,
    {
      json: {
        "login": "miaumiaumasd",
        "password": "jayjo123",
        "referralModelName": null,
        "fingerprint": "6fd9892880cc77665e0187ac752db407",
        "fingerprintV2": "u2OZOX6JFOLWn0LE9pB6",
        "modelName": "",
        "isUnThrottled": true,
        "hasActionParam": false,
        "source": "SignUp_PageUser",
        "v": 1,
        "isRecommendationDisabled": false,
        "pixelsPassed": 993,
        "clicks": 4,
        "timeSpent": 5.382,
        "ampl": {
          "ep": {
            "pageSection": "none",
            "isActivityCategoryPage": false,
            "landingParamsAction": "",
            "tagSource": "index",
            "tag": "",
            "source": "SignUp_PageUser",
            "modelName": "",
            "device": "desktop",
            "hadTranslateButton": false,
            "isTipMenuTranslated": false
          },
          "device_id": "7dwMMoAXi8NbRN7zRIIzGQ",
          "platform": "Web",
          "session_id": 1729452055044
        },
        "timezoneOffset": -120,
        "an": [
          {
            "ek.platformVersion": "0acd7c09",
            "ek.tabId": "d25816547fb440d883f340ef66dde01fe70e0e5e1637788c4204cd9f3996",
            "ek.timestampCreated": 1729455062,
            "ek.deviceFlags": "1484784|11001110000001000",
            "ek.httpHost": "de.stripchat.global",
            "ek.httpPath": "/signup/user",
            "ek.isDocumentHidden": 0,
            "ek.isTabFocused": 1,
            "ek.pageClass": "uncategorized",
            "g.guestIdUnique": "e6ae629fc440014b7005a8ad0c519cdd2497175af96b8e5842b292ca37b80d61",
            "eventName": "sue",
            "ek.contractVersion": "v0.2.1",
            "ek.eventId": "a1da150d-c242-4e1d-a3ec-19bd38e44236"
          }
        ],
        "uniq": "7q4lz83bn6k2ocgf",

        csrfNotifyTimestamp: initial.initial.client.csrfNotifyTimestamp,
        csrfTimestamp: initial.initial.client.csrfTimestamp,
        csrfToken: initial.initial.client.csrfToken
      },
    }
  ).json();

  console.log("Response", response);

  return true;
}
