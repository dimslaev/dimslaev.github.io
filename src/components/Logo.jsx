import * as React from "react";

export const Logo = ({ primary, secondary }) => (
  <svg viewBox="0 0 138 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.7098 0.0484009C3.7098 0.0484009 24.3136 10.2051 30.6943 13.3507C33.1755 14.5738 32.555 16.0454 32.555 15.8589C32.555 16.8858 32.555 18.2314 32.555 19.3367C32.555 19.6002 33.1695 21.0751 30.712 22.2864C24.3516 25.4219 3.7098 35.5975 3.7098 35.5975C3.7098 35.5975 3.70501 32.2823 3.71429 30.1338C3.69963 30.101 3.23422 28.5805 5.32031 27.5592C10.3027 25.12 25.3438 17.823 25.3438 17.823C25.3438 17.823 10.2003 10.2464 5.27003 7.78515C3.25248 6.77804 3.69963 5.21676 3.71369 5.27371C3.70531 3.20784 3.7098 0.0484009 3.7098 0.0484009Z"
      fill={secondary}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.0500489 24.5803C0.0500489 24.5803 0.0500489 21.536 0.0500489 19.4922C0.0940454 19.4365 -0.576377 18.0525 1.92933 16.8259C9.52007 13.1105 36.1751 0 36.1751 0C36.1751 0 36.1751 2.97797 36.1751 5.08987C36.1508 5.21675 36.8194 6.83734 34.2413 8.08141C26.7496 11.6965 0.0500489 24.5803 0.0500489 24.5803Z"
      fill={primary}
    />
    <path
      d="M40.9208 23.8539V12.8749H45.2567C46.995 12.8749 48.3451 13.3657 49.307 14.3471C50.2738 15.3237 50.7572 16.664 50.7572 18.3681C50.7572 20.0673 50.2787 21.4077 49.3217 22.3891C48.3695 23.3657 47.0145 23.8539 45.2567 23.8539H40.9208ZM43.0228 21.9643H45.2567C47.5175 21.9643 48.6478 20.768 48.6478 18.3754C48.6478 15.9633 47.5175 14.7597 45.2567 14.7646H43.0228V21.9643ZM55.626 12.8749C56.2852 12.8749 56.6148 13.2045 56.6148 13.8637V23.8539H55.5015C54.8424 23.8539 54.5128 23.5244 54.5128 22.8652V12.8749H55.626ZM71.8914 12.8749H72.0232V23.8539H70.9173C70.2581 23.8539 69.9261 23.5244 69.9212 22.8652V18.3022L66.4934 22.4257L63.073 18.3022V22.8652C63.073 23.5244 62.741 23.8539 62.0769 23.8539H60.971V12.8749H61.1028L66.4934 19.2177L71.8914 12.8749ZM76.3501 21.6054C76.6821 21.1269 77.1313 21.0366 77.6977 21.3344C78.7182 21.8666 79.6484 22.1303 80.4883 22.1254C81.2207 22.1254 81.7529 22.0034 82.0849 21.7592C82.4219 21.5151 82.5903 21.2026 82.5903 20.8217C82.5903 20.6215 82.539 20.4457 82.4365 20.2944C82.3388 20.1381 82.2265 20.0136 82.0996 19.9208C81.9775 19.8232 81.7846 19.7328 81.521 19.6498C81.2622 19.562 81.0449 19.4985 80.8691 19.4594C80.6982 19.4203 80.4419 19.3642 80.1001 19.291C79.021 19.081 78.2568 18.8759 77.8076 18.6757C76.5478 18.1142 75.9179 17.2158 75.9179 15.9804C75.9179 15.3701 76.0449 14.8403 76.2988 14.3911C76.5527 13.9418 76.8921 13.6025 77.3169 13.373C77.7417 13.1386 78.1836 12.9702 78.6426 12.8676C79.1064 12.7602 79.5874 12.7065 80.0854 12.7065C80.9448 12.7065 81.687 12.8261 82.312 13.0654C82.937 13.2997 83.5595 13.6513 84.1797 14.1201L83.5791 14.9404C83.2373 15.4189 82.7832 15.5141 82.2168 15.226C81.4258 14.8452 80.6396 14.6572 79.8584 14.662C79.3701 14.662 78.9404 14.7499 78.5693 14.9257C78.2031 15.0966 78.02 15.3774 78.02 15.768C78.02 15.9584 78.0761 16.1342 78.1885 16.2953C78.3056 16.4565 78.4302 16.581 78.562 16.6689C78.6987 16.7568 78.9062 16.8471 79.1845 16.9399C79.4678 17.0278 79.685 17.0912 79.8364 17.1303C79.9927 17.1645 80.2368 17.2158 80.5688 17.2841C80.6177 17.2939 80.7959 17.3305 81.1035 17.394C81.416 17.4526 81.6382 17.4965 81.77 17.5258C81.9067 17.5551 82.1264 17.6186 82.4292 17.7162C82.7368 17.809 82.9712 17.9042 83.1323 18.0019C83.2934 18.0947 83.4887 18.2289 83.7182 18.4047C83.9477 18.5756 84.1211 18.7636 84.2383 18.9687C84.3603 19.1738 84.4653 19.4252 84.5532 19.7231C84.646 20.0161 84.6924 20.3432 84.6924 20.7045C84.6924 21.8032 84.3164 22.6381 83.5644 23.2094C82.8174 23.7807 81.8042 24.0663 80.5249 24.0663C79.4946 24.0663 78.6328 23.9247 77.9394 23.6415C77.251 23.3535 76.5454 22.9384 75.8227 22.3964L76.3501 21.6054ZM90.3449 21.9936H95.1569C95.8161 21.9936 96.1457 22.3232 96.1457 22.9824V23.8539H88.2428V12.8749H89.3488C90.008 12.8749 90.34 13.2045 90.3449 13.8637V21.9936ZM100.802 23.1362C100.573 23.6147 100.182 23.8539 99.6302 23.8539H98.1581L103.768 12.8749H103.981L109.591 23.8539H108.119C107.567 23.8539 107.177 23.6147 106.947 23.1362L106.456 22.1254H101.278L100.802 23.1362ZM103.878 16.9838L102.304 20.3017H105.438L103.878 16.9838ZM112.585 23.8539V12.8749H120.656V13.8051C120.656 14.4252 120.324 14.7353 119.66 14.7353H114.672V17.4819H119.382V18.3461C119.382 19.0053 119.05 19.3373 118.386 19.3422H114.672V21.9936H119.646C119.934 21.9936 120.173 22.0888 120.363 22.2792C120.559 22.4697 120.656 22.7089 120.656 22.997V23.8539H112.585ZM131.494 13.6074C131.724 13.1191 132.11 12.8749 132.652 12.8749H134.16L128.946 23.8539H128.821L123.621 12.8749H125.115C125.657 12.8749 126.043 13.1191 126.272 13.6074L128.88 19.247L131.494 13.6074Z"
      fill={secondary}
    />
  </svg>
);
