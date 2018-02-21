import './polyfills';

import Menu from './Menu';
import MenuContext from './MenuContext';
import MenuOption from './MenuOption';
import MenuOptions from './MenuOptions';
import MenuTrigger from './MenuTrigger';

import ContextMenu from './renderers/ContextMenu';
import NotAnimatedContextMenu from './renderers/NotAnimatedContextMenu';
import SlideInMenu from './renderers/SlideInMenu';
import ContextMenuRight from'./renderers/ContextMenuRight';
const renderers = { ContextMenu, SlideInMenu, NotAnimatedContextMenu, ContextMenuRight };

export { Menu as default, Menu, MenuContext, MenuOption, MenuOptions, MenuTrigger, renderers };
