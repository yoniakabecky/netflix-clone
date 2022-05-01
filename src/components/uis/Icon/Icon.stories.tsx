import SvgIcon from '@mui/material/SvgIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import BellIcon from './BellIcon';
import ChevronDownIcon from './ChevronDownIcon';
import CrossIcon from './CrossIcon';
import InfoIcon from './InfoIcon';
import MuteIcon from './MuteIcon';
import PlayIcon from './PlayIcon';
import PlusIcon from './PlusIcon';
import SearchIcon from './SearchIcon';
import ThumbsUpIcon from './ThumbsUpIcon';
import UnmuteIcon from './UnmuteIcon';

export default {
  title: 'UI/Icon',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>;

export const Bell: ComponentStory<typeof SvgIcon> = () => <BellIcon />;
export const Cross: ComponentStory<typeof SvgIcon> = () => <CrossIcon />;
export const Down: ComponentStory<typeof SvgIcon> = () => <ChevronDownIcon />;
export const Mute: ComponentStory<typeof SvgIcon> = () => <MuteIcon />;
export const Info: ComponentStory<typeof SvgIcon> = () => <InfoIcon />;
export const Play: ComponentStory<typeof SvgIcon> = () => <PlayIcon />;
export const Plus: ComponentStory<typeof SvgIcon> = () => <PlusIcon />;
export const Search: ComponentStory<typeof SvgIcon> = () => <SearchIcon />;
export const ThumbsUp: ComponentStory<typeof SvgIcon> = () => <ThumbsUpIcon />;
export const Unmute: ComponentStory<typeof SvgIcon> = () => <UnmuteIcon />;
