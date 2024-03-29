import { Page, PageHeader, PageContent, Anchor, Text } from "grommet";

const Bio = () => (
  <Page>
    <PageHeader title="Hey I'm Chris" style={{ textAlign: "center" }} />
    <PageContent align="center" pad={"small"}>
      <Text>
        I'm a developer currently working at{" "}
        <Anchor
          href="https://www.bayer.com/en/agriculture"
          label="Bayer Crop Science"
          gap="small"
        />{" "}
        on geospatial mapping tools.
      </Text>
    </PageContent>
    <PageContent align="center" pad={"small"}>
      <Text>
        I've recently been interested in processing audio and writing code for outside of the web ecosystem.
      </Text>
    </PageContent>
    <PageContent align="center" pad={"small"}>
      <Text>
        When I'm not coding, I love to skateboard, play videogames and travel.
      </Text>
    </PageContent>
  </Page>
);

export default Bio;
