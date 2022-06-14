    var spiralOrder = function (matrix) {
        if (!matrix.length || !matrix[0].length) {
            return [];
        }
        const rows = matrix.length, columns = matrix[0].length;
        const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
        const total = rows * columns;
        const order = new Array(total).fill(0);

        let directionIndex = 0, row = 0, column = 0;
        const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        for (let i = 0; i < total; i++) {
            order[i] = matrix[row][column];
            visited[row][column] = true;
            const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
            if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
                directionIndex = (directionIndex + 1) % 4;
            }
            row += directions[directionIndex][0];
            column += directions[directionIndex][1];
        }
        return order;
    };






    const spiralOrder = (matrix) => {
        if (matrix.length == 0) return [];
        const res = [];

        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;

        while (top < bottom && left < right) {
            for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
            for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
            for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
            for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
            right--;
            top++;
            bottom--;
            left++;
        }
        if (top == bottom) { // 剩下一行，从左到右依次添加
            for (let i = left; i <= right; i++) {
                res.push(matrix[top][i]);
            }
        } else if (left == right) { // 剩下一列，从上到下依次添加
            for (let i = top; i <= bottom; i++) {
                res.push(matrix[i][left]);
            }
        }
        return res;
    };