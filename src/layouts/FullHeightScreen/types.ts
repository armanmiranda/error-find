export interface TFullHeightScreenProps {
  headerProps: THeaderProps;
  footerProps?: TFooterProps;
};

export interface THeaderProps {
  title?: string;
  subtitle?: string;
}

export interface TFooterProps {
  label: string;
  linkUrl: string;
}
