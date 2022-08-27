import React, { FC } from "react";
import { SVGProps } from "types/types";

const Signal1: FC<SVGProps> = ({ className, opacity }) => {
    return (
        <svg
            className={className ? className : ""}
            width="108"
            height="108"
            viewBox="0 0 108 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_4_25671)">
                <circle cx="54" cy="54" r="33" fill="white" />
            </g>
            <path
                d="M45.75 66.6641V54.1641C45.75 53.0595 44.8546 52.1641 43.75 52.1641H39.5C38.3954 52.1641 37.5 53.0595 37.5 54.1641V66.6641C37.5 67.7686 38.3954 68.6641 39.5 68.6641H43.75C44.8546 68.6641 45.75 67.7686 45.75 66.6641Z"
                fill="black"
            />
            <path
                d="M57.666 66.6641V45.9141C57.666 44.8095 56.7706 43.9141 55.666 43.9141H51.416C50.3114 43.9141 49.416 44.8095 49.416 45.9141V66.6641C49.416 67.7686 50.3114 68.6641 51.416 68.6641H55.666C56.7706 68.6641 57.666 67.7686 57.666 66.6641Z"
                fill="#8A8A8A"
            />
            <path
                d="M70.5 66.6641V37.6641C70.5 36.5595 69.6046 35.6641 68.5 35.6641H64.25C63.1454 35.6641 62.25 36.5595 62.25 37.6641V66.6641C62.25 67.7686 63.1454 68.6641 64.25 68.6641H68.5C69.6046 68.6641 70.5 67.7686 70.5 66.6641Z"
                fill="#8A8A8A"
            />
            <defs>
                <filter
                    id="filter0_d_4_25671"
                    x="0"
                    y="0"
                    width="108"
                    height="108"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feMorphology
                        radius="3"
                        operator="dilate"
                        in="SourceAlpha"
                        result="effect1_dropShadow_4_25671"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4_25671"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4_25671"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
};

export default Signal1;
