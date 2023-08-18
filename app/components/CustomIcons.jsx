import { Icon } from "@chakra-ui/react";
const MenuIcon = (props) => (
  <Icon
    viewBox="0 0 54 54"
    width={"54px"}
    height={"54px"}
    {...props}
    cursor={"pointer"}
    className={"menu-btn" + " " + props.className}
  >
    <path
      id="element2"
      d="M5.49511,0.128973c-1.35265.295753-2.52564.940077-3.47672,1.890717-.79256.79219-1.320934,1.64777-1.7225,2.75685L0,5.62155v7.02415v7.0242l.29589.845c.77143,2.1759,2.29315,3.6863,4.50176,4.468l.80313.2852h7.02742h7.0274l.8454-.2958c2.1769-.7711,3.688-2.2921,4.47-4.4997l.2854-.8027v-7.0242-7.02415l-.2854-.80276c-.782-2.2076-2.2931-3.72862-4.47-4.499689l-.8454-.295755-6.7632-.021124c-5.32606-.010563-6.90062.010561-7.39729.126751ZM19.8352,3.69915c.7609.36969,1.3738.98232,1.7437,1.74283l.2958.60207v6.60165v6.6017l-.2853.5809c-.3698.75-1.025,1.4048-1.7647,1.7745l-.5918.2852h-6.6047-6.60472l-.58121-.2852c-.75029-.3697-1.40548-1.0245-1.77534-1.7639l-.28533-.5915-.0317-6.2848c-.02113-4.38351,0-6.45379.08454-6.83404C3.67749,5.01948,4.66027,3.94209,5.791,3.54071c.50724-.16901,1.02504-.17957,6.9957-.15844l6.4462.02112.6023.29576Z"
      fill="#a8d4af"
    />
    <path
      id="element3"
      d="M34.2388,0.128973c-1.3527.295753-2.5257.940077-3.4768,1.890717-.7925.79219-1.3209,1.64777-1.7225,2.75685l-.2958.84501v7.02415v7.0242l.2958.845c.7715,2.1759,2.2932,3.6863,4.5018,4.468l.8031.2852h7.0274h7.0274l.8454-.2958c2.1769-.7711,3.6881-2.2921,4.4701-4.4997L54,19.6699v-7.0242-7.02415l-.2853-.80276c-.782-2.2076-2.2932-3.72862-4.4701-4.499689l-.8454-.295755-6.7632-.021124c-5.326-.010563-6.9006.010561-7.3972.126751ZM48.5789,3.69915c.7608.36969,1.3737.98232,1.7436,1.74283l.2959.60207v6.60165v6.6017l-.2853.5809c-.3699.75-1.0251,1.4048-1.7648,1.7745l-.5918.2852h-6.6047-6.6047l-.5812-.2852c-.7503-.3697-1.4055-1.0245-1.7753-1.7639l-.2853-.5915-.0317-6.2848c-.0212-4.38351,0-6.45379.0845-6.83404.243-1.10908,1.2258-2.18647,2.3565-2.58785.5073-.16901,1.0251-.17957,6.9957-.15844l6.4462.02112.6024.29576Z"
      fill="#a8d4af"
    />
    <path
      id="element1"
      d="M5.49511,28.8594c-1.35265.2958-2.52564.9401-3.47672,1.8908-.79256.7922-1.320934,1.6477-1.7225,2.7568L0,34.352v7.0242v7.0241l.29589.845c.77143,2.1759,2.29315,3.6864,4.50176,4.468l.80313.2852h7.02742h7.0274l.8454-.2957c2.1769-.7711,3.688-2.2921,4.47-4.4997l.2854-.8028v-7.0241-7.0242l-.2854-.8027c-.782-2.2076-2.2931-3.7287-4.47-4.4997l-.8454-.2958-6.7632-.0211c-5.32606-.0106-6.90062.0106-7.39729.1267ZM19.8352,32.4296c.7609.3697,1.3738.9823,1.7437,1.7429l.2958.602v6.6017v6.6016l-.2853.581c-.3698.7499-1.025,1.4048-1.7647,1.7745l-.5918.2852h-6.6047-6.60472l-.58121-.2852c-.75029-.3697-1.40548-1.0246-1.77534-1.764l-.28533-.5915-.0317-6.2847c-.02113-4.3835,0-6.4538.08454-6.8341.24305-1.1091,1.22583-2.1864,2.35656-2.5878.50724-.169,1.02504-.1796,6.9957-.1585l6.4462.0212.6023.2957Z"
      transform="translate(0-.004394)"
      fill="#a8d4af"
    />
    <path
      id="element0"
      d="M40.1037,28.7538c-.0845.0212-.5178.0951-.951.1585-3.7832.6126-7.3339,3.2638-9.1092,6.8129-.9406,1.8696-1.2893,3.38-1.2998,5.5982c0,1.7217.1162,2.5245.5917,3.9821c1.0251,3.1688,3.3711,5.8834,6.4145,7.415.8983.4542,2.2826.9189,3.3499,1.1302c1.0885.2218,3.6881.1901,4.8082-.0528c4.4701-.9612,8.1159-4.2145,9.5002-8.4924.465-1.4365.5918-2.271.5918-3.9293c0-.8767-.0634-1.8485-.1479-2.271-1.004-5.0595-4.766-8.9676-9.7327-10.0979-.8243-.1901-3.5718-.3696-4.0157-.2535Zm2.9061,3.4857c1.8387.3275,3.5612,1.2358,4.9139,2.5879c3.6352,3.623,3.6352,9.4852.0106,13.1082s-9.4474,3.623-13.1038,0-3.6563-9.4958,0-13.1188c2.1981-2.1865,5.1358-3.1054,8.1793-2.5773Z"
      fill="#a8d4af"
    />
  </Icon>
);
const HeaderLogoIcon = (props) =>{
  const {show, isdark, ...other} = props
  return show ? (
    <Icon viewBox="0 0 182 90" width={"182px"} height={"90px"} {...other}>
      {isdark ? (
        <>
          <path
            d="M96.0661 81.9555C96.2905 82.8221 95.8418 83.6887 95.0567 83.9363C94.3276 84.1839 93.4864 83.6887 93.2621 82.8221L73.8021 7.49156L54.3982 82.8221C54.1739 83.6887 53.3327 84.1839 52.5475 83.9363C51.8185 83.6887 51.3699 82.8221 51.5942 81.9555L72.4001 1.17791C72.5683 0.682721 72.9048 0.249431 73.4096 0.0637353C74.1947 -0.183859 75.0359 0.31133 75.2602 1.17791L96.0661 81.9555Z"
            fill="#22356F"
          />
          <path
            d="M121.246 41.969C121.246 42.8356 120.629 43.5784 119.788 43.5784C119.003 43.5784 118.33 42.8356 118.33 41.969C118.33 40.1739 117.657 38.5027 116.592 37.2647C115.47 36.0886 114.012 35.3459 112.33 35.3459C110.647 35.3459 109.245 35.9648 108.236 37.079C107.226 38.1313 106.665 39.6788 106.665 41.4738C106.665 42.7737 107.114 44.3211 108.292 45.7448C109.245 46.9209 110.703 47.9732 112.722 48.654C115.75 49.7063 118.554 51.1919 120.517 53.3583C122.312 55.3391 123.377 57.7531 123.377 60.7862C123.321 64.3763 122.144 67.3474 120.237 69.452C118.218 71.6803 115.414 72.9802 112.33 72.9802C109.301 72.9802 106.553 71.6184 104.534 69.3901C102.515 67.1617 101.282 64.1287 101.282 60.7862C101.282 59.8577 101.955 59.1768 102.74 59.1768C103.581 59.1768 104.254 59.8577 104.254 60.7862C104.254 63.2621 105.151 65.4905 106.609 67.0998C108.067 68.7092 110.086 69.6996 112.33 69.6996C114.629 69.6996 116.704 68.833 118.162 67.1617C119.564 65.6143 120.405 63.3859 120.461 60.7862C120.461 58.6816 119.732 57.0104 118.498 55.6486C116.872 53.9154 114.461 52.6156 111.881 51.749C109.301 50.8824 107.394 49.4587 106.105 47.8494C104.422 45.8686 103.693 43.5165 103.693 41.4738C103.693 38.7503 104.646 36.46 106.161 34.7888C107.731 33.1175 109.862 32.1271 112.33 32.1271C114.797 32.1271 117.04 33.2413 118.667 35.0364C120.237 36.7695 121.246 39.2455 121.246 41.969Z"
            fill="#22356F"
          />
          <path
            d="M129.939 37.0792C129.098 37.0792 128.481 36.3364 128.481 35.4698C128.481 34.6033 129.098 33.8605 129.939 33.8605H158.989C159.83 33.8605 160.447 34.6033 160.447 35.4698C160.447 36.3364 159.83 37.0792 158.989 37.0792H145.922V70.752C145.922 71.6186 145.249 72.3614 144.464 72.3614C143.679 72.3614 143.006 71.6186 143.006 70.752V37.0792H129.939Z"
            fill="#22356F"
          />
          <path
            d="M2.91619 70.7518C2.91619 71.6803 2.24323 72.3612 1.4581 72.3612C0.616887 72.3612 0 71.6184 0 70.7518L0.392565 33.7365C0.392565 32.8699 1.06553 32.1271 1.85066 32.1271C2.41147 32.189 2.86011 32.4985 3.08444 32.9318L21.5911 67.5331L39.7051 32.9318C40.0977 32.189 40.995 31.9414 41.724 32.3747C42.1727 32.6842 42.4531 33.2413 42.397 33.8603V70.7518C42.397 71.6184 41.7801 72.3612 40.9389 72.3612C40.1537 72.3612 39.5369 71.6184 39.5369 70.7518V39.7407L22.8809 71.4946C22.7687 71.7422 22.6005 71.9898 22.3201 72.1136C21.6471 72.6088 20.7498 72.3612 20.3573 71.5565L3.25268 39.555L2.91619 70.7518Z"
            fill="#22356F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175.42 58.8673C175.42 58.9911 175.589 59.9195 175.645 60.9718C175.701 62.086 175.701 63.5097 175.532 64.6857C175.308 66.1713 174.803 67.6569 173.85 68.771C172.728 70.0709 170.99 70.6899 169.42 70.6899C167.849 70.6899 166.223 70.0709 165.101 68.8329C164.092 67.7188 163.699 66.2332 163.699 64.6857C163.699 63.8191 163.868 62.9526 164.092 62.2098C164.653 60.6623 165.887 60.1052 167.289 60.1671C167.962 60.229 169.195 60.3528 169.7 60.9099C170.317 61.7146 170.205 63.2621 169.924 64.0667C169.924 64.1905 169.812 64.5619 169.364 64.6238C169.139 64.6238 168.578 64.6238 168.298 64.5C168.13 64.5 168.074 64.2524 168.074 64.0667C168.074 63.6954 168.298 63.2621 168.298 62.9526C168.298 62.7669 168.186 62.6431 168.018 62.5812C167.681 62.4574 166.784 62.1479 166.335 62.8288C166.167 63.0764 165.943 63.9429 165.999 64.5619C166.111 65.3666 166.503 65.9237 166.896 66.2332C167.345 66.5427 168.074 66.7284 168.803 66.7903C169.644 66.8522 170.541 66.6665 171.046 66.2332C172.055 65.3666 172.224 64.3762 172.336 63.0764C172.56 60.9099 171.719 58.8673 169.7 58.1245C166.728 56.8865 163.139 57.6293 161.905 61.2194C160.783 64.3762 161.176 68.2139 163.363 70.6899C165.718 73.4134 169.812 73.8467 172.841 72.5468C175.084 71.5565 176.542 69.8233 177.327 67.3474C177.776 65.9237 177.944 64.4381 178 62.9526C178 62.2098 177.944 61.5289 177.944 60.9718C177.888 60.4147 177.776 59.7338 177.72 59.3006C177.664 58.9911 177.439 58.9911 177.383 58.9292L175.925 58.6197C175.757 58.5578 175.476 58.5578 175.42 58.8673Z"
            fill="#22356F"
          />
        </>
      ) : (
        <>
          <path
            d="M98.224 87.5379C98.4534 88.453 97.9947 89.3681 97.192 89.6295C96.4467 89.891 95.5867 89.3681 95.3573 88.453L75.4625 8.90756L55.625 88.453C55.3957 89.3681 54.5357 89.891 53.733 89.6295C52.9877 89.3681 52.529 88.453 52.7583 87.5379L74.0292 2.24064C74.2012 1.71775 74.5452 1.26021 75.0612 1.06413C75.8638 0.80268 76.7238 1.32558 76.9532 2.24064L98.224 87.5379Z"
            fill="#A8D4AF"
          />
          <path
            d="M123.967 45.3141C123.967 46.2291 123.336 47.0135 122.476 47.0135C121.674 47.0135 120.986 46.2291 120.986 45.3141C120.986 43.4186 120.298 41.6538 119.208 40.3465C118.062 39.1047 116.571 38.3203 114.851 38.3203C113.131 38.3203 111.698 38.9739 110.666 40.1505C109.634 41.2616 109.06 42.8957 109.06 44.7912C109.06 46.1638 109.519 47.7978 110.723 49.3011C111.698 50.543 113.188 51.6542 115.252 52.3731C118.348 53.4843 121.215 55.053 123.222 57.3406C125.056 59.4322 126.146 61.9813 126.146 65.1841C126.088 68.9751 124.884 72.1124 122.935 74.3347C120.871 76.6878 118.004 78.0604 114.851 78.0604C111.755 78.0604 108.946 76.6224 106.882 74.2694C104.817 71.9163 103.556 68.7136 103.556 65.1841C103.556 64.2036 104.244 63.4847 105.047 63.4847C105.907 63.4847 106.595 64.2036 106.595 65.1841C106.595 67.7985 107.512 70.1516 109.003 71.851C110.494 73.5504 112.558 74.5962 114.851 74.5962C117.202 74.5962 119.323 73.6811 120.814 71.9163C122.247 70.2823 123.107 67.9293 123.164 65.1841C123.164 62.9618 122.419 61.197 121.158 59.759C119.495 57.9289 117.03 56.5563 114.392 55.6412C111.755 54.7262 109.806 53.2228 108.487 51.5234C106.767 49.4319 106.022 46.9481 106.022 44.7912C106.022 41.9152 106.996 39.4968 108.544 37.7321C110.15 35.9673 112.328 34.9215 114.851 34.9215C117.374 34.9215 119.667 36.098 121.33 37.9935C122.935 39.8237 123.967 42.4381 123.967 45.3141Z"
            fill="#A8D4AF"
          />
          <path
            d="M132.854 40.1505C131.994 40.1505 131.363 39.3662 131.363 38.4511C131.363 37.5361 131.994 36.7517 132.854 36.7517H162.553C163.413 36.7517 164.043 37.5361 164.043 38.4511C164.043 39.3662 163.413 40.1505 162.553 40.1505H149.194V75.7074C149.194 76.6225 148.506 77.4068 147.703 77.4068C146.901 77.4068 146.212 76.6225 146.212 75.7074V40.1505H132.854Z"
            fill="#A8D4AF"
          />
          <path
            d="M2.99259 75.7073C2.99259 76.6878 2.30458 77.4067 1.50191 77.4067C0.641902 77.4067 0.0112305 76.6224 0.0112305 75.7073L0.412567 36.6209C0.412567 35.7059 1.10057 34.9215 1.90325 34.9215C2.47658 34.9869 2.93525 35.3137 3.16459 35.7712L22.0847 72.3085L40.6036 35.7712C41.0049 34.9869 41.9222 34.7254 42.6676 35.183C43.1262 35.5098 43.4129 36.098 43.3556 36.7516V75.7073C43.3556 76.6224 42.7249 77.4067 41.8649 77.4067C41.0622 77.4067 40.4316 76.6224 40.4316 75.7073V42.961L23.4034 76.4917C23.2887 76.7531 23.1167 77.0146 22.8301 77.1453C22.1421 77.6682 21.2247 77.4067 20.8234 76.557L3.33659 42.7649L2.99259 75.7073Z"
            fill="#A8D4AF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M179.351 63.1578C179.351 63.2886 179.523 64.269 179.581 65.3801C179.638 66.5567 179.638 68.06 179.466 69.3019C179.237 70.8705 178.721 72.4392 177.746 73.6158C176.599 74.9884 174.822 75.642 173.217 75.642C171.611 75.642 169.949 74.9884 168.802 73.6811C167.77 72.5046 167.369 70.9359 167.369 69.3019C167.369 68.3868 167.541 67.4717 167.77 66.6874C168.343 65.0533 169.605 64.4651 171.038 64.5304C171.726 64.5958 172.987 64.7265 173.503 65.3148C174.134 66.1645 174.019 67.7985 173.733 68.6482C173.733 68.779 173.618 69.1711 173.159 69.2365C172.93 69.2365 172.357 69.2365 172.07 69.1058C171.898 69.1058 171.841 68.8443 171.841 68.6482C171.841 68.2561 172.07 67.7985 172.07 67.4717C172.07 67.2756 171.955 67.1449 171.783 67.0796C171.439 66.9488 170.522 66.622 170.063 67.341C169.891 67.6025 169.662 68.5175 169.719 69.1711C169.834 70.0208 170.235 70.6091 170.637 70.9359C171.095 71.2627 171.841 71.4588 172.586 71.5242C173.446 71.5895 174.363 71.3934 174.879 70.9359C175.911 70.0208 176.083 68.9751 176.198 67.6025C176.427 65.3148 175.567 63.1578 173.503 62.3735C170.465 61.0663 166.795 61.8506 165.534 65.6416C164.387 68.9751 164.788 73.0275 167.025 75.642C169.433 78.5179 173.618 78.9754 176.714 77.6028C179.007 76.557 180.498 74.7269 181.301 72.1124C181.759 70.6091 181.931 69.0404 181.989 67.4717C181.989 66.6874 181.931 65.9684 181.931 65.3801C181.874 64.7919 181.759 64.0729 181.702 63.6154C181.645 63.2886 181.415 63.2886 181.358 63.2232L179.867 62.8964C179.695 62.831 179.409 62.831 179.351 63.1578Z"
            fill="#FEFEFE"
          />
        </>
      )}
    </Icon>
  ) : (
    <></>
  );}
