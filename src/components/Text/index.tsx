import styled, { css } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    black: "#444444",
    lightGray: "#BCBCBC",
    gray: "#737380",
    blue: "#3772FF",
  },
  sizes: {
    xxsmall: "0.625rem", // fs: 10px
    xsmall: "0.75rem", // fs: 12px
    small: "0.875rem", // fs: 14px
    normal: "1rem", // fs: 16px
    large: "1.125rem", // fs: 18px
    title: "1.75rem", // fs: 28px
  },
  lineHeight: {
    xxsmall: "1rem", // lh: 16px
    xsmall: "1rem", // lh: 16px
    small: "1.25rem", // lh: 20px
    normal: "1.5rem", // lh: 24px
    large: "1.75rem", // lh: 28px
    title: "3rem", // lh: 48px
  },
  weights: {
    thin: 300,
    normal: 400,
    medium: 500,
    bold: 600,
  },
  aligns: {
    left: "left",
    right: "right",
    center: "center",
  },
};

type TextProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  weight?: keyof typeof theme.weights;
  align?: keyof typeof theme.aligns;
  tag?: "p" | "h1";
};

export const Text = styled.p.attrs<TextProps>(({ tag = "p" }) => ({
  as: `${tag}`,
}))<TextProps>`
  ${({
    color = "white",
    size = "normal",
    weight = "normal",
    align = "center",
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.sizes[size]};
    line-height: ${theme.lineHeight[size]};
    font-weight: ${theme.weights[weight]};
    text-align: ${theme.aligns[align]};
  `}
`;
