export interface SimpleCardProps {
  itemTitle: string;
  itemPara: string;
  buttonLabel: string;
}
export interface AdditionalSocailMediaProps {
  AdditionalSocailMediaMetaData: {
    heading: string;
    para: string;
    items: SimpleCardProps[];
  };
}

export interface CardHeaderDataProps {
  title: string;
  rate: string;
  type?: "basic" | "premium" | "ultimate";
  description?: string;
  iconItems: { [key: string]: string }[];
  isFooterDescription?: boolean;
  footerDescition?: string;
  buttonLabel?: string;
}