const CustomCloseIcon = (props) => (
  <Icon viewBox="0 0 45 45" width={"45px"} height={"45px"} {...props}
  transition={"all  .2s ease-in-out"}
  _active={{
    opacity: 0,
  }}
  cursor={"pointer"} _hover={{
    transform: "scale(1.1)",
    stroke:'brand.900',
    fill:'brand.900!important',
  }}>
    <circle
      cx="22.0874"
      cy="22.9126"
      r="21.0874"
      fill="rgba(0,0,0,0)"
      stroke="white"
      stroke-opacity="0.4"
      strokeWidth="2"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.3429 23L28.7269 28.384C29.091 28.7481 29.091 29.3384 28.7269 29.7026L28.7026 29.7269C28.3384 30.091 27.7481 30.091 27.384 29.7269L22 24.3429L16.616 29.7269C16.2519 30.091 15.6616 30.091 15.2974 29.7269L15.2731 29.7026C14.909 29.3384 14.909 28.7481 15.2731 28.384L20.6571 23L15.2731 17.616C14.909 17.2519 14.909 16.6616 15.2731 16.2974L15.2974 16.2731C15.6616 15.909 16.2519 15.909 16.616 16.2731L22 21.6571L27.384 16.2731C27.7481 15.909 28.3384 15.909 28.7026 16.2731L28.7269 16.2974C29.091 16.6616 29.091 17.2519 28.7269 17.616L23.3429 23Z"
      fill="white"
    />
  </Icon>
);
const BrandDownIcon = (props) => {
 return <Icon viewBox="0 0 45 70" width={"45px"} height={"70x"} className='icon'   transition="transform 0.3s"
 {...props}
  // transition={"all  .2s ease-in-out"}
  // _active={{
  //   opacity: 0,
  // }}
  cursor="pointer"
  _hover={{
    cursor:'pointer',
    transform: "scale(1.1)",
    stroke:'brand.900',
    fill:'brand.900!important',
  }}
  >
      <defs>
        <linearGradient id="gradient1"  x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="white" >
            
              <animate attributeName="stop-color" 
                values="white; #A8D4AF" 
                dur="2.5s" 
                repeatCount="indefinite" />
            </stop>         
             <stop offset="0%" stopColor="white" >
            
            <animate attributeName="stop-color" 
              values="#A8D4AF; white;" 
              dur="2.5s" 
              repeatCount="indefinite" />
          </stop>
          <stop offset="0%" stopColor="white" >
            
            <animate attributeName="stop-color" 
              values="#A8D4AF; white; #A8D4AF" 
              dur="2.5s" 
              repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
  <path d="M21.7201 52.3576C22.1107 52.7481 22.7438 52.7481 23.1344 52.3576L29.4983 45.9936C29.8888 45.6031 29.8888 44.9699 29.4983 44.5794C29.1078 44.1889 28.4746 44.1889 28.0841 44.5794L22.4272 50.2363L16.7704 44.5794C16.3799 44.1889 15.7467 44.1889 15.3562 44.5794C14.9657 44.9699 14.9657 45.6031 15.3562 45.9936L21.7201 52.3576ZM21.4272 4.37114e-08L21.4272 51.6505L23.4272 51.6505L23.4272 -4.37114e-08L21.4272 4.37114e-08Z" fill="url(#gradient1)"/>
  <circle cx="22.0874" cy="47.9126" r="21.0874" stroke="url(#gradient1)" strokeWidth="2" fill="none"/>
  <circle id="border" cx="22.0874" cy="47.9126" r="21.0874" stroke="rgba(0,0,0,0)" strokeWidth="2" fill="none"/>
  </Icon>
}
export { MenuIcon, HeaderLogoIcon, CustomCloseIcon, BrandDownIcon };
