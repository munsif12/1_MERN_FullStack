import React from "react";

function SvgWaveBackgroundBottom() {
  return (
    <svg
      id="svg"
      viewBox="0 0 1440 450"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="5%" stop-color="#000000ff"></stop>
          <stop offset="95%" stop-color="#ffffffff"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,600 C 0,600 0,300 0,300 C 44.75476630903934,303.22890615365645 89.50953261807868,306.45781230731285 150,315 C 210.49046738192132,323.54218769268715 286.71663583672466,337.39765692440494 342,314 C 397.28336416327534,290.60234307559506 431.6239240350228,229.9515599950672 472,222 C 512.3760759649772,214.0484400049328 558.7876680231841,258.7961030953262 624,270 C 689.2123319768159,281.2038969046738 773.2254038722408,258.8640276236281 824,275 C 874.7745961277592,291.1359723763719 892.3107164878529,345.7477864101615 939,341 C 985.6892835121471,336.2522135898385 1061.5317301763473,272.14482673572576 1124,251 C 1186.4682698236527,229.85517326427424 1235.5623628067578,251.67290664693547 1286,267 C 1336.4376371932422,282.3270933530645 1388.218818596621,291.1635466765323 1440,300 C 1440,300 1440,600 1440,600 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        class="transition-all duration-300 ease-in-out delay-150"
      ></path>
    </svg>
  );
}

export default SvgWaveBackgroundBottom;