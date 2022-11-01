import { useState } from "react";
import {
  Grommet,
  Nav,
  Box,
  Header,
  Text,
  Heading,
  Page,
  PageContent,
  Paragraph,
} from "grommet";
import { grommet, ThemeType } from "grommet/themes";
import ContactIconGroup from "./ContactIconGroup";

const theme: ThemeType = {
  global: {
    focus: {
      shadow: undefined,
    },
  },
  anchor: {
    fontWeight: 600,
    hover: {
      extend: () => `height: '100px'`,
    },
  },
  icon: {
    extend: () => `height: '100px'`,
  },
};

const Headerz = () => (
  <Header>
    <Text weight={"bold"} size="large" color={"#7D4CDB"}>
      Chris Reams
    </Text>
    <Nav direction="row">
      <ContactIconGroup />
    </Nav>
  </Header>
);

const SinglePage = () => {
  return (
    <Grommet theme={theme}>
      <Headerz />
      <Page kind="narrow">
        <PageContent background="light-3">
          <Paragraph>Hey im chris</Paragraph>
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default SinglePage;
