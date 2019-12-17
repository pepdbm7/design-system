import React from "react";
import styled from "styled-components";
import { action } from "@storybook/addon-actions";

import { Link } from "../src/components/Link";

const CustomLink = styled(Link)`
  && {
    color: red;
  }
`;

const onLinkClick = action("onLinkClick");

export default {
  title: "Design System|Link",
  component: Link
};

export const all = () => (
  <div>
    <Link href="https://learnstorybook.com">Default</Link>
    <br />
    <Link secondary href="https://learnstorybook.com">
      Secondary
    </Link>
    <br />
    <Link tertiary href="https://learnstorybook.com">
      tertiary
    </Link>
    <br />
    <Link nochrome href="https://learnstorybook.com">
      nochrome
    </Link>
    <br />
    <Link withArrow href="https://learnstorybook.com">
      With arrow behind
    </Link>
    <br />
    <span style={{ background: "#333" }}>
      <Link inverse href="https://learnstorybook.com">
        Inverted colors
      </Link>
    </span>
    <br />
    {/* gatsby and styled-components don't work nicely together  */}
    {/* eslint-disable-next-line */}
    <Link isButton onClick={onLinkClick}>
      is actually a button
    </Link>
    <br />
    <Link tertiary href="http://storybook.js.org">
      has a LinkWrapper like GatsbyLink or NextLink
    </Link>
    <br />
    <CustomLink tertiary href="http://storybook.js.org">
      has a LinkWrapper like GatsbyLink or NextLink with custom styling
    </CustomLink>
  </div>
);
