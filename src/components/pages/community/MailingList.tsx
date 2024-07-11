import * as React from "react";
import { SectionLayout } from "../../shared";

export const MailingList: React.FC = () => {
  return (
    <SectionLayout
      title="Join community mailing list"
      description="Stay up to date with the latest announcements and discussion about the Open Data Hub."
      actionTitle="Join mailing list"
      actionLink="https://lists.opendatahub.io/admin/lists/announcements.lists.opendatahub.io/"
      buttonProps={{ type: "button", variant: "primary", isLarge: true }}
    />
  )
}