import { css } from 'styled-components';

import CalibreRegularWoff from '@fonts/Calibre/Calibre-Regular.woff';
import CalibreRegularWoff2 from '@fonts/Calibre/Calibre-Regular.woff2';
import CalibreMediumWoff from '@fonts/Calibre/Calibre-Medium.woff';
import CalibreMediumWoff2 from '@fonts/Calibre/Calibre-Medium.woff2';
import CalibreSemiboldWoff from '@fonts/Calibre/Calibre-Semibold.woff';
import CalibreSemiboldWoff2 from '@fonts/Calibre/Calibre-Semibold.woff2';

import CalibreRegularItalicWoff from '@fonts/Calibre/Calibre-RegularItalic.woff';
import CalibreRegularItalicWoff2 from '@fonts/Calibre/Calibre-RegularItalic.woff2';
import CalibreMediumItalicWoff from '@fonts/Calibre/Calibre-MediumItalic.woff';
import CalibreMediumItalicWoff2 from '@fonts/Calibre/Calibre-MediumItalic.woff2';
import CalibreSemiboldItalicWoff from '@fonts/Calibre/Calibre-SemiboldItalic.woff';
import CalibreSemiboldItalicWoff2 from '@fonts/Calibre/Calibre-SemiboldItalic.woff2';

import SFMonoRegularWoff from '@fonts/SFMono/SFMono-Regular.woff';
import SFMonoRegularWoff2 from '@fonts/SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from '@fonts/SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from '@fonts/SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from '@fonts/SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from '@fonts/SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from '@fonts/SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from '@fonts/SFMono/SFMono-SemiboldItalic.woff2';

import JostExtraLight from '@fonts/Jost/Jost-ExtraLight.ttf';
import JostLight from '@fonts/Jost/Jost-Light.ttf';
import JostRegular from '@fonts/Jost/Jost-Regular.ttf';
import JostMedium from '@fonts/Jost/Jost-Medium.ttf';
import JostSemiBold from '@fonts/Jost/Jost-SemiBold.ttf';
import JostBold from '@fonts/Jost/Jost-Bold.ttf';
import JostExtraBold from '@fonts/Jost/Jost-ExtraBold.ttf';
import JostBlack from '@fonts/Jost/Jost-Black.ttf';
import JostExtraLightItalic from '@fonts/Jost/Jost-ExtraLightItalic.ttf';
import JostLightItalic from '@fonts/Jost/Jost-LightItalic.ttf';
import JostItalic from '@fonts/Jost/Jost-Italic.ttf';
import JostMediumItalic from '@fonts/Jost/Jost-MediumItalic.ttf';
import JostSemiBoldItalic from '@fonts/Jost/Jost-SemiBoldItalic.ttf';
import JostBoldItalic from '@fonts/Jost/Jost-BoldItalic.ttf';
import JostExtraBoldItalic from '@fonts/Jost/Jost-ExtraBoldItalic.ttf';
import JostBlackItalic from '@fonts/Jost/Jost-BlackItalic.ttf';

const jostNormalWeights = {
  200: [JostExtraLight],
  300: [JostLight],
  400: [JostRegular],
  500: [JostMedium],
  600: [JostSemiBold],
  700: [JostBold],
  800: [JostExtraBold],
  900: [JostBlack],
};

const jostItalicWeights = {
  200: [JostExtraLightItalic],
  300: [JostLightItalic],
  400: [JostItalic],
  500: [JostMediumItalic],
  600: [JostSemiBoldItalic],
  700: [JostBoldItalic],
  800: [JostExtraBoldItalic],
  900: [JostBlackItalic],
};

const calibreNormalWeights = {
  400: [CalibreRegularWoff, CalibreRegularWoff2],
  500: [CalibreMediumWoff, CalibreMediumWoff2],
  600: [CalibreSemiboldWoff, CalibreSemiboldWoff2],
};

const calibreItalicWeights = {
  400: [CalibreRegularItalicWoff, CalibreRegularItalicWoff2],
  500: [CalibreMediumItalicWoff, CalibreMediumItalicWoff2],
  600: [CalibreSemiboldItalicWoff, CalibreSemiboldItalicWoff2],
};

const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const calibre = {
  name: 'Calibre',
  normal: calibreNormalWeights,
  italic: calibreItalicWeights,
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const jost = {
  name: 'Jost',
  normal: jostNormalWeights,
  italic: jostItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const calibreNormal = createFontFaces(calibre);
const calibreItalic = createFontFaces(calibre, 'italic');

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');

const jostNormal = createFontFaces(jost);
const jostItalic = createFontFaces(jost, 'italic');

const Fonts = css`
  ${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic + jostNormal + jostItalic}
`;

export default Fonts;
