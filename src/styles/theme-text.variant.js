const EFontWeights = {
  LIGHT: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
};

const BODY_TEXT = {
  fontFamily: `'Inter', sans-serif`,
};

export const TEXT_VARIANT = {
  // Heading
  "heading/h1": {
    fontWeight: EFontWeights.BOLD,
    fontFamily: `'Outfit', sans-serif`,
    fontSize: "40px",
  },
  "heading/h2": {
    fontWeight: EFontWeights.BOLD,
    fontFamily: `'Outfit', sans-serif`,
    fontSize: "30px",
  },
  "heading/h3": {
    fontWeight: EFontWeights.SEMIBOLD,
    fontFamily: `'Inter', sans-serif`,
    fontSize: "24px",
  },
  "heading/h4": {
    fontWeight: EFontWeights.SEMIBOLD,
    fontFamily: `'Inter', sans-serif`,
    fontSize: "22px",
  },
  "heading/h5": {
    fontWeight: EFontWeights.SEMIBOLD,
    fontFamily: `'Inter', sans-serif`,
    fontSize: "18px",
  },
  "heading/h6": {
    fontWeight: EFontWeights.SEMIBOLD,
    fontFamily: `'Inter', sans-serif`,
    fontSize: "16px",
  },
  "body/xl": {
    ...BODY_TEXT,
    fontWeight: EFontWeights.REGULAR,
    fontSize: "18px",
  },
  "body/lg": {
    ...BODY_TEXT,
    fontWeight: EFontWeights.REGULAR,
    fontSize: "16px",
  },
  "body/md": {
    ...BODY_TEXT,
    fontWeight: EFontWeights.MEDIUM,
    fontSize: "14px",
  },
  "body/sm": {
    ...BODY_TEXT,
    fontWeight: EFontWeights.REGULAR,
    fontSize: "14px",
  },
  "body/xs": {
    ...BODY_TEXT,
    fontWeight: EFontWeights.LIGHT,
    fontSize: "12px",
  },
};
