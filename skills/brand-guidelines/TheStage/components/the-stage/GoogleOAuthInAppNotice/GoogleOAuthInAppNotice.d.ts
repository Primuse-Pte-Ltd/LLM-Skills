import * as React from 'react';

/**
 * GoogleOAuthInAppNotice — from @thestage/ui@0.1.0.
 */
export interface GoogleOAuthInAppNoticeProps {
  className?: string;
  /** Try opening Safari/Chrome automatically on first visit in this tab. */
  autoOpen?: boolean;
  onBlockedChange?: (blocked: boolean) => void;
}

export declare const GoogleOAuthInAppNotice: React.ComponentType<GoogleOAuthInAppNoticeProps>;
