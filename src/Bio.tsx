import {
  Box,
  Button,
  Page,
  PageHeader,
  PageContent,
  Text,
  Paragraph,
} from "grommet";

const Bio = () => (
  <Page kind="narrow">
    <PageHeader title="Chris Reams" subtitle="zzz" />
    <PageContent>
      Hey im chris and I am currently working on geospatial mapping tools at
      Bayer Crop Science (https://www.bayer.com/en/us/crop-science). I am
      currently excited about writing software for places other than the
      browser. When not coding I enjoy skateboarding, videogames and traveling.
      I have a lovely cat and I am obsessed with One Piece.
    </PageContent>
  </Page>
);

export default Bio;
