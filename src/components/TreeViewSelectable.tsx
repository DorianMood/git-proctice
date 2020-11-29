import { Checkbox, FormControlLabel } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import { arrayToTree, TreeItem as ITreeItem } from "performant-array-to-tree";
import * as React from "react";

export interface TreeViewSelectableNodeData {
  name: string;
  [key: string]: any;
}

export interface TreeViewSelectableNode {
  id: string;
  children?: TreeViewSelectableNode[];
  [key: string]: any;
}

interface TreeViewSelectableProps {
  data: any[];
}

const buildTree = (items: any[]): TreeViewSelectableNode => {
/*
  const root: any = {
    id: 0,
    parentId: null,
    name: "All",
  };

  const data = items.map((item, index) => {
    return item.parentId ? item : {...item, parentId: 0}
  });
  data.push(root);
*/
  const tree: ITreeItem[] = arrayToTree(items)
  console.log('tree', tree);
  return {id: "", data: { name: "All" }};//regions.reduce(reducer, {})[""];
};

export default function TreeViewSelectable(props: TreeViewSelectableProps) {
  const { data } = props;

  const [selected, setSelected] = React.useState<string[]>([]);

  const buildItems = (tree: TreeViewSelectableNode) => {
    return (
      <TreeItem
        key={tree.id}
        nodeId={tree.id}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.some((item) => item === tree.id)}
                onClick={(e) => e.stopPropagation()}
              />
            }
            label={<>{tree.data.name}</>}
            key={tree.id}
          />
        }
      >
        {tree.children ? tree.children.map((item) => buildItems(item)) : null}
      </TreeItem>
    );
  };

  const tree = buildTree(data);
  const treeItems = buildItems(tree);

  return <TreeView>{treeItems}</TreeView>;
}
