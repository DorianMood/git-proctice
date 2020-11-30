import { Checkbox, FormControlLabel } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import { arrayToTree, TreeItem as ITreeItem } from "performant-array-to-tree";
import * as React from "react";

export interface TreeViewSelectableNodeData {
  name: string;
  [key: string]: any;
}

export interface TreeViewSelectableNode {
  id?: string | number;
  parentId?: string | number | null;
  children?: TreeViewSelectableNode[];
  [key: string]: any;
}

interface TreeViewSelectableProps {
  data: any[];
}

const buildTree = (items: any[]): TreeViewSelectableNode => {
  const tree: TreeViewSelectableNode[] = arrayToTree(items);
  return {id: 0, children: tree, name: ""};
};

export default function TreeViewSelectable(props: TreeViewSelectableProps) {
  const { data } = props;

  const [selected, setSelected] = React.useState<string[]>([]);

  const buildItems = (tree: TreeViewSelectableNode) => {
    console.log(`Item`, tree);
    return (
      <TreeItem
        key={tree.id}
        nodeId={tree.id?.toString()}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.some((item) => item === tree.id)}
                onClick={(e) => e.stopPropagation()}
              />
            }
            label={<>{tree.data?.name}</>}
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
