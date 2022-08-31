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
