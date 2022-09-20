import React from 'react';
import {
  SeoCopyWritingServicesObj,
  SEOEcommerceCopywritingServicesObj,
  Long_FormCopyWritingServicesObj,
  OnlineGuideCopywritingServicesObj,
  ContentRefreshCopywritingServicesObj,
  ExpertCopyObj,
} from '../../../Constants/tableConstants';

import FeatureTable from '../../FeatureTable';
export default function SeoCopywritingServices() {
  return (
    <>
      <FeatureTable tableData={SeoCopyWritingServicesObj} />
      <FeatureTable tableData={SEOEcommerceCopywritingServicesObj} />
      <FeatureTable tableData={Long_FormCopyWritingServicesObj} />
      <FeatureTable tableData={OnlineGuideCopywritingServicesObj} />
      <FeatureTable tableData={ContentRefreshCopywritingServicesObj} />
      <FeatureTable tableData={ExpertCopyObj} />
    </>
  );
}
