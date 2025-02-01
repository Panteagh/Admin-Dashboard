import {  Stack, SvgIcon } from "@mui/material";
import TopAnalyticsCard from "../TopAnalyticsCard/TopAnalyticsCard";

function Dashboard(){
  return (
      <Stack direction={"row"} spacing={2}>
        <TopAnalyticsCard
          icon={
            <SvgIcon sx={{fontSize:"40px"}}>
              <svg
                width="100"
                height="100"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="#605CFF"
                  fillOpacity="0.3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28 36.9998L19.847 29.2408C18.656 28.1078 18 26.5988 18 24.9918C18 23.3848 18.656 21.8758 19.847 20.7418C22.067 18.6288 25.552 18.4388 28 20.1688C30.448 18.4388 33.933 18.6288 36.153 20.7418C37.344 21.8758 38 23.3848 38 24.9918C38 26.5988 37.344 28.1078 36.153 29.2408L28 36.9998Z"
                  fill="#3A36DB"
                />
              </svg>
            </SvgIcon>
          }
          statistics={"+250"}
          AnalyticsCardItem={"Save Products"}
        />
        <TopAnalyticsCard
          icon={
            <SvgIcon sx={{fontSize:"40px"}}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="#2FE6A7"
                  fillOpacity="0.3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M31.164 22.0825C31.4791 22.0868 31.7949 22.0912 32.1119 22.0944C35.5172 22.0944 38 24.5222 38 27.8748V32.1811C38 35.5337 35.5172 37.9615 32.1119 37.9615C30.7478 37.9904 29.3837 38 28.0098 38C26.6359 38 25.2522 37.9904 23.8881 37.9615C20.4828 37.9615 18 35.5337 18 32.1811V27.8748C18 24.5222 20.4828 22.0944 23.8979 22.0944C25.1835 22.0751 26.4985 22.0559 27.8332 22.0559V21.8921C27.8332 21.2274 27.2738 20.6879 26.6065 20.6879H25.6349C24.526 20.6879 23.6232 19.8015 23.6232 18.7225C23.6232 18.3276 23.9568 18 24.3592 18C24.7713 18 25.0952 18.3276 25.0952 18.7225C25.0952 19.0116 25.3405 19.2428 25.6349 19.2428H26.6065C28.0883 19.2524 29.2954 20.4374 29.3052 21.8825V22.0655C29.9239 22.0655 30.5425 22.074 31.164 22.0825ZM26.8518 30.7457H25.8214V31.7669C25.8214 32.1618 25.4877 32.4894 25.0854 32.4894C24.6732 32.4894 24.3494 32.1618 24.3494 31.7669V30.7457H23.3091C22.9068 30.7457 22.5731 30.4277 22.5731 30.0231C22.5731 29.6281 22.9068 29.3006 23.3091 29.3006H24.3494V28.289C24.3494 27.894 24.6732 27.5665 25.0854 27.5665C25.4877 27.5665 25.8214 27.894 25.8214 28.289V29.3006H26.8518C27.2542 29.3006 27.5878 29.6281 27.5878 30.0231C27.5878 30.4277 27.2542 30.7457 26.8518 30.7457ZM31.0226 29.1175H31.1207C31.5231 29.1175 31.8567 28.7996 31.8567 28.395C31.8567 28 31.5231 27.6724 31.1207 27.6724H31.0226C30.6104 27.6724 30.2866 28 30.2866 28.395C30.2866 28.7996 30.6104 29.1175 31.0226 29.1175ZM32.7007 32.4316H32.7988C33.2012 32.4316 33.5348 32.1137 33.5348 31.7091C33.5348 31.3141 33.2012 30.9865 32.7988 30.9865H32.7007C32.2875 30.9865 31.9647 31.3141 31.9647 31.7091C31.9647 32.1137 32.2875 32.4316 32.7007 32.4316Z"
                  fill="#2FE6A7"
                />
              </svg>
            </SvgIcon>
          }
          statistics={"+20"}
          AnalyticsCardItem={"Stock Products"}
        />
        <TopAnalyticsCard
          icon={
            <SvgIcon sx={{fontSize:"40px"}}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="#FF69B4"
                  fillOpacity="0.3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.9303 23C32.9621 22.9291 32.977 22.8519 32.9739 22.7743H33C32.8882 20.1059 30.6849 18 28.0049 18C25.325 18 23.1217 20.1059 23.0099 22.7743C22.9967 22.849 22.9967 22.9253 23.0099 23H22.9317C21.6502 23 20.2803 23.846 19.8826 26.1201L19.1049 32.3147C18.4686 36.8629 20.8106 38 23.8685 38H32.1585C35.2075 38 37.4789 36.3535 36.9133 32.3147L36.1444 26.1201C35.676 23.9096 34.3503 23 33.0865 23H32.9303ZM31.4932 23C31.4654 22.9279 31.4506 22.8515 31.4497 22.7743C31.4497 20.8568 29.8899 19.3024 27.9657 19.3024C26.0416 19.3024 24.4818 20.8568 24.4818 22.7743C24.495 22.849 24.495 22.9253 24.4818 23H31.4932ZM25.097 28.1486C24.6089 28.1486 24.2132 27.7413 24.2132 27.2389C24.2132 26.7366 24.6089 26.3293 25.097 26.3293C25.5851 26.3293 25.9808 26.7366 25.9808 27.2389C25.9808 27.7413 25.5851 28.1486 25.097 28.1486ZM30.002 27.2389C30.002 27.7413 30.3977 28.1486 30.8858 28.1486C31.3739 28.1486 31.7696 27.7413 31.7696 27.2389C31.7696 26.7366 31.3739 26.3293 30.8858 26.3293C30.3977 26.3293 30.002 26.7366 30.002 27.2389Z"
                  fill="#FF69B4"
                />
              </svg>
            </SvgIcon>
          }
          statistics={"+190"}
          AnalyticsCardItem={"Sales Products"}
        />
        <TopAnalyticsCard
          icon={
            <SvgIcon sx={{fontSize:"40px"}}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="56"
                  height="56"
                  rx="28"
                  fill="#605CFF"
                  fillOpacity="0.3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.4453 17.8234C25.6409 17.8234 24.9565 18.3824 24.7645 19.1358H31.2237C31.0316 18.3824 30.3472 17.8234 29.5428 17.8234H26.4453ZM33.0485 19.1352H35.4257C37.947 19.1352 40 21.2131 40 23.765C40 23.765 39.928 24.8453 39.904 26.3497C39.9016 26.4688 39.8439 26.5855 39.7491 26.6559C39.1716 27.0825 38.6433 27.4349 38.5953 27.4592C36.6023 28.7959 34.2863 29.7364 31.8191 30.2043C31.6582 30.2359 31.4998 30.152 31.4181 30.0086C30.7266 28.8105 29.4347 28.0303 27.994 28.0303C26.5629 28.0303 25.259 28.802 24.5471 30.0013C24.4642 30.1423 24.3082 30.2237 24.1485 30.1933C21.7017 29.7243 19.3857 28.7849 17.4047 27.4713L16.2521 26.6693C16.1561 26.6086 16.096 26.4992 16.096 26.3777C16.06 25.7579 16 23.765 16 23.765C16 21.2131 18.053 19.1352 20.5743 19.1352H22.9395C23.1676 17.3732 24.6443 16 26.4452 16H29.5428C31.3437 16 32.8204 17.3732 33.0485 19.1352ZM39.5917 28.9769L39.5437 29.0012C37.1185 30.6296 34.201 31.7111 31.1395 32.1607C30.7073 32.2215 30.275 31.942 30.155 31.5045C29.8908 30.5081 29.0384 29.8519 28.0179 29.8519H28.0059H27.9819C26.9614 29.8519 26.109 30.5081 25.8448 31.5045C25.7248 31.942 25.2925 32.2215 24.8603 32.1607C21.7988 31.7111 18.8813 30.6296 16.4561 29.0012C16.4441 28.9891 16.3241 28.9162 16.228 28.9769C16.12 29.0377 16.12 29.1835 16.12 29.1835L16.204 35.3809C16.204 37.9328 18.245 39.9986 20.7663 39.9986H35.2215C37.7428 39.9986 39.7838 37.9328 39.7838 35.3809L39.8798 29.1835C39.8798 29.1835 39.8798 29.0377 39.7718 28.9769C39.7118 28.9405 39.6397 28.9526 39.5917 28.9769ZM28.8943 34.0687C28.8943 34.5791 28.4981 34.9801 27.9938 34.9801C27.5016 34.9801 27.0934 34.5791 27.0934 34.0687V32.5011C27.0934 32.0029 27.5016 31.5898 27.9938 31.5898C28.4981 31.5898 28.8943 32.0029 28.8943 32.5011V34.0687Z"
                  fill="#3A36DB"
                />
              </svg>
            </SvgIcon>
          }
          statistics={"+12"}
          AnalyticsCardItem={"Job Application"}
        />
      </Stack>
    // </Container>
  );
}

export default Dashboard;
