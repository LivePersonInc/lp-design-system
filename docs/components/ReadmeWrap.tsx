import { styled } from '@storybook/theming';

const ReadmeWrap = styled.div`
  table {
    tr {
      &:nth-of-type(2n) {
        background-color: transparent;
      }
    }
  }
`;

export default ReadmeWrap
