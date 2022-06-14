class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; //默认为无向
    this.vertices = []; //存储顶点
    this.adjList = new Map(); //存储邻接表
  }

  // 添加一个顶点
  addVertex (v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  // 添加一条边
  addEdge (v, w) {
    // 将顶点v和w加入顶点列表
    if (!this.adjList.get(v)) {
      this.addVertex(v);
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w);
    }
    // 将顶点w加入v的邻接表中
    this.adjList.get(v).push(w);
    // 将顶点v加入到邻接表w中
    if (!this.isDirected) {
      this.adjList.get(w).push(v);
    }
  }

  getVertices () {
    return this.vertices;
  }

  getAdjList () {
    return this.adjList;
  }
}


// 用颜色标识顶点的访问状态
const Colors = {
  white: 0,
  grey: 1,
  black: 2
}
const initializeColor = function (vertices) {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.white;
  }
  return color;
}

// 广度优先搜索
const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  queue.enqueue(startVertex);
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.grey;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] == Colors.white) {
        color[w] = Colors.grey;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.black;
    if (callback) {
      callback(u);
    }
  }
}

// 深度优先算法
const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] == color.white) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}
const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.grey;
  if (callback) {
    callback(u);
  }
}
const neighbors = adjList.get(u);
for (let i = 0; i < neighbors.length; i++) {
  const w = neighbors[i];
  if (Colors[w] == Colors.white) {
    depthFirstSearchVisit(w, color, adjList, callback);
  }
  color[u] = Colors.black;
}