import commonClasses from "@/utils/commonClasses.module.css";
import {TitleWithDescription} from "@/components/Common/TitleWithDescription";
import {Center, Container, Divider, Image, SimpleGrid, Stack, Text, Title} from "@mantine/core";
import {OurTeam} from "@/components/OurTeam/OurTeam";

const spacing = "xl";
const division = 75;
const cols = { base: 1, sm: 2, md: 2, lg: 2, xl: 2 };

export const metadata = {
    title: "Despre noi",
    description: "Cine suntem, ce facem și de ce să ajutăm."
}

export default function AboutPage() {
    
    const roundedImage = (src: string) => {
        return (
            <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                <Image src={src}/>
            </div>
        );
    }
    
  return (
      <>
    <div>
      <Container className={commonClasses.container} size="lg">
        <TitleWithDescription title={"Despre noi"} />
          <Divider mb="xl" color="transparent" />

          {/* FIRST */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                    {roundedImage("/flowers.jpg")}
              </Center>

              <Center>
              <Stack>
                      <Title className={commonClasses.titleBigLight}>Cine suntem?</Title>
                      <Text c="dimmed">
                          Suntem oameni care trăiesc și pentru alții, oameni cu rațiune, cu sentimente și cu dorințe, iar dorința noastră cea mare este să nu trăim doar pentru noi înșine. Cu ajutorul Bunului Dumnezeu și cu sprijinul vostru, într-o împreună lucrare, vrem să aducem bucurie în inimile multor oameni, mari și mici, tineri și bătrâni. Avem libertatea de a alege ce facem în această viață, iar noi am ales să ajutăm și o facem cu toata bucuria și cu toată dragostea. Dăruiește și tu bucurie, împreună cu noi.
                      </Text>
                  </Stack>
              </Center>
          </SimpleGrid>
          
          <Divider color="transparent" mb={division}/>

          {/* SECOND */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                  <Stack>
                      <Title className={commonClasses.titleBigLight}>Ce facem?</Title>
                      <Text c="dimmed">
                          Ascultăm poveștile de viață ale celor care sunt mai puțin importanți pentru o parte a societății. Suntem sprijin, cu tot ce ne stă în putere, pentru cei care nu mai au pe cine să se sprijine. Îi ajutăm pe cei care strigă: ajutați-ne! Alege să ajuți împreună cu noi! Este atât de simplu. Doar alege.
                      </Text>
                  </Stack>
              </Center>
              
              <Center>
                    {roundedImage("/flowers.jpg")}
              </Center>
          </SimpleGrid>

          <Divider color="transparent" mb={division}/>

          {/* THIRD */}
          <SimpleGrid cols={cols} spacing={spacing}>
              <Center>
                    {roundedImage("/flowers.jpg")}
              </Center>

              <Center>
                  <Stack>
                      <Title className={commonClasses.titleBigLight}>De ce să ajutăm?</Title>
                      <Text c="dimmed">
                          Pentru că avem puterea să alegem ce facem cu timpul nostru, cu viața noastră. Moștenirea pe care o lăsăm copiilor noștri sunt faptele noastre, pe care le transmit și ei mai departe. Oameni buni, din această viață, plecăm doar cu faptele noastre. Voi, cei care veniți și ajutați, sacrificați din timpul vostru, din confortul și banii voștri unor oameni pe care nu-i cunoașteți. Ați ales să dăruiți din viața voastră aproapelui vostru. Aceasta este darul și el vine din iubire.
                      </Text>
                  </Stack>
              </Center>
          </SimpleGrid>
      </Container>
    </div>
          
<Container size="full" className={commonClasses.darkerBackground}>
          <Divider mt={division} my="sm" color="transparent" pt={25}/>
        
          <OurTeam />

          <Divider color="transparent" pb="xl"/>
</Container>
      </>
  );
}
