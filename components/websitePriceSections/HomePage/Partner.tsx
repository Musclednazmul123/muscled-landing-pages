import Image from "next/image";

import Container from "@/components/layout/Container";
import FlexLayout from "@/components/layout/FlexLayout";
import BestPlaces from "public/bestPlaces.png";
import BestWkp from "public/bestWkp.png";
import HonorRoll from "public/honorRol.png";
import Meta from "public/meta.png";
import GoogleLogo from "@/components/ui/icons/GoogleLogo";

const Partner = () => {
  return (
    <Container spaceClass="p-3">
      <div>
        <FlexLayout justify="justify-center" spaceClass="space-x-20">
          <div>
            <Image
              objectFit="contain"
              src={BestPlaces}
              width={179}
              height={57}
              alt="partner logo"
            />
          </div>
          <div>
            <Image
              objectFit="contain"
              src={Meta}
              width={179}
              height={57}
              alt="partner logo"
            />
          </div>
          <div>
            <Image objectFit="contain" src={BestWkp} alt="partner logo" />
          </div>
          <div>
            <GoogleLogo />
          </div>
          <div>
            <Image objectFit="contain" src={HonorRoll} alt="partner logo" />
          </div>
        </FlexLayout>
      </div>
    </Container>
  );
};

export default Partner;
