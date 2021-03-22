import { classNames } from '../lib/classNames';

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum Color {
  REGULAR = 'regular',
  MONOCHROME = 'monochrome',
}

let ColorVariants: Record<Color, string> = {
  [Color.REGULAR]: 'text-blue-500',
  [Color.MONOCHROME]: 'text-gray-800',
};

let SizeVariants: Record<Size, string> = {
  [Size.SMALL]: 'w-5 h-5',
  [Size.MEDIUM]: 'w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10',
  [Size.LARGE]: 'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
};

type Props = {
  size?: Size;
  color?: Color;
};
export function InstagramIcon({
  size = Size.MEDIUM,
  color = Color.REGULAR,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={classNames(ColorVariants[color], SizeVariants[size])}
      data-icon="instagram"
      data-prefix="fab"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      ></path>
    </svg>
  );
}

export function MessengerIcon({
  size = Size.MEDIUM,
  color = Color.REGULAR,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(ColorVariants[color], SizeVariants[size])}
      aria-hidden="true"
      data-icon="facebook-messenger"
      data-prefix="fab"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 00122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 01-53.91 9.93l-58.08-43.47a15 15 0 00-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0153.91-9.93l58.06 43.46a15 15 0 0018 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
      ></path>
    </svg>
  );
}

export function TwitterIcon({
  size = Size.MEDIUM,
  color = Color.REGULAR,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={classNames(ColorVariants[color], SizeVariants[size])}
      data-icon="twitter-square"
      data-prefix="fab"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
      ></path>
    </svg>
  );
}

export function LinkedInIcon({
  size = Size.MEDIUM,
  color = Color.REGULAR,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={classNames(ColorVariants[color], SizeVariants[size])}
      data-icon="linkedin"
      data-prefix="fab"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
      ></path>
    </svg>
  );
}

export function FacebookIcon({
  size = Size.MEDIUM,
  color = Color.REGULAR,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={classNames(ColorVariants[color], SizeVariants[size])}
      data-icon="facebook-square"
      data-prefix="fab"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z"
      ></path>
    </svg>
  );
}
