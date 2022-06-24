import { MenuItem } from "primereact/menuitem";
import { AppRouting } from "../../../enums/app-routing";
import { PrimeIcons } from "primereact/api";
import { NavigateFunction } from "react-router-dom";
import { Location } from "react-router-dom";

export const DEFAULT_MENU_ITEMS = (props: {
  navigate: NavigateFunction,
  location: Location
}): MenuItem[] => {
  const path = props.location.pathname;
  return [
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      command: () => props.navigate(AppRouting.MOVIES),
      className: path === AppRouting.MOVIES ? 'active' : ''
    },
    {
      label: 'Favorites',
      icon: PrimeIcons.HEART_FILL,
      command: () => props.navigate(AppRouting.MOVIES_FAVORITES),
      className: path === AppRouting.MOVIES_FAVORITES ? 'active' : ''
    },
    {
      label: 'Discover',
      icon: PrimeIcons.SEARCH,
      command: () => props.navigate(AppRouting.MOVIES_DISCOVER),
      className: path === AppRouting.MOVIES_DISCOVER ? 'active' : ''
    },
  ];
};