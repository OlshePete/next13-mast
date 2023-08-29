import { Icon } from "@chakra-ui/react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { HeaderLogoIcon } from "../CustomIcons";
import { MotionBox } from "../MotionBox";
import { useEffect, useState } from "react";

const AnimatedSVG = ({  }) => {
  const {scrollY} = useScroll()
  // Определи начальное и к онечное состояния анимации
  const heightSizes = [200, 90];
  const initialStyles = { opacity: 0 };
  const targetStyles = { opacity: 1 };
  const height = useTransform(scrollY, [0, 320], heightSizes);
  // Определи анимацию

  useEffect(() => {
  height.set(200+scrollY)
  },[scrollY])
  
  return (
    <MotionBox
      initial={initialStyles}
      animate={targetStyles}
      as={Icon}
      viewBox="0 0 337 197"
      fill="none"
      style={{ width: "auto", position: "absolute", height:height.get()}}
    >
       <g clipPath="url(#clip0_733_43)">
          <path
            d="M181.876 143.94C182.301 145.46 181.452 146.98 179.966 147.415C178.585 147.849 176.993 146.98 176.568 145.46L139.73 13.3053L102.998 145.46C102.573 146.98 100.981 147.849 99.4947 147.415C98.1146 146.98 97.2653 145.46 97.69 143.94L137.076 2.22904C137.395 1.36032 138.032 0.600183 138.987 0.274411C140.473 -0.159952 142.066 0.708773 142.49 2.22904L181.876 143.94Z"
            fill="#A8D4AF"
          />
          <path
            d="M229.543 73.7901C229.543 75.3104 228.375 76.6134 226.783 76.6134C225.297 76.6134 224.023 75.3104 224.023 73.7901C224.023 70.641 222.749 67.709 220.732 65.5372C218.609 63.474 215.848 62.1709 212.663 62.1709C209.479 62.1709 206.825 63.2568 204.914 65.2114C203.003 67.0575 201.941 69.7722 201.941 72.9214C201.941 75.2018 202.79 77.9165 205.02 80.4141C206.825 82.4773 209.585 84.3234 213.407 85.5179C219.139 87.3639 224.447 89.9701 228.163 93.7708C231.56 97.2457 233.577 101.481 233.577 106.802C233.471 113.1 231.242 118.312 227.632 122.004C223.81 125.914 218.502 128.194 212.663 128.194C206.931 128.194 201.729 125.805 197.907 121.896C194.085 117.986 191.75 112.666 191.75 106.802C191.75 105.173 193.023 103.978 194.51 103.978C196.102 103.978 197.376 105.173 197.376 106.802C197.376 111.145 199.075 115.055 201.835 117.878C204.595 120.701 208.417 122.439 212.663 122.439C217.016 122.439 220.944 120.918 223.704 117.986C226.358 115.272 227.951 111.362 228.057 106.802C228.057 103.11 226.677 100.178 224.341 97.7886C221.263 94.7481 216.698 92.4677 211.814 90.9474C206.931 89.4271 203.321 86.9295 200.879 84.1062C197.695 80.6313 196.314 76.5048 196.314 72.9214C196.314 68.1434 198.119 64.1255 200.986 61.1936C203.958 58.2616 207.992 56.5242 212.663 56.5242C217.335 56.5242 221.581 58.4788 224.66 61.6279C227.632 64.6685 229.543 69.0121 229.543 73.7901Z"
            fill="#A8D4AF"
          />
          <path
            d="M245.998 65.2117C244.406 65.2117 243.238 63.9086 243.238 62.3883C243.238 60.868 244.406 59.5649 245.998 59.5649H300.99C302.583 59.5649 303.75 60.868 303.75 62.3883C303.75 63.9086 302.583 65.2117 300.99 65.2117H276.254V124.285C276.254 125.805 274.98 127.108 273.494 127.108C272.008 127.108 270.734 125.805 270.734 124.285V65.2117H245.998Z"
            fill="#A8D4AF"
          />
          <path
            d="M5.5413 124.285C5.5413 125.914 4.26735 127.108 2.78109 127.108C1.18866 127.108 0.020874 125.805 0.020874 124.285L0.764008 59.3475C0.764008 57.8273 2.03795 56.5242 3.52422 56.5242C4.58584 56.6328 5.43514 57.1757 5.85979 57.9358L40.8933 118.638L75.1836 57.9358C75.9267 56.6328 77.6253 56.1984 79.0054 56.9585C79.8547 57.5015 80.3855 58.4788 80.2794 59.5647V124.285C80.2794 125.805 79.1116 127.108 77.5191 127.108C76.0329 127.108 74.8651 125.805 74.8651 124.285V69.8808L43.335 125.588C43.1227 126.022 42.8042 126.457 42.2734 126.674C40.9994 127.542 39.3008 127.108 38.5577 125.696L6.17827 69.555L5.5413 124.285Z"
            fill="#A8D4AF"
          />
          <motion.path
            transition={'all .5s ease'}
            fill={'#FEFEFE'}
            id="icon_caption"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M332.096 103.435C332.096 103.653 332.414 105.281 332.52 107.128C332.626 109.082 332.626 111.58 332.308 113.643C331.883 116.249 330.928 118.855 329.123 120.81C327 123.09 323.709 124.176 320.736 124.176C317.764 124.176 314.685 123.09 312.562 120.919C310.651 118.964 309.908 116.358 309.908 113.643C309.908 112.123 310.226 110.602 310.651 109.299C311.713 106.585 314.048 105.607 316.702 105.716C317.976 105.824 320.312 106.042 321.267 107.019C322.435 108.431 322.223 111.145 321.692 112.557C321.692 112.774 321.479 113.426 320.63 113.534C320.206 113.534 319.144 113.534 318.613 113.317C318.295 113.317 318.188 112.883 318.188 112.557C318.188 111.905 318.613 111.145 318.613 110.602C318.613 110.277 318.401 110.059 318.082 109.951C317.445 109.734 315.747 109.191 314.897 110.385C314.579 110.82 314.154 112.34 314.26 113.426C314.473 114.837 315.216 115.815 315.959 116.358C316.808 116.901 318.188 117.226 319.569 117.335C321.161 117.444 322.86 117.118 323.815 116.358C325.726 114.837 326.044 113.1 326.257 110.82C326.681 107.019 325.089 103.435 321.267 102.132C315.641 99.9605 308.846 101.264 306.511 107.562C304.387 113.1 305.13 119.833 309.271 124.176C313.73 128.954 321.479 129.714 327.212 127.434C331.459 125.697 334.219 122.656 335.705 118.312C336.554 115.815 336.873 113.209 336.979 110.602C336.979 109.299 336.873 108.105 336.873 107.128C336.767 106.15 336.554 104.956 336.448 104.196C336.342 103.653 335.917 103.653 335.811 103.544L333.051 103.001C332.733 102.892 332.202 102.892 332.096 103.435Z"
          />
        </g>
        <motion.path
          id="icon_caption"
          d="M0.27555 166.966H117.315V196.516H0V166.966H0.27555ZM116.695 167.603H0.619986V195.879H116.695V167.603Z"
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <motion.path
          id="icon_caption"
          d="M100.162 174.955C100.507 175.803 101.333 176.439 102.504 176.439C103.676 176.439 104.433 175.803 104.778 174.955L103.676 174.46C103.4 175.167 102.642 175.237 102.504 175.237C102.367 175.237 101.609 175.167 101.333 174.46L100.162 174.955ZM98.7157 177.287V186.195H99.8867L104.571 180.115V186.053H106.293V177.075H105.122L100.369 183.155V177.287H98.7157ZM89.2781 177.287V186.195H90.3803L95.1335 180.115V186.053H96.7868V177.075H95.6157L90.9314 183.155V177.287H89.2781ZM82.7338 177.287H81.0805V186.053H82.7338V182.307L82.9404 182.094L85.9715 186.053H88.1759L84.3871 181.317L88.0381 177.287H85.9026L82.7338 180.963V177.287ZM79.565 183.72C79.0828 184.286 78.325 184.639 77.5672 184.639C76.1206 184.639 74.674 183.65 74.674 181.67C74.674 180.044 75.7762 178.631 77.4983 178.631C77.7739 178.631 78.7383 178.701 79.565 179.62V177.57C78.7383 177.146 78.0494 177.075 77.4295 177.075C76.2584 177.075 75.1562 177.358 74.3295 178.206C73.5718 178.913 72.9518 180.044 72.9518 181.67C72.9518 182.943 73.2962 184.003 74.3295 184.993C75.0184 185.7 75.9139 186.195 77.4295 186.195C78.3939 186.195 79.0828 185.983 79.565 185.7V183.72ZM65.3053 174.955C65.6497 175.803 66.4764 176.439 67.6474 176.439C68.8185 176.439 69.5763 175.803 69.9207 174.955L68.8185 174.46C68.543 175.167 67.7852 175.237 67.6474 175.237C67.5097 175.237 66.7519 175.167 66.4764 174.46L65.3053 174.955ZM63.8586 177.287V186.195H65.0297L69.7141 180.115V186.053H71.4363V177.075H70.2652L65.5119 183.155V177.287H63.8586Z"
          transition={'all .5s ease'}
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <motion.path
          id="icon_caption"
          d="M41.7457 177.358V186.124H43.399V178.842H46.8434V186.124H48.4967V177.358H41.7457ZM35.6148 184.781C33.9615 184.781 32.7904 183.579 32.7904 181.812C32.7904 179.974 33.9615 178.772 35.6148 178.772C37.337 178.772 38.508 179.974 38.508 181.812C38.508 183.579 37.337 184.781 35.6148 184.781ZM35.6148 177.217C32.9282 177.217 31.0682 179.125 31.0682 181.812C31.0682 184.427 32.9282 186.336 35.6148 186.336C38.3703 186.336 40.2302 184.427 40.2302 181.812C40.2302 179.125 38.3703 177.217 35.6148 177.217ZM26.315 178.842H26.8661C27.2794 178.842 27.7616 178.913 28.0372 179.125C28.3127 179.337 28.5883 179.62 28.5883 180.115C28.5883 180.539 28.3816 180.893 28.106 181.175C27.7616 181.458 27.3483 181.458 27.0038 181.458H26.315V178.842ZM24.6617 177.358V186.124H26.315V182.943H27.4172C28.3816 182.943 29.0705 182.66 29.5527 182.094C30.2416 181.458 30.2416 180.539 30.2416 180.186C30.2416 179.549 30.1038 178.701 29.4149 178.065C28.7949 177.499 28.106 177.358 27.1416 177.358H24.6617ZM19.0129 182.306H19.6329C19.9773 182.306 20.3907 182.377 20.804 182.518C21.2862 182.731 21.424 183.225 21.424 183.508C21.424 183.862 21.2862 184.286 20.8729 184.498C20.5284 184.781 20.0462 184.781 19.7018 184.781H19.0129V182.306ZM19.0129 178.772H19.4951C20.184 178.772 20.804 179.055 20.804 179.903C20.804 181.034 19.7707 181.034 19.4951 181.034H19.0129V178.772ZM17.3596 177.358V186.124H20.184C20.9418 186.124 21.7684 186.053 22.3884 185.417C23.0084 184.922 23.1462 184.215 23.1462 183.65C23.1462 183.225 23.0084 182.518 22.5262 182.024C22.3195 181.812 21.9751 181.599 21.424 181.458C21.6306 181.317 22.3195 180.893 22.3195 179.761C22.3195 178.984 22.044 178.348 21.5617 177.923C20.8729 177.358 19.9084 177.358 19.4951 177.358H17.3596ZM15.7063 177.358H11.022V186.124H15.7063V184.71H12.6753V182.306H15.6374V180.822H12.6753V178.842H15.7063V177.358Z"
          transition={'all .5s ease'}
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <motion.path
          id="icon_caption"
          d="M60.1386 177.641C60.1386 177.711 60.2075 178.277 60.2764 178.913C60.3453 179.62 60.3453 180.539 60.2075 181.246C60.0009 182.165 59.7253 183.155 59.0364 183.791C58.2787 184.569 57.1076 184.993 56.0743 184.993C55.041 184.993 53.9388 184.639 53.181 183.862C52.4921 183.155 52.2855 182.236 52.2855 181.246C52.2855 180.681 52.3544 180.186 52.561 179.691C52.9055 178.772 53.7321 178.418 54.6276 178.489C55.1099 178.489 55.9365 178.56 56.2809 178.913C56.6943 179.408 56.6254 180.327 56.4187 180.893C56.4187 180.963 56.3498 181.175 56.0743 181.246C55.8676 181.246 55.5232 181.175 55.3165 181.175C55.2476 181.105 55.1787 180.963 55.1787 180.893C55.1787 180.61 55.3165 180.398 55.3165 180.186C55.3165 180.044 55.2476 179.974 55.1787 179.974C54.9032 179.832 54.2832 179.691 54.0077 180.115C53.8699 180.256 53.7321 180.822 53.801 181.175C53.8699 181.67 54.1454 182.024 54.421 182.236C54.6965 182.448 55.1787 182.519 55.661 182.589C56.2809 182.589 56.832 182.519 57.1765 182.236C57.8654 181.67 58.0031 181.105 58.072 180.256C58.2098 178.913 57.5898 177.641 56.2809 177.146C54.2832 176.439 51.8721 176.863 51.0455 179.125C50.3566 181.034 50.5633 183.438 52.0099 184.993C53.5943 186.689 56.3498 186.972 58.4165 186.124C59.932 185.558 60.8275 184.427 61.3786 182.872C61.723 182.024 61.7919 181.105 61.8608 180.186C61.8608 179.762 61.7919 179.337 61.7919 178.913C61.7919 178.56 61.723 178.136 61.6542 177.853C61.6542 177.711 61.5164 177.711 61.4475 177.641L60.4831 177.429C60.3453 177.429 60.1386 177.429 60.1386 177.641Z"
          transition={'all .5s ease'}
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <motion.path
          id="icon_caption"
          d="M126.822 182.589H227.604V183.508H126.822V182.589Z"
          transition={'all .5s ease'}
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <motion.path
          id="icon_caption"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M246.824 188.951H249.648V172.339H245.584C241.45 172.339 239.246 174.53 239.246 177.711C239.246 180.256 240.486 181.741 242.553 183.296L238.901 188.951H241.933L246.066 182.66L244.619 181.67C242.897 180.468 242.07 179.549 242.07 177.57C242.07 175.803 243.241 174.601 245.584 174.601H246.824V188.951ZM301.107 189.164C302.416 189.164 303.311 188.951 304 188.386V186.124C303.311 186.619 302.416 186.901 301.245 186.901C299.316 186.901 298.489 185.346 298.489 182.872C298.489 180.256 299.453 178.913 301.313 178.913C302.347 178.913 303.38 179.267 303.931 179.62V177.217C303.38 176.934 302.347 176.651 300.969 176.651C297.456 176.651 295.596 179.267 295.596 182.943C295.596 186.901 297.387 189.164 301.107 189.164ZM283.816 188.103V185.77C282.921 186.407 281.474 186.901 280.165 186.901C278.098 186.901 277.341 185.982 277.272 183.932H283.954V182.448C283.954 178.277 282.163 176.722 279.407 176.722C275.963 176.722 274.378 179.337 274.378 182.943C274.378 187.184 276.376 189.164 279.958 189.164C281.681 189.164 282.989 188.669 283.816 188.103ZM258.466 176.934V181.67H254.746V176.934H251.99V188.951H254.746V183.932H258.466V188.951H261.221V176.934H258.466ZM273.69 186.689H272.45V176.934H264.39V177.924C264.39 180.893 264.252 184.639 263.219 186.689H262.392V191.708H264.941V188.951H271.141V191.708H273.69V186.689ZM292.634 188.951H295.802L291.325 182.448L295.251 176.934H292.427L288.569 182.448V176.934H285.745V188.881H288.569V183.013L292.634 188.951ZM279.338 178.913C280.716 178.913 281.129 180.115 281.129 181.6V181.812H277.272C277.341 179.903 277.961 178.913 279.338 178.913ZM269.694 186.689H265.768C266.525 184.851 266.801 181.6 266.801 179.479V179.125H269.694V186.689Z"
          transition={'all .5s ease'}
          fill={scrollY.get()<200?"#FEFEFE":"rgba(0,0,0,0)"}
        />
        <defs>
          <clipPath id="clip0_733_43">
            <rect
              width="337"
              height="147.358"
              fill="white"
              transform="translate(0 0.165771)"
            />
          </clipPath>
        </defs>
    </MotionBox>
  );
};

export { AnimatedSVG };
