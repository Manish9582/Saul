import { PiHandHeartThin } from "react-icons/pi";
import { TbWorldHeart, TbDeviceMobileHeart, TbUserHeart } from "react-icons/tb";

export const arrIcon = [
    {
        id: 1,
        icon: <PiHandHeartThin />,
        content: 'Emotional intimacy is the deep connection where two hearts feel safe to be fully seen, heard, and understood.',
        title: 'Emotional Intimacy'
    },
    {
        id: 2,
        icon: <TbWorldHeart />,
        content: 'Social interaction is the dynamic exchange of thoughts, feelings, and behaviors between individuals or groups in a shared social space.',
        title: 'Social Interaction'
    },
    {
        id: 3,
        icon: <TbDeviceMobileHeart />,
        content: "Rapid filtering is the quick process of sifting through information or stimuli to identify what's relevant or important in a given context.",
        title: 'Rapid Filtering'
    },
    {
        id: 4,
        icon: <TbUserHeart />,
        content: 'Mutual interest is a shared curiosity or passion between individuals that fosters connection and engagement.',
        title: 'Mutual Interest'
    }
];
import { IoHomeOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbMessageHeart } from "react-icons/tb";

export const profileIcon = [
    {
        id: 1,
        icon: <IoHomeOutline />,
        title: 'Home',
        links:'/'
    },
    {
        id: 2,
        icon: <FiSearch />,
        title: 'Search',
    },
    {
        id: 3,
        icon: <IoMdHeartEmpty />,
        title: 'Notification',
    },
    {
        id: 4,
        icon: <TbMessageHeart />,
        title: 'Message',
        links:'/profile/message'

    }
];