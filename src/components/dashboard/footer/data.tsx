import { FaWallet, FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineEventNote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

export const fMenuLink = [
    {
      label: "Wallet",
      icon: <FaWallet />,
      slug: "/dashboard",
    },
    {
      label: "NFT",
      icon: <FaMoneyBillTransfer />,
      slug: "/dashboard/nfts",
    },
    {
      label: "Settings",
      icon: <IoSettingsOutline />,
      slug: "/dashboard/profile",
    },
  ];