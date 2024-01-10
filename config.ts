import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_kids");

config.google_drive = {
  sheets_folder_ids: ["1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU"],
  assets_folder_ids: ["1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9"],
};

config.android = {
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-kids-app-content.git",
  content_tag_latest: "1.1.5",
};

config.api.db_name = "plh_kids"

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids";
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.APP_THEMES.defaultThemeName = "professional";
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
  
export default config;
