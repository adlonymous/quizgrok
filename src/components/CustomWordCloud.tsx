'use client'

import { useTheme } from 'next-themes';
import React from 'react'
import D3WorldCloud from 'react-d3-cloud';

type Props = {}

const data = [
    {
        text: "Cricket",
        value: 3,
    },
    {
        text: "Blockchain",
        value: 10,
    },
    {
        text: "Organic Chemistry",
        value: 4,
    },
    {
        text: "TypeScript",
        value: 5,
    },
    {
        text: "Stoicism",
        value: 7,
    },
    {
        text: "Electromagnetism",
        value: 8,
    },    {
        text: "Air Pollution",
        value: 6,
    },    {
        text: "Acids",
        value: 9,
    },    {
        text: "Computer",
        value: 6,
    },    {
        text: "Oxidation",
        value: 5,
    },
];

const fontSizeMapper = (word: {value: number}) => {
    return Math.log2(word.value) * 5 + 16
}

const CustomWordCloud = (props: Props) => {
    const theme = useTheme();
  return (
    <>
        <D3WorldCloud 
        height={550}
        data={data}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme == 'dark' ? "white" : "black"}
        />
    </>
  )
}

export default CustomWordCloud