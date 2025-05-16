// 示例输入
const list = [
  { id: 1, parentId: 0, name: 'root' },
  { id: 2, parentId: 1, name: 'child-1' },
  { id: 3, parentId: 1, name: 'child-2' },
  { id: 4, parentId: 2, name: 'child-1-1' },
  { id: 5, parentId: 0, name: 'another-root' }
]

// 目标输出
[
  {
    id: 1,
    parentId: 0,
    name: 'root',
    children: [
      {
        id: 2,
        parentId: 1,
        name: 'child-1',
        children: [
          { id: 4, parentId: 2, name: 'child-1-1' }
        ]
      },
      {
        id: 3,
        parentId: 1,
        name: 'child-2'
      }
    ]
  },
  {
    id: 5,
    parentId: 0,
    name: 'another-root'
  }
]


/**
 * 时间复杂度O(n)
 */
function listToTree (list) {
  const res = []
  const map = new Map()

  // 1. 遍历数组，构建map
  list.forEach(ele => {
    map.set(ele.id, { ...ele })
  })

  // 2. 遍历数组，根据parentId构建树
  list.forEach(ele => {
    const node = map.get(ele.id)
    if (node.parentId === 0) {
      res.push(node) // 根节点
    } else {
      const parent = map.get(ele.parentId) // 找到节点的父节点
      if (parent) {
        parent.children = parent.children || []
        parent.children.push(node)
      }
    }
  })

  return res
}