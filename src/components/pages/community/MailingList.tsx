import { Link } from "gatsby";
import * as React from "react";
import { SectionLayout } from "../../shared";

export const MailingList: React.FC = () => {
  return (
    <SectionLayout
      title="Join community mailing list"
      description="Stay up to date with the latest announcements and discussion about the Open Data Hub."
      actionTitle="Join community"
      actionLink="https://lists.opendatahub.io/admin/lists/"
      buttonProps={{ type: "button", variant: "primary", isLarge: true }}
    />
  )
}