export interface Props{
    routes:string[] | undefined
  }
  
  
export interface returnServerSiderProps{
    props:Props
  }
  
export interface ServerProps{
    query:{
      url:string
    }
    }

export interface tableContentProps{
  tableTitle:string,
  tableIcon:JSX.Element,
  tableWidth:string,
  subSection?:{
      title:string,
      link:string,
  },
  list:{
  items:string[],    
  itemsGap?:number,
  padding?:{
  t:string,
  r:string,
  b:string,
  l:string,    
  },
  fontSize?:string,
  }
  }
  
export interface detailGeneratorProps{
  heading:string,
  paragraphs:string[],
  }    

export interface WebDevCounterProps {
  num:number,
}

export interface ImportantLinkItemData{
  heading:string,
  listItems:string[]
}

export interface heroSectionProps{
  heroData:{
    heading:string,
    paragraph:string,
    headingWidth?:string,
  },
  serviceData?:string[],
  routesVisited:string[],
  }

export interface partnersSectionProps{
  variant:string,
  heading:string,
  logos:{
    sources:string[],
    width:string,
    height:string,
  },
  }
  export interface testimonialData{
    details:string,
    owner:string,
    company:string,
  }
  
  export interface testimonialMedia{
    url:string,
  }
  
  export interface testimonialsSectionProps{
    variant:string,
    testimonialData:testimonialData,
    media:testimonialMedia
    }