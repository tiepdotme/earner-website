import React from "react"
import styled from "styled-components"

const defs = {
  width: "30px"
}

const Icons: any = {
  checkMark: (
    <g transform="matrix(5.833333333333333,0,0,5.833333333333333,0,0)">
      <path
        d="M8.248,20.882,1.617,14.25A2.96,2.96,0,0,1,5.8,10.064l4.218,4.218,7.9-10.533A2.96,2.96,0,1,1,22.657,7.3L12.71,20.565A2.961,2.961,0,0,1,8.248,20.882Z"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></path>
    </g>
  ),

  closeX: (
    <g>
      <path d=" M 82.1 22.1 Q 83.0017578125 21.24453125 83 20 83.0017578125 18.75546875 82.1 17.85 81.24453125 16.9982421875 80 17 78.7552734375 16.998046875 77.85 17.85 L 50 45.75 22.1 17.85 Q 21.24453125 16.998046875 20 17 18.75546875 16.9982421875 17.85 17.85 16.9982421875 18.75546875 17 20 16.998046875 21.24453125 17.85 22.1 L 45.75 50 17.85 77.85 Q 16.998046875 78.7552734375 17 80 16.9982421875 81.24453125 17.85 82.1 18.75546875 83.0017578125 20 83 21.24453125 83.0017578125 22.1 82.1 L 50 54.25 77.85 82.1 Q 78.7552734375 83.0017578125 80 83 81.24453125 83.0017578125 82.1 82.1 83.0017578125 81.24453125 83 80 83.0017578125 78.7552734375 82.1 77.85 L 54.25 50 82.1 22.1 Z" />
    </g>
  ),

  presentation: (
    <g>
      <path d="M 2.25,1.5h19.5c0.414,0,0.75,0.336,0.75,0.75v1.5c0,0.414-0.336,0.75-0.75,0.75H2.25 C1.836,4.5,1.5,4.164,1.5,3.75v-1.5C1.5,1.836,1.836,1.5,2.25,1.5z "></path>
      <path d="M 3,4.5h18V18H3V4.5z "></path>
      <path d="M 12,21.5V18 "></path>
      <path d="M 1.5,18h21 "></path>
      <path d="M 15,9h3 "></path>
      <path d="M 15,12h3 "></path>
      <path d="M 9,7.5c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S7.343,7.5,9,7.5z "></path>
      <path d="M 13.5,22.5c0-0.553-0.672-1-1.5-1s-1.5,0.447-1.5,1"></path>
    </g>
  ),
  task: (
    <g>
      <path d="M 5.25,10.511h5.25 "></path>
      <path d="M 5.25,14.261h3 "></path>
      <path d="M 5.25,18.011h3 "></path>
      <path d="M 9.75,23.261h-7.5c-0.828,0-1.5-0.672-1.5-1.5V6.011 c0-0.828,0.672-1.5,1.5-1.5H6c0-2.071,1.679-3.75,3.75-3.75s3.75,1.679,3.75,3.75h3.75c0.828,0,1.5,0.672,1.5,1.5v2.25 "></path>
      <path d="M 9.75,3.761 c0.207,0,0.375,0.168,0.375,0.375c0,0.207-0.168,0.375-0.375,0.375S9.375,4.343,9.375,4.136c0,0,0,0,0,0 C9.375,3.929,9.543,3.761,9.75,3.761 "></path>
      <path d="M 17.25,11.261c3.314,0,6,2.686,6,6s-2.686,6-6,6s-6-2.686-6-6S13.936,11.261,17.25,11.261z "></path>
      <path d="M 19.924,15.516l-2.905,3.874c-0.249,0.332-0.72,0.398-1.052,0.149c-0.028-0.021-0.055-0.044-0.079-0.069l-1.5-1.5"></path>
    </g>
  ),
  logout: (
    <g>
      <path d="M 20.249,18.754v1.5c0,0.828-0.672,1.5-1.5,1.5h-4.5 "></path>
      <path d="M 14.249,3.754h4.5c0.828,0,1.5,0.672,1.5,1.5v1.5 "></path>
      <path d="M 10.393,23.246l-9-1.286c-0.369-0.053-0.644-0.369-0.644-0.742V3.725c0-0.354,0.247-0.66,0.593-0.734l9-2.221 c0.405-0.087,0.804,0.171,0.89,0.576c0.011,0.052,0.017,0.105,0.017,0.158v21c0,0.414-0.336,0.75-0.75,0.75 C10.463,23.254,10.428,23.251,10.393,23.246z "></path>
      <path d="M 20.249,9.753l3,3h-8.25 "></path>
      <path d="M 20.25,15.753l3-3 "></path>
      <path d="M 7.874,11.629 c-0.207,0-0.375,0.168-0.375,0.375s0.168,0.375,0.375,0.375s0.375-0.168,0.375-0.375c0-0.001,0-0.003,0-0.004 c0.001-0.207-0.166-0.374-0.373-0.375c-0.001,0-0.001,0-0.002,0l0,0"></path>
    </g>
  ),
  arrow: (
    <g>
      <path d="M 0.75,10c0-0.828,0.672-1.5,1.5-1.5H16.5V5.011c0-0.272,0.163-0.343,0.362-0.158l6.149,6.1 c0.304,0.282,0.322,0.756,0.04,1.06c-0.013,0.014-0.026,0.027-0.04,0.04l-6.149,6.1c-0.2,0.185-0.362,0.114-0.362-0.158V14.5H2.25 c-0.828,0-1.5-0.672-1.5-1.5V10z"></path>
    </g>
  ),
  emailSend: (
    <g>
      <path d="M 1.4,3.743C0.996,3.02,1.254,2.106,1.978,1.702C2.409,1.461,2.93,1.448,3.373,1.666l19.014,9.659 c0.369,0.188,0.516,0.639,0.328,1.009c-0.072,0.142-0.187,0.257-0.328,0.328L3.373,22.334c-0.743,0.367-1.642,0.061-2.009-0.682 C1.146,21.21,1.159,20.688,1.4,20.257l5.058-8.264L1.4,3.743z "></path>
      <path d="M 22.797,11.993H6.453"></path>
    </g>
  ),
  github: (
    <g>
      <path d="M 14.41,22.35c0,0.276,0.224,0.5,0.5,0.5c0.047,0,0.095-0.007,0.14-0.02c5.969-1.723,9.412-7.959,7.689-13.929 C21.016,2.932,14.779-0.511,8.81,1.213s-9.412,7.959-7.689,13.929c1.072,3.714,3.975,6.617,7.689,7.689 c0.265,0.077,0.543-0.075,0.62-0.34c0.013-0.045,0.02-0.093,0.02-0.14V20C8.026,20.43,6.513,19.676,6,18.28 C5.72,17.429,5.256,16.65,4.64,16c2.85,0.69,2.9,2.54,4.84,1.67c0.059-0.649,0.275-1.274,0.63-1.82c-2.2-0.25-4.52-0.6-4.52-4.4 c-0.019-0.982,0.339-1.934,1-2.66c-0.301-0.854-0.265-1.791,0.1-2.62c0,0,0.83-0.27,2.73,1c1.636-0.452,3.364-0.452,5,0 c1.89-1.28,2.72-1,2.72-1c0.365,0.829,0.401,1.766,0.1,2.62c0.662,0.726,1.02,1.678,1,2.66c0,3.81-2.32,4.15-4.53,4.39 c0.473,0.682,0.712,1.5,0.68,2.33L14.41,22.35z"></path>
    </g>
  ),
  twitter: (
    <g>
      <path d="M 23.18,6.71l-2.1-0.9l1.1-2.4l-2.56,0.85c-0.815-0.76-1.885-1.188-3-1.2c-2.483,0.005-4.495,2.017-4.5,4.5v1 c-3.54,0.73-6.63-1.2-9.5-4.5c-0.5,2.667,0,4.667,1.5,6l-3.29-0.5c0.262,2.186,2.052,3.871,4.25,4l-2.75,1c1,2,2.82,2.31,5.25,2.5 c-1.986,1.355-4.346,2.054-6.75,2c12.76,5.67,20.25-2.66,20.25-10V8.23L23.18,6.71z"></path>
    </g>
  ),
  linkedIn: (
    <g>
      <path d="M 5.67,22.63H0.81V8.7h4.86V22.63z "></path>
      <path d="M 15.76,13.24c-1.182,0-2.14,0.958-2.14,2.14l0,0v7.25H8.51V8.7h5.11v1.59 c1.198-1.014,2.711-1.58,4.28-1.6c3.17,0,5.37,2.35,5.37,6.81v7.13H17.9v-7.25c0.006-1.182-0.948-2.144-2.13-2.15 c-0.003,0-0.007,0-0.01,0V13.24z "></path>
      <path d="M 5.76,3.88c0,1.381-1.119,2.5-2.5,2.5s-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5 c1.373,0.011,2.48,1.127,2.48,2.5L5.76,3.88z"></path>
    </g>
  ),
  instagram: (
    <g>
      <path d="M 6.74,0.75h10.5c3.314,0,6,2.686,6,6v10.5c0,3.314-2.686,6-6,6H6.74c-3.314,0-6-2.686-6-6V6.75 C0.74,3.436,3.426,0.75,6.74,0.75z "></path>
      <path d="M 11.99,7c2.761,0,5,2.239,5,5s-2.239,5-5,5s-5-2.239-5-5S9.229,7,11.99,7z "></path>
      <path d="M 19.34,5.15 c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5 "></path>
      <path d="M 18.34,5.15c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5"></path>
    </g>
  )
}

interface Props {
  name: string
  fill?: string
  stroke?: string
  width?: string
  height?: string | number
  viewBox?: string
  strokeWidth?: string
}

export const Icon = ({
  name = "sun",
  height = "50px",
  width = "50px",
  fill = "none",
  stroke = "#333",
  strokeWidth = "1.5",
  viewBox = `0 0 ${30} ${30}`
}: Props) => {
  return (
    <SVG
      width={width}
      height={height}
      viewBox={viewBox}
      version="1.1"
      strokeWidth={strokeWidth}
      fill={fill}
      stroke={stroke}
      xmlns="http://www.w3.org/2000/svg"
    >
      {Icons[name]}
    </SVG>
  )
}

const SVG = styled.svg`
  vertical-align: middle;
  margin-right: 5px;
`