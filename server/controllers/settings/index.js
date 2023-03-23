import makeGetSettings from "./get-settings.js";

import { fetchSettings } from "../../use-cases/settings/index.js";

export const getSettings = makeGetSettings({fetchSettings})