import { HeartFilledIcon } from "@sanity/icons";

export const structure = (S) =>
  S.list()
    .id("root")
    .title("Content")
    .items([
      S.documentTypeListItem("project").title("Project").icon(HeartFilledIcon),
    ]);
