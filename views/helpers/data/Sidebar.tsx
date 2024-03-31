import { ROUTES } from "../routes";
import AppsIcon from "../../assets/images/apps-icon.svg";
import SettingsIcon from "../../assets/images/apps-icon.svg";
import ActionsIcon from "../../assets/images/actions-icon.svg";
import HelpCenterIcon from "../../assets/images/actions-icon.svg";
import OverviewIcon from "../../assets/images/overview-icon.svg";
import EmployeesIcon from "../../assets/images/employees-icon.svg";
import PayrollIcon from "../../assets/images/user-icon.svg";
import AssetsIcon from "../../assets/images/employees-icon.svg";
import CalendarIcon from "../../assets/images/overview-icon.svg";
import DocumentsIcon from "../../assets/images/document-icon.svg";

import ActiveAppsIcon from "../../assets/images/apps-icon.svg";
import ActiveSettingsIcon from "../../assets/images/apps-icon.svg";
import ActiveActionsIcon from "../../assets/images/actions-icon.svg";
import ActiveHelpCenterIcon from "../../assets/images/actions-icon.svg";
import ActiveOverviewIcon from "../../assets/images/overview-icon.svg";
import ActiveEmployeesIcon from "../../assets/images/active-employees-icon.svg";
import ActivePayrollIcon from "../../assets/images/active-user-icon.svg";
import ActiveAssetsIcon from "../../assets/images/active-employees-icon.svg";
import ActiveCalendarIcon from "../../assets/images/overview-icon.svg";
import ActiveDocumentsIcon from "../../assets/images/active-document-icon.svg";

export const sidebar = [
  {
    section: "General",
    menus: [
      {
        icon: AppsIcon,
        activeIcon: ActiveAppsIcon,
        menu: "Apps",
        path: ROUTES.APPS,
        subMenus: [],
      },
      {
        icon: ActionsIcon,
        activeIcon: ActiveActionsIcon,
        menu: "Actions",
        path: ROUTES.ACTIONS,
        subMenus: [],
      },
      {
        icon: OverviewIcon,
        activeIcon: ActiveOverviewIcon,
        menu: "Overview",
        path: ROUTES.OVERVIEW,
        subMenus: [],
      },
      {
        icon: EmployeesIcon,
        activeIcon: ActiveEmployeesIcon,
        menu: "Employees",
        path: ROUTES.EMPLOYEES,
        subMenus: [],
      },
      {
        icon: AssetsIcon,
        activeIcon: ActiveAssetsIcon,
        menu: "Assets",
        path: "/assets",
        subMenus: [
          { subMenu: "Inventory", path: ROUTES.INVENTORY_ASSETS },
          { subMenu: "Membership", path: ROUTES.MEMBERSHIP_ASSETS },
          { subMenu: "All Asset", path: ROUTES.ALL_ASSETS },
        ],
      },
      {
        icon: PayrollIcon,
        activeIcon: ActivePayrollIcon,
        menu: "Payroll",
        path: ROUTES.PAYROLL,
        subMenus: [],
      },
      {
        icon: CalendarIcon,
        activeIcon: ActiveCalendarIcon,
        menu: "Calendar",
        path: ROUTES.CALENDAR,
        subMenus: [],
      },
      {
        icon: DocumentsIcon,
        activeIcon: ActiveDocumentsIcon,
        menu: "Documents",
        path: ROUTES.DOCUMENTS,
        subMenus: [],
      },
      {
        icon: DocumentsIcon,
        activeIcon: ActiveDocumentsIcon,
        menu: "Recruitment",
        path: ROUTES.RECRUITMENT,
        subMenus: [],
      },
      {
        icon: DocumentsIcon,
        activeIcon: ActiveDocumentsIcon,
        menu: "Clockin",
        path: ROUTES.CLOCKIN,
        subMenus: [],
      },
      {
        icon: DocumentsIcon,
        activeIcon: ActiveDocumentsIcon,
        menu: "Rotas",
        path: ROUTES.ROTAS,
        subMenus: [],
      },
      {
        icon: DocumentsIcon,
        activeIcon: ActiveDocumentsIcon,
        menu: "Expenses",
        path: ROUTES.EXPENSES,
        subMenus: [],
      },
    ],
  },
  {
    section: "Support",
    menus: [
      {
        icon: SettingsIcon,
        activeIcon: ActiveSettingsIcon,
        menu: "Settings",
        path: ROUTES.SETTINGS,
        subMenus: [],
      },
      {
        icon: HelpCenterIcon,
        activeIcon: ActiveHelpCenterIcon,
        menu: "Help Center",
        path: ROUTES.HELP_CENTER,
        subMenus: [],
      },
    ],
  },
];
