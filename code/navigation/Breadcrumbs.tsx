import * as System from "baseui/breadcrumbs";
import { StyledLink as Link } from "baseui/link";
import { addPropertyControls, ControlType } from "framer";
import * as React from "react";
import { withHOC } from "../withHOC";

const InnerBreadcrumbs: React.SFC = props => {
  const { activeItem, items } = props.items.reduce(
    (acc, item, index) => {
      if (index === props.activeItemIndex) {
        acc.activeItem = item;
      } else {
        acc.items.push(item);
      }
      return acc;
    },
    { activeItem: null, items: [] }
  );

  return (
    <System.Breadcrumbs {...props}>
      {items.map((item, index) => (
        <Link key={index}>{item}</Link>
      ))}
      {activeItem && <span>{activeItem}</span>}
    </System.Breadcrumbs>
  );
};

export const Breadcrumbs = withHOC(InnerBreadcrumbs);

Breadcrumbs.defaultProps = {
  width: 394,
  height: 26
};

const defaultItems = ["Parent Page", "Sub-Parent Page", "Current Page"];

addPropertyControls(Breadcrumbs, {
  items: {
    type: ControlType.Array,
    title: "Items",
    defaultValue: defaultItems,
    propertyControl: {
      type: ControlType.String
    }
  },
  activeItemIndex: {
    type: ControlType.Number,
    title: "Active Item",
    defaultValue: defaultItems.length - 1
  }
});
