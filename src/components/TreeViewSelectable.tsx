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
  console.log(tree);
  return {id: 0, children: tree, data: {id: 0, name: "All"}};
};

export default function TreeViewSelectable(props: TreeViewSelectableProps) {
  const { data } = props;

  const [selected, setSelected] = React.useState<string[]>([]);

  const buildItems = (tree: TreeViewSelectableNode) => {
    console.log(`Item`, tree.data?.name, tree.data?.id, tree.children.length);
    return (
      <TreeItem
        key={tree.data?.id}
        nodeId={tree.data?.id?.toString()}
        label={
          <FormControlLabel
            control={
              <Checkbox
                checked={selected.some((item) => item === tree.data?.id)}
                onClick={(e) => e.stopPropagation()}
              />
            }
            label={<>{tree.data?.name}</>}
            key={tree.data?.id}
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
