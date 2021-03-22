import { FC } from 'react';
import { HcmsSocialLinks, Maybe } from '../lib/graphql';
import { Size, Color, FacebookIcon, InstagramIcon, TwitterIcon } from './Icon';

type Props = {
  copyRightText: string;
  socialLinks: Maybe<
    Array<
      Maybe<
        { __typename?: 'HCMSSocialLinks' } & Pick<
          HcmsSocialLinks,
          'iconName' | 'iconUrl'
        >
      >
    >
  >;
};
export function Footer(props: Props) {
  return (
    <div className="pt-2">
      <div
        className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
md:flex-row max-w-6xl"
      >
        <div className="mt-2">{props.copyRightText}</div>
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          {props.socialLinks?.map((social) => {
            let Icon: FC<{ size?: Size; color?: Color }> = () => null;
            if (social?.iconName === 'facebook') {
              Icon = FacebookIcon;
            } else if (social?.iconName === 'twitter') {
              Icon = TwitterIcon;
            } else if (social?.iconName === 'instagram') {
              Icon = InstagramIcon;
            }
            return (
              <>
                <a href={social?.iconUrl ?? '#'} className="w-6 mx-1">
                  <Icon size={Size.SMALL} color={Color.MONOCHROME} />
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
