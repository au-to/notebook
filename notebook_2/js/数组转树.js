let input = [
    { id: 1, val: '学校', parentId: null },
    { id: 2, val: '班级1', parentId: 1 },
    { id: 3, val: '班级2', parentId: 1 },
    { id: 4, val: '学生1', parentId: 2 },
    { id: 5, val: '学生2', parentId: 2 },
    { id: 6, val: '学生3', parentId: 3 },
]

let output = {
    id: 1,
    val: '学校',
    children: [{
        id: 2,
        val: '班级1',
        children: [
            {
                id: 4,
                val: '学生1',
                children: []
            },
            {
                id: 5, val: '学生2',
                children: []
            }
        ]
    },
    {
        id: 3,
        val: '班级2',
        children: [{
            id: 6,
            val: '学生3',
            children: []
        }]
    }]
}

// 代码实现
function arrayToTree(array) {
    let root = array[0]
    array.shift()
    let tree = {
        id: root.id,
        val: root.val,
        children: array.length > 0 ? toTree(root.id, array) : []
    }
    return tree;
}

function toTree(parenId, array) {
    let children = []
    let len = array.length
    for (let i = 0; i < len; i++) {
        let node = array[i]
        if (node.parentId === parenId) {
            children.push({
                id: node.id,
                val: node.val,
                children: toTree(node.id, array)
            })
        }
    }
    return children
}