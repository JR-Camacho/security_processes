import { useState } from "react";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const menuItems = [
  {
    title: "ClasificatorAI",
    link: "https://clasificatorai.netlify.app/",
    description: "Website with ready-to-test image classification templates.",
  },
];

const MenuItems = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="text"
          className="flex items-center gap-3 text-base font-normal tracking-normal uppercase text-white"
        >
          More services{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="hidden w-[26rem] grid-cols-7 gap-3 overflow-visible lg:grid"
      >
        <Card
          color="blue"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, link, description }) => (
            <a href={link} key={title} target="_blank">
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
};
export default MenuItems;
